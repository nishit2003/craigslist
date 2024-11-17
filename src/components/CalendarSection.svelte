<script lang="ts">
  import { onMount } from "svelte";
  import Flickity from "flickity";
  import "flickity/dist/flickity.min.css";
  import { Datepicker, P } from "flowbite-svelte";

  let selectedDate = null;
  let randomEvent = null; // Store a single random event here
  let flkty: any;
  let activeImage = 0;

  // Correct image imports to ensure the files are bundled properly
  import concertImg from "/assets/img/unsplash/concert.jpg";
  import thriftingImg from "/assets/img/unsplash/thrifting.jpg";

  const carouselImages = [
    { src: concertImg, title: "Live Concert", Venue: "@Probasco Auditorium"  , Desc: "Enjoy a evening of hip-hop and pop music", Date: "Novermber 24" },
    { src: thriftingImg, title: "Thrift Shop", Venue: "Panera Bread Backyard", Desc: "Amazing Deals Await" , Date: "Novermber 25"},
    { src: concertImg, title: "Live Concert", Venue: "@Probasco Auditorium", Desc: "Enjoy a evening of old-melody music" , Date: "Novermber 25"},
  ];

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

    // Listen for Flickity's select event
    (flkty as any).on("select", () => {
      activeImage = flkty.selectedIndex; // Update activeImage based on selected cell
      console.log("Active Image Index:", activeImage);
    });

    return () => {
      flkty.destroy();
    };
  });

  function addDynamicDetails(event) {
    event.venue = `Venue ${Math.floor(Math.random() * 100)}`; // Generate random venue
    const hour = Math.floor(Math.random() * 12) + 1; // Random hour
    const minutes = Math.floor(Math.random() * 60).toString().padStart(2, "0"); // Random minutes
    const period = Math.random() > 0.5 ? "AM" : "PM"; // Random AM/PM
    event.time = `${hour}:${minutes} ${period}`; // Combine time details
    return event;
  }

  function getRandomEvent() {
    const randomIndex = Math.floor(Math.random() * events.length);
    return addDynamicDetails({ ...events[randomIndex] }); // Add dynamic details to the random event
  }

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
        {#each carouselImages as image, index}
          <div class="carousel-cell">
            <img class="gallery-img" src={image.src} alt={image.title} />
          </div>
        {/each}
      </div>
      <!-- Dynamic Text Based on Active Image -->
      <h2 class="event-title">{carouselImages[activeImage].title}</h2>
      <h3 class="event-details">{carouselImages[activeImage].Desc}</h3>
      <h3 class="event-subdetails">{carouselImages[activeImage].Venue}</h3>
      <h3 class="event-subdetails">{carouselImages[activeImage].Date}</h3>

    </div>
  </div>
</section>

<style>
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
    color: black;
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

  .main-carousel {
    width: 600px;
    height: 259px;
    box-shadow: 0px 6px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 46px;

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
    margin-top: 21px;
  }

  .event-subdetails {
    margin: 0px;
  }

  .event-title{
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: 900;
    font-style: normal;
    font-size: large;
  }
</style>
