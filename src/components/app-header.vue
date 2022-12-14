<template>
    <header class="full">
        <section class="flex space-between align-center full main-layout ">

            <img src="../assets/imgs/logo.svg" alt="">
                    <nav>
                        <router-link to="/">Featurs</router-link> |
                        <router-link to="/about">Team</router-link>
                        <router-link to="/signin">Sign In</router-link>
                    </nav>
        </section>
    </header>
</template>
<script>
export default {
    name: 'header',
    props: {},
    components: {},
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>