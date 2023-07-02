<script lang="ts">
  import { Twitter } from "lucide-svelte";
</script>

<button
  class="btn shadow-md"
  on:click={() => window.open("https://twitter.com/archer_script")}
>
  <Twitter size="24" />
  Twitter
</button>
