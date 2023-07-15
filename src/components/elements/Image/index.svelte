<script lang="ts">
  import { getImage } from "astro:assets";
  export let src: string;
  export let alt: string;
  export let width: number;
  export let height: number;
</script>

{#await getImage({ src, width, height }) then img}
  <img src={img.src} {alt} {...img.attributes} />
{/await}
