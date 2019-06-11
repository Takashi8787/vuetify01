<template>
    <v-container>
        <h1>{{ this.$route.params.boardtitle_slug }}</h1>

        <v-btn class="blue" @click='getFireBase'>add</v-btn>

        <v-layout justify-space-around wrap>

            <!-- DBから取得のボードタイトル一覧表示 -->
            <!-- <v-flex xs4 pa-3 v-for="(list, index) in boards[0].list-title" :key="index"> -->
            <v-flex xs4 pa-3 v-for="board in boards" :key="board.id">
                <v-layout wrap>
                    <v-flex v-for="(list , index) in board.list" :key="index">
                        <v-card height="100px">
                            {{ list }}
                        </v-card>

                    </v-flex>
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
      boards: [],
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

      // var docRef = db.collection("board").doc("boardTitleID");
      db.collection("board").doc("boardTitleID").get().then(doc => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(error => {
          console.log("Error getting document:", error);
      });


      // db.collection('board').get()
      // .then(snapshot => {
      //   snapshot.forEach(doc => {
      //     console.log("new data出力")
      //     console.log(doc.data())
      //   })
      // }) 

      // console.log('getFirebaseメソッドが実行。')
      // let data = db.collection('board').doc('boardTitleID')
      // console.log('取得Dataの中身!')
      // console.log(data)
    },
    deleteIng(ing){
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    }
  },
  created(){
    // fetch data from firestore
    db.collection('board').get()
    // db.collection('board').doc('boardTitleID').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data())
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