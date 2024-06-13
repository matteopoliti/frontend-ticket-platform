<template>
<main class="back">
    <section class="container border-bottom">
        <h1 class="mb-4 text-center">Cerca tra i nostri ticket e trova la soluzione perfetta per te.</h1>
        <form @submit.prevent="filteredTickets(1)">
            <div class="search-box">
                <button class="btn-search" type="submit"><i class="fas fa-search"></i></button>
                <input type="text" class="input-search" placeholder="Scrivi per Cercare..." v-model="searchInput">
            </div>
            <div class="row">

                <div class="my-3 col-12 col-md-4">
                    <label for="categories" class="form-label">Seleziona una categoria</label>
                    <select class="form-select" name="categories" v-model="categoryInput">
                        <option disabled value="">Categorie</option>

                        <option v-for="(item, index) in arrayCategories" :key="item.id" :value="item.name">{{ item.name }}</option>
                    </select>
                </div>
                <div class="my-3 col-12 col-md-4">
                    <label for="operators" class="form-label">Seleziona un operatore</label>
                    <select class="form-select" name="operators" v-model="operatorInput">
                        <option disabled value="">Operatori</option>
                        <option v-for="(item, index) in arrayOperators" :key="item.id" :value="item.name">{{ item.name }}</option>
                    </select>
                </div>
                <div class="my-3 col-12 col-md-4">
                    <label for="date" class="form-label">Seleziona una data</label>
                    <input type="date" class="form-control" id="date" v-model="dateInput">
                </div>
            </div>
            <button type="submit" class="btn color_1 my-3">Cerca</button>
        </form>
    </section>

    <!-- Risultati -->
    <div class="album py-5">
        <div class="container">

            <div v-if="arrayTickets.length === 0">
                <div class="d-flex flex-column align-items-center">
                    <h3 class="text-center">Non ci sono risultati!</h3>
                    <img src="../assets/img/no-result.png" alt="No-result" class="img-fluid">
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="(item, index) in arrayTickets" :key="item.id">
                    <div class="card shadow-sm">
                        <div class="bg-secondary rounded-top d-flex justify-content-center">
                            <div class="d-flex flex-column align-items-center p-5">
                                <i :class="item.category.icon" class="text-white fs-1 mb-3"></i>
                                <h6 class="text-white">{{ item.category.name }}</h6>

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
    <nav aria-label="Page navigation example" class="mb-2 d-flex justify-content-center container" :class="arrayTickets.length === 0 ? 'd-none' : ''">
        <ul class="pagination pagination-sm flex-wrap text-dark">
            <!-- Button Previous -->
            <li class="page-item d-none d-sm-block">
                <button class="page-link text-secondary-emphasis" :class="{ disabled: currentPage === 1 }" @click="
                filteredTickets(currentPage - 1); ">
                    Precedente
                </button>
            </li>
            <!-- Button next -->
            <li class="page-item d-none d-sm-block">
                <button class="page-link text-secondary-emphasis" :class="{ disabled: currentPage === lastPage }" @click="
                filteredTickets(currentPage + 1);">
                    Successivo
                </button>
            </li>
        </ul>
    </nav>
</main>
</template>

<script>
import axios from "axios";
import {
    store
} from "../store.js";
export default {
    name: "TicketSearch",
    data() {

        return {
            arrayTickets: [],
            currentPage: "",
            lastPage: "",
            arrayCategories: [],
            arrayOperators: [],
            categoryInput: "",
            operatorInput: "",
            dateInput: "",
            searchInput: ""
        }
    },
    methods: {
        getTickets(postApiPage) {
            axios
                .get(`${store.apiBaseUrl}/api/tickets`, {
                    params: {
                        page: postApiPage,
                    },
                })
                .then(result => {
                    this.arrayCategories = result.data.categories;
                    this.arrayOperators = result.data.operators;
                })
        },

        filteredTickets(postApiPage) {
            const params = {
                page: postApiPage,
                category: this.categoryInput,
                operator: this.operatorInput,
                date: this.dateInput,
                search: this.searchInput,
            };
            axios
                .get(`${store.apiBaseUrl}/api/tickets/search`, {
                    params
                })
                .then((response) => {
                    console.log(response.data);
                    this.arrayTickets = response.data.result.data;
                    this.currentPage = response.data.result.current_page;
                    this.lastPage = response.data.result.last_page;

                })
                .catch((error) => {
                    console.error("Errore durante la richiesta API:", error);
                });
        }
    },
    mounted() {
        this.getTickets(1)
    },
}
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables"as *;

section {
    padding-top: 150px;

    .search-box {
        width: fit-content;
        height: fit-content;
        position: relative;
    }

    .input-search {
        height: 50px;
        width: 50px;
        border-style: none;
        padding: 10px;
        font-size: 18px;
        letter-spacing: 2px;
        outline: none;
        border-radius: 25px;
        transition: all .5s ease-in-out;
        background-color: $background-color_1;
        padding-right: 40px;
        color: $color_1;

        &::placeholder {
            color: $color_2;
            font-size: 18px;
            letter-spacing: 2px;
            font-weight: 100;
        }

        &:focus {
            width: 300px;
            border-radius: 0px;
            background-color: $background-color_2;
            border-bottom: 1px solid rgba(255, 255, 255, .5);
            transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
        }
    }

    .btn-search {
        width: 50px;
        height: 50px;
        border-style: none;
        font-size: 20px;
        font-weight: bold;
        outline: none;
        cursor: pointer;
        border-radius: 50%;
        position: absolute;
        right: 0px;
        color: $color_1;
        background-color: $background-color_2;
        pointer-events: painted;

        &:focus {
            ~ {
                .input-search {
                    width: 300px;
                    border-radius: 0px;
                    background-color: $background-color_2;
                    border-bottom: 1px solid rgba(255, 255, 255, .5);
                    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
                }
            }
        }
    }

    .color_1 {
        color: $color_1;
        background-color: $background-color_1;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            color: $color_1;
            background-color: #91722F;
        }
    }

}
</style>
