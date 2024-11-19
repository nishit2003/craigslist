<script>
  export let showModal = false;
  export let onClose;

  function handleModalClose(event) {
    if (event.target.classList.contains('modal-background')) {
      onClose();
    }
  }

  function handleSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
    showConfirmation = true; // Show confirmation animation
    showModal = false; // Close the modal
    setTimeout(() => {
      showConfirmation = false; // Hide confirmation animation after 3 seconds
    }, 3000);
  }

  let showConfirmation = false; // Controls the visibility of the confirmation animation

</script>

<style>
  /* Modal styles (same as previous implementation) */

  .confirmation {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #4caf50;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.2rem;
    text-align: center;
    z-index: 3000;
    animation: fadeIn 0.5s ease-in-out, fadeOut 0.5s 2.5s ease-in-out;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -55%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -45%);
    }
  }

 /* Example styles in newlist.svelte */
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000; /* Ensure this is higher than footer's z-index */
  padding: 20px;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-in-out;
  position: relative;
  z-index: 3001; /* Ensure it's above the backdrop */
}

.confirmation {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4caf50;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  text-align: center;
  z-index: 3002; /* Above the modal */
}

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: #4E1E86;
    font-size: 10px;
    cursor: pointer;
    color: white;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .form-group input,
  .form-group select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .form-group input:focus,
  .form-group select:focus {
    outline: none;
    border-color: #4e1e86;
  }

  .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  button.submit-button {
    background-color: #4e1e86;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button.submit-button:hover {
    background-color: purple;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>



{#if showModal}
  <div class="modal-background" role="button" tabindex="0" on:click={handleModalClose} on:keydown={(e) => { if (e.key === 'Enter') handleModalClose(); }}>
    <div class="modal-content">
      <button class="close-button" on:click={onClose}>&times;</button>
      <h2>Create New Listing</h2>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <label for="image">Image</label>
          <input type="file" id="image" accept="image/*" />
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <select id="category">
            <option value="for-sale">For Sale</option>
            <option value="housing">Housing</option>
            <option value="jobs">Jobs</option>
            <option value="gigs">Gigs</option>
          </select>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" id="price" placeholder="Enter price" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" rows="4" placeholder="Enter details"></textarea>
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </div>
{/if}

{#if showConfirmation}
  <div class="confirmation">🎉 Your listing has been successfully created!</div>
{/if}


