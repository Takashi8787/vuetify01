<template>
  <v-container>
    <router-link to="/">HOME</router-link>  
    <!-- <v-layout width="500px"> -->

    <h1>NewTaskForm(Sub)</h1>
    <p>ここにフォームを足していく</p>

    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>連絡先編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="taskInfo.title" label="タスク名"></v-text-field>
              <v-text-field v-model="taskInfo.importance" label="重要度"></v-text-field>
              <v-text-field v-model="taskInfo.detail" label="詳細"></v-text-field>
              <!-- <v-text-field v-model="taskInfo.isDone" label="状態"></v-text-field> -->
              <!-- <v-btn @click="$router.push({ name: 'taskInfoes' })">キャンセル</v-btn> -->
              <!-- <v-btn color="info" @click="">保存</v-btn> -->
              <v-btn @click="$router.push({ name: '/' })">キャンセル</v-btn>
              <v-btn color="info" @click="submit">保存</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <hr>
    <hr>
    <p>自分確認用データ</p>
    <p>{{ $data }}</p>
    <p>ストアのデータ</p>
    <p>{{ $store.state.addTasks }}</p>

  </v-container>
</template>


<script>
import {mapActions} from 'vuex'
//   export default {
//     components: {
//       NengaTop
//     }
//   }
  export default {
    data () {
      return {
        taskInfo: {},
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
        submit(){
            this.addTaskInfos(this.taskInfo)
            this.taskInfo = {}
        },
        ...mapActions(['addTaskInfos']),

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

