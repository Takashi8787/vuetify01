<template>
  <div>

    <p>
      <router-link to="/">HOME</router-link>
    </p>
    <p>
      <router-link to="/table">Table</router-link>
    </p>
    <p>
      <router-link to="/sub">Sub(Practice)</router-link>
    </p>
    <p>
      <router-link to="/todolist">ToDoList</router-link>
    </p>

    <HelloWorld /> 
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  export default {
    components: {
      HelloWorld
    }
  }
</script>
