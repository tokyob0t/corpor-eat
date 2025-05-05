<script lang="ts">
export default {
  name: 'Reservations',
};
</script>

<template>
    <div class="reservations">
        <h1>Pagina de Reservaciones</h1>
    </div>
</template>



<style scoped>
.reservations {
    text-align: center;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    color: #42b983;
    font-size: 2em;
}

p {
    font-size: 1.2em;
    color: #555;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1em;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #35495e;
    }
}
</style>
