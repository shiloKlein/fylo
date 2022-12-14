<template>
    <section class="home-container">
        <h1>Home</h1>
        <h1>פשוווווטטטטט</h1>
        <custom-button :msg="'Click me!'"/>
    </section>
</template>

<script>
import customButton from '../components/custom-button.vue';
export default {
    name: 'home',
    components: {
        // customButton
    }
}
</script>
