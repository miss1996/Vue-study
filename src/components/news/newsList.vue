<template>
  <div>
    <ul class="mui-table-view">
      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/shuijiao.jpg">
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class='mui-ellipsis'>
              <span>发布时间: 2018-1-1 10:10:10</span>
              <span>点击: 0</span>
            </p>
          </div>
        </a>
      </li> -->
      <!-- 连接接口渲染的数据 -->

      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class='mui-ellipsis'>
              <span>发布时间: {{item.add_time | dateFormat }}</span>
              <span>点击: {{item.click}}</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newsList: []
      }
    },
    created() {
      this.getNewsList()
    },
    methods: {
      getNewsList() {
        this.$http.get('api/getnewslist').then(result => {
          if (result.body.status === 0) {
            this.newsList = result.body.message;
          } else {
            alert('获取新闻数据失败')
          }
        })
      }
    }
  }

</script>

<style>
  .mui-table-view h1 {
    font-size: 14px;
  }

  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }

</style>
