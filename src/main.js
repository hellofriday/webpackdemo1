require('./css/index.less')
import b from './b.js'
import Vue from 'vue'
import App from './pages/App.vue'

b() 

new Vue({
    render: h => h(App)
}).$mount('#app')
