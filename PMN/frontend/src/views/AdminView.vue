<template>
    <div class="admin-panel">
        <div class="header">
            <h1>Panel de Administración</h1>
            <RouterLink to="/" class="home-button">🏠 Volver al Home</RouterLink>
        </div>

        <div class="section">
            <h2>Restaurantes Más Populares</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Reviews</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="restaurant in topRestaurants" :key="restaurant.name">
                        <td>{{ restaurant.name }}</td>
                        <td>{{ restaurant.reviews }}</td>
                        <td>{{ restaurant.rating.toFixed(1) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="section">
            <h2>Usuarios Registrados</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Correo</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.email">
                        <td>{{ user.email }}</td>
                        <td>{{ user.role }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="section">
            <h2>Datos Generales</h2>
            <ul class="info-list">
                <li>Total de usuarios: {{ users.length }}</li>
                <li>Total de restaurantes: {{ restaurants.length }}</li>
                <li>Top restaurante: {{ topRestaurants[0]?.name || 'N/A' }}</li>
                <li>Promedio de rating: {{ averageRating }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user';
import restaurants from '@/data/restaurants.json';
import users from '@/data/users.json';
import { computed } from 'vue';

export default {
  name: 'AdminView',
  setup() {
    const userStore = useUserStore();

    const topRestaurants = [...restaurants]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);

    const averageRating = computed(() => {
      if (restaurants.length === 0) return 'N/A';
      const sum = restaurants.reduce((acc, r) => acc + r.rating, 0);
      return (sum / restaurants.length).toFixed(2);
    });

    return { userStore, topRestaurants, restaurants, users, averageRating };
  },
};
</script>

<style scoped>
.admin-panel {
    padding: 20px;
    font-family: 'Poppins', sans-serif;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.home-button {
    background-color: #42b983;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
}

.home-button:hover {
    background-color: #369f6c;
}

h1 {
    font-size: 2rem;
    color: #2c3e50;
}

.section {
    margin-bottom: 30px;
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
}

.data-table th,
.data-table td {
    border: 1px solid #ccc;
    padding: 8px 12px;
    text-align: left;
}

.data-table th {
    background-color: #f0f0f0;
}

.info-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.info-list li {
    margin-bottom: 8px;
}
</style>
