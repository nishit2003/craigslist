<script>
    let searchQuery = '';
  
    function handleSearch() {
      console.log('Searching for:', searchQuery);
      // Implement search functionality, e.g., navigate to search results
    }
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
      /* gap: 16px; */
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
    }
    button.searchBtn {
      height: 44px;
      width: 74px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #4E1E86; /* Match your button color */
      color: white;
      border-radius: 4px;
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
      outline: #4E1E86;
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
      margin-top: 0px;
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
          <button class="searchBtn">
            All
            <img class="searchIcon" src="/assets/img/down-arrow.svg" alt="Dropdown">
          </button>
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
        <button class="filterButton" >cars</button>
        <button class="filterButton">room for rent</button>
        <button class="filterButton">free stuff</button>
        <button class="filterButton">video games</button>
        <h4>explore more...</h4>
      </span>
    </div>
  </section>
  