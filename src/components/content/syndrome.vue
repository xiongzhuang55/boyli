<template>
  <div class="height100 animated" :class="{slideInRight: slideShow,slideInLeft: !slideShow}">
    <v-header :headerData="headerData"></v-header>
    <div class="app-content" v-show="!LOADING">
      <div v-if="synData">
        <ul class="first-level">
          <li v-for="(item,index) in synData" :key="index">
            <a href="#">{{item.name}}</a>
            <ul class="two-level" v-if="item.items" v-for="(item2,index2) in item.items" :key="index2">
              <li>
                <a href="#">{{item2.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="app-list-placeholder" v-else>暂无相关数据</div>
    </div>
    <my-loading :isShow="LOADING"></my-loading>
  </div>
</template>

<script>
  import vHeader from "../commonSub/header.vue"
  import appContent from '../commonSub/appContent.vue'

  export default {
    components:{
      "v-header": vHeader,
      "app-content": appContent
    },
    data () {
      return {
        "LOADING": true,
        "slideShow": true,
        "synData":[],
        "headerData": {
          "navLeftButton": true,
          "navLeftButtonFn": () => {
            this.$router.push({name:'disease',params:{back:'false'}})
          },
          "navTitle": '',
          "navRightButton": false
        }
      }
    },
    created() {
      this.headerData.navTitle = this.$route.params.name;
      let DISEASEID= this.$store.state.hisStep.DISEASE.id;
      this.$post(this.API.SynWay,{"conid":DISEASEID}).then(data => {
        this.synData = data
      })
        .catch(function(error) {
          console.log(error);
        })
        .finally(() => {
          this.LOADING = false
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixi.styl";
.first-level
  li
    a
      background-image url('../../assets/images/expand.png') !important
      background-repeat no-repeat
      background-position 10px
      background-size 24px 21px
</style>
