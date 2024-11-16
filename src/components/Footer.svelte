<style>
  /* Footer Container */
  footer {
    margin-top: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #E7EAEE;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    box-sizing: border-box;
  }

  /* Inner Footer Content */
  .footerInner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 56px;
  }

  /* Footer Links */
  .footerLink {
    cursor: pointer;
    font-size: 14px;
    color: black;
    margin: 0;
  }

  .footerLink:hover {
    color: purple;
  }

  /* Footer Text Containers */
  .footerTextContainer {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
    min-width: 150px;
  }

  /* Footer Logo */
  .footerLogo {
    cursor: pointer;
    width: 70px;
  }

  /* Footer Apps */
  .footerApps {
    cursor: pointer;
    width: 100px;
    margin-top: 8px;
  }

  .footer-inner{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 56px;
  }

  /* Responsive Design */
</style>

<footer id="footer">
  <div class="footerInner">
    <!-- Footer Logo -->
    <img class="footerLogo" src="/assets/img/logo-footer.svg" alt="Footer Logo">
    
    <!-- Footer Links -->
    <div class = "footer-inner">
      <a href="/" class="footerLink">Home</a>
      <a href="https://github.com/nishit2003/craigslist" target="_blank" class="footerLink">
        View Source Code
      </a>
      <a href="#" class="footerLink">Privacy Policy</a>
      <a href="https://cincinnati.craigslist.org/" target="_blank" class="footerLink">
        View Original Site
      </a>
    </div>

    <!-- Footer App Downloads -->
    <div class="footerTextContainer">
      <h5 class="footerLink">Download App:</h5>
      <a href="https://play.google.com/store/apps/details?id=org.craigslist.CraigslistMobile&hl=en_US&pli=1">
        <img class="footerApps" src="/assets/img/apps.svg" alt="Apps">
      </a>
    </div>
  </div>
</footer>
