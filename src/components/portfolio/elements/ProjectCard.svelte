<script lang="ts">
  import { IconBook, IconView360 } from "@tabler/icons-svelte";
  import Button from "../../elements/Button/index.svelte";
</script>

<article class="flex flex-col gap-2">
  <img src="https://picsum.photos/seed/picsum/200/300" alt="random" />
  <div>
    <h3>Project Name</h3>
    <p>Lorem ipsum dolor sit amet consectetur a</p>
    <div class="flex gap-4">
      <Button leftIcon={IconView360}>Visit Site</Button>
      <Button leftIcon={IconView360} type="link">Github</Button>
      <Button leftIcon={IconBook} type="link">Read</Button>
    </div>
  </div>
</article>
