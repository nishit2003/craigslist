<script>
  let searchQuery = '';
  let selectedFilter = 'All';

  const filters = ['All', 'Cars', 'Jobs', 'Housing', 'Services', 'Items for Sale'];

  const craigslistPaths = {
    All: "sss", // General search
    Cars: "cta",
    Jobs: "jjj",
    Housing: "hhh",
    Services: "bbb",
    "Items for Sale": "sss",
  };

  function navigateToCraigslist(filter) {
    const path = craigslistPaths[filter];
    const queryParam = searchQuery ? `?query=${encodeURIComponent(searchQuery)}` : '';
    const hash = '#search=1~gallery~0~0';
    const url = `https://cincinnati.craigslist.org/search/${path}${queryParam}${hash}`;
    window.open(url, "_blank");
  }
</script>

<style>
  .hero-container {
    background-image: linear-gradient(to right, rgba(176,142,215, 0.6), rgba(129,160,223, 0.6)), url('/assets/img/heroImage.svg');
    height: 40vh;
    margin-top: 90px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }

  .h3-class {
    color: #4e1e86;
    font-weight: bold;
  }

  .hero-details {
    text-align: left;
    color: white;
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1));
    width: 70vh;
  }

  .new-class {
    color: #4e1e86;
    font-weight: bold;
  }

  .searchBar {
    display: flex;
    gap: 0;
    position: relative;
    width: 100%;
    color: #4e1e86;
  }

  button.searchBtn {
    height: 44px;
    min-width: 74px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4E1E86;
    color: white;
    border-radius: 4px;
    border: none;
    transition: background 0.3s;
  }

  .cincinnati-class {
    color: #4e1e86;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 2rem;
  }

  button.searchBtn:hover {
    background: purple;
  }

  .searchIcon {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }

  .searchInput {
    height: 44px;
    width: 800px;
    border: none;
    padding-left: 10px;
    outline: none;
    font-family: 'Fira Code', monospace;
    border-radius: 4px 0 0 4px;
  }

  .filterRow {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .filterButton {
    font-family: 'Fira Code', monospace;
    border-radius: 100px;
    padding: 4px 12px;
    cursor: pointer;
    transition: box-shadow 0.3s, background 0.3s, color 0.3s;
    background: #fff;
    color: #4E1E86;
    border: 1px solid #4E1E86;
  }

  .filterButton:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    background: #4E1E86;
    color: white;
  }

  @media (max-width: 1200px) {
    .searchInput {
      width: 60vw;
    }
  }

  @media (max-width: 768px) {
    .searchInput {
      width: 80vw;
    }
    .hero-container {
      padding: 20px;
    }
    .filterRow {
      flex-direction: column;
      gap: 8px;
    }
  }
</style>

<section class="hero-container">
  <div class="hero-details">
    <h1 class="cincinnati-class">Cincinnati, Ohio</h1>
    <h3 class="new-class">What are you looking for?</h3>
    <div class="searchBar">
      <input
        class="searchInput"
        type="text"
        placeholder="Keywords"
        bind:value={searchQuery}
      />
      <button class="searchBtn" on:click={() => navigateToCraigslist(selectedFilter)}>
        <img class="searchIcon" src="/assets/img/search-icon.svg" alt="Search">
      </button>
    </div>
    <h3 class="h3-class">Popular searches:</h3>
    <div class="filterRow">
      {#each filters.slice(1) as filter} <!-- Exclude 'All' if not needed -->
        <button
          class="filterButton"
          on:click={() => navigateToCraigslist(filter)}
        >
          {filter}
        </button>
      {/each}
    </div>
  </div>
</section>
