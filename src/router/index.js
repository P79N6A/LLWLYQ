import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '../components/home.vue';
import Bag from '../components/bag.vue';
import Classify from '../components/classify.vue';
import Discover from '../components/discover.vue';
import Mine from '../components/mine.vue';

import Lists from '../List/lists.vue';

import Xiangqingye from '../Details/xiangqingye.vue';

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
     {
      path: '/classify',
      component: Classify
    },
     {
      path: '/discover',
      component: Discover
    },
     {
      path: '/bag',
      component: Bag
    },
     {
      path: '/mine',
      component: Mine
    },
    {
      path:'/home/lists:categoryId',
      component: Lists,

      meta: { navShow: false}
    },
    {
      path:'/home/lists/xiangqingye:productId',
      name:"Xiangqingye",
      component: Xiangqingye,
      meta: { navShow: false}
    }
  ]
})
