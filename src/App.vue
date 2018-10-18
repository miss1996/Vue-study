<template>
  <div id="app">
    <header class="mint-header is-fixed">
      <div class="mint-header-button is-left"></div>
      <h1 class="mint-header-title">黑马程序员Vue项目</h1>
      <div class="mint-header-button is-right"></div>
    </header>
    <transition>
      <router-view />
    </transition>


    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/Home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>

        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon iconfont icon-27">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  #app {
    padding-top: 40px;
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
