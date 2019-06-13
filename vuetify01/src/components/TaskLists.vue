<template>
    <v-container>
        <h3>{{ this.$route.params.boardtitle_slug }}</h3>

        <v-layout justify-space-around wrap>

            <!-- DBから取得のボードタイトル一覧表示 -->
            <!-- <v-flex xs4 pa-3 v-for="(list, index) in boards[0].list-title" :key="index"> -->
            <v-flex xs5 pa-1 class="yellow" v-for="(list,index) in $store.state.listInfos" :key="list.id">
                  <v-card class="green" height="auto">
                      <h5>{{ list.listTitle }}</h5>
                      <ul v-for="(item,index) in list.listItem" :key="index">
                        <li>{{ item }}</li>
                      </ul>

                      <!-- リストアイテム追加機能 -->
                      <!-- toggle=trueのときに表示 -->
                      <!-- toggle=falseのときに表示するテキストボックス -->
                      <p>{{isOpen[index]}}</p>
                      <p>{{message[index]}}</p>
                      <v-card v-if="isOpen[index]">
                        <v-textarea
                          v-model="newListItem"
                          auto-grow
                          box
                          color="deep-purple"
                          label="このカードにタイトルを入力..."
                          rows="1"
                        ></v-textarea>
                        <v-btn class="green" @click="addListItem">カードを追加</v-btn>
                        <v-icon @click="itemToggle(index)">close</v-icon>
                      </v-card>
                      <!-- <v-btn v-if="itemToggle" @click="itemToggle=!itemToggle" flat> -->
                      <v-btn v-else @click="itemToggle(index)" flat>
                        <v-icon>add</v-icon>さらにカードを追加
                      </v-btn>
                  </v-card>
            </v-flex>
            <v-btn v-if="toggle" @click="toggle=!toggle">＋ もう一つリストを追加</v-btn>
            <v-card v-else>
              <v-textarea
                v-model="newListTitle"
                auto-grow
                box
                color="deep-purple"
                label="リストのタイトルを入力..."
                rows="1"
              ></v-textarea>
              <v-btn class="green" @click="addListTitle">リストを追加</v-btn>
              <v-icon @click="toggle=!toggle">close</v-icon>
            </v-card>
        </v-layout>

    </v-container>
</template>

<script>
import db from '@/firebase/init'
import { mapActions } from 'vuex'

export default {
  name: 'TaskLists',
  data(){
    return{
      message: ['asdf','dsafdfsa','sdafdsfdsf'],
      lists: [],
      toggle: true,
      isOpen: [true,false],
      dialog: false,
      newBoardTitle: '',
      newListTitle: '',
      newListItem: '',
      newColor: '',
      feedback: null,
    }
  },
  methods: {
    ...mapActions(['getListData']),
    addListTitle(){
      // ここにリスト追加のコードを書く
      console.log('リストタイトルが追加されました')

      if(this.newListTitle){
        // save to firebasetore
        db.collection('board').doc(this.$store.state.selectedBoardID).collection('listInfo').add({
          listTitle: this.newListTitle,
        }).then( doc => {
          // console.log("Document written with ID: ",doc.id)

          db.collection('board').doc(this.$store.state.selectedBoardID).update({
            listKey: doc.id
          }).then(() => {

          }).catch( err => {
            console.log(err)
          })
            // ※ここでリストドキュメントのIDを登録???
            // this.$router.push({ name: 'Index'})
        }).catch( err => {
          console.log(err)
        })
        this.newListTitle = null
        this.feedback = null
      } else {
          this.feedback = 'You must enter a value to add an ingredient'
      }
      // 画面のリロード
      // location.reload();

    },
    addListItem(){
      console.log('listItem addメソッド実行');
    },
    itemToggle(index){
      console.log('indexNo', index)
      console.log('this.isOpen[index]', this.isOpen[index])
      if(this.isOpen[index]){
        console.log('if kita')
        this.isOpen[index]=!this.isOpen[index]
      }else{
        console.log('else kita')
        this.isOpen[index]=true
        console.log(this.isOpen[index])
      }
      // this.isOpen.splice(index, 1, !this.isOpen[index])
    },

  },
  created(){
    // TOPページで選んだボードリストのIDをstore.jsに登録
    this.$store.state.selectedBoardID = this.$route.params.boardID
    // firestoreから「listInfo」ドキュメント取得
    this.getListData()

    // リストの数だけ、タブ切り替え用のisOpen toggleを設定する
    const listNum = this.$store.state.listInfos.length
    console.log('listNum：', listNum)
    for( let i=0; i<2; i++ ){
      this.isOpen.push(false)
      console.log('roop回数ha:',i)
      // console.log('isOpenno naka',isOpen[i])
    }
  }
}
</script>
 
<style>

</style>