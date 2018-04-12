<template>
  <div style="height: 100%">
    <v-header :headerData="headerData"></v-header>
    <div v-show="!hisShow" class="app-wrapper his-wrapper">
      <div class="search">
        <input type="text" placeholder="请输入姓名或性别" v-model="searchHis">
      </div>
      <div class="app-content">
        <ol v-if="getSearchHisData.length">
          <li v-for="(items, index) in getSearchHisData" :key="index" :id="items[0].XB" >
            <!--{{items}}-->
            <a @click="toHis(items[0].XB)">
              <span>{{index+1}}、{{items[2].name[1]}}</span>
              <b>{{items[items.length-1].name[1]}}</b>
              <i></i>
            </a>
          </li>
        </ol>
        <div class="app-list-placeholder" v-else>
          没有相关匹配数据
        </div>
      </div>
    </div>
    <div class="app-wrapper his-report">
      <div class="app-content">
        <ol>
          <li v-if="index !== 0" v-for="(item, index) in getHisData[number]" :key="index">
              <b>{{item.name[0]}}</b>
              <span>{{item.name[1]|capitalize}}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>

</template>

<script>
import vHeader from "../commonSub/header.vue"
export default {
  components: {
    "v-header": vHeader
  },
  data () {
    return {
      "searchHis": '',
      "hisData": [],
      "number": '',
      "hisShow": false,
      "headerData": {
        "navLeftButton": false,
        "navLeftButtonFn": () => {
          this.hisShow = false;
          this.headerData.navLeftButton = false;
          this.headerData.navTitle = '历史记录';
          $('.his-report').animate({left:'100%'},500)
        },
        "navTitle": "历史记录",
        "navRightButton": false
      }
    }
  },
  filters: {
    capitalize: function (value) {
      return value == ''?'无':(value)
    }
  },
  computed: {
    getSearchHisData() {
      const data = [];
      this.hisData.map(obj => {
        let text = this.searchHis;
        for( let [ i, item ] of  obj.map( ( item, i ) => [ i, item ] ) ) {
          if (item.name !== undefined) {
            if (item.name[0] == '患者'){
              if(item.name[1].indexOf(text) != -1) {
                data.push(obj)
              }
            }
          }
        }
      });
      return data;
    },
    getHisData() {
      const data = [];
      this.hisData.map(obj => {
        for( let [ i, item ] of  obj.map( ( item, i ) => [ i, item ] ) ) {
          if (item.name !== undefined) {
            if (item.name[0] == '患者') {
              item.name[1].pop();
              item.name[1] = item.name[1].join('·')
            }
            if (item.name[0] == '地址') {
              item.name[1] = '无'
            }
            if (item.name[0] == '附件' || item.name[0] == '医师' || item.name[0] == '出自') {
              obj.splice(i, 1)
            }
          }
        }
        data.push(obj);
      });
      return data;
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
      this.number = number;
      this.hisShow = true;
      this.headerData.navLeftButton = true;
      this.headerData.navTitle = '助诊报告';
      $('.his-report').animate({left:'0%'},500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.his-wrapper
  .search
    display flex
    height 50px
    align-items center
    padding 0px 20px
    font-size 16px
    input
      flex 1
      line-height 30px
      font-size 16px
      padding-left 10px
  .app-content
    top 94px
    ol
      li
        a
          display flex
          cursor pointer
          background none
          padding 0
          &:hover
            background-color #86cbd6
          span
            flex 1
            margin-left 16px
          b
            font-weight normal
            font-size 14px
          i
            width 10px
            margin 0px 16px 0px 5px
            background url("../../assets/images/arrow-right.png") no-repeat right
.his-report
  position absolute
  top 44px
  left 100%
  width 100%
  ol
    margin 10px
    li
      border none
      border-bottom 1px dotted #ccc
      line-height 40px
      padding-left 10px
      font-size 16px
  .app-content
    top 0px
    bottom 2rem
    span
      padding-left 10px
      font-size 16px
</style>
