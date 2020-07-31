<template>
  <div id="app">
    <RegForm />
  </div>
</template>

<script>
import RegForm from "@/components/RegForm"
export default {
  name: 'App',
  components: {
    RegForm
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserat', sans-serif;
}
body {
  background: #EDEDED;
  padding: 0 10px;
}
</style>
