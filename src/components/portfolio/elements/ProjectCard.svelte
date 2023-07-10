<script lang="ts">
  import { IconBook, IconView360 } from "@tabler/icons-svelte";
  import Button from "../../elements/Button/index.svelte";
</script>

<article
  class="flex flex-col gap-0 border border-neutral-800 rounded-xl overflow-hidden"
>
  <img
    class="w-full h-60 object-cover"
    src="https://unsplash.it/800/600?random={Math.random()}"
    alt="random"
  />
  <div class="p-4">
    <h3 class="text-2xl font-bold">Project Name</h3>
    <p class="mt-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, possimus
      amet nisi quae necessitatibus obcaecati ullam rerum officia temporibus
      explicabo.
    </p>
    <div class="flex gap-2 mt-4 flex-wrap">
      <Button leftIcon={IconView360}>Visit Site</Button>
      <Button leftIcon={IconView360} type="link">Github</Button>
      <Button leftIcon={IconBook} type="link">Read</Button>
    </div>
  </div>
</article>
