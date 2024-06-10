<template>
<div class="container-fluid">
    <header>
        <nav class="navbar navbar-expand-lg border-bottom">
            <div class="container-fluid d-flex justify-content-between">
                <router-link class="navbar-brand m-0" :to="{ name: 'home' }">

                    <img src="../assets/img/logo_ticket.jpg" alt="Logo" class="img-fluid" style="height: 80px;">

                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-4">
                            <router-link :to="{ name: 'home' }" class="nav-link fs-4">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item mx-4">
                            <router-link :to="{ name: 'ticket' }" class="nav-link fs-4">
                                Ricerca Ticket
                            </router-link>
                        </li>
                        <li class="nav-item mx-4 fs-4">
                            <router-link :to="{ name: 'contacts' }" class="nav-link fs-4">
                                Contatti
                            </router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
</div>
</template>

<script>
export default {
    name: "AppHeader",
    data() {

        return {

        }
    },
    methods: {},
}
</script>

<style lang="scss" scoped>

</style>
