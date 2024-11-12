<!-- src/components/Navigation.svelte -->

<script>
  // You can add any interactivity here if needed
</script>

<style>
  /* Navigation Container */
  nav {
    width: 100%;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    padding-top: 18px;
    background-color: #E7EAEE; /* Set to match the footer */
    position: fixed; /* Fix the navbar at the top */
    top: 0;
    left: 0;
    z-index: 1000; /* Ensure navbar stays on top */
  }

  /* Top Navigation Bar */
  .topNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 32px 16px 32px;
    height: 41px;
  }

  /* Brand Logo */
  .brand img {
    height: 40px; /* Adjust as needed */
  }

  /* Right Elements (Buttons and Links) */
  .leftElements {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  /* Button Styles */
  .btn {
    font-size: 0.875rem;
    font-family: 'Fira Code', monospace;
    font-weight: 300;
    padding: 0.5em 1em; 
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
  }

  /* Bottom Navigation Bar */
  .bottomNav {
    margin-bottom: 16px;
    background-color: #E7EAEE; /* Match the footer's background color */
  }

  /* Navigation Menu */
  .navMenu {
    display: flex;
    justify-content: center;
    list-style: none; /* Remove bullets */
    margin: 0;
    padding: 0;
    gap: 20px; /* Space between menu items */
  }

  /* Menu Items */
  .menuItem {
    /* Optional: Adjust padding or margins as needed */
  }

  .menuItem > a {
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-family: 'Fira Code', monospace;
    font-size: 18px; /* Adjust font size as needed */
    transition: color 0.3s;
  }

  .menuItem > a:hover {
    color: purple;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .navMenu {
      flex-direction: column;
      gap: 10px;
    }

    .leftElements {
      flex-direction: column;
      gap: 0.5em;
    }

    .btn {
      width: 100%;
      text-align: center;
    }
  }
</style>

<nav id="nav">
  <!-- Top Navigation -->
  <div class="topNav">
    <a href="/" class="active brand">
      <img src="/assets/img/logo.svg" alt="Logo">
    </a>
    <div class="leftElements">
      <a class="loginLink" href="/log-in">
        <button class="btn">+ listing</button>
      </a>
      <a href="/log-in" class="loginLink">
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
      <li class="menuItem"><a href="#footer">about us</a></li>
    </ul>
  </div>
</nav>
