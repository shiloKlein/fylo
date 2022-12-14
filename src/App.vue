<template>
<section class="main-layout">

  <app-header/>
  <app-page/>
  <app-footer/>
</section>

  <router-view></router-view>
</template>

<script>
import appHeader from './components/app-header.vue'
import appPage from './components/app-page.vue'
import appFooter from './components/app-footer.vue'

export default {
  name: 'app',
  data() {
    return {
      msg: 'This is my msg'
    }
  },
  components:{
  appHeader,
  appFooter,
  appPage,
  }
}
</script>