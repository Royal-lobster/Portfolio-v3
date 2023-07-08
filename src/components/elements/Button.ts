import { tv } from "tailwind-variants";

export const button = tv({
  base: "font-medium py-2 px-4 rounded-md",
  variants: {
    type: {
      default: "bg-neutral-100 text-neutral-800",
      outline: "border border-neutral-100 text-neutral-100",
      link: "text-neutral-100 hover:underline underline-offset-4 p-0",
    },
  },
  defaultVariants: {
    type: "default",
    color: "primary",
  },
});

export let type: "default" | "outline" | "link";
