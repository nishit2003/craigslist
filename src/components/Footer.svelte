<script>
    // Add any interactivity if needed
  </script>
  
  <style>
    footer {
      padding: 20px;
      width: 100%;
      background-color: #E7EAEE;
    }
    .footerContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 38px;
      flex-wrap: wrap;
    }
    .footerTextContainer {
      display: flex;
      flex-direction: column;
      gap: 8px;
      text-align: center;
    }
    .edit {
      cursor: pointer;
      font-size: 14px;
      color: black;
    }
    .edit:hover {
      color: purple;
    }
    .footerLogo {
      cursor: pointer;
      width: 100px; /* Adjust as needed */
    }
    .footerApps {
      cursor: pointer;
      width: 150px; /* Adjust as needed */
    }
  </style>
  
  <footer id="footer">
    <div class="footerContainer">
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
  