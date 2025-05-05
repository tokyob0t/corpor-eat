<template>
    <div class="big-card">
        <div class="image-wrapper">
            <img :src="restaurant.image" alt="Imagen del restaurante" class="card-image" />
        </div>
        <div class="card-content">
            <h2>{{ restaurant.name }}</h2>
            <p class="rating">
                <span class="stars">
                    <span v-for="n in 5" :key="n" class="star">
                        <span v-if="n <= Math.floor(restaurant.rating)">★</span>
                        <span v-else>☆</span>
                    </span>
                </span>
                {{ restaurant.rating.toFixed(1) }}/5
            </p>
            <button @click="openPopup" class="see-more-btn">Ver más</button>
        </div>

        <!-- Modal de Detalles del Restaurante -->
        <RestaurantDetailPopup v-if="showPopup" :showPopup="showPopup" :restaurant="restaurant"
            @closePopup="closePopup" />
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import RestaurantDetailPopup from './RestaurantDetailPopup.vue';
import type { Restaurant } from '@/types/index';

export default {
  name: 'BigRestaurantCard',
  components: {
    RestaurantDetailPopup,
  },
  props: {
    restaurant: {
      type: Object as PropType<Restaurant>,
      required: true,
    },
  },
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
};
</script>


<style scoped>
.big-card {
    border: 1px solid #ccc;
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 10px;
    height: auto;
    max-height: 350px;
}

.image-wrapper {
    width: 100%;
    height: 180px;
    /* Fija una altura para la imagen */
    background-color: #ccc;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.image-alt-text {
    position: absolute;
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 10px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
}

.image-wrapper img[src=""],
.image-wrapper img:not([src]) {
    display: none;
}

.image-wrapper img[src=""]:not([src=""]),
.image-wrapper img:not([src])+.image-alt-text {
    opacity: 1;
}

.card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* Alineamos los elementos al inicio */
    flex-grow: 0;
    /* Aseguramos que no crezca */
    height: auto;
    /* Aseguramos que el contenido se ajuste al tamaño necesario */
}

.card-content h2 {
    font-size: 1.3rem;
    margin: 0 0 10px;
    color: #2c3e50;
}

.rating {
    color: #777;
    font-size: 0.95rem;
    margin-bottom: 20px;
}

.stars {
    color: #f1c40f;
    margin-right: 6px;
}

.star {
    font-size: 1.1rem;
}

.see-more-btn {
    padding: 10px;
    width: 100%;
    background-color: #42b983;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
}

.see-more-btn:hover {
    background-color: #369f6c;
}
</style>
