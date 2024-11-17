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


  // function scrollToSection(id) {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     const offset = 100; // Adjust this value to your desired offset (e.g., height of sticky navigation)
  //     const elementPosition = section.getBoundingClientRect().top + window.scrollY;
  //     const offsetPosition = elementPosition - offset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: 'smooth',
  //     });
  //   }
  // }

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      const extraSpace = 50; // Additional space above the heading
      const offset = 100 + extraSpace; // Adjust total offset as needed
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
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

  /* Bottom Navigation Bar */
  .bottomNav {
    background-color: #E7EAEE; /* Match the footer's background color */
    padding: 10px 0; /* Reduced padding */
  }

 /* Navigation Menu */
.navMenu {
    display: flex;
    justify-content: center; /* Centers the items horizontally */
    align-items: center; /* Aligns items vertically */
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

  /* ############# */
  .menu-button {
  background-color: ghostwhite; /* Light gray background */
  border: 1px solid #ccc; /* Subtle border */
  border-radius: 5px; /* Rounded corners */
  padding: 10px 20px; /* Padding around the button */
  font-size: 16px; /* Button text size */
  font-weight: bold; /* Emphasize button text */
  cursor: pointer; /* Pointer cursor for interactivity */
  color: #333; /* Dark text color */
  display: inline-flex; /* Flexbox for inline elements */
  align-items: center; /* Vertically center text */
  justify-content: center; /* Horizontally center text */
  white-space: nowrap; /* Prevent text wrapping */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth hover effects */
}

.menu-button:hover {
  background-color: #4e1e86;
  color: ghostwhite;
  transform: scale(1.05); /* Subtle zoom effect on hover */
}

.menu-button:active {
  background-color: #d0d0d0; /* Even darker gray when clicked */
  transform: scale(0.95); /* Slightly shrink on click */
}

.menu-button:focus {
  outline: 2px solid #007bff; /* Blue outline for focus accessibility */
}

.menuItem {
  margin: 0; /* Reset margin */
  display: inline-block; /* Ensure horizontal alignment */
}

  /* ################# */


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
        
          <button class="btn" on:click={toggleNewListingModal} >+ Listing</button>
      
        
          <!-- <p class="headerP" on:click={toggleSigninModal}>Log-In/Sign-Up</p> -->
          <button class="headerP" on:click={toggleSigninModal}>Log-In/Sign-Up</button>
        
      </div>
    </div>

    <!-- Bottom Navigation -->
    <!-- <div class="bottomNav">
      <ul class="navMenu">
        <li class="menuItem"><a href="#for-sale" on:click={handleTabClick}><strong>For Sale</strong></a></li>
        <li class="menuItem"><a href="#housing" on:click={handleTabClick}><strong>Housing</strong></a></li>
        <li class="menuItem"><a href="#jobs" on:click={handleTabClick}><strong>Jobs</strong></a></li>
        <li class="menuItem"><a href="#gigs" on:click={handleTabClick}><strong>Gigs</strong></a></li>
        <li class="menuItem"><a href="#services" on:click={handleTabClick}><strong>Services</strong></a></li>
        <li class="menuItem"><a href="#community" on:click={handleTabClick}><strong>Community</strong></a></li>
        <li class="menuItem"><a href="#forum" on:click={handleTabClick}><strong>Discussion Forums</strong></a></li>
        <li class="menuItem">
          <button class="change-location-button" on:click={toggleLocationModal} on:keydown={(e) => { if (e.key === 'Enter') toggleLocationModal(); }}>
            <strong>Change Location</strong>
          </button>          
        </li>
      </ul>
    </div>
  </div> -->


  <div class="bottomNav">
    <ul class="navMenu">
      <li class="menuItem">
        <button class="menu-button" on:click={() => scrollToSection('for-sale')} on:keydown={(e) => { if (e.key === 'Enter') scrollToSection('for-sale'); }}>
          <strong>For Sale</strong>
        </button>
      </li>
      <li class="menuItem">
        <button class="menu-button" on:click={() => scrollToSection('housing')} on:keydown={(e) => { if (e.key === 'Enter') scrollToSection('housing'); }}>
          <strong>Housing</strong>
        </button>
      </li>
      <li class="menuItem">
        <button class="menu-button" on:click={() => scrollToSection('jobs')} on:keydown={(e) => { if (e.key === 'Enter') scrollToSection('jobs'); }}>
          <strong>Jobs</strong>
        </button>
      </li>
      <li class="menuItem">
        <button class="menu-button" on:click={() => scrollToSection('gigs')} on:keydown={(e) => { if (e.key === 'Enter') scrollToSection('gigs'); }}>
          <strong>Gigs</strong>
        </button>
      </li>
      <li class="menuItem">
        <button class="menu-button" on:click={() => scrollToSection('services')} on:keydown={(e) => { if (e.key === 'Enter') scrollToSection('services'); }}>
          <strong>Services</strong>
        </button>
      </li>
      <li class="menuItem">
        <button class="menu-button" on:click={() => scrollToSection('community')} on:keydown={(e) => { if (e.key === 'Enter') scrollToSection('community'); }}>
          <strong>Community</strong>
        </button>
      </li>
      <li class="menuItem">
        <button class="menu-button" on:click={() => scrollToSection('forum')} on:keydown={(e) => { if (e.key === 'Enter') scrollToSection('forum'); }}>
          <strong>Discussion Forums</strong>
        </button>
      </li>
      <li class="menuItem">
        <button class="menu-button" on:click={toggleLocationModal} on:keydown={(e) => { if (e.key === 'Enter') toggleLocationModal(); }}>
          <strong>Change Location</strong>
        </button>
      </li>
    </ul>
  </div>
  

  <LocationModal showModal={showLocationModal} onClose={toggleLocationModal} />
  <NewList showModal={showNewListModal} onClose={toggleNewListingModal} />
  <Signin showModal={showSigninModal} onClose={toggleSigninModal} />


</nav>
