<template>
  <v-container>
    <v-layout width="500px">
      <v-flex>

        <h1>ストアデータのTBL表示（SUB）</h1>
        <router-link to="/">HOME</router-link>
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
            width:300px
        >
            <template v-slot:items="props">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.title }}</td>
              <td>{{ props.item.importance }}</td>
              <td>{{ props.item.detail }}</td>
              <td><v-checkbox v-model="props.item.isDone"></v-checkbox></td>
              
              <!-- 編集ボタン -->
              <td class="justify-center layout px-0">
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
            <!-- データが無かったときの表示 -->
            <template v-slot:no-data>
              <v-alert :value="true" color="error" icon="warning">
                Sorry, nothing to display here :(
              </v-alert>
            </template>

        </v-data-table>

        <!-- <v-text-field append-icon="search"
        label="Search" single-line hide-details>
        </v-text-field> -->


        <br>
        <br>
        <p>自分確認用のデータ</p>
        <p>{{ $data }}</p>
        <p>{{ $store.state.taskInfos }}</p>
      </v-flex>
    </v-layout>
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
          // {
          //   text: 'ID',
          //   align: 'left',
          //   // sortable: false,
          //   value: 'id'
          // },
          { text: 'ID', value: 'id' },
          { text: 'タスク名', value: 'title' },
          { text: '重要度', value: 'importance' },
          { text: '詳細', value: 'detail' },
          { text: '状態', value: 'isDone' },
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
            this.$store.state.taskInfos = this.$store.state.taskInfos.filter( taskinfo => taskinfo.id != id );
          };
        },
        changeStatus(id){
          for(let i=0; i<this.$store.state.taskInfos.length; i++ ){
          // idが一致したものだけ、処理する
            if( this.$store.state.taskInfos[i].id === id ){
            // isDoneの反転と表示文字の変更
              this.$store.state.taskInfos[i].isDone = !this.$store.state.taskInfos[i].isDone;
            }
          };
        },
    },
    computed: {
      // 表示するオブジェクトデータのみ返す
      todosDisplay() {
        // ラジオボタンの状態によって、表示するtodos配列を返す
        if( this.status === 'all-list-v'){
          return this.$store.state.taskInfos;
        } else if ( this.status === 'doing-list-v') {
          return this.$store.state.taskInfos.filter( taskinfo => !taskinfo.isDone);
        } else if ( this.status === 'done-list-v'){
          return this.$store.state.taskInfos.filter( taskinfo => taskinfo.isDone);
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