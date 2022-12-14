<template>
    <section>
        <hero />
        <iconCards />
        <aboutCard />
        <testimonials />
        <subscription />
    </section>

</template>

<script>
import hero from './hero.vue'
import iconCards from './icon-cards.vue'
import aboutCard from './about-card.vue'
import testimonials from './testimonials.vue'
import subscription from './subscription.vue'

export default {
    name: 'main-page',
    props: {},
    components: {
        hero,
        iconCards,
        aboutCard,
        testimonials,
        subscription,

    },
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>