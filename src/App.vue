<template>
  <div id="app">
    <v-nav></v-nav>
    <v-swiper></v-swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import nav from './components/nav/nav.vue'
import swiper from './components/swiper/swiper.vue'

export default {
  name: 'App',
  components: {
    'v-nav': nav,
    'v-swiper': swiper
  }
}
</script>
