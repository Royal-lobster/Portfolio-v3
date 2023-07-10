<script lang="ts">
  import type { ComponentType } from "svelte";
  import { button } from "./variants";
  import type { VariantProps } from "tailwind-variants";

  type ButtonVariants = VariantProps<typeof button>;
  type Size = NonNullable<ButtonVariants["size"]>;

  export let type: ButtonVariants["type"] = "default";
  export let size: Size = "base";
  export let leftIcon: ComponentType;

  const buttonSize: Record<Size, number> = {
    sm: 16,
    base: 20,
  };
</script>

<button class={button({ type, size })}>
  <svelte:component this={leftIcon} size={buttonSize[size]} />
  <slot />
</button>
