<template>
  <div style="height: 100%">
    <v-header :headerData="headerData"></v-header>
    <div v-show="!hisShow" class="app-wrapper his-wrapper">
      <div class="search">
        <input type="text">
      </div>
      <div class="app-content">
        <ol>
          <li v-for="(items, index) in hisData" :key="index" :id="index" >
            <!--{{items}}-->
            <a @click="toHis(index)">
              <span>{{index+1}}、{{items[2].name[1][0]}}·{{items[2].name[1][1]}}</span>
              <b>{{items[items.length-1].name[1]}}</b>
              <i></i>
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div v-show="hisShow" class="app-wrapper his-report">
      <div class="app-content">
        <ol>
          <li v-for="(item, index) in hisData[number]" :key="index">
              <b>{{item.name}}</b>
              <!--<span>{{item.name}}</span>-->
          </li>
        </ol>
      </div>
    </div>
  </div>

</template>

<script>
import vHeader from "../header.vue"
export default {
  components: {
    "v-header": vHeader
  },
  data () {
    return {
      "hisData": '',
      "number": '',
      "hisShow": false,
      "headerData": {
        "navLeftButton": false,
        "navLeftButtonFn": () => {
          this.hisShow = false
          this.headerData.navLeftButton = false
          this.headerData.navTitle = '历史记录'
        },
        "navTitle": "历史记录",
        "navRightButton": false
      }
    }
  },
  created () {
    this.$post(this.API.gethistorybydate,{"usertype":"患者用户"}).then(data => {
      this.hisData = data
    })
    .catch(function(error) {
      console.log(error);
    })
  },
  methods: {
    toHis (number) {
      this.number = number
      this.hisShow = true
      this.headerData.navLeftButton = true;
      this.headerData.navTitle = '助诊报告';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.his-wrapper
  .search
    margin 15px 0
    input
      line-height 30px
  ol
    li
      a
        display flex
        cursor pointer
        span
          flex 1
          margin-left 16px
        b
          font-weight normal
        i
          width 10px
          margin 0px 16px 0px 5px
          background url("../../assets/images/arrow-right.png") no-repeat right
.his-report
  ol
    margin 10px
    li
      border none
      border-bottom 1px dotted #ccc
      line-height 60px
      padding-left 10px
      &:first-child
        display none
</style>
