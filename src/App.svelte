<script>
  import Navigation from './components/Navigation.svelte';
  import Hero from './components/Hero.svelte';
  import CalendarSection from './components/CalendarSection.svelte';
  import CategorySection from './components/CategorySection.svelte';
  import Footer from './components/Footer.svelte';

  // Define category data
  const categoriesData = {
    'for-sale': {
      title: 'for sale',
      categories: [
        { image: '/assets/img/unsplash/forSale-general.png', alt: 'general', title: 'general' },
        { image: '/assets/img/unsplash/forSale-electronics.jpg', alt: 'electronics', title: 'electronics' },
        { image: '/assets/img/unsplash/forSale-automotive.jpg', alt: 'automotive', title: 'automotive' },
        { image: '/assets/img/unsplash/forSale-entertainment.jpg', alt: 'entertainment', title: 'entertainment' },
        { image: '/assets/img/unsplash/forSale-accessories.jpg', alt: 'accessories', title: 'accessories' },
        { image: '/assets/img/unsplash/forSale-supplies.jpg', alt: 'household supplies', title: 'household supplies' },
        { image: '/assets/img/unsplash/forSale-heavyEquipment.jpg', alt: 'some car', title: 'heavy equipment' },
      ]
    },
    housing: {
      title: 'housing',
      categories: [
        { image: '/assets/img/unsplash/housing-housing.jpg', alt: 'housing image', title: 'apt/housing' },
        { image: '/assets/img/unsplash/housing-housingWanted.jpg', alt: 'housing wanted', title: 'housing wanted' },
        { image: '/assets/img/unsplash/housing-housingSwap.jpg', alt: 'housing swap', title: 'housing swap' },
        { image: '/assets/img/unsplash/housing-commercial.jpg', alt: 'office', title: 'office/commercial' },
        { image: '/assets/img/unsplash/housing-roomsWanted.jpg', alt: 'rooms wanted', title: 'rooms wanted' },
        { image: '/assets/img/unsplash/housing-parking.jpg', alt: 'parking or storage', title: 'parking/storage' },
        { image: '/assets/img/unsplash/housing-realEstate.jpg', alt: 'real estate', title: 'real estate' },
        { image: '/assets/img/unsplash/housing-rooms-shared.jpg', alt: 'rooms or shared', title: 'rooms/shared' },
        { image: '/assets/img/unsplash/housing-sublet-temporary.jpg', alt: 'sublet or temp', title: 'sublet/temporary' },
        { image: '/assets/img/unsplash/housing-vacation-rentals.jpg', alt: 'vacation rentals', title: 'vacation rentals' },
      ]
    },
    jobs: {
      title: 'jobs',
      categories: [
        { image: '/assets/img/unsplash/jobs-resumes.jpg', alt: 'resumes', title: 'resumes' },
        { image: '/assets/img/unsplash/jobs-general.jpg', alt: 'general', title: 'general' },
        { image: '/assets/img/unsplash/jobs-management.jpg', alt: 'business management', title: 'business management' },
        { image: '/assets/img/unsplash/jobs-agencies.jpg', alt: 'agencies', title: 'agencies' },
        { image: '/assets/img/unsplash/jobs-creative.jpg', alt: 'creative', title: 'creative' },
        { image: '/assets/img/unsplash/jobs-tech.jpg', alt: 'tech', title: 'technology' },
        { image: '/assets/img/unsplash/jobs-hospitality.jpg', alt: 'hospitality', title: 'hospitality' },
        { image: '/assets/img/unsplash/jobs-fitness.jpg', alt: 'fitness and health', title: 'fitness & health' },
      ]
    },
    gigs: {
      title: 'gigs',
      categories: [
        { image: '/assets/img/unsplash/gigs-computer.jpg', alt: 'computer', title: 'computer' },
        { image: '/assets/img/unsplash/gigs-creative.jpg', alt: 'creative', title: 'creative' },
        { image: '/assets/img/unsplash/gigs-crew.jpg', alt: 'crew', title: 'crew' },
        { image: '/assets/img/unsplash/gigs-domestic.jpg', alt: 'domestic gigs', title: 'domestic' },
        { image: '/assets/img/unsplash/gigs-event.jpg', alt: 'event', title: 'event' },
        { image: '/assets/img/unsplash/gigs-labor.jpg', alt: 'labor', title: 'labor' },
        { image: '/assets/img/unsplash/gigs-talent.jpg', alt: 'talent', title: 'talent' },
        { image: '/assets/img/unsplash/gigs-writing.jpg', alt: 'writing', title: 'writing' },
      ]
    },
    services: {
      title: 'services',
      categories: [
        { image: '/assets/img/unsplash/services-tech.jpg', alt: 'tech', title: 'tech' },
        { image: '/assets/img/unsplash/services-health.jpg', alt: 'health & wellness', title: 'health & wellness' },
        { image: '/assets/img/unsplash/services-household.jpg', alt: 'general household', title: 'general household' },
        { image: '/assets/img/unsplash/services-professional.jpg', alt: 'professional', title: 'professional' },
        { image: '/assets/img/unsplash/services-creative.jpg', alt: 'creative', title: 'creative' },
        { image: '/assets/img/unsplash/services-animals.jpg', alt: 'animals', title: 'animals' },
      ]
    },
    community: {
      title: 'community',
      categories: [
        { image: '/assets/img/unsplash/community-lost.jpg', alt: 'lost and found', title: 'lost & found' },
        { image: '/assets/img/unsplash/community-hobbies.jpg', alt: 'hobbies', title: 'hobbies' },
        { image: '/assets/img/unsplash/community-news.jpg', alt: 'news and politics', title: 'news & politics' },
        { image: '/assets/img/unsplash/community-help.jpg', alt: 'help', title: 'help' },
        { image: '/assets/img/unsplash/community-upcoming.jpg', alt: 'upcoming', title: 'upcoming' },
      ]
    },
    forum: {
      title: 'discussion forums',
      categories: [
        { image: '/assets/img/unsplash/forum-general.jpg', alt: 'general', title: 'general' },
        { image: '/assets/img/unsplash/forum-relationship.jpg', alt: 'relationship', title: 'relationship' },
        { image: '/assets/img/unsplash/forum-arts.jpg', alt: 'arts and humanities', title: 'arts & humanities' },
        { image: '/assets/img/unsplash/forum-legal.jpg', alt: 'legal', title: 'legal' },
        { image: '/assets/img/unsplash/forum-diet.jpg', alt: 'diet', title: 'diet' },
        { image: '/assets/img/unsplash/forum-tech.jpg', alt: 'tech', title: 'tech' },
      ]
    },
  };
</script>

<style>
  main {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 4em 0;
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

<Navigation />
<Hero />
<CalendarSection />

<main>
  {#each Object.entries(categoriesData) as [key, data]}
    <CategorySection id={key} title={data.title} categories={data.categories} />
  {/each}
  <a href="#nav">
    <h3 class="to-nav">back to the top ^</h3>
  </a>
</main>

<Footer />
