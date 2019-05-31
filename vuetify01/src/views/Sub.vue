<template>
  <div>
    <p>
      <router-link to="/">HOME</router-link>
    </p>
    <Practice />
  </div>
</template>

<script>
  import Practice from '../components/Practice'
  export default {
    components: {
      Practice
    }
  }
</script>