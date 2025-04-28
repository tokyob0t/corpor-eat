<template>
    <div class="restaurants">
        <!-- Filtros y barra de búsqueda -->
        <div class="filters">
            <div class="left-buttons">
                <button :class="{ 'active': isSortedByRating }" @click="sortByRating">
                    Ordenar por Rating
                    <span v-if="isSortedByRating">
                        <i :class="sortOrder === 'asc' ? 'nf nf-fa-caret_down' : 'nf nf-fa-caret_up'"></i>
                    </span>
                </button>

                <button :class="{ 'active': isSortedByPrice }" @click="sortByPrice">
                    Ordenar por Precio
                    <span v-if="isSortedByPrice">
                        <i :class="sortOrder === 'asc' ? 'nf nf-fa-caret_down' : 'nf nf-fa-caret_up'"></i>
                    </span>
                </button>
            </div>
            <div class="search-bar">
                <input type="text" v-model="searchQuery" placeholder="Buscar Restaurante" @input="searchRestaurants" />
                <i class="nf nf-fa-search"></i>
            </div>
        </div>

        <!-- Tarjetas de restaurantes -->
        <div class="restaurant-cards" :style="{ minHeight: '500px' }">
            <BigRestaurantCard v-for="(restaurant, index) in filteredRestaurants" :key="index"
                :restaurant="restaurant" />
        </div>
    </div>
</template>

<script lang="ts">
import BigRestaurantCard from '@/components/BigRestaurantCard.vue';
import restaurants from '@/data/restaurants.json';

export default {
  name: 'Restaurants',
  components: {
    BigRestaurantCard,
  },
  data() {
    return {
      restaurants,
      searchQuery: '',
      filteredRestaurants: [...restaurants], // Inicialmente todos los restaurantes
      sortOrder: 'desc', // Por defecto orden ascendente (se establece como 'desc' para rating de mayor a menor)
      isSortedByRating: true, // Por defecto ordenado por Rating
      isSortedByPrice: false,
    };
  },
  methods: {
    // Filtrar por búsqueda
    searchRestaurants() {
      if (this.searchQuery.trim() === '') {
        this.filteredRestaurants = [...this.restaurants]; // Si la búsqueda está vacía, mostrar todos
      } else {
        this.filteredRestaurants = this.restaurants.filter((restaurant) =>
          restaurant.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()),
        );
      }
    },
    // Ordenar por Rating
    sortByRating() {
      this.isSortedByRating = true;
      this.isSortedByPrice = false;
      this.sortBy('rating');
    },
    // Ordenar por Precio
    sortByPrice() {
      this.isSortedByRating = false;
      this.isSortedByPrice = true;
      this.sortBy('price');
    },
    // Función común para ordenar
    sortBy(criteria: string) {
      this.filteredRestaurants.sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a[criteria] < b[criteria] ? -1 : 1;
        } else {
          return a[criteria] > b[criteria] ? -1 : 1;
        }
      });
      // Cambiar el orden para la próxima vez
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
  },
  created() {
    this.sortByRating(); // Ordenar por rating al cargar la página
  },
};
</script>

<style scoped>
.restaurants {
    padding: 20px;
    font-family: 'Poppins', sans-serif;
}

/* Estilo para los filtros y la barra de búsqueda */
.filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.left-buttons {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    /* Reducido el espacio entre los botones */
}

.left-buttons button {
    background-color: transparent;
    color: #2c3e50;
    border: none;
    padding: 8px 16px;
    /* Ajusté el tamaño de los botones */
    font-size: 0.9rem;
    /* Fuente más pequeña */
    cursor: pointer;
    font-weight: normal;
    /* Eliminado bold */
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    /* Para evitar saltos cuando se activa */
}

.left-buttons button.active {
    color: #42b983;
}

.left-buttons button i {
    margin-left: 8px;
    /* Espacio para los iconos */
}

/* Estilo para la barra de búsqueda */
.search-bar {
    position: relative;
}

.search-bar input {
    padding: 10px 10px 10px 35px;
    /* Espacio adicional para el icono */
    font-size: 1rem;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.search-bar i {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: #777;
    margin-left: 8px;
    /* Añadí el margen para el espaciamiento entre el icono y el input */
}

/* Estilo para las tarjetas de restaurantes */
.restaurant-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    min-height: 500px;
    /* Se asegura de que siempre haya espacio para las tarjetas */
}
</style>
