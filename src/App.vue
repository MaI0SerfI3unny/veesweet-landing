<template>
  <div id="app">
    <Header
      :scrollToContainer="scrollToContainer" />
    <Banner/>
    <About ref="about"/>
    <Popular ref="popular"/>
    <Discount ref="descount"/>
    <Help ref="help"/>
    <Footer
      :scrollToContainer="scrollToContainer"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import Help from './components/Help.vue'
import Discount from './components/Discount.vue'
import Popular from './components/Popular.vue'
import VueScrollTo from 'vue-scrollto';

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    About,
    Footer,
    Help,
    Discount,
    Popular
  },
  methods: {
    scrollToContainer(path) {
      VueScrollTo.scrollTo(this.$refs[path].$refs[path], 200, { easing: 'ease-in' });
      
    },
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
 .banner .container,
  .header .container,
  .about .container,
  .footer .container,
  .discount .container,
  .popular .container{
    max-width: 1200px;
  }
</style>

