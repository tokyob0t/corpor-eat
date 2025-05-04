<template>
    <div class="main-layout">
        <Navbar />
        <main class="content">
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script lang="ts">
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Footer,
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
}
</style>
