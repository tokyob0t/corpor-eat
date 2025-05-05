<template>
    <div class="home">
        <section class="banner">
            <div class="banner-content">
                <h1>Bienvenido a <span class="highlight">Corporeat</span></h1>
                <p>Soluciones eficientes para reservas de restaurantes empresariales.</p>
            </div>
        </section>

        <section class="popular-restaurants">
            <h2>Restaurantes Populares</h2>
            <div class="restaurant-cards">
                <SmallRestaurantCard v-for="(restaurant, index) in popularRestaurants" :key="index"
                    :restaurant="restaurant" />
            </div>
        </section>

        <section class="available-tables">
            <div class="available-tables-content">
                <h2>Mesas disponibles</h2>
                <h3>Elija su restaurante favorito</h3>
                <RouterLink to="/restaurants" class="reserve-button">Reservar ahora</RouterLink>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import SmallRestaurantCard from '@/components/SmallRestaurantCard.vue';
import restaurants from '@/data/restaurants.json';

export default {
  name: 'Home',
  components: {
    SmallRestaurantCard,
  },
  computed: {
    popularRestaurants() {
      return [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 3); // Top 3 restaurantes
    },
  },
};
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
}

/* ===== Banner ===== */
.banner {
    width: 100%;
    background-color: #2c3e50;
    /* Igual que la navbar */
    color: white;
    padding: 60px 20px;
    text-align: center;
}

.banner-content h1 {
    font-size: 2.8rem;
    margin-bottom: 10px;
}

.banner-content p {
    font-size: 1.2rem;
    margin: 0;
}

.highlight {
    color: #ffd700;
    /* Color dorado */
}

/* ===== Restaurantes ===== */
.popular-restaurants {
    margin-top: 50px;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    text-align: center;
}

.popular-restaurants h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 30px;
}

.restaurant-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

/* ===== Mesas Disponibles ===== */
.available-tables {
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;
    background-color: #f0f0f0;
    padding: 40px 20px;
    border-radius: 8px;
    text-align: center;
}

.available-tables h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

.available-tables h3 {
    font-size: 1.5rem;
    color: #777;
    margin-bottom: 20px;
}

.reserve-button {
    background-color: #42b983;
    color: white;
    padding: 15px 30px;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.reserve-button:hover {
    background-color: #369f6c;
}
</style>
