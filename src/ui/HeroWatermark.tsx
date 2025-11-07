import Image from "next/image";

export type HeroWatermarkProps = {
  variant?: "light" | "dark";
  containerClassName?: string;
  imageClassName?: string;
};

export function HeroWatermark({
  variant = "light",
  containerClassName = "",
  imageClassName = "",
}: HeroWatermarkProps) {
  const src = variant === "dark" ? "/Dark-Theme-Logo.png" : "/Light-Theme-Logo.png";
  const containerClasses = [
    "pointer-events-none absolute inset-0 flex items-center justify-center",
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");
  const imageClasses = [
    "h-auto w-[60vw] max-w-[220px] -translate-y-[10%] opacity-50",
    "sm:max-w-none sm:w-[300px] sm:-translate-y-[14%]",
    "md:w-[420px] lg:w-[520px] xl:w-[600px]",
    variant === "dark" ? "mix-blend-multiply" : "mix-blend-screen",
    imageClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses} aria-hidden>
      <Image src={src} alt="Victor Consultancy watermark" width={480} height={160} className={imageClasses} priority />
    </div>
  );
}
