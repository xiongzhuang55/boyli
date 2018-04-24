<template>
    <div class="tuidao-wrapper animated sildeInRight">
      <my-loading :isShow="LOADING"></my-loading>
      <div class="zz-jb">
        <div class="zz-header backgroundColor">
          <div class="zz-back">
            <router-link :to="{path:'/checkSex'}">返回</router-link>
          </div>
          <div class="select-zz">
            <div class="silder" :class="{silderLeft:silder}"></div>
            <div class="select-box">
              <span @click="sym" :class="{spanColor:!silder}">从主症进入</span>
              <span @click="ill" :class="{spanColor:silder}">从疾病进入</span>
            </div>
          </div>
        </div>
        <zz-search :searchData="searchData" :AllData="AllData" :symAllData="symAllData" :illAllData="illAllData" :place="place"></zz-search>
      </div>
    </div>
</template>

<script>
  import vHeader from "../commonSub/header.vue"
  import zzSearch from "../commonSub/zz-search.vue"
  export default {
    data () {
      return {
        "LOADING": true,
        "sex": this.$store.state.sexData,
        "place": '请输入【主症】的首拼或中文',
        "searchData": [],
        "silder": false,
        "bodysym": [],
        "disease": [],
        "AllData": {},
        "symAllData": {
          "Twelve":'',
          "HfWords":''
        },
        "illAllData": {
          "Twelve":'',
          "HfWords":''
        }
      }
    },
    components: {
      "v-header": vHeader,
      "zz-search": zzSearch
    },
    created () {
      var _this = this;
      _this.$store.commit('SET_DATA',0);
      function runAsync1(){
        var p = new Promise(function (resolve, reject) {
          _this.$post(_this.API.bodysym,{sex:_this.sex})
            .then(data => {
              resolve(data)
            })
            .catch(function(error) {
              console.log(error);
            });
        });
        return p
      }
      function runAsync2(){
        var p = new Promise(function (resolve, reject) {
        return _this.$post(_this.API.disease,{sex:_this.sex})
          .then(data =>{
            resolve(data)
          })
          .catch(function(error) {
            console.log(error);
          });
        });
        return p
      }
      function runAsync3(){
        var p = new Promise(function (resolve, reject) {
          _this.$post(_this.API.SymTwelve,{sex:_this.sex})
            .then(data =>{
              resolve(data)
            })
            .catch(function(error) {
              console.log(error);
            });
        });
        return p
      }
      function runAsync4(){
        var p = new Promise(function (resolve, reject) {
          _this.$post(_this.API.IllTwelve,{sex:_this.sex})
            .then(data =>{
              resolve(data)
            })
            .catch(function(error) {
              console.log(error);
            });
        });
        return p
      }
      function runAsync5(){
        var p = new Promise(function (resolve, reject) {
          _this.$post(_this.API.SymHfWords,{sex:_this.sex})
            .then(data =>{
              resolve(data)
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        return p
      }
      function runAsync6(){
        var p = new Promise(function (resolve, reject) {
          _this.$post(_this.API.IllHfWords,{sex:_this.sex})
            .then(data =>{
              resolve(data)
            })
            .catch(function(error) {
              console.log(error);
            });
        });
        return p
      }
      Promise
        .all([runAsync1(), runAsync2(), runAsync3(), runAsync4()])
        .then(function(results){
          _this.LOADING = false;
          _this.bodysym = results[0]
          _this.searchData = results[0];
          _this.disease = results[1].diseases;
          _this.symAllData.Twelve = results[2];
          _this.illAllData.Twelve = results[3];
          _this.symAllData.HfWords = results[4];
          _this.illAllData.HfWords = results[5];
          console.log(results)
        })
        .catch(function(reason){
          console.log(reason);
        });
    },
    mounted () {
      this.sym();
      const _this = this;
      setTimeout(() => {
        _this.LOADING = false;
      }, 2000);
    },
    methods: {
      sym () {
        this.silder = false;
        this.place = '请输入【主症】的首拼或中文';
        this.searchData = this.bodysym;
        this.AllData = this.symAllData;
        this.$store.commit('SET_DATA',0);
        this.$store.commit('SET_HIS',false);
      },
      ill () {
        this.silder = true;
        this.place = '请输入【疾病】的首拼或中文';
        this.searchData = this.disease;
        this.AllData = this.illAllData;
        this.$store.commit('SET_DATA',1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .tuidao-wrapper
    position absolute
    top 0px
    left 1px
    right 1px
    bottom 0px
    .zz-jb
      .zz-header
        position relative
        height 44px
        font-size 16px
        .zz-back
          position absolute
          top 0
          left 0px
          bottom 0
          width 20%
          line-height 44px
          background url('../../assets/images/back_arrow@2x.png') no-repeat left
          background-size 10px 12px
          margin-left 14px
          text-indent 12px
          font-size 14px
          a
            color #fff
      .select-zz
        position relative
        top 6px
        width 50%
        height 32px
        margin 0px auto
        text-align center
        border 1px solid #fff
        border-radius 5px
        font-size 16px
        .silder
          position absolute
          top 0px
          left 0px
          width 50%
          height 100%
          background-color #fff
          border-radius 5px
          transition left 0.5s
          &.silderLeft
            left 50%
        .select-box
          display flex
          position absolute
          left 0px
          right 0
          span
            line-height 30px
            flex 1
            cursor pointer
            color #fff
            transition color 0.5s
            &.spanColor
              color #000
</style>
