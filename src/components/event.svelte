<script>
  export let events = [];
  export let onClose;

  function handleClose(event) {
    if (event.target.classList.contains("modal-background")) {
      onClose();
    }
  }
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    
  }

  .modal-content {
    background: purple;
    padding: 2rem;
    border-radius: 8px;
    max-width: 600px;
    width: 90%;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-in-out;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
  }

  .event {
    margin-bottom: 1.5rem;
  }

  .event h3 {
    margin: 0 0 0.5rem;
    color: #4e1e86;
  }

  .event p {
    margin: 0.2rem 0;
    color: #555;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="modal-background" on:click={handleClose}>
  <div class="modal-content">
    <button class="close-button" on:click={onClose}>&times;</button>
    <h2>Events for {new Date().toLocaleDateString()}</h2>
    {#each events as event}
      <div class="event">
        <h3>{event.title}</h3>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Venue:</strong> Random Venue {Math.floor(Math.random() * 100)}</p>
        <p><strong>Time:</strong> {Math.floor(Math.random() * 12) + 1}:00 {Math.random() > 0.5 ? "AM" : "PM"}</p>
      </div>
    {/each}
  </div>
</div>
