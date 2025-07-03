<script>
  let { running, interval = $bindable() } = $props();
</script>

<div class="wrapper">
  {#if !running}
    <div>interval</div>
    <input id="interval" type="text" bind:value={interval} />
    <div>seconds</div>
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
</style>
