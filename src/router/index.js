import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one/one.vue'
import two from '@/components/two/two.vue'
import three from '@/components/three/three.vue'
import four from '@/components/four/four.vue'
import five from '@/components/five/five.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/one'
  }, {
    path: '/one',
    component: one
  }, {
    path: '/two',
    component: two
  }, {
    path: '/three',
    component: three
  }, {
    path: '/four',
    component: four
  }, {
    path: '/five',
    component: five
  }]
})
