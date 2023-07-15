<script lang="ts">
  import CommonSection from "../elements/CommonSection.svelte";
  import { IconBook, IconBriefcase } from "@tabler/icons-svelte";
  import ProjectCard from "../elements/ProjectCard.svelte";
  import Button from "../../elements/Button/index.svelte";
</script>

<CommonSection
  title="Projects"
  icon={IconBriefcase}
  description="Some of my favorite hobby projects i worked on !"
>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each Array(6) as _, i}
      <ProjectCard />
    {/each}
  </div>
  <div
    class="flex flex-col md:flex-row text-center md:text-right items-center gap-4 md:gap-8 my-8 mx-auto border border-neutral-800 rounded-lg p-4"
  >
    <p>
      There are still a lot more i can include here 😅 but i want to limit this
      to 6. <br /> If you are interested in my full journey you can check out more
      !
    </p>
    <Button leftIcon={IconBook}>View More</Button>
  </div>
</CommonSection>
