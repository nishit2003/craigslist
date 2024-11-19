<script>
  import { onMount } from 'svelte';

  export let isOpen = false; // Controls modal visibility
  export let query = ""; // User search query
  export let filter = "All"; // Category filter

  let modalElement;

  const craigslistPaths = {
    All: "sss", // General search
    Cars: "cta",
    Jobs: "jjj",
    Housing: "hhh",
    Services: "bbb",
    "Items for Sale": "sss",
  };

  function getRandomImage() {
    const randomInt = Math.floor(Math.random() * 1000) + 1; // Random integer for variety
    return `https://picsum.photos/300/200?random=${randomInt}`;
  }

  const randomTitles = [
    "Amazing Product",
    "Top-Quality Item",
    "Fantastic Deal",
    "Exclusive Offer",
    "Budget-Friendly Choice",
  ];

  const randomDescriptions = [
    "This is a great product you’ll love.",
    "Best in its class with premium features.",
    "Unbeatable price for an amazing item.",
    "Perfect for daily use and reliable.",
    "Highly recommended for everyone.",
  ];

  let results = []; // Results to display

  $: if (isOpen) {
    results = generateResults(); // Generate fresh results each time modal opens
  }

  function generateResults() {
    const newResults = [];
    for (let i = 0; i < 4; i++) {
      newResults.push({
        image: getRandomImage(),
        title: randomTitles[Math.floor(Math.random() * randomTitles.length)],
        description:
          randomDescriptions[
            Math.floor(Math.random() * randomDescriptions.length)
          ],
        price: `$${(Math.random() * 100 + 1).toFixed(2)}`,
      });
    }
    return newResults;
  }

  function getCraigslistLink() {
    const path = craigslistPaths[filter];
    const queryParam = query ? `?query=${encodeURIComponent(query)}` : '';
    const hash = '#search=1~gallery~0~0';
    return `https://cincinnati.craigslist.org/search/${path}${queryParam}${hash}`;
  }

  function closeModal() {
    isOpen = false; // Close the modal
    location.reload(); // Reload the page to reset the search
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  onMount(() => {
    if (isOpen && modalElement) {
      modalElement.focus();
    }
  });
</script>

{#if isOpen}
  <div
    class="modal-overlay"
    on:click={closeModal}
    role="button"
    tabindex="0"
    aria-label="Close modal"
    on:keydown={handleKeydown}
  >
    <div
      class="modal"
      on:click|stopPropagation
      role="dialog"
      aria-modal="true"
      tabindex="0"
      on:keydown={handleKeydown}
      bind:this={modalElement}
    >
      <button class="close-btn" on:click={closeModal} aria-label="Close modal">✖</button>
      <h2 class="query-text">
        Best search results for: <b>{query || "No query entered"}</b>
      </h2>
      <a href={getCraigslistLink()} target="_blank" class="craigslist-link">
        Go to Craigslist results
      </a>
      <div class="results-content">
        <div class="results-grid">
          {#each results as result}
            <div class="result-item">
              <img src={result.image} alt={result.title} class="result-image" />
              <h3 class="result-title">{result.title}</h3>
              <p class="result-description">{result.description}</p>
              <p class="result-price"><strong>Price:</strong> {result.price}</p>
            </div>
          {/each}
        </div>
      </div>
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
    width: 90%;
    max-width: 800px;
    max-height: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .modal:focus {
    outline: none;
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

  .query-text {
    margin: 20px 0 10px;
    font-size: 20px;
    color: #333;
    font-weight: bold;
    text-align: center;
  }

  .craigslist-link {
    text-align: center;
    display: block;
    margin-bottom: 15px;
    font-size: 16px;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }

  .craigslist-link:hover {
    text-decoration: underline;
  }

  .results-content {
    flex: 1;
    overflow-y: auto;
    padding: 10px 20px;
  }

  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  .result-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    background: #f9f9f9;
  }

  .result-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .result-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .result-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }

  .result-price {
    font-size: 16px;
    color: #4CAF50;
  }
</style>
