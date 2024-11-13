<script>
  import { onMount } from "svelte";
  import Flickity from "flickity";
  import "flickity/dist/flickity.min.css";
  import { Datepicker, P } from "flowbite-svelte";
  import EventModal from "./event.svelte"; // Import EventModal component

  let selectedDate = null;
  let showModal = false;
  let randomEvents = [];
  let flkty;

  // Sample events list
  const events = [
    { title: "Live Concert", description: "An evening of live music and entertainment." },
    { title: "Food Festival", description: "Taste dishes from around the world." },
    { title: "Art Exhibition", description: "Explore stunning artwork from local artists." },
    { title: "Outdoor Movie Night", description: "Watch a classic movie under the stars." },
    { title: "Farmers Market", description: "Fresh produce and handmade goods." },
    { title: "Charity Run", description: "Support a good cause while staying active." },
    { title: "Book Fair", description: "Discover books from local authors." },
    { title: "Wine Tasting", description: "Sample wines from local vineyards." },
    { title: "Comedy Show", description: "Laugh along with local comedians." },
    { title: "Yoga in the Park", description: "Start your day with peaceful yoga." },
  ];

  onMount(() => {
    flkty = new Flickity(".main-carousel", {
      cellAlign: "left",
      contain: true,
    });

    return () => {
      flkty.destroy();
    };
  });

  // Function to pick three random events from the events list
  function getRandomEvents() {
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  // Triggered when date changes
  function handleDateChange(event) {
    selectedDate = event.detail.date;
    randomEvents = getRandomEvents(); // Pick 3 random events
    showModal = true; // Show the modal
  }

  function closeModal() {
    showModal = false;
  }
</script>

<section class="calendar-section">
  <div class="calendar-details">
    <div class="left-details">
      <h2>event calendar</h2>
      <div class="datepicker-container">
        <Datepicker color="purple" inline bind:value={selectedDate} on:change={handleDateChange} />

        <P class="mt-4">
          Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}
        </P>
      </div>
    </div>
    <div class="rightDetails">
      <h2>upcoming events:</h2>
      <div class="main-carousel">
        <div class="carousel-cell">
          <img class="gallery-img" src="/assets/img/unsplash/concert.jpg" alt="concert" />
        </div>
        <div class="carousel-cell">
          <img class="gallery-img" src="/assets/img/unsplash/thrifting.jpg" alt="thrifting" />
        </div>
        <div class="carousel-cell">
          <img class="gallery-img" src="/assets/img/unsplash/concert.jpg" alt="concert" />
        </div>
      </div>
      <h3 class="event-details">Live Concert</h3>
      <h3 class="event-subdetails">Enjoy an evening of live music and entertainment.</h3>
    </div>
  </div>

  <!-- Show modal if showModal is true -->
  {#if showModal}
    <EventModal events={randomEvents} onClose={closeModal} />
  {/if}
</section>

<style>
  /* Existing styles and adjustments for the calendar section */

  h3 {
    color: black;
  }

  .calendar-section {
    background: white;
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
  .left-details,
  .rightDetails {
    flex: 1;
  }
  .datepicker-container {
    width: 100%;
    color: black;
  }
  .datepicker-container .datepicker-header {
    color: #4e1e86;
    font-weight: bold;
  }
  .datepicker-container .datepicker-nav-button {
    color: #4e1e86;
    font-weight: bold;
    padding: 0.2rem;
    font-size: 1.2em;
  }
  .datepicker-container .datepicker-nav-button:hover {
    color: #6c42a1;
  }
  .datepicker-container .selected-date {
    background-color: #4e1e86;
    color: white;
    border-radius: 50%;
  }
  .main-carousel {
    width: 600px;
    height: 259px;
    box-shadow: 0px 6px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  .carousel-cell {
    margin-right: 30px;
    overflow: hidden;
    height: 259px;
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
  h2 {
    color: #4e1e86;
  }
</style>
