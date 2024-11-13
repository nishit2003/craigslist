<!-- src/components/LocationModal.svelte -->
<script>
	import { color } from './../../node_modules/.pnpm/flowbite-svelte@0.47.3_rollup@4.25.0_svelte@4.2.19/node_modules/flowbite-svelte/dist/badge/Badge.svelte.d.ts';
  export let showModal = false;
  export let onClose;

  function closeModal() {
    onClose(); // Call the function to close the modal in the parent component
  }

  function handleSubmit() {
    // Perform any actions with the input value if needed
    closeModal();
  }
</script>

<style>
  /* Modal Overlay */
  .modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1100;
  }

  /* Modal Content */
  .modalContent {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    width: 90%;
    text-align: center;
  }

  .modalContent h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .modalContent p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .locationInput {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    margin-bottom: 1rem;
    color:black;
  }

  .submitButton {
    padding: 0.5rem 1rem;
    background-color: #4E1E86;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
  }

  .submitButton:hover {
    background-color: purple;
  }

  .closeButton {
    margin-top: 0.5rem;
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .closeButton:hover {
    color: #555;
  }
</style>

{#if showModal}
  <div class="modalOverlay" on:click={closeModal}>
    <div class="modalContent" on:click|stopPropagation>
      <h2>Enter your location</h2>
      <p>Please enter your zip code or city:</p>
      <input type="text" placeholder="Zip code or city" class="locationInput" />
      <button class="submitButton" on:click={handleSubmit}>Submit</button>
      <button class="closeButton" on:click={closeModal}>Close</button>
    </div>
  </div>
{/if}
