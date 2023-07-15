<script lang="ts">
  export let icon: any;
  export let title: string;
  export let description: string;
</script>

<section class="flex flex-col gap-8">
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 items-center">
      <svelte:component this={icon} size={34} />
      <h2 class="text-3xl md:text-4xl font-black">{title}</h2>
    </div>
    <p>
      {description}
    </p>
  </div>

  <div class="flex flex-col items-center justify-center">
    <slot />
  </div>
</section>
