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

      <!-- <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="taskInfo.title" label="タスク名"></v-text-field>
              <v-text-field v-model="taskInfo.importance" label="重要度"></v-text-field>
              <v-text-field v-model="taskInfo.detail" label="詳細"></v-text-field>
              <v-btn @click="$router.push({ name: '/' })">キャンセル</v-btn>
              <v-btn color="info" @click="submit">保存</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex> -->


      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>ボードリストの新規追加
            <v-form>
              <v-text-field v-model="boardInfo.boardTitle" label="ボード名"></v-text-field>
              <!-- <v-text-field v-model="boardInfo.listTitle" label="リスト名"></v-text-field>
              <v-text-field v-model="boardInfo.listItem" label="カードリスト名"></v-text-field> -->
              <!-- <v-text-field v-model="boardInfo.isDone" label="状態"></v-text-field> -->
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
        boardInfo: {},
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
            this.addBoardInfos(this.boardInfo)
            this.boardInfo = {}
        },
        ...mapActions(['addBoardInfos']),
        // submit(){
        //     this.addTaskInfos(this.taskInfo)
        //     this.taskInfo = {}
        // },
        // ...mapActions(['addTaskInfos']),

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
    },
    computed: {
    }

  }
</script>

