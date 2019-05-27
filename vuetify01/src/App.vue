<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav/>


    <!-- <span>aaaa</span>
    <v-card-title>
      新規会員登録フォーム(3分で完了)
    </v-card-title>

    <v-flex xs6>
      <v-card>
      <v-card-title class="font-weight-bold">新規会員登録フォーム(3分で完了)</v-card-title>
      </v-card>
    </v-flex>     -->




    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    SideNav
},
  data () {
    return {
      //
    }
  }
}
</script>
