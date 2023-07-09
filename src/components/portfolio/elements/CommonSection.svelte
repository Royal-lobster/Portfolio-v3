<script lang="ts">
  export let icon: any;
  export let title: string;
  export let description: string;
</script>

<section>
  <div class="flex gap-4 items-center">
    <svelte:component this={icon} />
    <h2 class="text-2xl">{title}</h2>
  </div>
  <p>
    {description}
  </p>
  <div>
    <slot />
  </div>
</section>
