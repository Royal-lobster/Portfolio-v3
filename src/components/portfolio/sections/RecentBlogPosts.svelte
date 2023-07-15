<script>
  import BlogCard from "../elements/BlogCard.svelte";
  import CommonSection from "../elements/CommonSection.svelte";
</script>

<CommonSection
  title="Recent Blog Posts"
  description="I like writing some of the problems i solve periodically ! feel free to go through it 😄"
>
  <div class="grid grid-flow-col-1 md:grid-cols-2 w-full gap-6">
    {#each Array(6) as _, i}
      <BlogCard />
    {/each}
  </div>
</CommonSection>
