<template>
    <div class="app-wrapper" v-show="!loading">
      <div class="search" v-if="searchShow">
        <input type="text" placeholder="快速搜索辅症" v-model="searchVal">
      </div>
      <div class="app-content" :style="{top:searchShow?'1.78rem':'0.88rem'}">
        <ol v-if="searchShow?(getSearchData.length === 0?false:true):contentData">
          <li v-for="(item, index) in (searchShow?getSearchData:contentData)" :key="index">
            <a :id="item.id" :class="{ActiveLink: item.check===0?false:true}" @click="setListCheck(index);clickRoute(item.id,item.name)">{{item.name}}</a>
            <i class="info" v-if="item.info" @click="openInfo(item.name,item.info)"></i>
            <el-progress v-if="item.score" type="circle" :percentage="item.score" color="#E73569" :width="clientWidth<768?32:44" :stroke-width="clientWidth<768?3:4" @click.native="openInfo2(item.name,item.id)"></el-progress>
          </li>
        </ol>
        <div class="app-list-placeholder" v-else>
          没有相关匹配数据
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'appContent',
  data () {
    return {
      searchVal: '',
      clientWidth:'',
    }
  },
  props: {
    contentData: {
      type: Array
    },
    searchShow:{
      data: false
    },
    loading:{
      type: Boolean,
      data:''
    },
    clickRoute:''
  },
  created () {
      this.clientWidth = document.documentElement.clientWidth;
  },
  computed: {
    getSearchData() {
      const data = [];
      this.contentData.map(obj => {
        let text = this.searchVal.toUpperCase();
        if (obj.pinyin.indexOf(text) != -1 || obj.name.indexOf(text) != -1) {
          data.push(obj);
        }
      });
      return data;
    }
  },
  methods: {
    setListCheck: function(idx) {
      var check = this.contentData[idx].check;
      this.contentData[idx].check = check ===1?0:1;
    },
    openInfo(name,info){
      this.$alert(info, name,{
        showConfirmButton:false,
        closeOnClickModal:true,
        callback: action => {

        }
      });
    },
    openInfo2(name,id) {
      this.$router.push({name:'info',params:{id,name}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.router-link-active
  background-image url('../../assets/images/checked@2x.png')
  background-repeat no-repeat
  background-position 15px
  background-size 30px 30px
.search
  padding 10px
  width 100%
  box-sizing border-box
  input
    width 100%
    line-height 30px
    font-size 16px
    text-indent 5px
    box-sizing border-box
    border 1px solid #2ca2b4
.el-progress--circle
  position absolute
  top 2px
  right 0
  cursor pointer
</style>
