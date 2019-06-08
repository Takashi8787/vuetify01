<template>
  <v-container>
    <h1>Vuetifyによるリライト</h1>

    <v-layout>
        <v-flex xs12 sm4 offset-sm1>
            <v-card v-for="smoothie in smoothies" :key="smoothie.id">
                <v-card-title primary-title>
                    <v-icon class="delete" color="gray" @click="deleteSmoothie(smoothie.id)">delete</v-icon>
                    <h2>{{ smoothie.title }}</h2>
                    <ul class="ingredients">
                        <li v-for="(ing, index) in smoothie.ingredients" :key="index">
                            <v-chip close>{{ ing }}</v-chip>
                        </li>
                    </ul>
                </v-card-title>
                <v-btn fab dark color="pink">
                    <router-link :to="{name:'EditSmoothie', params: {smoothie_slug: smoothie.slug} }">
                        <v-icon dark>edit</v-icon>
                    </router-link>                    
                </v-btn>
            </v-card>
        </v-flex>
    </v-layout>
    <p>自分確認データ</p>
    <p>{{ smoothies }}</p>
  </v-container>
</template>


<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data(){
    return{
      smoothies: []
    }
  },
  methods: {
    deleteSmoothie(id){
      db.collection('smoothies').doc(id).delete()
      .then(() => {
        this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id
        })
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
.delete{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>