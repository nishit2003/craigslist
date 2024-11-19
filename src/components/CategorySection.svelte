<!-- src/components/CategorySection.svelte -->

<script>
  import Carousel from 'svelte-flickity';
  import Catmodel from './catmodel.svelte';

  export let id = '';
  export let title = '';
  export let categories = [];

  const options = {
    freeScroll: true,
    wrapAround: true,
    groupCells: true,
    contain: true,
    pageDots: false, // Hide page dots for a cleaner look
    prevNextButtons: true, // Show navigation buttons
    cellAlign: 'left', // Align cells to the left
  };

  let modalOpen = false; // Controls modal visibility
  let selectedCategory = {}; // The data of the clicked category

  function openModal(category) {
    selectedCategory = category;
    modalOpen = true;
  }

  // Prevent background scrolling when modal is open
  $: if (modalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
</script>

<style>
  /* Container for the entire category section */
  .category-section {
    width: 100%;
    padding: 8px 8px;
    box-sizing: border-box;
    background-color: #f9f9f9;
  }

  /* Title styling */
  .row-title {
    font-size: 23px;
    margin-bottom: 16px;
    text-transform: capitalize;
    color: #4E1E86;
    text-align: left;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Carousel container centered within the section */
  .carousel-container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }

  /* Reset button styles */
  .carousel-button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-align: left;

    width: 270px;
    height: 250px;
    margin-right: 20px;
    margin-bottom: 10px;
    background: white;
    border-radius: 5px;
    filter: drop-shadow(0px 6px 2px rgba(0, 0, 0, 0.1));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: transform 0.3s;
    padding: 10px;
  }

  .carousel-button:hover {
    transform: scale(1.05);
  }

  /* Images within carousel cells */
  .carousel-button img {
    width: 100%;
    height: 173px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  /* Titles within carousel cells */
  .card-title {
    text-align: center;
    margin: 8px 0 4px;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    color: #4E1E86;
  }

  /* Description styling */
  .card-description {
    font-size: 9px;
    color: #555;
  }

  /* Responsive Adjustments */
  @media (max-width: 1600px) {
    .carousel-container {
      max-width: 1400px;
    }
  }

  @media (max-width: 768px) {
    .carousel-container {
      width: 100%;
    }

    .carousel-button {
      width: 100px;
    }

    .carousel-button img {
      height: 140px;
    }
  }
</style>

<div id={id} class="category-section">
  <h3 class="row-title">{title}</h3>
  <div class="carousel-container">
    <Carousel {options}>
      {#each categories as category}
        <button
          class="carousel-button"
          on:click={() => openModal(category)}
          aria-label="View details for {category.title}"
        >
          <img src="{category.image}" alt="{category.alt}" loading="lazy" />
          <h3 class="card-title">{category.title}</h3>
          <p class="card-description">{category.description}</p>
        </button>
      {/each}
    </Carousel>
  </div>
  <Catmodel isOpen={modalOpen} category={selectedCategory} on:close={() => (modalOpen = false)} />
</div>
