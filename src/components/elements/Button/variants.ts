import { tv } from "tailwind-variants";

export const button = tv({
    base: "flex items-center gap-2 font-medium rounded-md",
    variants: {
      type: {
        default: "bg-neutral-100 text-neutral-800",
        outline: "border border-neutral-100 text-neutral-100",
        link: "text-neutral-100 hover:underline underline-offset-4",
      },
      size:{
        sm: "text-sm px-2 py-1 rounded",
        base: "text-base py-1.5 px-2",
      }
    },
    defaultVariants: {
      type: "default",
      size: "base",
    },
  });