import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
// geting vue resource
Vue.use(VueResource);
// setting all request to the below url
Vue.http.options.root = "https://vuejs-http-54c88.firebaseio.com/data.json";
// using interceptors to change post requests to put requests
// overwrites the old data
// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   if (request.method == "POST") {
//     request.method = "PUT";
//   }
//   next();
// });
new Vue({
  el: "#app",
  render: h => h(App)
});
