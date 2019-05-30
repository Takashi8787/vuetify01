<template>
  <v-container>
    <v-layout text-xs-center wrap>
        <p>コンポーネントSUBです</p>
        <p>{{ message }}</p>
    </v-layout>
  </v-container>
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
