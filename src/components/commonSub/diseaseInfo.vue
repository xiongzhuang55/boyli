<template>
    <div class="height100 animated" :class="{slideInRight: slideShow,slideInLeft: !slideShow}">
      <v-header :headerData="headerData"></v-header>
      <div class="app-content disease-content">
        <dl v-show="!LOADING" v-for="item of diseaseInfo">
          <dt>{{item.title}}</dt>
          <dd>{{item.content}}</dd>
        </dl>
      </div>
      <my-loading :isShow="LOADING"></my-loading>
    </div>
</template>

<script>
  import vHeader from "../commonSub/header.vue"
  export default {
    components:{
      "v-header": vHeader
    },
    data () {
      return {
        "LOADING": true,
        "slideShow": true,
        "diseaseInfo":'',
        "headerData": {
          "navLeftButton": true,
          "navLeftButtonFn": () => {
            this.$router.push({name:'disease',params:{back:'false'}})
          },
          "navTitle": "",
          "navRightButton": false
        }
      }
    },
    created() {
      const id =this.$route.params.id;
      this.headerData.navTitle = this.$route.params.name;
      this.$get(`${this.API.disease}/${id}/info`,).then(data => {
        this.diseaseInfo = data
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
.disease-content
  padding 20px
  dl
    dt
      line-height 30px
      font-weight bold
      font-size 18px
      border-bottom 1px solid #ddd
      margin-bottom 10px
    dd
      text-indent 36px
      margin-bottom 20px
      font-size 16px
      line-height 24px
</style>
