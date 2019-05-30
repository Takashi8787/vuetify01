// <template>
// <!DOCTYPE html>
// <html lang="ja">
//   <head>
//     <meta charset="utf-8">
//     <title>5seconds</title>
//     <link rel="stylesheet" href="css/styles.css">
//   </head>
//   <body>
//     <div id="app">

//       <h1>
//         ToDo List
//         <span class="info">({{ remaining }}/{{ todos.length }})</span>
//       </h1>

//       <!-- 表示切り替え用ラジオボタンの設置 -->
//       <form class="listSelect" >
//         <input type="radio" id="all-list" name="listSelect" value="all-list-v" v-model="status"><label for="all-list">すべて</label>
//         <input type="radio" id="doing-list" name="listSelect" value="doing-list-v" v-model="status"><label for="doing-list">作業中</label>
//         <input type="radio" id="doneList" name="listSelect" value="donelist-v" v-model="status"><label for="doneList">完了</label>
//       </form>

//       <!-- リストへタスク一覧表示 -->
//       <table v-cloak>
//         <thead>
//           <tr>
//             <th>ID</th><th>コメント</th><th>状態</th>
//           </tr>
//         </thead>
//         <tbody v-if="todos.length">  <!-- タスクがあるときのみ表示 -->
//           <!-- <tr v-for="(todo,index) in todos"> -->
//           <tr v-for="(todo,index) in todosDisplay">  <!-- V-forにより、タスク格納配列を表示 -->
//             <td v-bind:class="{ done: todo.isDone }">{{ todo.id }}</td>
//             <td v-bind:class="{ done: todo.isDone }">{{ todo.item }}</td>
//             <td>
//               <!-- <input type="checkbox" v-model="todo.isDone"> //チェックボックス -->
//               <!-- <input type="button" v-bind:value="btnStatus" @click="changeStatus(todo.id)"> -->
//               <input type="button" v-bind:value="todo.isDone ? ' 完了 ':'作業中'" @click="changeStatus(todo.id)">
//               <span @click="deleteItem(todo.id)" class="deleteCommand"> [削除]</span>
//             </td>
//           </tr>
//         </tbody>
//         <tbody v-else>  <!-- タスクが無いときのみ表示 -->
//           <tr><td></td><td>Nothing to do!</td><td></td></tr>
//         </tbody>
//       </table>

//       <!-- 新規タスク追加のテキスト＆ボタンのメソッド -->
//       <h2>新規タスク追加</h2>
//       <form v-on:submit.prevent>
//         <input type="text" v-model="newItem">
//         <button v-on:click="addTasks">追加</button>
//       </form>

//       <br>
//       <br>
//       <p>確認用「Vueインスタンス：data」の中身</p>
//       <p>{{ $data }}</p>
//     </div>

//     <!-- vue.jsの読み込み -->
//     <script src="https://cdn.jsdelivr.net/npm/vue"></script>
//     <script src="js/main.js"></script>
//   </body>
// </html>
// </template>

// // javaコード
// <script>
// var app = new Vue({
//   el: '#app' ,
//   data: {
//     idFlg: 0,  // ID番号設定Flg,１つずつ数値上げていく
//     newItem: '',  // テキストボックスに入力されたタスク名
//     status: 'all-list-v',  // ラジオボタンの
//     todos: [],  // Todoタスク格納 オブジェクト配列
//   },
//   methods: {
//     // 【処理】新規タスクを todos[] に追加するメソッド
//     addTasks: function(){
//       if(this.newItem != ''){
//         // 新規入力タスクをtodo変数に格納
//         var todo = {
//           id: this.idFlg,
//           item: this.newItem,
//           isDone: false,
//         };
//         // オブジェクトを配列に追加
//         this.todos.push(todo);

//         // 入力ボックスを初期化
//         this.newItem = '';
//         // 次回のidナンバーを更新
//         this.idFlg++;
//       // タスク未入力なら終了  
//       }; 
//     },
//     // 【処理】削除ボタン押下の処理
//     deleteItem: function(id){
//       if(confirm(' Are you sure? ID:' + id)){
//         // 削除対象IDを持つデータのみfilterで除く
//         this.todos = this.todos.filter( todo => todo.id != id );
//       };
//     },
//     // 【処理】状態ボタン（作業中・完了）クリック時の処理
//     changeStatus: function(id){
//       for(let i=0; i<this.todos.length; i++ ){
//         // idが一致したものだけ、処理する
//         if( this.todos[i].id === id ){
//           // isDoneの反転と表示文字の変更
//           this.todos[i].isDone = !this.todos[i].isDone;
//         }
//       };
//     },
//   },

//   // 算出プロパティ
//   computed: {
//     // 表示するオブジェクトデータのみ返す
//     todosDisplay: function() {
//       // ラジオボタンの状態によって、表示するtodos配列を返す
//       if( this.status === 'all-list-v'){
//         return this.todos;
//       } else if ( this.status === 'doing-list-v') {
//         return this.todos.filter( todo => !todo.isDone);
//       } else if ( this.status === 'donelist-v'){
//         return this.todos.filter( todo => todo.isDone);
//       } else {console.log("エラーが発生しました");
//       };
//     },
//     // 課題範囲外。残タスク数表示メソッド
//     remaining: function() {
//       var items = this.todos.filter(function(todo){
//         return !todo.isDone;
//       });
//       return items.length;
//     },
//   }

// })
// </script>


// <style>
// /* 正しく表示されるまでディスプレイ非表示 */
// [v-cloak] {
//   display: none;
// }


//  #app ul {
//   list-style:none;
// }

// #app tr > td.done {
//   text-decoration: line-through;
//   color: #bbb;
// }

// .listSelect {
//   margin: 10px 0;
// }

// .deleteCommand {
//   font-size: 12px;
//   cursor: pointer;
//   color: blue;
// }

// .info {
//   color: #bbb;
//   font-size: 12px;
//   font-weight: normal;
// }
// </style>
