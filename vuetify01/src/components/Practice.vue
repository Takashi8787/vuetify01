<template>
  <v-app>
    <v-content wrap style="width: 500px;">

        <h1>Storeの練習</h1>
        <p>ここにデータ</p>
        <p>{{ $store.state.taskInfos }}<p>
        <v-btn color="blue" @click="addStoreTodos">Store Method</v-btn>

        
        <br>
        <br>


        <h1>ToDoList(Practice)</h1>
        <form class="listSelect" >
            <input type="radio" id="all-list" name="listSelect" value="all-list-v" v-model="status"><label for="all-list">すべて</label>
            <input type="radio" id="doing-list" name="listSelect" value="doing-list-v" v-model="status"><label for="doing-list">作業中</label>
            <input type="radio" id="doneList" name="listSelect" value="donelist-v" v-model="status"><label for="doneList">完了</label>
        </form>
        <br>

        <!-- 新規タスク追加のテキスト＆ボタンのメソッド -->
        <h2>新規タスク追加</h2>
        <form v-on:submit.prevent>
            <v-text-field label="Solo" solo v-model="newItem"></v-text-field>
            <v-btn color="success" v-on:click="addTasks">追加</v-btn>
        </form>
        <v-btn @click="addStoreTodos('rensuDta')">addStoreTodos!</v-btn>

        <!-- 追加タスクの表示テーブル -->
        <table v-cloak>
            <thead>
            <tr>
                <th>ID</th><th>コメント</th><th>状態</th>
            </tr>
            </thead>
            <tbody v-if="todos.length">  <!-- タスクがあるときのみ表示 -->
            <!-- <tr v-for="(todo,index) in todos"> -->
            <tr v-for="(todo,index) in todosDisplay">  <!-- V-forにより、タスク格納配列を表示 -->
                <td v-bind:class="{ done: todo.isDone }">{{ todo.id }}</td>
                <td v-bind:class="{ done: todo.isDone }">{{ todo.item }}</td>
                <td>
                <!-- <input type="checkbox" v-model="todo.isDone"> //チェックボックス -->
                <!-- <input type="button" v-bind:value="btnStatus" @click="changeStatus(todo.id)"> -->
                <input type="button" v-bind:value="todo.isDone ? ' 完了 ':'作業中'" @click="changeStatus(todo.id)">
                <span @click="deleteItem(todo.id)" class="deleteCommand"> [削除]</span>
                </td>
            </tr>
            </tbody>
            <tbody v-else>  <!-- タスクが無いときのみ表示 -->
            <tr><td></td><td>Nothing to do!</td><td></td></tr>
            </tbody>
        </table>

<!-- Vuetifyテーブル -->
        <template>
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
          </v-data-table>
        </template>
<!-- Vuetifyテーブル -->


        <br>
        <!-- 確認用データ -->
        <p>確認用「Vueインスタンス：data」の中身</p>
        <p>{{ $data }}</p>

    </v-content>
  </v-app>
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
        message: "NANA",  
        idFlg: 0,  // ID番号設定Flg,１つずつ数値上げていく
        newItem: '',  // テキストボックスに入力されたタスク名
        status: 'all-list-v',  // ラジオボタンの
        todos: [],  // Todoタスク格納 オブジェクト配列

// テーブル用データ
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          },
        ]    

    }),
    // mounted: function() {
    //     console.log("mountedのコンソール");
    // },  

    methods: {

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


<style>
/* 正しく表示されるまでディスプレイ非表示 */
[v-cloak] {
  display: none;
}

#app ul {
  list-style:none;
}

#app tr > td.done {
  text-decoration: line-through;
  color: #bbb;
}

.listSelect {
  margin: 10px 0;
}

.deleteCommand {
  font-size: 12px;
  cursor: pointer;
  color: blue;
}

.info {
  color: #bbb;
  font-size: 12px;
  font-weight: normal;
}
</style>

