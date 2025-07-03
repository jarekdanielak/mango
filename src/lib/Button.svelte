<script>
  let { running, toggle } = $props();
</script>

<foreignObject x="20" y="20" width="170" height="170">
  <div class="inside">
    <button type="button" aria-label="Toggle" onclick={toggle}>
      <svg viewBox="0 0 512 512" class="icon" class:grow={running}>
        {#if !running}
          <path
            d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
          />
        {:else}
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        {/if}
      </svg>
    </button>
  </div>
</foreignObject>

<style>
  .inside {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:focus {
    outline: none;
  }

  .icon {
    width: 60px;
    height: 60px;
    cursor: pointer;
    pointer-events: bounding-box;
  }

  .icon path {
    fill: var(--color-orange);
  }

  .icon:hover {
    box-shadow: 0 0 4px var(--color-grey);
    border-radius: 50%;
  }

  .grow {
    animation: grow 16s linear infinite;
  }

  @keyframes grow {
    25% {
      scale: 175%;
    }

    50% {
      scale: 175%;
    }

    75% {
      scale: 100%;
    }

    100% {
      scale: 100%;
    }
  }
</style>
