<script lang="ts">
  import { FileText } from "lucide-svelte";
</script>

<button
  class="btn shadow-md"
  on:click={() =>
    window.open(
      "https://drive.google.com/uc?export=download&id=1bnWyyhU71L_j-kDBWfUBleaK1rUkOpk8"
    )}
>
  <FileText size="24" />
  Resume
</button>
