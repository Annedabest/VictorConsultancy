import type { ReactNode } from "react";

export type SectionShellProps = {
  size?: "default" | "compact";
  width?: "default" | "narrow";
  className?: string;
  children: ReactNode;
};

export function SectionShell({
  size = "default",
  width = "default",
  className = "",
  children,
}: SectionShellProps) {
  const paddingClass = size === "compact" ? "section-pad-sm" : "section-pad";
  const widthClass = width === "narrow" ? "page-shell--narrow" : "page-shell";
  const classes = [widthClass, paddingClass, className].filter(Boolean).join(" ");

  return <section className={classes}>{children}</section>;
}
