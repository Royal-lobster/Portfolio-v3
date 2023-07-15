<script lang="ts">
  import { IconBook } from "@tabler/icons-svelte";
  import Button from "../../elements/Button/index.svelte";
  export let startDate: string;
  export let endDate: string;
  export let title: string;
  export let company: string;
</script>

<article class="border border-neutral-800 rounded-lg p-4">
  <div>
    <p class="mt-2">
      {startDate} - {endDate}
    </p>
    <h3 class="text-2xl font-bold">{title}</h3>
    <div class="flex items-center justify-between mt-2">
      <p>
        @ {company}
      </p>
      <Button leftIcon={IconBook} type="link">Read</Button>
    </div>
  </div>
</article>
