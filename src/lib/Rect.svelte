<script>
  // @ts-nocheck

  let { running } = $props();
  let colorToggle = $state(false);

  let rectProps = {
    x: 10,
    y: 10,
    width: 190,
    height: 190,
    rx: 5,
    ry: 5,
  };

  function handleAnimationIteration() {
    colorToggle = !colorToggle;
  }

  function handleAnimationCancel() {
    colorToggle = false;
  }
</script>

<rect
  class="square stroke--secondary"
  class:stroke--secondary={!colorToggle}
  class:stroke--primary={colorToggle}
  {...rectProps}
/>
<rect
  class="square square--top"
  class:stroke--primary={!colorToggle}
  class:stroke--secondary={colorToggle}
  class:animate={running}
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
    animation: animate 16s linear infinite;
  }

  @keyframes animate {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
