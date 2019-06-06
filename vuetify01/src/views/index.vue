<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <!-- <v-card class="card-content"> -->
      <v-card>
        <v-icon @click="deleteSmoothie(smoothie.id)">delete</v-icon>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul>
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </v-card>
    </div>
        <p>自分確認データ</p>
        <p>{{ smoothies }}</p>
        <p>{{ message }}</p>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data(){
    return{
      smoothies: [],
      message: 'yorosiku',
    }
  },
  methods: {
    deleteSmoothie(id){
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id != id
      })
    }
  },
  created(){
    // fetch data from firestore
    db.collection('smoothies').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    })
  }
}
</script>

<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block;
}
.index .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
