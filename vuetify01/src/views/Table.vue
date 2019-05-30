<template>
<v-app>
    <h1>Table</h1>
    <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
    >
        <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.todos }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        
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
        headers: [
          {
            text: 'ID',
            align: 'left',
            // sortable: false,
            value: 'id'
          },
          { text: 'ToDoS', value: 'todos' },
          { text: 'Fat (g)', value: 'fat' },
        ],
        desserts: [
          {
            id: 'Frozen Yogurt',
            todos: 159,
            fat: 6.0,
          },
          {
            id: 'Ice cream sandwich',
            todos: 237,
            fat: 9.0,
          },
        ]
      }
    }
  }
</script>