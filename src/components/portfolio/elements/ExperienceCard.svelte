<script lang="ts">
  import { IconBook } from "@tabler/icons-svelte";
  import Button from "../../elements/Button/index.svelte";
  import { button } from "../../elements/Button/variants";
  export let startDate: Date;
  export let endDate: Date | undefined;
  export let title: string;
  export let company: string;
  export let companyLink: string;

  const dateToMonthYear = (date: Date) => {
    const d = new Date(date);
    return `${d.toLocaleString("default", {
      month: "short",
    })} ${d.getFullYear()}`;
  };
</script>

<article class="border border-neutral-800 rounded-lg p-4">
  <div>
    <p class="mt-2">
      {dateToMonthYear(startDate)} - {endDate
        ? dateToMonthYear(endDate)
        : "Present"}
    </p>
    <h3 class="text-2xl font-bold">{title}</h3>
    <div class="flex flex-wrap items-center justify-between mt-2">
      <div class="flex items-center">
        @
        <a target="_blank" class={button({ type: "link" })} href={companyLink}>
          {company}
        </a>
      </div>
      <Button leftIcon={IconBook} type="link">Read</Button>
    </div>
  </div>
</article>
