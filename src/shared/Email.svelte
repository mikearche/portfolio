<script lang="ts">
  import { Mail } from "lucide-svelte";
</script>

<button
  class="btn shadow-md glass"
  on:click={() => window.open("mailto:bea@a4r.dev")}
>
  <Mail
    size="24"
    color="#FFFFFF"
    style="filter:drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))"
  />
</button>
