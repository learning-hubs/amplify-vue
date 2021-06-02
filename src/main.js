import Vue from 'vue'
import App from './App.vue'

import Amplify from "aws-amplify";
import '@aws-amplify/ui-vue';
import { Auth } from "aws-amplify";
import { API } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
Auth.currentAuthenticatedUser().then(console.log);

API.get('todosApi', '/todos', {}).then(result => {
  this.todos = JSON.parse(result.body);
 }).catch(err => {
  console.log(err);
 })


 API.get('todosApi', `/todos/${id}`, {}).then((result) => {
  this.todo = JSON.parse(result.body);
}).catch(err => {
  console.log(err);
})

API.post('todosApi', '/todos', {
  body: {
    text: "todo-1"
  }
}).then(result => {
  this.todo = JSON.parse(result.body);
}).catch(err => {
  console.log(err);
})

API.put('todosApi', `/todos`, { 
  body: {
    id: id,
    text: "todo-2",
    complete: true
  }
}).then(result => {
  this.todo = JSON.parse(result.body);
}).catch(err => {
  console.log(err);
})

API.del('todosApi', `/todos/${id}`, {}).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
