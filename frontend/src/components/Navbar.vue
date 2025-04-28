<template>
    <nav class="navbar">
        <div class="navbar-container">
            <li v-if="userStore.isAuthenticated && userStore.user?.role === 'admin'">
                <RouterLink to="/admin" class="navbar-logo">Admin</RouterLink>
            </li>
            <li v-else>
                <RouterLink to="/" class="navbar-logo">Reservas</RouterLink>
            </li>

            <ul class="navbar-links">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>

                <li v-if="userStore.isAuthenticated && userStore.user?.role === 'admin'">
                    <RouterLink to="/admin">Dashboard</RouterLink>
                </li>

                <li v-else>
                    <RouterLink to="/reservations">Mis Reservas</RouterLink>
                </li>

                <li>
                    <RouterLink to="/restaurants">Restaurantes</RouterLink>
                </li>
            </ul>

            <template v-if="userStore.isAuthenticated">
                <button class="register-button" @click="logout">Cerrar sesión</button>
            </template>
            <template v-else>
                <RouterLink to="/auth" class="register-button">Ingresar</RouterLink>
            </template>
        </div>
    </nav>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/user';

export default {
  name: 'Navbar',
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  methods: {
    logout() {
      this.userStore.logout();
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

.navbar {
    background-color: #2c3e50;
    padding: 15px 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.navbar-logo {
    font-size: 1.9rem;
    font-weight: 600;
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;
}

.navbar-logo:hover {
    color: #42b983;
}

.navbar-links {
    display: flex;
    gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.navbar-links a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    position: relative;
    padding-bottom: 4px;
    transition: color 0.3s;
}

.navbar-links a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: #42b983;
    transition: width 0.3s ease;
}

.navbar-links a:hover {
    color: #42b983;
}

.navbar-links a:hover::after {
    width: 100%;
}

.register-button {
    background-color: #42b983;
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s;
}

.register-button:hover {
    background-color: #369f6c;
    transform: translateY(-1px);
}
</style>
