<script>
  export let isOpen = false; // Controls modal visibility
  export let category = {}; // The category data to display

  function closeModal() {
    isOpen = false;
   location.reload();
  }
</script>

{#if isOpen}
  <div class="modal-overlay" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>
      <button class="close-btn" on:click={closeModal}>✖</button>
      <img src={category.image} alt={category.alt} class="modal-image" />
      <h2 class="modal-title">{category.title}</h2>
      <p class="modal-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      
      <!-- {category.description || "No description available"} -->
      <p class="modal-price"><strong>Price:</strong> {category.price || "N/A"}</p>
      {#if category.url}
        <a href={category.url} target="_blank" class="modal-link">
          Visit Original Site
        </a>
      {/if}
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
  }

  .modal {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    max-width: 500px;
    width: 100%;
    max-height: 100vh; /* Restrict modal height to 70% of viewport height */
    /* overflow-y: auto; Add scrolling for content that exceeds max height */
    text-align: center;
    position: relative;
    /* height: ; */
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: #4E1E86;
    font-size: 10px;
    cursor: pointer;
    color: white;
  }

  .modal-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .modal-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #4E1E86;
  }

  .modal-description {
    font-size: 12px;
    color: #555;
    margin-bottom: 10px;
  }

  .modal-price {
    font-size: 18px;
    color: #4CAF50;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .modal-link {
    text-decoration: none;
    color: #007BFF;
    font-weight: bold;
  }

  .modal-link:hover {
    text-decoration: underline;
  }
</style>
