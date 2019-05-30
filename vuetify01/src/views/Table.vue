<template>
<v-app>
    <h1>Table</h1>
    <v-data-table
        :headers="headers"
        :items="todos"
        class="elevation-1"
    >
        <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.task }}</td>
        <td class="text-xs-right">{{ props.item.isDone }}</td>
        
        <!-- 編集ボタン -->
        <td class="justify-center layout px-0">
            <!-- 状態変更ボタン -->
            <v-btn color="green">作業中</v-btn>
            <!-- 編集ボタン -->
            <v-icon class="mr-2" @click="editUser(props.item.id)">
                edit
            </v-icon>
            <!-- 削除ボタン -->
            <v-icon @click="openDeleteDialog(props.item.id)">
                delete
            </v-icon>
        </td>
        </template>
    </v-data-table>

    <!-- <v-text-field append-icon="search"
    label="Search" single-line hide-details>
    </v-text-field> -->

    <h2>タスク追加</h2>
    <v-text>aaa</v-text>
    <v-btn color="pink" @click="addTasks()">追加</v-btn>
    <!-- 入力テキストフィールド -->
    <v-text-field v-model="newItem"></v-text-field>

    <p>{{ newItem }}</p>
    <p>{{ $data }}</p>

</v-app>
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
        todos: [
        //   {
        //     id: "02",
        //     todos: 159,
        //     fat: 6.0,
        //   },
        //   {
        //     id: '03',
        //     todos: 237,
        //     fat: 9.0,
        //   },
        ]
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

    }
  }
</script>