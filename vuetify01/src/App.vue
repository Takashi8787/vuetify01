<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
// import SideNav from '@/components/SideNav'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },
  created(){
    // fetch data from firestore
    this.getFirebaseData()   
  },
  data(){
    return{
      boards: [],
      newBoardTitle: '',
      feedback: null,
    }
  },
  methods: {
    ...mapActions(['getFirebaseData']),
    addBoardTitle(){
    },
  },
}


</script>

<style>
</style>