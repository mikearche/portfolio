<div class="h-full w-screen element">
  <div class="wrap h-[80%]">
    <div class="h-full w-screen shadow-xl pattern">
      <div class="gradient" />
      <div class="h-full bg-pattern bg-repeat move" />
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
    cursor: url("./../shared/assets/hand_small_point.png"), auto;
  }

  @keyframes pan {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }

  .move {
    animation: pan 180s linear infinite;
  }

  .wrap {
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
  }

  .pattern {
    background: radial-gradient(#404040, #262626);
    clip-path: polygon(
      0 0,
      100% 0,
      100% 98%,
      99% 99%,
      98% 98%,
      97% 99%,
      96% 98%,
      95% 99%,
      94% 98%,
      93% 99%,
      92% 98%,
      91% 99%,
      90% 98%,
      89% 99%,
      88% 98%,
      87% 99%,
      86% 98%,
      85% 99%,
      84% 98%,
      83% 99%,
      82% 98%,
      81% 99%,
      80% 98%,
      79% 99%,
      78% 98%,
      77% 99%,
      76% 98%,
      75% 99%,
      74% 98%,
      73% 99%,
      72% 98%,
      71% 99%,
      70% 98%,
      69% 99%,
      68% 98%,
      67% 99%,
      66% 98%,
      65% 99%,
      64% 98%,
      63% 99%,
      62% 98%,
      61% 99%,
      60% 98%,
      59% 99%,
      58% 98%,
      57% 99%,
      56% 98%,
      55% 99%,
      54% 98%,
      53% 99%,
      52% 98%,
      51% 99%,
      50% 98%,
      49% 99%,
      48% 98%,
      47% 99%,
      46% 98%,
      45% 99%,
      44% 98%,
      43% 99%,
      42% 98%,
      41% 99%,
      40% 98%,
      39% 99%,
      38% 98%,
      37% 99%,
      36% 98%,
      35% 99%,
      34% 98%,
      33% 99%,
      32% 98%,
      31% 99%,
      30% 98%,
      29% 99%,
      28% 98%,
      27% 99%,
      26% 98%,
      25% 99%,
      24% 98%,
      23% 99%,
      22% 98%,
      21% 99%,
      20% 98%,
      19% 99%,
      18% 98%,
      17% 99%,
      16% 98%,
      15% 99%,
      14% 98%,
      13% 99%,
      12% 98%,
      11% 99%,
      10% 98%,
      9% 99%,
      8% 98%,
      7% 99%,
      6% 98%,
      5% 99%,
      4% 98%,
      3% 99%,
      2% 98%,
      1% 99%,
      0 98%
    );
  }

  .gradient {
    height: 100%;
    width: 100%;
    position: absolute;
    background: radial-gradient(transparent, #404040);
  }

  .element {
    background-size: 18px 18px;
    background-image: linear-gradient(
      -45deg,
      #fafafa 25%,
      #dbcdf0 25%,
      #dbcdf0 50%,
      #fafafa 50%,
      #fafafa 75%,
      #dbcdf0 75%,
      #dbcdf0 100%
    );
    animation: pan 360s linear infinite;
  }
</style>
