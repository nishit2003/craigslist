<!-- src/components/Navigation.svelte -->

<script>
  // Add any interactivity here if needed
  import LocationModal from './location.svelte';
  import NewList from './newList.svelte';


  let showLocationModal = false;
  let showNewListModal = false;

  function toggleLocationModal() {
    showLocationModal = !showLocationModal;
  }
  // function handleKeydown(event) {
  //   if (event.key === 'Enter') {
  //     toggleLocationModal();
  //   }
  // }

  function toggleNewListingModal() {
    showNewListModal = !showNewListModal;
  }

</script>

<style>
  /* Navigation Container */
  nav {
    width: 100%;
    background-color: #E7EAEE; /* Same as footer */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Slightly reduced shadow */
    position: fixed; /* Fix the navbar at the top */
    top: 0;
    left: 0;
    z-index: 1000; /* Ensure navbar stays on top */
    box-sizing: border-box;
  }

  /* Inner Navigation Content */
  .navInner {
    max-width: 1200px; /* Align with footer's max-width */
    margin: 0 auto; /* Center the content */
    display: flex;
    flex-direction: column;
  }

  /* Top Navigation Bar */
  .topNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 24px; /* Reduced padding */
    height: 40px; /* Reduced height */
  }

  /* Brand Logo */
  .brand img {
    height: 32px; /* Reduced logo height */
  }

  /* Right Elements (Buttons and Links) */
  .leftElements {
    display: flex;
    align-items: center;
    gap: 0.8em; /* Reduced gap */
  }

  /* Button Styles */
  .btn {
    font-size: 0.75rem; /* Reduced font size */
    font-family: 'Fira Code', monospace;
    font-weight: 300;
    padding: 0.3em 0.8em; /* Reduced padding */
    color: white;
    background: #4E1E86;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
  }

  .btn:hover {
    background: purple;
  }

  /* Login/Sign-Up Link Styles */
  .loginLink {
    text-decoration: none;
    color: black;
    font-family: 'Fira Code', monospace;
    cursor: pointer;
    transition: color 0.3s;
  }

  .loginLink:hover .headerP {
    color: purple;
  }

  .headerP {
    font-weight: 400;
    margin: 0;
    font-size: 0.9rem; /* Reduced font size */
  }

  /* Bottom Navigation Bar */
  .bottomNav {
    background-color: #E7EAEE; /* Match the footer's background color */
    padding: 10px 0; /* Reduced padding */
  }

  /* Navigation Menu */
  .navMenu {
    display: flex;
    justify-content: center;
    list-style: none; /* Remove bullets */
    margin: 0;
    padding: 0;
    gap: 46px; /* Reduced gap between menu items */
  }

  /* Menu Items */
  .menuItem > a {
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-family: 'Fira Code', monospace;
    font-size: 16px; /* Reduced font size */
    transition: color 0.3s;
  }

  .menuItem > a:hover {
    color: purple;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .navMenu {
      flex-direction: column;
      gap: 8px;
    }

    .leftElements {
      flex-direction: column;
      gap: 0.4em;
    }

    .btn {
      width: 100%;
      text-align: center;
      padding: 0.3em 0.5em; /* Further reduced padding */
    }

    .headerP {
      font-size: 0.8rem; /* Further reduced font size */
    }
  }
</style>

<nav id="nav">
  <div class="navInner">
    <!-- Top Navigation -->
    <div class="topNav">
      <a href="/" class="active brand">
        <img src="/assets/img/logo.svg" alt="Logo">
      </a>
      <div class="leftElements">
        
          <button class="btn" on:click={toggleNewListingModal} >+ listing</button>
      
        <a href="/log-in" class="loginLink" aria-label="Log in or sign up">
          <p class="headerP">log-in/sign-up</p>
        </a>
      </div>
    </div>
    
    <!-- Bottom Navigation -->
    <div class="bottomNav">
      <ul class="navMenu">
        <li class="menuItem"><a href="#for-sale">for sale</a></li>
        <li class="menuItem"><a href="#housing">housing</a></li>
        <li class="menuItem"><a href="#jobs">jobs</a></li>
        <li class="menuItem"><a href="#gigs">gigs</a></li>
        <li class="menuItem"><a href="#services">services</a></li>
        <li class="menuItem"><a href="#community">community</a></li>
        <li class="menuItem"><a href="#forum">discussion forums</a></li>
        <li class="menuItem">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a role="button" tabindex="0" on:click|preventDefault={toggleLocationModal}>
            change location
          </a>
        </li>
      </ul>
    </div>
  </div>
  <LocationModal showModal={showLocationModal} onClose={toggleLocationModal} />
  <NewList showModal={showNewListModal} onClose={toggleNewListingModal} />
</nav>
