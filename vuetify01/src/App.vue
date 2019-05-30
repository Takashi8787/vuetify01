<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-side-icon @click.stop="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar> -->

    <!-- <br>
    <br> -->


    <!-- <SideNav/> -->

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