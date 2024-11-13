<script>
  import { onMount } from "svelte";

  let searchQuery = '';
  let showDropdown = false;
  let selectedFilter = 'All';
  
  const filters = ['All', 'Cars', 'Jobs', 'Housing', 'Services', 'Items for Sale'];

  function handleSearch() {
    console.log('Searching for:', selectedFilter, searchQuery);
    // Implement search functionality here
  }

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function selectFilter(filter) {
    selectedFilter = filter;
    showDropdown = false;
  }

  function handleClickOutside(event) {
    if (!event.target.closest(".dropdown")) {
      showDropdown = false;
    }
  }

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<style>
  .hero-container {
    background-image: linear-gradient(to right, rgba(176,142,215, 0.6), rgba(129,160,223, 0.6)), url('/assets/img/heroImage.svg');
    height: 50vh;
    margin-top: 90px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
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
  .center-details {
    text-align: center;
  }
  .heroTitle {
    margin-top: 0px;
    margin-bottom: 16px;
  }
  .searchBar {
    display: flex;
    gap: 0px;
    position: relative;
  }
  .dropdown {
    position: relative;
  }
  .dropdown-menu {
    position: absolute;
    top: 44px;
    left: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    width: 120px;
    z-index: 10;
  }
  .dropdown-item {
    padding: 8px 12px;
    cursor: pointer;
    color: #333;
    background-color: transparent;
    border: none;
    text-align: left;
    width: 100%;
  }
  .dropdown-item:hover {
    background-color: #f2f2f2;
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
    position: relative;
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
  }
  .filterRow {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .filterButton {
    font-family: 'Fira Code', monospace;
    border-radius: 100px;
    padding: 4px 12px;  
    cursor: pointer;
    transition: box-shadow 0.3s;
  }
  .filterButton:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  }
</style>

<section class="hero-container">
  <div class="hero-details">
    <div class="center-details">
      <h1 class="heroTitle">Cincinnati, Ohio</h1>
      <h3>what are you looking for?</h3>
      <div class="searchBar">
        <div class="dropdown">
          <div class="searchBtn" on:click={toggleDropdown} tabindex="0">
            {selectedFilter}
            <img class="searchIcon" src="/assets/img/down-arrow.svg" alt="Dropdown">
          </div>
          {#if showDropdown}
            <div class="dropdown-menu">
              {#each filters as filter}
                <button class="dropdown-item" on:click={() => selectFilter(filter)} role="menuitem" on:keydown={(e) => e.key === 'Enter' && selectFilter(filter)}>
                  {filter}
                </button>
              {/each}
            </div>
          {/if}
        </div>
        <input
          class="searchInput"
          type="text"
          placeholder="keywords"
          bind:value={searchQuery}
        />
        <button class="searchBtn" on:click={handleSearch}>
          <img class="searchIcon" src="/assets/img/search-icon.svg" alt="Search">
        </button>
      </div>
    </div>
    <h3>popular searches:</h3>
    <span class="filterRow">
      <button class="filterButton">cars</button>
      <button class="filterButton">room for rent</button>
      <button class="filterButton">free stuff</button>
      <button class="filterButton">video games</button>
    </span>
  </div>
</section>