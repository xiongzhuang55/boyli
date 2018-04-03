<template>
    <div class="tuidao-wrapper">
      <div class="zz-jb">
        <div class="zz-header backgroundColor">
          <div class="zz-back">
            <router-link :to="{path:'/checkSex'}">返回</router-link>
          </div>
          <div class="select-zz">
            <span @click="sym">从主症进入</span>
            <span @click="ill">从疾病进入</span>
          </div>
        </div>
        <zz-search :searchData="searchData"></zz-search>
      </div>
    </div>
</template>

<script>
  import vHeader from "../../components/header.vue"
  import zzSearch from "../../components/content/zz-search.vue"
  export default {
    data () {
      return {
        "HOST": this.HOST.data(),
        "searchData": "sym"
      }
    },
    components: {
      "v-header": vHeader,
      "zz-search": zzSearch
    },
    created () {
      console.log(this.HOST);
      this.$http.post(this.HOST+'SymTwelve',{sex:1,b:2}).then(function(res){
        alert(res.body);
      },function(){
        alert('请求失败处理');   //失败处理
      });
    },
    methods: {
      sym () {
        this.searchData = "sym"
      },
      ill () {
        this.searchData = "ill"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tuidao-wrapper
    position absolute
    top 0px
    left 0px
    right 0px
    bottom 0px
    .zz-jb
      .zz-header
        position relative
        height 44px
        .zz-back
          position absolute
          top 0
          left 0px
          bottom 0
          width 20%
          line-height 44px
          background url('../../assets/images/back_arrow@2x.png') no-repeat left
          background-size 10px 12px
          margin-left 12px
          text-indent 10px
          a
            color #fff
      .select-zz
        position relative
        top 6px
        width 50%
        margin 0px auto
        display flex
        text-align center
        border 1px solid #fff
        border-radius 5px
        span
          line-height 30px
          flex 1
          cursor pointer
          color #fff
</style>
