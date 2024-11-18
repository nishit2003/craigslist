<!-- src/components/CategorySection.svelte -->

<script>
	// import { color } from './../../node_modules/flowbite-svelte/dist/badge/Badge.svelte.d.ts';
  import Carousel from 'svelte-flickity';

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
    // Add more Flickity options as needed
  };
</script>

<style>
  /* Container for the entire category section */
  .category-section {
    width: 100%;
    padding: 32px 16px;
    box-sizing: border-box;
    background-color: #f9f9f9; /* Optional: Background color for the section */
  }

  /* Title styling */
  .row-title {
    font-size: 23px;
    margin-bottom: 16px;
    text-transform: capitalize;
    color: #4E1E86;
    text-align: left;
    max-width: 1600px; /* Match the main's updated max-width */
    margin-left: auto;
    margin-right: auto;
  }

  /* Carousel container centered within the section */
  .carousel-container {
    width: 100%;
    max-width: 1600px; /* Increased to align with App.svelte's main max-width */
    margin: 0 auto;
  }

  /* Individual carousel cells */
  .carousel-cell {
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

  .carousel-cell:hover {
    transform: scale(1.05);
  }

  /* Images within carousel cells */
  .carousel-cell img {
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
    color : #4E1E86;
  }

  /* Description styling */
  .card-description {
    font-size: 9px;
    color: #555;
  }

  /* Link Styles */
  a {
    text-decoration: none;
    color: inherit; /* Inherit text color */
  }

  a:focus {
    outline: 2px solid purple;
    outline-offset: 2px;
  }

  /* Responsive Adjustments */
  @media (max-width: 1600px) {
    .carousel-container {
      max-width: 1400px; /* Adjust as needed for different screen sizes */
    }
  }

  @media (max-width: 768px) {
    .carousel-container {
      width: 100%;
    }

    .carousel-cell {
      width: 100px;
    }

    .carousel-cell img {
      height: 140px;
    }
  }
</style>

<div id={id} class="category-section">
  <h3 class="row-title">{title}</h3>
  <div class="carousel-container">
    <Carousel {options}>
      {#each categories as category}
        {#if category.url}
          <a href="{category.url}" target="_blank" rel="noopener noreferrer">
            <div class="carousel-cell">
              <img src="{category.image}" alt="{category.alt}" loading="lazy" />
              <h3 class="card-title">{category.title}</h3>
              <p class="card-description">{category.description}</p>
            </div>
          </a>
        {:else}
          <div class="carousel-cell">
            <img src="{category.image}" alt="{category.alt}" loading="lazy" />
            <h3 class="card-title">{category.title}</h3>
            <p class="card-description">{category.description}</p>
          </div>
        {/if}
      {/each}
    </Carousel>
  </div>
</div>
