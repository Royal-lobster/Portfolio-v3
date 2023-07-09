<script lang="ts">
  import CommonSection from "../elements/CommonSection.svelte";
  import { IconBriefcase } from "@tabler/icons-svelte";
  import ProjectCard from "../elements/ProjectCard.svelte";
</script>

<CommonSection
  title="Projects"
  icon={IconBriefcase}
  description="Some of my favorite hobby projects i worked on !"
>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each Array(8) as _, i}
      <ProjectCard />
    {/each}
  </div>
</CommonSection>
