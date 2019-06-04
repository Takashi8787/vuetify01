<template>
  <v-container>
      <v-layout wrap>
        <v-flex >
          <h1>ボードリスト名：{{ $store.state.boardInfos[0].boardTitle }}</h1>
          <br>
          <hr>
        </v-flex>

      </v-layout>

      <v-layout justify-center>
          <v-flex>
            <v-card>
              <div class="listCard">
                <v-card-title primary-title>
                  <h3 class="headline">{{ $store.state.boardInfos[0].listTitle }}</h3>
                </v-card-title>
                <v-card-text class="listItem">
                    <p> {{ $store.state.boardInfos[0].listItem }} <v-icon right>edit</v-icon></p>
                    <p> {{ $store.state.boardInfos[0].listItem }} <v-icon right>edit</v-icon></p>
                    <p> {{ $store.state.boardInfos[0].listItem }} <v-icon right>edit</v-icon></p>
                </v-card-text>

                <v-card-actions> 
                  <v-btn v-if="toggle" flat color="black" @click="$data.toggle = !$data.toggle"><v-icon>add</v-icon>更にカードを追加</v-btn>
                  <!-- <v-btn flat color="orange">Explore</v-btn> -->
                  <v-form v-else>
                    <v-textarea
                    v-model="listTitle"
                    outline
                    name="input-7-4"
                    label="このカードにタイトルを入力..."
                    value="bbbbbbb"
                    ></v-textarea>
                    <v-btn color="green" @click="submit( $store.state.boardInfos[0].id )">カードを追加</v-btn>
                    <v-icon large @click="$data.toggle = !$data.toggle">close</v-icon>
                  </v-form>
                </v-card-actions>
              </div>
            </v-card>
          </v-flex>
          <v-flex>
            <h3>リストのタイトル</h3>
            <p>リストカード０１</p>
            <p>リストカード０２</p>
            <p>リストカード０３</p>
          </v-flex>
          <hr>
      </v-layout>

      <!-- 確認用データ -->
      <br><br><br><hr>
      <v-layout>      
        <v-flex>
          <p>確認用「Vueインスタンス：data」の中身</p>
          <p>{{ $data }}</p>
          <p>{{ $store.state.boardInfos }}</p>
        </v-flex>
      </v-layout>   
  </v-container>
</template>


<script>
// ストアのデータを扱うインポート
// import store from '@/store.js'
import { mapActions } from 'vuex'

  // console.log($store.state.count)
  // console.log("storeのカウントの値をw表示")
  // $store.commit('increment')
  // console.log($store.state.count)
  // console.log("storeのカウントの値を足しました")

  export default {
    data: () => ({
      toggle: true,
      listTitle: "",
      idFlg: 0,  // ID番号設定Flg,１つずつ数値上げていく
      newItem: '',  // テキストボックスに入力されたタスク名
      status: 'all-list-v',  // ラジオボタンの
      todos: [],  // Todoタスク格納 オブジェクト配列
    }),
    // mounted: function() {
    //     console.log("mountedのコンソール");
    // },  

    methods: {

      addListItem(id){
        console.log("add list");
      },
      submit(id){
        console.log(id);
        confirm("okok?" + id);
          this.addListItem( id, this.listTitle)
          this.boardInfo = {}
      },
      ...mapActions(['addListItem']),


        // ストアの練習用メソッド



        storeMethod(){
          console.log("ストアメソッド実行");
          this.$store.dispatch('addStoreTodos')
        },
        // Mapactionからのストアメソッド実行
        ...mapActions(['addStoreTodos']),

        // 【処理】新規タスクを todos[] に追加するメソッド
        addTasks: function(){
        if(this.newItem != ''){
            // 新規入力タスクをtodo変数に格納
            var todo = {
            id: this.idFlg,
            item: this.newItem,
            isDone: false,
            };
            // オブジェクトを配列に追加
            this.todos.push(todo);

            // 入力ボックスを初期化
            this.newItem = '';
            // 次回のidナンバーを更新
            this.idFlg++;
        // タスク未入力なら終了  
        }; 
        },
        // 【処理】削除ボタン押下の処理
        deleteItem: function(id){
          if(confirm(' Are you sure? ID:' + id)){
              // 削除対象IDを持つデータのみfilterで除く
              this.todos = this.todos.filter( todo => todo.id != id );
        };
        },
        // 【処理】状態ボタン（作業中・完了）クリック時の処理
        changeStatus: function(id){
          for(let i=0; i<this.todos.length; i++ ){
              // idが一致したものだけ、処理する
              if( this.todos[i].id === id ){
              // isDoneの反転と表示文字の変更
              this.todos[i].isDone = !this.todos[i].isDone;
              }
          };
        },
        ...mapActions(['addStoreTodos']),
    },

    // 算出プロパティ
    computed: {
        // 表示するオブジェクトデータのみ返す
        todosDisplay: function() {
        // ラジオボタンの状態によって、表示するtodos配列を返す
        if( this.status === 'all-list-v'){
            return this.todos;
        } else if ( this.status === 'doing-list-v') {
            return this.todos.filter( todo => !todo.isDone);
        } else if ( this.status === 'donelist-v'){
            return this.todos.filter( todo => todo.isDone);
        } else {console.log("エラーが発生しました");
        };
        },
        // 課題範囲外。残タスク数表示メソッド
        remaining: function() {
        var items = this.todos.filter(function(todo){
            return !todo.isDone;
        });
        return items.length;
        },
    }

  }
</script>

<!-- スタイルシート -->
<style>
.listCard {
  background-color:#dfe1e6;
  margin:10px;
}
.listItem{
  padding: 0px 5px;
}
.listItem > p{
  background-color:white;
  padding: 5px 5px;
  margin-bottom: 10px;
}
.listItem > p:hover {
  background-color: #c9c9c9;
}
</style>

