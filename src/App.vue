<template>
  <div class="app-container">
     <transition>
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab" v-show="$route.meta.navShow==undefined||$route.meta.navShow">
      <router-link class="mui-tab-item" to="/home" active-class="active">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/classify" active-class="active">
        <span class="mui-icon mui-icon-more"></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item" to="/discover" active-class="active">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">发现</span>
      </router-link>
      <router-link class="mui-tab-item" to="/bag" active-class="active">
        <span class="mui-icon mui-icon-locked"></span>
        <span class="mui-tab-label">购物袋</span>
      </router-link>
    
      <router-link class="mui-tab-item" to="/mine" active-class="active">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
    </div>
</template>

<script>



export default {
    data(){
      return {
          selected:'Home',
          tab:[{
                text:'首页',
                to:'/home'
          },
          {
                text:'分类',
                to:'/classify'
          },
          {
                text:'发现',
                to:'/discover'
          },
          {
                text:'购物袋',
                to:'/bag'
          },
          {
                text:'我的',
                to:'/mine'
          },]
      }
    }
}
</script>

<style scoped>
  .active{color:#58bc58;font-weight:bold;}
 .app-container{
  
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

</style>