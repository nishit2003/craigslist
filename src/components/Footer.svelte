<!-- src/components/Footer.svelte -->

<script>
  // Add any interactivity if needed
</script>

<style>
  /* Footer Container */
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #E7EAEE; /* Same as navbar */
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Ensure footer stays on top */
    box-sizing: border-box;
  }

  /* Inner Footer Content */
  .footerInner {
    max-width: 1200px; /* Align with header's max-width */
    margin: 0 auto; /* Center the content */
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    flex-wrap: wrap;
  }

  /* Footer Text Containers */
  .footerTextContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left; /* Align text to the left */
    min-width: 150px; /* Ensure minimum width */
  }

  .edit {
    cursor: pointer;
    font-size: 14px;
    color: black;
    margin: 0; /* Remove default margins */
  }

  .edit:hover {
    color: purple;
  }

  /* Footer Logo */
  .footerLogo {
    cursor: pointer;
    width: 100px; /* Adjust as needed */
    margin-bottom: 10px; /* Space below the logo */
  }

  /* Footer Apps */
  .footerApps {
    cursor: pointer;
    width: 150px; /* Adjust as needed */
    margin-top: 5px; /* Space above apps */
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .footerInner {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .footerTextContainer {
      align-items: center;
      text-align: center;
    }

    .footerLogo,
    .footerApps {
      margin: 0 auto;
    }
  }
</style>

<footer id="footer">
  <div class="footerInner">
    <img class="footerLogo" src="/assets/img/logo-footer.svg" alt="Footer Logo">
    
    <div class="footerTextContainer">
      <h5 class="edit">help, faq, abuse, legal</h5>
      <h5 class="edit">avoid scams & fraud</h5>
      <h5 class="edit">personal safety tips</h5>
    </div>
    
    <div class="footerTextContainer">
      <h5 class="edit">terms of use</h5>
      <h5 class="edit">privacy policy</h5>
      <h5 class="edit">system status</h5>
      <h5 class="edit">about craigslist</h5>
      <h5 class="edit">craigslist is hiring in sf</h5>
      <h5 class="edit">craigslist open source</h5>
    </div>
    
    <div class="footerTextContainer">
      <h5 class="edit">craigslist blog</h5>
      <h5 class="edit">best-of-craigslist</h5>
      <h5 class="edit">"craigslist joe"</h5>
      <h5 class="edit">craig newmark philanthropies</h5>
    </div>
    
    <div class="footerTextContainer">
      <h5 class="edit">download craigslist app:</h5>
      <img class="footerApps" src="/assets/img/apps.svg" alt="Apps">
    </div>
  </div> 
</footer>
