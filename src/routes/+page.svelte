<script>
  import Github from "../shared/Github.svelte";
  import Twitter from "./../shared/Twitter.svelte";
  import Linkedin from "./../shared/Linkedin.svelte";
  import Milk from "./../shared/Milk.svelte";

  import Me from "./../shared/assets/me.png";
</script>

<div class="flex h-full items-center justify-center">
  <div class="flex flex-col gap-10 items-center p-10 shadow-md">
    <div class="avatar">
      <div class="w-24 rounded-full shadow-lg">
        <img alt="michael" src={Me} />
      </div>
    </div>
    <div>
      <span class="text-5xl"> Archer </span>
    </div>
    <div class="flex flex-col md:flex-row gap-2">
      <Twitter />
      <Github />
      <Linkedin />
      <Milk />
    </div>
  </div>
</div>

<style lang="postcss">
  :global(html) {
    height: 100%;
    background-color: #f0f0f3;
  }

  :global(body) {
    height: 100%;
  }
</style>
