<!-- src/components/LocationModal.svelte
<script>
	
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
    color: black;
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
 -->




 <script>
  export let showModal = false;
  export let onClose;

  let locationInput = ""; // To capture the user's input
  let errorMessage = ""; // To display the error message

  // List of Cincinnati ZIP codes
  const cincinnatiZipCodes = Array.from({ length: 99 }, (_, i) => `452${String(i + 1).padStart(2, '0')}`);

  function closeModal() {
    onClose(); // Call the function to close the modal in the parent component
    resetInputs(); // Reset input fields and error messages
  }

  function resetInputs() {
    locationInput = ""; // Clear the input field
    errorMessage = ""; // Clear the error message
  }

  function handleSubmit() {
    const userInput = locationInput.trim().toLowerCase();

    // Check if input matches "Cincinnati" or a valid Cincinnati ZIP code
    if (userInput === "cincinnati" || cincinnatiZipCodes.includes(locationInput.trim())) {
      closeModal(); // Close the modal if the input is valid
    } else {
      // Show an error message for other inputs and keep the modal open
      errorMessage = `Oops! We are currently focused on Cincinnati, Ohio only. Soon, you can use it for ${locationInput}.`;
      locationInput = ""; // Clear the input field for retry
    }
  }
</script>

<style>
  /* Modal Overlay */
  .modalOverlay {
    color: black;
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
    color: black;
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

  .errorMessage {
    color: red;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
</style>

{#if showModal}
  <div class="modalOverlay" on:click={closeModal}>
    <div class="modalContent" on:click|stopPropagation>
      <h2>Enter your location</h2>
      <p>Please enter your zip code or city:</p>
      <input
        type="text"
        placeholder="Zip code or city"
        class="locationInput"
        bind:value={locationInput}
      />
      <button class="submitButton" on:click={handleSubmit}>Submit</button>
      <button class="closeButton" on:click={closeModal}>Close</button>
      {#if errorMessage}
        <div class="errorMessage">{errorMessage}</div>
      {/if}
    </div>
  </div>
{/if}
