<template>
  <v-app>
    <v-content wrap style="width: 500px;">

        <h1>ToDoList</h1>
        <input type="radio">全て
        <input type="radio">作業中
        <input type="radio">完了
        <br>
        <v-btn color="success">BBB!</v-btn>
        <p>p要素</p>
        <div>div要素</div>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
        message: "NANA",  
    }),
    mounted: function() {
        console.log("mountedのコンソール");
    },  
  }
</script>

<style>

</style>
