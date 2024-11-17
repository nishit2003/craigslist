<script>
  import { onMount } from "svelte";
  import Flickity from "flickity";
  import "flickity/dist/flickity.min.css";
  import { Datepicker, P } from "flowbite-svelte";

  let selectedDate = null;
  let randomEvent = null; // Store a single random event here
  let flkty;

  // Sample events list with dynamic venue and time generation
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

  // Function to generate dynamic venue and time for an event
  function addDynamicDetails(event) {
    event.venue = `Venue ${Math.floor(Math.random() * 100)}`; // Generate random venue
    const hour = Math.floor(Math.random() * 12) + 1; // Random hour
    const minutes = Math.floor(Math.random() * 60).toString().padStart(2, "0"); // Random minutes
    const period = Math.random() > 0.5 ? "AM" : "PM"; // Random AM/PM
    event.time = `${hour}:${minutes} ${period}`; // Combine time details
    return event;
  }

  // Function to pick a single random event
  function getRandomEvent() {
    const randomIndex = Math.floor(Math.random() * events.length);
    return addDynamicDetails({ ...events[randomIndex] }); // Add dynamic details to the random event
  }

  // Reactive block to monitor selectedDate changes
  $: if (selectedDate) {
    console.log("Selected Date Updated:", selectedDate);
    randomEvent = getRandomEvent(); // Update random event whenever the date changes
    console.log("Random Event:", randomEvent);
  }
</script>

<section class="calendar-section">
  <div class="calendar-details">
    <div class="left-details">
      <h2>Event Calendar</h2>
      <div class="datepicker-container">
        <!-- Datepicker -->
        <Datepicker color="purple" inline bind:value={selectedDate} />

        <P class="mt-4">
          Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}
        </P>

        <!-- Show random event if one is selected -->
        {#if randomEvent}
          <div class="random-event mt-4">
            <h3>{randomEvent.title}</h3>
            <p>{randomEvent.description}</p>
            <p><strong>Venue:</strong> {randomEvent.venue}</p>
            <p><strong>Time:</strong> {randomEvent.time}</p>
          </div>
        {/if}
      </div>
    </div>

    <div class="rightDetails">
      <h2>Upcoming Events:</h2>
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
      <h3 class="event-details">Live Concert @Probasco Auditorium</h3>
      <h3 class="event-subdetails">
        Enjoy an evening of live music and entertainment. Starts at 8 PM on Dec
        14th.
      </h3>
    </div>
  </div>
</section>

<style>
  /* Styling for the section and components */
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
  .random-event {
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
  .random-event h3 {
    color: #4e1e86;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  .random-event p {
    margin: 0.2rem 0;
    color: #555;
  }
</style>
