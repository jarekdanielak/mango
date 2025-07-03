<script>
  let { running, handleError } = $props();

  let interval = $state(null);

  let value = $state(2);
  let seconds = $derived(value * 60);

  let displayMinutes = $derived(Math.floor(seconds / 60));
  let displaySeconds = $derived(seconds % 60);

  $effect(() => {
    if (running && !interval) {
      startCountdown();
    }
  });

  $effect(() => {
    if (running && (value < 0 || isNaN(value))) {
      handleError();
    }
  });

  function startCountdown() {
    clearInterval(interval);

    interval = setInterval(() => {
      if (seconds > 0) {
        seconds -= 1;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
</script>

<div class="wrapper">
  {#if !running}
    <div>timer</div>
    <input id="timer" type="text" bind:value />
    <div>minutes</div>
  {:else}
    <div class="timer">
      {displayMinutes}:{displaySeconds < 10
        ? `0${displaySeconds}`
        : displaySeconds}
    </div>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    border-radius: 8px;
    font-size: 12px;
  }

  div {
    width: 55px;
    text-align: center;
  }

  input {
    width: 40px;
    height: 30px;
    font-size: 1.5em;
    text-align: center;
    border: none;
    background: transparent;
    color: var(--color-white);
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid var(--color-orange);
  }

  .timer {
    width: 100%;
    text-align: center;
    height: 30px;
    font-size: 1.5em;
  }
</style>
