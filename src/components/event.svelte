<!-- src/components/EventModal.svelte -->
<script>
  export let events = [];
  export let onClose;

  // Close modal with Enter or Escape key when on the close button
  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === 'Escape') {
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
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }
  .event-item {
    margin: 10px 0;
  }
</style>

<!-- Modal overlay with proper role and event handling on close button only -->
<div class="modal-overlay" role="dialog" aria-modal="true" on:click={onClose}>
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
