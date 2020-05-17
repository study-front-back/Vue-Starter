<template>
  <div id="app">
    <!-- Header -->
    <Header/>

    <!-- contents -->
    <router-view/>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    'Header': Header,
    'Footer': Footer,
  }
}
</script>

<style>
</style>
