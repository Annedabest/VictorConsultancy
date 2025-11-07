export const overlineClass = "text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-neutral-500";

const buttonBase = "inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-[0.02em] transition";
const buttonSizes = {
  sm: "px-5 py-2.5",
  md: "px-7 py-3",
  lg: "px-8 py-3.5 text-base",
};

const buttonVariants = {
  primary: "bg-neutral-900 text-white hover:bg-black",
  secondary: "border border-neutral-200 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900",
  ghost: "text-neutral-600 hover:text-neutral-900",
};

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md"
): string {
  return [buttonBase, buttonSizes[size], buttonVariants[variant]].join(" ");
}

export const pillClass = "rounded-full border border-neutral-200 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-neutral-500";
