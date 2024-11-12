<script>
    import { onMount } from 'svelte';
    import Flickity from 'flickity';
    import 'flickity/dist/flickity.min.css';
  
    let flkty;
  
    onMount(() => {
      flkty = new Flickity('.main-carousel', {
        cellAlign: 'left',
        contain: true
      });
  
      return () => {
        flkty.destroy();
      };
    });
  </script>
  
  <style>
    .calendar-section {
      background: #E7EAEE;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      width: 1158px;
      margin: 64px 0;
      padding: 16px 32px;
    }
    .calendar-details {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: space-between;
      gap: 32px;
    }
    .left-details, .rightDetails {
      flex: 1;
    }
    .cal-placeholder {
      width: 282px;
      height: 278px;
    }
    .main-carousel {
      background: #E7EAEE;
      width: 600px;
      height: 259px;
      box-shadow: 0px 6px 2px rgba(0, 0, 0, 0.1);
      margin-bottom: 16px;
    }
    .carousel-cell {
      margin-right: 30px;
      overflow: hidden;
      height: 259px;
      background-color: #E7EAEE;
      border-radius: 5px;
    }
    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .event-details {
      font-weight: 500;
      margin-bottom: 0px;
      margin-top: 41px;
    }
    .event-subdetails {
      margin: 0px;
    }
  </style>
  
  <section class="calendar-section">
    <div class="calendar-details"> 
      <div class="left-details">
        <h2>event calendar</h2>
        <img class="cal-placeholder" src="/assets/img/calender.png" alt="Calendar">
      </div>
      <div class="rightDetails">
        <h2>upcoming events:</h2>
        <!-- Flickity Carousel -->
        <div class="main-carousel">
          <div class="carousel-cell">
            <img class="gallery-img" src="/assets/img/unsplash/concert.jpg" alt="concert">
          </div>
          <div class="carousel-cell">
            <img class="gallery-img" src="/assets/img/unsplash/thrifting.jpg" alt="thrifting">
          </div>
          <div class="carousel-cell">
            <img class="gallery-img" src="/assets/img/unsplash/concert.jpg" alt="concert">
          </div>
        </div>
        <h3 class="event-details">event title</h3>
        <h3 class="event-subdetails">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </div>
    </div>
  </section>
  