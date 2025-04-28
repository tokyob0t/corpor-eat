<template>
    <div class="small-card">
        <div class="image-wrapper">
            <img :src="restaurant.image" alt="Imagen del restaurante" class="card-image" />
            <span class="image-alt-text">Imagen del restaurante</span>
        </div>
        <div class="card-content">
            <h3>{{ restaurant.name }}</h3>
            <p class="description">{{ restaurant.description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import type { Restaurant } from '@/types';
import type { PropType } from 'vue';

export default {
  name: 'SmallRestaurantCard',
  props: {
    restaurant: {
      type: Object as PropType<Restaurant>,
      required: true,
    },
  },
};
</script>

<style scoped>
.small-card {
    border: 1px solid #ccc;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s;
}

.small-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
    width: 100%;
    height: 140px;
    background-color: #ccc;
    /* Fondo oscuro */
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
}

.image-alt-text {
    position: absolute;
    color: white;
    font-size: 0.9rem;
    text-align: center;
    padding: 8px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
}

/* Mostrar texto alternativo si la imagen no carga */
.image-wrapper img[src=""],
.image-wrapper img:not([src]) {
    display: none;
}

.image-wrapper img[src=""]:not([src=""]),
.image-wrapper img:not([src])+.image-alt-text {
    opacity: 1;
}

.card-content {
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-content h3 {
    font-size: 1.2rem;
    margin: 0 0 6px;
    color: #2c3e50;
    font-weight: 600;
}

.description {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.4;
}
</style>
