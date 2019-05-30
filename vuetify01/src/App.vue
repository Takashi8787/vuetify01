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

    <v-btn color="success">aaa</v-btn>
    <!-- <SideNav/> -->

    <!-- Practiceコンポーネントの表示 -->
    <v-content>
      <Practice/>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav'
import Practice from './components/Practice'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
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