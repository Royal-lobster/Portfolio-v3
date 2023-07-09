import { tv } from "tailwind-variants";

export const button = tv({
    base: "flex items-center gap-2 font-medium py-2 px-4 rounded-md",
    variants: {
      type: {
        default: "bg-neutral-100 text-neutral-800",
        outline: "border border-neutral-100 text-neutral-100",
        link: "text-neutral-100 hover:underline underline-offset-4 p-0",
      },
      size:{
        sm: "text-sm px-2 py-1 rounded",
        base: "text-base",
      }
    },
    defaultVariants: {
      type: "default",
      size: "base",
    },
  });