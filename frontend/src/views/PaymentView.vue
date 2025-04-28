<template>
    <div class="payment-container">
        <div class="payment-card">
            <h1>Pago de Reserva</h1>
            <p>Confirma los detalles de tu reserva y realiza el pago.</p>

            <div class="payment-summary">
                <h2>Resumen</h2>
                <p><strong>Fecha:</strong> {{ reservation.date || 'No especificado' }}</p>
                <p><strong>Hora:</strong> {{ reservation.time || 'No especificado' }}</p>
                <p><strong>Número de personas:</strong> {{ reservation.numPeople || 'No especificado' }}</p>
            </div>

            <form class="payment-form" @submit.prevent="payNow">
                <label for="card-name">Nombre en la Tarjeta:</label>
                <input id="card-name" v-model="paymentInfo.name" type="text" required placeholder="Nombre Apellido" />

                <label for="card-number">Número de Tarjeta:</label>
                <input id="card-number" v-model="paymentInfo.number" type="text" required
                    placeholder="•••• •••• •••• ••••" />

                <div class="payment-details">
                    <div>
                        <label for="expiry">Expiración:</label>
                        <input id="expiry" v-model="paymentInfo.expiry" type="text" required placeholder="MM/AA" />
                    </div>

                    <div>
                        <label for="cvc">CVC:</label>
                        <input id="cvc" v-model="paymentInfo.cvc" type="text" required placeholder="CVC" />
                    </div>
                </div>

                <button type="submit">Pagar Ahora</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'PaymentView',
  data() {
    return {
      reservation: {
        date: '',
        time: '',
        numPeople: '',
      },
      paymentInfo: {
        name: '',
        number: '',
        expiry: '',
        cvc: '',
      },
    };
  },
  created() {
    // Aquí puedes recibir parámetros de navegación si quieres (por ejemplo, usar this.$route.query)
    // Este es un ejemplo simulado.
    this.reservation = {
      date: '2025-05-01',
      time: '20:00',
      numPeople: 2,
    };
  },
  methods: {
    payNow() {
      alert('Pago realizado con éxito');
      this.$router.push({ name: 'home' }); // O cualquier página de finalización
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.payment-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6f8fa;
    font-family: 'Poppins', sans-serif;
    padding: 20px;
}

.payment-card {
    background: white;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
}

.payment-card h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.payment-card p {
    margin-bottom: 20px;
    color: #666;
}

.payment-summary {
    background: #f0f0f0;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.payment-summary h2 {
    margin-bottom: 10px;
}

.payment-form {
    display: flex;
    flex-direction: column;
}

.payment-form label {
    margin-top: 10px;
    font-size: 0.9rem;
}

.payment-form input {
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
    resize: none;
}

.payment-details {
    display: flex;
    gap: 10px;
}

.payment-details div {
    flex: 1;
}

button[type="submit"] {
    margin-top: 20px;
    padding: 12px;
    background-color: #42b983;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #369f6c;
}
</style>
