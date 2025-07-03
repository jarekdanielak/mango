<script>
  // @ts-nocheck

  let { running, interval } = $props();
  let colorSwap = $state(false);

  let rectProps = {
    x: 10,
    y: 10,
    width: 190,
    height: 190,
    rx: 5,
    ry: 5,
  };

  function handleAnimationIteration() {
    colorSwap = !colorSwap;
  }

  function handleAnimationCancel() {
    colorSwap = false;
  }
</script>

<rect
  class="square stroke--secondary"
  class:stroke--secondary={!colorSwap}
  class:stroke--primary={colorSwap}
  {...rectProps}
/>
<rect
  class="square square--top"
  class:stroke--primary={!colorSwap}
  class:stroke--secondary={colorSwap}
  class:animate={running}
  style="animation-duration: {interval}s;"
  {...rectProps}
  onanimationiteration={handleAnimationIteration}
  onanimationcancsel={handleAnimationCancel}
/>

<style>
  .square {
    fill: none;
    stroke-width: 10px;
  }

  .square--top {
    stroke-dasharray: 760;
    stroke-dashoffset: 760;
  }

  .stroke--primary {
    stroke: var(--color-orange);
  }

  .stroke--secondary {
    stroke: var(--color-grey);
  }

  .animate {
    animation-name: animate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes animate {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
