<script lang="ts">
  import SR from "../icons/sr.svelte";
  import { button } from "../elements/Button/variants";

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
</script>

<header
  class="container flex items-center justify-between mx-auto py-2 px-4 border border-neutral-800 my-4 mt-6 rounded-xl"
>
  <SR />
  <nav class="flex items-center justify-between gap-4 px-4">
    {#each links as link}
      <a href={link.href} class={button({ type: "link" })}>
        {link.name}
      </a>
    {/each}
  </nav>
</header>
