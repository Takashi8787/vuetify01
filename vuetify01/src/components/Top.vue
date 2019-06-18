<template>
  <v-container>
    <v-layout justify-space-around wrap>
    <!-- DBから取得のボードタイトル一覧表示 -->
      <v-flex xs4 pa-3 v-for="board in $store.state.boardInfos" :key="board.id">
        <v-hover>

          <v-card
          slot-scope="{ hover }"
          :class="board.color"
          height="100px"
          >
            <router-link :to="{ name: 'TaskLists', params: {boardtitle_slug: board.boardTitle, boardID: board.id} }">
              <v-card-title class="white--text borld">{{ board.boardTitle }}</v-card-title>
              <v-icon v-if="hover" align-end>favorite_border</v-icon>
              <!-- <p class="white-text">{{ board.title }}</p> -->
              <!-- <v-chip close v-for="(list , index) in board.list" :key="index">{{ list }}</v-chip> -->
            </router-link>
          </v-card>
        </v-hover>            
      </v-flex>
    </v-layout>

    <v-layout justify-space-around wrap>
      <!-- ダイアログの挿入 -->
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="pink" dark v-on="on">ボードの追加</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">新規タスク登録</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field v-model="newBoardTitle" label="ボードタイトルを追加*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-overflow-btn
                    v-model="newColor"
                    :items="['blue', 'green', 'pink', 'yellow']"
                    label="ここで背景カラー選択"
                  ></v-overflow-btn>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*必須入力</small>
            <p v-if="feedback" class="red-text">{{ feedback }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">キャンセル</v-btn>
            <v-btn color="blue darken-1" flat @click="addBoardTitle">新規作成</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


    </v-layout>
  </v-container>

</template>



<script>
import db from '@/firebase/init'
import { mapActions } from 'vuex'

export default {
  name: 'Index',
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
    ...mapActions(['getFirebaseData']),
    addBoardTitle(){
      if(this.newBoardTitle){
        // save to firebasetore
        db.collection('board').add({
            boardTitle: this.newBoardTitle,
            color: this.newColor,
            favorite: false,
        }).then(() => {
            // this.$router.push({ name: 'Index'})
        }).catch(err => {
            console.log(err)
        })
        this.newBoardTitle = null
        this.newColor = null
        this.feedback = null
      } else {
          this.feedback = 'You must enter a value to add an ingredient'
      }
      // 画面のリロード
      location.reload();
    },


  },
  created(){ 
  }
}
</script>


<style>

</style>


