<script>
  import Github from "../shared/Github.svelte";
  import Twitter from "./../shared/Twitter.svelte";
  import Linkedin from "./../shared/Linkedin.svelte";
  import Me from "./../shared/assets/me.jpg";
  import Email from "../shared/Email.svelte";
  import Cross from "./../shared/assets/cross.png";
  import Npm from "./../shared/assets/npm.png";
  import Leetcode from "./../shared/assets/leetcode.png";
  import GithubPic from "./../shared/assets/github.png";
  import BigButton from "../shared/BigButton.svelte";
</script>

<div class="flex h-full items-center justify-center overflow-hidden">
  <!-- Background Image -->
  <div class="absolute h-full w-full pointer-events-none overflow-hidden">
    <img
      alt="crosses"
      class="relative mix-blend-color-burn max-w-none"
      src={Cross}
    />
  </div>

  <div
    class="flex flex-col gap-10 items-center p-10 w-full h-full justify-center overflow-y-auto"
  >
    <div class="flex flex-col items-center justify-center gap-10">
      <div class="overflow-hidden glass w-32 rounded-lg h-32">
        <img alt="me" src={Me} />
      </div>

      <span
        class="text-white text-5xl"
        style="filter:drop-shadow(3px 3px 2px rgba(0, 0, 0, .7))">Bea</span
      >

      <div class="flex gap-2">
        <Twitter />
        <Github />
        <Linkedin />
        <Email />
      </div>
    </div>
    <div class="flex justify-start h-1/2">
      <div class="flex flex-col w-full items-center">
        <div
          class="flex flex-row gap-2 w-1/2 flex-wrap items-center justify-center pb-10"
        >
          <BigButton
            image={Npm}
            imgAlt="npm"
            title="sumo-logger.js"
            description="Zero dependency logging library for sumo logic."
            link="https://www.npmjs.com/package/sumo-logger.js"
          />
          <BigButton
            image={GithubPic}
            imgAlt="github"
            title="Real Pets"
            description="A proof of concept repo for procedurally generated characters."
            link="https://github.com/ArcherScript/real-pets-poc"
          />
          <BigButton
            image={Leetcode}
            imgAlt="leetcode"
            title="Rust Leetcode Solutions"
            description="A collection of leetcode solutions in rust."
            link="https://github.com/ArcherScript/leetcode"
          />
          <BigButton
            image={Npm}
            imgAlt="npm"
            title="Battlepass"
            description="A battlepass package for emitting and receiving rewards."
            link="https://www.npmjs.com/package/battlepass"
          />
        </div>
      </div>
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
