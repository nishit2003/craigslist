<!-- src/components/EventModal.svelte -->

<script>
  export let events = [];
  export let onClose;

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      onClose();
    }
  }
</script>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    text-align: center;
  }

  .close-button {
    background: #4e1e86;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    transition: background 0.3s;
  }

  .close-button:hover {
    background: purple;
  }

  .event-item {
    margin: 10px 0;
  }

  h3 {
    margin-bottom: 20px;
    color: #4E1E86;
  }

  h4 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    margin: 5px 0 0;
    color: #555;
  }
</style>

{#if events.length > 0}
  <div
    class="modal-overlay"
    role="dialog"
    aria-modal="true"
    on:click={onClose}
  >
    <div class="modal-content" on:click|stopPropagation>
      <h3>Events for Selected Date</h3>
      {#each events as event}
        <div class="event-item">
          <h4>{event.title}</h4>
          <p>{event.description}</p>
        </div>
      {/each}
      <button
        class="close-button"
        on:click={onClose}
        on:keydown={handleKeydown}
        aria-label="Close modal"
      >
        Close
      </button>
    </div>
  </div>
{/if}
