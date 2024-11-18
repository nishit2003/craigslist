<script>
  import "./app.css";
  import Navigation from './components/Navigation.svelte';
  import Hero from './components/Hero.svelte';
  import CalendarSection from './components/CalendarSection.svelte';
  import CategorySection from './components/CategorySection.svelte';
  import Footer from './components/Footer.svelte';
  import { categoriesData } from './data/data.js';

  // Scroll to top function
  function scrollToTop(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  }
</script>

<style>
  
  /* Import Flickity CSS globally */
  @import 'flickity/dist/flickity.min.css';

  /* Enable smooth scrolling */
  :global(html) {
    scroll-behavior: smooth;
  }

  /* Ensure the entire app takes at least full height */
  :global(body, html, #app) {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  /* Main content area */
  main {
    flex: 1; /* Grow to fill the space */
    display: flex;
    flex-direction: column;
    align-items: center; /* Center child components horizontally */
    padding-top: 120px; /* Adjust based on navbar height */
    padding-bottom: 60px; /* Space for the fixed footer */
    box-sizing: border-box;
    width: 100%;
    max-width: 1600px; /* Increased from 1200px to allow wider carousels */
    margin: 0 auto;
  }

  /* "Back to Top" Link Styles */
  .to-nav {
    margin-top: 40px;
    cursor: pointer;
    color: purple;
    transition: color 0.3s;
    text-decoration: none;
    font-size: 1.2rem; /* Enhanced readability */
  }

  .to-nav:hover {
    text-decoration: underline;
  }

  /* Optional: Adjust z-index to ensure content is not hidden behind fixed nav */
  #nav {
    z-index: 1000;
  }

  /* Additional styling for "back to top" link margin */
  .mb-40 {
    margin-bottom: 40px;
  }
</style>

<Navigation />
<Hero />
<CalendarSection />

<main>
  {#each Object.entries(categoriesData) as [key, data]}
    <CategorySection id="{key}" title="{data.title}" categories="{data.categories}"></CategorySection>
  {/each}

  <!-- Back to Top Link -->
  <a href="#nav" class="mb-40 to-nav" on:click={scrollToTop}>
    back to the top ^
  </a>
</main>

<Footer />
