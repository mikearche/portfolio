<script lang="ts">
  import { Github } from "lucide-svelte";
</script>

<button
  class="btn shadow-md"
  on:click={() => window.open("https://github.com/ArcherScript")}
>
  <Github size="24" />
  Github
</button>
