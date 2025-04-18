<template>
    <div class="main-layout">
        <Navbar />
        <main class="content">
            <router-view />
        </main>
    </div>
</template>

<script lang="ts">
import Navbar from './Navbar.vue';

export default {
    name: 'MainLayout',
    components: {
        Navbar,
    },
};
</script>

<style scoped>
.main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex-grow: 1;
    padding: 20px;
}
</style>
