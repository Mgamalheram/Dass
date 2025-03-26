<template>
  <Navbar v-if="$route.meta.showNavbar !== false"></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import authMiddleware from "./middlewares/auth";


export default {
  name: "App",
  components: {
    Footer, Navbar
  },
  mounted(){
    authMiddleware(this.$cookies.get("_JUserSession"))
    .then((user)=>{
      // do anything that u wanna do if user has logged in
      console.log(user)
    })
  }
}
</script>

