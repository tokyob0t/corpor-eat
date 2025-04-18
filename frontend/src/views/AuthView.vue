<template>
    <div class="auth-container">
        <div class="auth-card">
            <div class="auth-tabs">
                <button :class="{ active: mode === 'login' }" @click="mode = 'login'">
                    Iniciar Sesión
                </button>
                <button :class="{ active: mode === 'register' }" @click="mode = 'register'">
                    Registrarse
                </button>
            </div>

            <form>
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" required />
                </div>

                <div class="form-group">
                    <label>Contraseña:</label>
                    <input type="password" required />
                </div>

                <div v-if="mode === 'register'" class="form-group">
                    <label>Confirmar Contraseña:</label>
                    <input type="password" required />
                </div>

                <button type="submit" class="submit-btn">
                    {{ mode === 'login' ? 'Entrar' : 'Crear cuenta' }}
                </button>
            </form>

            <RouterLink to="/" class="back-home"> Volver al inicio</RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'AuthView',
    data() {
        return {
            mode: 'login',
        };
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}

.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}

.auth-card {
    background: white;
    padding: 40px 30px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.auth-tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.auth-tabs button {
    flex: 1;
    padding: 10px;
    font-weight: bold;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: 0.3s;
}

.auth-tabs button.active {
    border-color: #42b983;
    color: #42b983;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
}

.submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
}

.submit-btn:hover {
    background-color: #369f6c;
}

.back-home {
    display: block;
    margin-top: 20px;
    text-align: center;
    color: #42b983;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.back-home:hover {
    color: #2c8a65;
}
</style>
