<template>
<main class="back">
    <div class="container">

        <section class="text-center mb-5">
            <h1 class="display-4 text-secondary">Contattaci</h1>
            <p class="lead">Siamo qui per aiutarti! Compila il modulo qui sotto o utilizza i nostri recapiti.</p>
        </section>

        <section class="row">
            <div class="col-md-6 mb-4">
                <h2 class="h4 text-secondary">I nostri contatti</h2>
                <ul class="list-unstyled">
                    <li class="mb-2">
                        <i class="fas fa-phone-alt"></i> Telefono: <a href="tel:+39123456789" class="ms-2">+39 123 456 789</a>
                    </li>
                    <li class="mb-2">
                        <i class="fas fa-envelope"></i> Email:<a href="mailto:info@azienda.com" class="ms-2">info@azienda.com</a>
                    </li>
                    <li class="mb-2">
                        <i class="fas fa-map-marker-alt"></i> Indirizzo: Via Roma 123, 00100 Roma RM, Italia
                    </li>
                </ul>
                <p class="mt-4">
                    <strong>Orari di apertura:</strong><br>
                    Lunedì - Venerdì: 9:00 - 18:00<br>
                    Sabato: 9:00 - 13:00<br>
                    Domenica: Chiuso
                </p>
            </div>
            <div class="col-md-6 mb-4">
                <h2 class="h4 text-secondary">Modulo di contatto</h2>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" v-model="form.name" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="form.email" required>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="message" rows="5" v-model="form.message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-dark w-100">Invia</button>
                </form>
            </div>
        </section>
    </div>
</main>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Logica per inviare il modulo
            console.log('Form submitted', this.form);
            // Reset form dopo l'invio
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
};
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables'as *;

// Assumendo che tu abbia queste variabili definite nel tuo file di variabili SCSS
.container{
        padding-top: 150px;
    h1,
    h2 {
        font-weight: bold;
    }
    
    .lead {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
    }
    
    ul {
        padding-left: 0;
    
        li {
            display: flex;
            align-items: center;
    
            i {
                margin-right: 0.5rem;
                color: $background-color_1;
            }
        }
    }
    
    a {
        text-decoration: none;
        color: $background-color_1;
    
        &:hover {
            text-decoration: underline;
        }
    }
    
    button {
        transition: background-color 0.3s ease;
    
        &:hover {
            background-color: darken($background-color_1, 10%);
        }
    
        &:focus {
            outline: none;
            box-shadow: 0 0 0 0.2rem rgba($background-color_1, 0.5);
        }
    }
}
</style>
