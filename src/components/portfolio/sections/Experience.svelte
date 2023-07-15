<script lang="ts">
  import { IconBrandRedhat } from "@tabler/icons-svelte";
  import CommonSection from "../elements/CommonSection.svelte";
  import ExperienceCard from "../elements/ExperienceCard.svelte";
  import type { CollectionEntry } from "astro:content";

  export let data: CollectionEntry<"experience">[] = [];
</script>

<CommonSection
  title="Experience"
  description="Various hats i wore and wearing 🎩"
  icon={IconBrandRedhat}
>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
    {#each data as entry}
      <ExperienceCard
        title={entry.data.title}
        company={entry.data.company}
        companyLink={entry.data.companyLink}
        startDate={entry.data.startDate}
        endDate={entry.data.endDate}
      />
    {/each}
  </div>
</CommonSection>
