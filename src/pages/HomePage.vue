<template>
<main class="back">

    <section class="py-5 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-7 col-md-8 mx-auto">
                <h1>Trova le risposte di cui hai bisogno, Subito!</h1>
                <h4 class="fw-light">Alla ricerca di soluzioni? Sei nel posto giusto.</h4>
                <p class="lead text-body-secondary">Il nostro portale di ricerca di ticket di supporto ti consente di accedere rapidamente alle risposte di cui hai bisogno. Esplora i ticket risolti e trova soluzioni già pronte ai tuoi problemi.</p>
                <div class="d-flex justify-content-center">
                    <a href="#" class="btn btn-primary my-2 ms-4">Inizia ora!</a>
                    <router-link :to="{ name: 'ticket' }" class="btn btn-secondary my-2 ms-4">
                        Cerca ticket
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <div class="album py-5">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="(item, index) in arrayTickets" :key="item.id">
                    <div class="card shadow-sm">
                        <div class="bg-secondary rounded-top d-flex justify-content-center">
                            <div class="d-flex flex-column align-items-center p-5">
                                <i :class="item.category.icon" class="text-white fs-1 mb-3"></i>
                                <h5 class="text-white">{{ item.category.name }}</h5>

                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ item.titolo }}</h5>
                            <p class="card-text">{{ item.stato }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-body-secondary">{{ item.created_at_formatted }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>
</template>

<script>
import axios from "axios";
import {
    store
} from "../store.js";

export default {
    name: "HomePage",
    data() {

        return {
            arrayTickets: []
        }
    },
    methods: {
        getTickets() {
            axios
                .get(`${store.apiBaseUrl}/api/tickets`)
                .then(result => {
                    this.arrayTickets = result.data.result.data
                    console.log(this.arrayTickets)
                })
        }
    },
    mounted() {
        this.getTickets()
    },
}
</script>

<style lang="scss" scoped>

</style>
