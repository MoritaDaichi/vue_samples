import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

// id="app"にcomponets Appをマウントしている。 Appは上のimportで定義されている
// 公式ドキュメントによると、以下のようなtemplateレンダリングへの代替とのこと。
// h=>h(App)はこれと同じ意味 hは何でもいい
// render: function (createElement) {
//   return createElement(App)
// }
new Vue({
  router,
  render: h=>h(App),
}).$mount('#app')

// render として表示する処理をしないといけない
// 下の処理は使われなくなった。
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
