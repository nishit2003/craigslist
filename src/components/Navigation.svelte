<script>
    // You can add any interactivity here if needed
  </script>
  
  <style>
    /* Copy relevant CSS from main.css related to navigation */
    nav {
      max-width: 100vw;
      height: 136px;
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
      padding-top: 18px;
    }
    .topNav {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 41px;
      margin: 0 32px 16px 32px;
      flex-grow: 0;
    }
    .brand img {
      height: 40px; /* Adjust as needed */
    }
    .leftElements {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 1em;
    }
    /* ... rest of the navigation styles ... */
  </style>
  
  <nav id="nav">
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
  