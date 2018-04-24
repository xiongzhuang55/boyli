<template>
    <div class="border-1px">
      <router-view/>
      <el-button v-show="$store.state.hisStepShow" id="stepBtn" type="primary" icon="el-icon-tickets" @click="openHis">过程记录</el-button>
      <v-footer :footerRoute="footerRoute"></v-footer>
    </div>
</template>

<script>
import vfooter from "./commonSub/footer.vue"
  export default {
    name:'Home',
    data () {
      return {
        footerRoute: ''
      }
    },
    components: {
      'v-footer': vfooter
    },
    created () {
      this.footerRoute = this.$route.name
    },
    mounted () {

    },
    methods: {
      openHis() {
        this.$notify({
          title: '过程记录',
          duration: 0,
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
#stepBtn
  position absolute
  bottom 54px
  right 0px
  z-index 9999
  padding 5px
  font-size 12px
  background-color #2ca2b4
</style>
