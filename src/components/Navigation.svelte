<!-- src/components/Navigation.svelte -->

<script>

  import LocationModal from './location.svelte';
  import NewList from './newList.svelte';
  import Signin from './signin.svelte';

  let showLocationModal = false;
  let showNewListModal = false;
  let showSigninModal = false;

  function toggleLocationModal() {
    showLocationModal = !showLocationModal;
  }

  function toggleNewListingModal() {
    showNewListModal = !showNewListModal;
  }

  function toggleSigninModal() {
    showSigninModal = !showSigninModal;
  }

  // Scroll adjustment for fixed navbar
  function handleTabClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 80; // Adjust this value to match your navbar height
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
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
    font-size: 0.9rem; /* Consolidated font size */
  }

  .loginLink:hover {
    color: purple;
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

  .headerP {
    font-weight: 400;
    margin: 0;
    font-size: 0.9rem; /* Reduced font size */
    color: #4E1E86;
    cursor: pointer;
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
  }
</style>

<nav id="nav">
  <div class="navInner">
    <!-- Top Navigation -->
    <div class="topNav">
      <a href="/" class="brand">
        <img src="/assets/img/logo.svg" alt="Logo">
      </a>
      <div class="leftElements">
        
          <button class="btn" on:click={toggleNewListingModal} >+ listing</button>
      
        
          <p class="headerP" on:click={toggleSigninModal}>log-in/sign-up</p>
        
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="bottomNav">
      <ul class="navMenu">
        <li class="menuItem"><a href="#for-sale" on:click={handleTabClick}>for sale</a></li>
        <li class="menuItem"><a href="#housing" on:click={handleTabClick}>housing</a></li>
        <li class="menuItem"><a href="#jobs" on:click={handleTabClick}>jobs</a></li>
        <li class="menuItem"><a href="#gigs" on:click={handleTabClick}>gigs</a></li>
        <li class="menuItem"><a href="#services" on:click={handleTabClick}>services</a></li>
        <li class="menuItem"><a href="#community" on:click={handleTabClick}>community</a></li>
        <li class="menuItem"><a href="#forum" on:click={handleTabClick}>discussion forums</a></li>
        <li class="menuItem">
          <a role="button" tabindex="0" on:click|preventDefault={toggleLocationModal}>
            change location
          </a>
        </li>
      </ul>
    </div>
  </div>
  <LocationModal showModal={showLocationModal} onClose={toggleLocationModal} />
  <NewList showModal={showNewListModal} onClose={toggleNewListingModal} />
  <Signin showModal={showSigninModal} onClose={toggleSigninModal} />


</nav>
