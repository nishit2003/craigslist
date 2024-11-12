<script>
    import { onMount } from 'svelte';
    import Flickity from 'flickity';
    import 'flickity/dist/flickity.min.css';
  
    export let id = '';
    export let title = '';
    export let categories = [];
  
    let flkty;
  
    onMount(() => {
      flkty = new Flickity(`.row-carousel-${id}`, {
        groupCells: true
      });
  
      return () => {
        flkty.destroy();
      };
    });
  </script>
  
  <style>
    .center-row {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 32px;
    }
    .row {
      width: 100%;
      margin-bottom: 16px;
    }
    .row-title {
      font-size: 23px;
      margin-bottom: 16px;
    }
    .row-carousel {
      background: white;
      width: 1154px;
      height: 234px;
      display: flex;
    }
    .carousel-cell {
      width: 270px;
      height: 210px;
      margin-right: 20px;
      margin-bottom: 10px;
      background: white;
      border-radius: 5px;
      filter: drop-shadow(0px 6px 2px rgba(0, 0, 0, 0.1));
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .carousel-cell img {
      width: 100%;
      height: 173px;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }
    .card-title {
      text-align: center;
      margin: 0;
      padding: 8px 0;
      font-size: 16px;
    }
    /* Flickity button styles */
    .flickity-button.flickity-prev-next-button {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      background: none;
    }
    .flickity-button.flickity-prev-next-button:hover {
      background: #E7EAEE;
    }
    .flickity-button.flickity-prev-next-button.previous {
      left: -40px;
    }
    .flickity-button.flickity-prev-next-button.next {
      right: -40px;
    }
  </style>
  
  <div id={id} class="center-row">
    <div class="row">
      <h3 class="row-title">{title}</h3>
      <div class="row-carousel row-carousel-{id}">
        {#each categories as category}
          <div class="carousel-cell">
            <img src={category.image} alt={category.alt} />
            <h3 class="card-title">{category.title}</h3>
          </div>
        {/each}
      </div>
    </div>
  </div>
  