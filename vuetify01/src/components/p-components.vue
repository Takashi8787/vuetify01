<template>
  <v-container>
    <v-layout text-xs-center wrap>
        <p>コンポーネント練習用ファイル</p>
        <p>{{ message }}</p>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
        message: "arigatou",
  
    }),
    mounted: function() {
        {
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response => (this.info = response.data.bpi));

        axios
            .get("https://picsum.photos/list")
            .then(response => (this.results = response.data));
        }
    },  
  }
</script>

<style>

</style>
