<script>import "./app.css";
import Navigation from './components/Navigation.svelte';
import Hero from './components/Hero.svelte';
import CalendarSection from './components/CalendarSection.svelte';
import CategorySection from './components/CategorySection.svelte';
import Footer from './components/Footer.svelte';
import { categoriesData } from './data/data.js';

// Define category data


</script><!-- src/App.svelte -->




<Navigation></Navigation>
<Hero></Hero>
<CalendarSection></CalendarSection>

<main>
  {#each Object.entries(categoriesData) as [key, data]}
    <CategorySection id="{key}" title="{data.title}" categories="{data.categories}"></CategorySection>
  {/each}
  <a href="#nav">
    <h3 class="to-nav">back to the top ^</h3>
  </a>
</main>

<Footer></Footer>
<style>
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
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 150px; /* Adjust based on navbar height */
    padding-bottom: 80px; /* Space for the fixed footer */
    box-sizing: border-box;
    margin: 0;
  }

  .to-nav {
    margin-top: 40px;
    cursor: pointer;
    color: purple;
    transition: color 0.3s;
  }

  .to-nav:hover {
    text-decoration: underline;
  }
</style>
