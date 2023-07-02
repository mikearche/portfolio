<script lang="ts">
  import { Linkedin } from "lucide-svelte";
</script>

<button
  class="btn shadow-md"
  on:click={() => window.open("https://linkedin.com/in/mikearche")}
>
  <Linkedin size="24" />
  Linkedin
</button>
