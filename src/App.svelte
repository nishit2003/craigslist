<!-- src/App.svelte -->

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
        { image: '/assets/img/unsplash/forSale-general.png', alt: 'general', title: 'General' },
        { image: '/assets/img/unsplash/forSale-electronics.jpg', alt: 'electronics', title: 'Electronics' },
        { image: '/assets/img/unsplash/forSale-automotive.jpg', alt: 'automotive', title: 'Automotive' },
        { image: '/assets/img/unsplash/forSale-entertainment.jpg', alt: 'entertainment', title: 'Entertainment' },
        { image: '/assets/img/unsplash/forSale-accessories.jpg', alt: 'accessories', title: 'Accessories' },
        { image: '/assets/img/unsplash/forSale-supplies.jpg', alt: 'household supplies', title: 'Household Supplies' },
        { image: '/assets/img/unsplash/forSale-heavyEquipment.jpg', alt: 'heavy equipment', title: 'Heavy Equipment' },
      ]
    },
    housing: {
      title: 'housing',
      categories: [
        { image: '/assets/img/unsplash/housing-housing.jpg', alt: 'housing image', title: 'Apt/Housing' },
        { image: '/assets/img/unsplash/housing-housingWanted.jpg', alt: 'housing wanted', title: 'Housing Wanted' },
        { image: '/assets/img/unsplash/housing-housingSwap.jpg', alt: 'housing swap', title: 'Housing Swap' },
        { image: '/assets/img/unsplash/housing-commercial.jpg', alt: 'office', title: 'Office/Commercial' },
        { image: '/assets/img/unsplash/housing-roomsWanted.jpg', alt: 'rooms wanted', title: 'Rooms Wanted' },
        { image: '/assets/img/unsplash/housing-parking.jpg', alt: 'parking or storage', title: 'Parking/Storage' },
        { image: '/assets/img/unsplash/housing-realEstate.jpg', alt: 'real estate', title: 'Real Estate' },
        { image: '/assets/img/unsplash/housing-rooms-shared.jpg', alt: 'rooms or shared', title: 'Rooms/Shared' },
        { image: '/assets/img/unsplash/housing-sublet-temporary.jpg', alt: 'sublet or temp', title: 'Sublet/Temporary' },
        { image: '/assets/img/unsplash/housing-vacation-rentals.jpg', alt: 'vacation rentals', title: 'Vacation Rentals' },
      ]
    },
    jobs: {
      title: 'jobs',
      categories: [
        { image: '/assets/img/unsplash/jobs-resumes.jpg', alt: 'resumes', title: 'Resumes' },
        { image: '/assets/img/unsplash/jobs-general.jpg', alt: 'general', title: 'General' },
        { image: '/assets/img/unsplash/jobs-management.jpg', alt: 'business management', title: 'Business Management' },
        { image: '/assets/img/unsplash/jobs-agencies.jpg', alt: 'agencies', title: 'Agencies' },
        { image: '/assets/img/unsplash/jobs-creative.jpg', alt: 'creative', title: 'Creative' },
        { image: '/assets/img/unsplash/jobs-tech.jpg', alt: 'technology', title: 'Technology' },
        { image: '/assets/img/unsplash/jobs-hospitality.jpg', alt: 'hospitality', title: 'Hospitality' },
        { image: '/assets/img/unsplash/jobs-fitness.jpg', alt: 'fitness and health', title: 'Fitness & Health' },
      ]
    },
    gigs: {
      title: 'gigs',
      categories: [
        { image: '/assets/img/unsplash/gigs-computer.jpg', alt: 'computer', title: 'Computer' },
        { image: '/assets/img/unsplash/gigs-creative.jpg', alt: 'creative', title: 'Creative' },
        { image: '/assets/img/unsplash/gigs-crew.jpg', alt: 'crew', title: 'Crew' },
        { image: '/assets/img/unsplash/gigs-domestic.jpg', alt: 'domestic gigs', title: 'Domestic' },
        { image: '/assets/img/unsplash/gigs-event.jpg', alt: 'event', title: 'Event' },
        { image: '/assets/img/unsplash/gigs-labor.jpg', alt: 'labor', title: 'Labor' },
        { image: '/assets/img/unsplash/gigs-talent.jpg', alt: 'talent', title: 'Talent' },
        { image: '/assets/img/unsplash/gigs-writing.jpg', alt: 'writing', title: 'Writing' },
      ]
    },
    services: {
      title: 'services',
      categories: [
        { image: '/assets/img/unsplash/services-tech.jpg', alt: 'tech', title: 'Tech' },
        { image: '/assets/img/unsplash/services-health.jpg', alt: 'health & wellness', title: 'Health & Wellness' },
        { image: '/assets/img/unsplash/services-household.jpg', alt: 'general household', title: 'General Household' },
        { image: '/assets/img/unsplash/services-professional.jpg', alt: 'professional', title: 'Professional' },
        { image: '/assets/img/unsplash/services-creative.jpg', alt: 'creative', title: 'Creative' },
        { image: '/assets/img/unsplash/services-animals.jpg', alt: 'animals', title: 'Animals' },
      ]
    },
    community: {
      title: 'community',
      categories: [
        { image: '/assets/img/unsplash/community-lost.jpg', alt: 'lost and found', title: 'Lost & Found' },
        { image: '/assets/img/unsplash/community-hobbies.jpg', alt: 'hobbies', title: 'Hobbies' },
        { image: '/assets/img/unsplash/community-news.jpg', alt: 'news and politics', title: 'News & Politics' },
        { image: '/assets/img/unsplash/community-help.jpg', alt: 'help', title: 'Help' },
        { image: '/assets/img/unsplash/community-upcoming.jpg', alt: 'upcoming', title: 'Upcoming' },
      ]
    },
    forum: {
      title: 'discussion forums',
      categories: [
        { image: '/assets/img/unsplash/forum-general.jpg', alt: 'general', title: 'General' },
        { image: '/assets/img/unsplash/forum-relationship.jpg', alt: 'relationship', title: 'Relationship' },
        { image: '/assets/img/unsplash/forum-arts.jpg', alt: 'arts and humanities', title: 'Arts & Humanities' },
        { image: '/assets/img/unsplash/forum-legal.jpg', alt: 'legal', title: 'Legal' },
        { image: '/assets/img/unsplash/forum-diet.jpg', alt: 'diet', title: 'Diet' },
        { image: '/assets/img/unsplash/forum-tech.jpg', alt: 'tech', title: 'Tech' },
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
