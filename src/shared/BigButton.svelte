<script lang="ts">
  export let image: string;
  export let imgAlt: string;
  export let title: string;
  export let description: string;
  export let link: string;
</script>

<button
  class="btn rounded-lg glass p-5 w-auto h-auto shadow-md"
  on:click={() => window.open(link)}
>
  <img alt={imgAlt} src={image} class="rounded-lg w-16 md:w-32" />
  <div class="flex flex-col h-full w-48 md:w-80 text-left">
    <span
      class="text-white text-xl pb-4"
      style="filter:drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))">{title}</span
    >
    <p
      class="text-white text-md"
      style="filter:drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))"
    >
      {description}
    </p>
  </div>
</button>
