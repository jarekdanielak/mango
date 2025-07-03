<script>
  import Rect from "./lib/Rect.svelte";
  import Button from "./lib/Button.svelte";
  import Timer from "./lib/Timer.svelte";
  import Interval from "./lib/Interval.svelte";
  import { parse } from "svelte/compiler";

  let running = $state(false);
  let interval = $state(16);
  let error = $state(false);

  function toggle() {
    if (interval === 0) {
      handleError();
      return;
    }
    running = !running;
  }

  function handleIntervalChange(value) {
    if (parseInt(value) < 0 || isNaN(parseInt(value))) {
      interval = 0;
    } else {
      interval = parseInt(value) * 4;
    }
  }

  function handleError() {
    error = true;
    running = false;
    setTimeout(() => {
      error = false;
    }, 2000);
  }
</script>

<div class="container">
  <svg width="210" height="210">
    <Rect {running} {interval} />
    {#if error}
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="central"
        font-size="40"
      >
        😓
      </text>
    {:else}
      <Button {running} {toggle} />
    {/if}
  </svg>
  <div class="controls">
    <Timer {running} {handleError} />
    <Interval {running} handleChange={handleIntervalChange} />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .controls {
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px 0;
  }
</style>
