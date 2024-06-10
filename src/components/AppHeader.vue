<template>
    <div class="container-fluid">
            <header
                class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
                <div class="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
                    <router-link class="navbar-brand m-0" :to="{ name: 'home' }">
                        

                        <img src="../assets/img/logo_ticket.jpg" alt="Logo" class="img-fluid"
                            style="height: 80px;">

                   </router-link>
                </div>
            </header>
        </div>
</template>

<script>
export default {
    name: "AppHeader",
    data () {
    
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>