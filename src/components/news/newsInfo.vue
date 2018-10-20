<template>
    <div class="parcel">
        <h3 class="details">{{ list.title}}</h3>
        <p class="time">
            <span>发表时间: {{ list.add_time | dateFormat }}</span>
            <span>点击:{{ list.click }}次</span>
        </p>
        <div class="content" v-html="list.content">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id: this.$route.params.id,
                list:[]
            }
        },
        created() {
            this.getnewsInfo()
        },
        methods:{
            getnewsInfo(){
                this.$http.get('api/getnew/' + this.id).then( result => {
                    console.log(result.body)
                    if(result.body.status === 0){
                        this.list = result.body.message[0]
                    } else {
                        alert('获取新闻页面数据失败')
                    }
                })
            }
        }
    }
</script>

<style>
    .parcel{
        padding: 0 4px;
    }
    .details {
        font-size: 16px;
        margin: 15px auto;
    }
    .time {
        font-size:13px;
        color:#662aff;
        display: flex;
        justify-content: space-between;
    }
    .content img {
        width: 100%;
    }
</style>