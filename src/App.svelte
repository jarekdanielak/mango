<script>
  import Rect from "./lib/Rect.svelte";
  import Button from "./lib/Button.svelte";

  let running = $state(false);

  function toggle() {
    running = !running;
  }
</script>

<div>
  <svg width="210" height="210">
    <Rect {running} />
    <Button {running} {toggle} />
  </svg>
  <div>Controls and stuff</div>
</div>

<style>
</style>
