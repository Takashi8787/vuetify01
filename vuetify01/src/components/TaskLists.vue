<template>
    <v-container>
        <h1>{{ this.$route.params.boardtitle_slug }}</h1>

        <v-btn class="blue" @click='getFireBase'>add</v-btn>

        <v-layout justify-space-around wrap>

            <!-- DBから取得のボードタイトル一覧表示 -->
            <!-- <v-flex xs4 pa-3 v-for="(list, index) in boards[0].list-title" :key="index"> -->
            <v-flex xs4 pa-3 v-for="(list,index) in lists.listTitle" :key="index">
                <v-layout wrap>
                  <v-card height="100px">
                      {{ list }}
                  </v-card>
                </v-layout>
                <!-- <v-hover>

                <v-card
                slot-scope="{ hover }"
                :class="board.color"
                height="100px"
                >
                    <v-card-title class="white--text borld">{{ list }}</v-card-title>
                </v-card>
                </v-hover> -->
                    
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'TaskLists',
  data(){
    return{
      lists: [],
      toggle: false,
      dialog: false,
      newBoardTitle: '',
      newColor: '',
      feedback: null,
    }
  },
  methods: {
    //   ここのリストDBのID一致したデータのみを取得する処理について
    selectdata(){
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
        return ingredient != ing
      })        
    },
    getFireBase() {

    },
    deleteIng(ing){
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    }
  },
  created(){
    // ボードタイトルIDを取得
    const boardID = this.$route.params.boardtitle_slug
    // ボードIDに紐付いたリストデータの取得
    db.collection("board").doc(boardID).get()
    .then(doc => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            this.lists = doc.data()
            this.lists.id = doc.id
            console.log("list data",this.lists)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    })
    .catch(error => {
        console.log("Error getting document:", error);
    });


    // // fetch data from firestore
    // db.collection('board').get()
    // // db.collection('board').doc('boardTitleID').get()
    // .then(snapshot => {
    //   snapshot.forEach(doc => {
    //     // console.log(doc.data())
    //     let board = doc.data()
    //     board.id = doc.id
    //     this.boards.push(board)
    //   })
    // })       
  }
}
</script>
 
<style>

</style>