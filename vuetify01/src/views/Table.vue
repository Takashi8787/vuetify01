<template>
<v-container>
  <!-- <v-layout width="500px"> -->
    <h1>Table</h1>
    <router-link to="/">HOME</router-link>
    <hr>
    <h2>タスク追加</h2>
    <v-btn color="pink" @click="addTasks()">追加</v-btn>
    <!-- 入力テキストフィールド -->
    <v-text-field v-model="newItem"></v-text-field>
    <hr>

    <v-radio-group v-model="status" row>
      <v-radio label="ALL" value="all-list-v"></v-radio>
      <v-radio label="Doing" value="doing-list-v"></v-radio>
      <v-radio label="Done" value="done-list-v"></v-radio>
    </v-radio-group>

    <v-data-table
        :headers="headers"
        :items="todosDisplay"
        class="elevation-1"
    >
        <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.task }}</td>
        <td class="text-xs-right">{{ props.item.isDone }}</td>
        
        <!-- 編集ボタン -->
        <td class="justify-center layout px-0">
            <!-- 状態変更ボタン -->
            <!-- <v-btn color="green" v-bind:value="props.item.isDone ? ' 完了 ':'作業中'" @click="changeStatus(props.item.id)">作業中</v-btn> -->
            <input type="button" v-bind:value="props.item.isDone ? ' 完了 ':'作業中'" @click="changeStatus(props.item.id)">
            <!-- 編集ボタン -->
            <v-icon class="mr-2" @click="editUser(props.item.id)">
                edit
            </v-icon>
            <!-- 削除ボタン -->
            <v-icon @click="deleteItem(props.item.id)">
                delete
            </v-icon>
        </td>
        </template>
    </v-data-table>

    <!-- <v-text-field append-icon="search"
    label="Search" single-line hide-details>
    </v-text-field> -->


    <br>
    <br>
    <p>自分確認用のデータ</p>
    <p>{{ $data }}</p>
  <!-- </v-layout> -->
</v-container>
</template>


<script>
//   import NengaTop from '../components/NengaTop'
//   export default {
//     components: {
//       NengaTop
//     }
//   }
  export default {
    data () {
      return {
        newItem: "",
        idFlg: 0,
        status: 'all-list-v',
        headers: [
          {
            text: 'ID',
            align: 'left',
            // sortable: false,
            value: 'id'
          },
          { text: 'ToDoS', value: 'todos' },
          { text: '状態', value: 'status' },
        ],
        todos: [],
      }
    },
    methods: {
        search(){
            console.log("sa-ti")
        },
        addTasks(){     
            this.idFlg++;

            const todo = {
                id: this.idFlg,
                task: this.newItem,
                isDone: false,
            };       
            this.todos.push(todo);
        },
        deleteItem(id){
          if(confirm(' Are you sure? ID:' + id)){
            // 削除対象IDを持つデータのみfilterで除く
            this.todos = this.todos.filter( todo => todo.id != id );
          };
        },
        changeStatus(id){
          for(let i=0; i<this.todos.length; i++ ){
          // idが一致したものだけ、処理する
            if( this.todos[i].id === id ){
            // isDoneの反転と表示文字の変更
              this.todos[i].isDone = !this.todos[i].isDone;
            }
          };
        },
    },
    computed: {
      // 表示するオブジェクトデータのみ返す
      todosDisplay() {
        // ラジオボタンの状態によって、表示するtodos配列を返す
        if( this.status === 'all-list-v'){
          return this.todos;
        } else if ( this.status === 'doing-list-v') {
          return this.todos.filter( todo => !todo.isDone);
        } else if ( this.status === 'done-list-v'){
          return this.todos.filter( todo => todo.isDone);
        } else {console.log("エラーが発生しました");
        };
      },
      // 課題範囲外。残タスク数表示メソッド
      remaining() {
        var items = this.todos.filter(function(todo){
          return !todo.isDone;
        });
        return items.length;
      },
    }

  }
</script>