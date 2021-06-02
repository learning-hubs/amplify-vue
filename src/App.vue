<template>
  <div id="app">
    <amplify-authenticator>
      <div>
        <h1>Hey {{user.username}}!</h1>
        <amplify-sign-out></amplify-sign-out>
      </div>
    </amplify-authenticator>
  </div>
</template>

<script>
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components'

export default {
  name: 'app',
  data() {
    return {
      user: { },
    }
  },
  created() {
    onAuthUIStateChange((state, user) => {
      if(state === AuthState.SignedIn) {
        this.user = user;
      }
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
