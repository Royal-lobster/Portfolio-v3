<script lang="ts">
  import { button } from "../../elements/Button/variants";
  import BlurryAnimation from "../elements/BlurryAnimation.svelte";
</script>

<section
  class="flex flex-col lg:flex-row justify-between items-stretch gap-4 relative rounded-md"
>
  <div class="flex flex-col gap-4 max-w-xl">
    <h1 class="text-4xl md:text-5xl font-black">
      I craft <br /> web experiences that feels correct
    </h1>
    <p class="text-lg">
      I am a full stack web developer focused on creating web applications with
      user in mind
    </p>
    <div class="flex gap-4">
      <button class={button()}>Projects</button>
      <button class={button({ type: "outline" })}>Contact</button>
    </div>
  </div>
  <div class="flex flex-col w-full gap-4">
    {#each Array(8) as _, i}
      <BlurryAnimation index={i + 1} total={8} />
    {/each}
  </div>
</section>
