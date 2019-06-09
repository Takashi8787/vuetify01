<template>
  <v-container>
    <h1>task todo app</h1>  
    <v-layout justify-space-around>
      <v-flex sm4 v-for="board in boards" :key="board.id">
        <v-card>
            <h4 class="blue-text" pa-3>{{ board.title }}</h4>
            <v-chip close v-for="(list , index) in board.list" :key="index">{{ list }}</v-chip>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>



<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data(){
    return{
      boards: [],
    }
  },
  methods: {

  },
  created(){
    // fetch data from firestore
    db.collection('board').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        let board = doc.data()
        board.id = doc.id
        this.boards.push(board)
      })
    })    
  }
}
</script>


<style>

</style>


