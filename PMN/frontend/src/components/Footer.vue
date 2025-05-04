<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-left">
                <p>123 Avenida Carajillo, Ciudad el Diablo</p>
                <p>+123 456 789</p>
                <p>contacto@corporeat.com</p>
            </div>

            <div class="footer-center">
                <p><strong>Síguenos</strong></p>
                <div class="social-icons">
                    <a href="#" target="_blank" aria-label="Facebook">
                        <i class="nf nf-fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank" aria-label="Instagram">
                        <i class="nf nf-fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" aria-label="Twitter (X)">
                        <i class="nf nf-dev-twitter"></i>
                    </a>
                </div>
            </div>

            <div class="footer-right">
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
    background-color: #2c3e50;
    /* Igual que la navbar */
    color: white;
    padding: 20px 0;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    /* Fuente personalizada */
}

/* Contenedor del footer */
.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    flex-wrap: wrap;
}

/* Estilo para la sección izquierda */
.footer-left {
    flex: 1;
    margin-right: 20px;
    text-align: left;
}

.footer-left p {
    margin: 5px 0;
}

/* Estilo para la sección central */
.footer-center {
    flex: 1;
    text-align: center;
}

.footer-center p {
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.social-icons a {
    margin: 0 15px;
    color: white;
    font-size: 1.8rem;
    text-decoration: none;
}

.social-icons a:hover {
    color: #42b983;
    /* Cambio de color al pasar el ratón */
}

/* Estilo para la sección derecha */
.footer-right {
    flex: 1;
    text-align: right;
}

.footer-right ul {
    list-style-type: none;
    padding: 0;
}

.footer-right li {
    margin: 5px 0;
}

.footer-right a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

.footer-right a:hover {
    color: #42b983;
    /* Cambio de color al pasar el ratón */
}
</style>
