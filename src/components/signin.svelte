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
    console.log('Sign In/Sign Up form submitted');
    onClose(); // Close the modal after submission if needed
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
    animation: fadeIn 0.3s ease-in-out;
    color: #4e1e86;
  }

  .modal-content {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.3s ease-in-out;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .form-group input:focus {
    outline: none;
    border-color: #4e1e86;
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
  <div class="modal-background" on:click={handleModalClose}>
    <div class="modal-content">
      <button class="close-button" on:click={onClose}>&times;</button>
      <h2>Sign In / Sign Up</h2>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
  </div>
{/if}
