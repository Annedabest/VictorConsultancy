import { createClient, type ClientConfig } from "@sanity/client";

const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};

const projectId = env.SANITY_PROJECT_ID ?? "";
const dataset = env.SANITY_DATASET ?? "";
const apiVersion = env.SANITY_API_VERSION ?? "2023-01-01";
const token = env.SANITY_TOKEN ?? env.CMS_PREVIEW_TOKEN;

const baseConfig: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production" && !token,
};

export function isSanityConfigured(): boolean {
  return Boolean(projectId && dataset && apiVersion);
}

export function createSanityClient({ usePreviewToken = false }: { usePreviewToken?: boolean } = {}) {
  if (!isSanityConfigured()) {
    throw new Error("Sanity environment variables are not fully configured.");
  }

  return createClient({
    ...baseConfig,
    token: usePreviewToken ? token : undefined,
    useCdn: usePreviewToken ? false : baseConfig.useCdn,
  });
}
