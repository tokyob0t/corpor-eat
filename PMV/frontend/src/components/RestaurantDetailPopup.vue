<template>
    <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
        <div class="popup-content">
            <div class="popup-gallery">
                <div class="carousel-wrapper">
                    <div class="carousel">
                        <div v-for="(image, index) in images" :key="index" class="carousel-image" :style="{
                            backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#2c3e50',
                            display: currentImageIndex === index ? 'block' : 'none'
                        }">
                            {{ image }}
                        </div>
                    </div>

                    <button class="prev" @click="prevImage"><i class="nf nf-fa-caret_left"></i></button>
                    <button class="next" @click="nextImage"><i class="nf nf-fa-caret_right"></i></button>

                    <div class="carousel-indicators">
                        <span v-for="(_, index) in images" :key="'indicator-' + index"
                            :class="['indicator', { active: currentImageIndex === index }]"
                            @click="goToImage(index)"></span>
                    </div>
                </div>
            </div>

            <div class="popup-reservation">
                <h3>Reservar Mesa</h3>
                <form @submit.prevent="submitReservation">
                    <label for="reservation-date">Fecha:</label>
                    <input type="date" id="reservation-date" v-model="reservation.date" required />

                    <label for="reservation-time">Hora:</label>
                    <input type="time" id="reservation-time" v-model="reservation.time" required />

                    <label for="number-of-people">Número de personas:</label>
                    <input type="number" id="number-of-people" v-model="reservation.numPeople" min="1" required />

                    <label for="special-requests">Solicitudes Especiales:</label>
                    <textarea id="special-requests" v-model="reservation.specialRequests"
                        placeholder="Escribe tus solicitudes especiales"></textarea>

                    <button type="submit">Confirmar Reserva</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'RestaurantDetailPopup',
  props: {
    showPopup: Boolean,
    restaurant: Object,
  },
  data() {
    return {
      currentImageIndex: 0,
      reservation: {
        date: '',
        time: '',
        numPeople: 1,
        specialRequests: '',
      },
      images: ['Imagen 1', 'Imagen 2', 'Imagen 3', 'Imagen 4', 'Imagen 5'],
    };
  },
  methods: {
    closePopup() {
      this.$emit('closePopup'); // Cerrar el popup
    },
    submitReservation() {
      // Redirige a la página de pago
      this.$router.push({ name: 'payment' }); // Asegúrate de tener la ruta 'payment' configurada
    },
    goToImage(index: number) {
      this.currentImageIndex = index; // Ir a la imagen seleccionada por el indicador
    },
    nextImage() {
      // Avanzar a la siguiente imagen
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      // Volver a la imagen anterior
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
/* Importando la fuente Poppins */

.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.popup-content {
    display: flex;
    background-color: white;
    border-radius: 8px;
    width: 80%;
    max-width: 1200px;
    padding: 20px;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
}

.popup-gallery {
    flex: 1;
    margin-right: 20px;
}

.carousel-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.carousel {
    display: flex;
}

.carousel-image {
    flex: 1 0 100%;
    /* Garantiza que cada imagen ocupe el 100% del contenedor */
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    border-radius: 8px;
    text-align: center;
}

.carousel-image.light {
    background-color: #f0f0f0;
    /* Color claro */
}

.carousel-image.dark {
    background-color: #2c3e50;
    /* Color oscuro */
}

.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.indicator {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.indicator.active {
    background-color: white;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.popup-reservation {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.popup-reservation h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.popup-reservation form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.popup-reservation label {
    font-size: 1rem;
}

.popup-reservation input,
.popup-reservation textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    /* Evitar que se redimensionen */
}

.popup-reservation input::placeholder,
.popup-reservation textarea::placeholder {
    font-style: italic;
    color: #aaa;
}

.popup-reservation button {
    padding: 10px;
    background-color: #42b983;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
}

.popup-reservation button:hover {
    background-color: #369f6c;
}
</style>
