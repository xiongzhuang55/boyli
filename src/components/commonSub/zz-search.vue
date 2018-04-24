<template>
    <div class="app-wrapper">
      <div class="search">
        <input type="text" :placeholder="place" v-model="searchVal">
        <div v-show="searchVal" class="app-content">
          <ul v-if="getSearchData.length">
            <li v-for="(item, index) in getSearchData" :key="index" :id="item.id">
              <a @click="changeState(item.id,item.name)">{{item.name}}</a>
              <i class="info" v-if="item.info" @click="openInfo(item.name,item.info)"></i>
            </li>
          </ul>
          <div class="app-list-placeholder" v-else>
            没有相关匹配数据
          </div>
        </div>
      </div>
      <div class="app-ol">
        <p>近期使用(可选用)</p>
        <ol v-if="AllData.Twelve">
          <li v-for="(item, index) in AllData.Twelve" :key="index" :id="item.p_mkey||item.p_key">
            <a @click="changeState(item.p_mkey||item.p_key,item.p_msym||item.p_ill)">{{item.p_msym||item.p_ill}}</a>
          </li>
        </ol>
        <div class="app-list-placeholder" v-else>
          数据错误，请重新填写信息或联系管理员
        </div>
      </div>
      <div class="app-ol">
        <p>高频使用(可选用)</p>
        <ol v-if="AllData.HfWords">
          <li v-for="(item, index) in AllData.HfWords" :key="index" :id="item.key_no||item.p_mkey">
            <a  @click="changeState(item.key_no||item.p_mkey,item.cvocable||item.p_msym)">{{item.cvocable||item.p_msym}}</a>
          </li>
        </ol>
        <div class="app-list-placeholder" v-else>
          数据错误，请重新填写信息或联系管理员
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      "inputShow": false,
      "searchVal": ''
    }
  },
  computed: {
    getSearchData() {
      const data = [];
      this.searchData.map(obj => {
        let text = this.searchVal.toUpperCase();
        if (obj.py.indexOf(text) != -1 || obj.name.indexOf(text) != -1) {
          data.push(obj);
        }
      });
      return data;
    }
  },
  props: {
    place: {
      type: String,
      default: "请输入【主症】的首拼或中文"
    },
    searchData: {
      type: Array,
      default: []
    },
    AllData: {
      type: Object,
      default: {}
    },
    illAllData: {
      type: Object,
      default: {}
    },
    symAllData: {
      type: Object,
      default: {}
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    changeState (id, name) {
      this.$store.state.hisStep.ZZJB.id.push(id);
      this.$store.state.hisStep.ZZJB.name.push(name);
      this.$store.commit('SET_HIS',true);
      if (this.$store.state.sFlag == 1){
        alert('疾病进入');
        return false
      }else{
        this.$router.push('/home/tizheng');
      }
    },
    openInfo(name,info){
      this.$alert(info, name,{
        showConfirmButton:false,
        closeOnClickModal:true,
        callback: action => {

        }
      });
    }
  },
  updated () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.app-wrapper
  position absolute
  top 44px
  bottom 55px
  left 1px
  right 1px
  .search
    padding 20px
    width 100%
    box-sizing border-box
    input
      width 100%
      line-height 30px
      font-size 16px
      text-indent 5px
      box-sizing border-box
      border 1px solid #2ca2b4
    .app-content
      top 54px
      bottom 100px
      li
        line-height 30px
      .app-list-placeholder
        text-align center
        padding 30px 0
  .app-ol
    margin 20px
    padding 10px
    background-color #fff
    font-size 16px
    p
      margin-bottom 10px
      color #aaa
    ol
      border-top 1px solid #ccc
      border-bottom 1px solid #ccc
      padding 10px 0
      li
        float left
        margin-right 10px
        margin-bottom 5px
        cursor pointer
        a
          display block
          padding 5px 10px
          border-radius 20px
          border 1px solid #ccc
          &:hover
            background-color #86CBD6
            color #fff
      &:after
        display block
        content ''
        clear both
    .app-list-placeholder
      border-top 1px solid #ccc
      border-bottom 1px solid #ccc
      padding 30px 0
      text-align center
</style>
