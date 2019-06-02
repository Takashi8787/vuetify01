<template>
  <!-- vuetifyでは全ての要素を[v-app]で囲む -->
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon @click.stop="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>タスク管理アプリケーション</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <!-- サイドナビゲーション -->
    <SideNav/>

    <!-- Practiceコンポーネントの表示 -->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SideNav from './components/SideNav'
import Practice from './components/Practice'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    HelloWorld,
    SideNav,
    Practice
  },
  data () {
    return {
      //
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
}
</script>