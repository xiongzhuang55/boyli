<template>
    <div class="app-wrapper">
      <div class="search">
        <input type="text" :placeholder="place" @input="searchInput">
        <div v-show="inputShow" class="app-content">
          <ul>
            <li v-for="(item, index) in searchData.data" :key="index" :id="item.id" :py="item.py">
              <router-link :to="{path:'/'}">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="app-ol">
        <p>近期使用(可选用)</p>
        <ol>
          <li v-for="(item, index) in searchData.Twelve" :key="index" :id="item.p_mkey||item.p_key">{{item.p_msym||item.p_ill}}</li>
        </ol>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      "inputShow": false
    }
  },
  props: {
    searchData: '',
    place: ''
  },
  created () {
  },
  mounted () {
//    setInterval(this.inputInterval(),100)
  },
  methods: {
    searchInput (e) {
      let text = e.target.value.toUpperCase();
      $('.search-content li').hide();
      if(text != '') {
        this.inputShow = true;
        for (var i = 0;i < $('.search-content li').length;i++){
          if ($('.search-content li').eq(i).attr('py').indexOf(text) != -1) {
            $('.search-content li').eq(i).show();
          }
        }
      }else this.inputShow = false
    },
    inputInterval () {
      //let text = $('.search input').attr('placeholder');
      let index=0;
      let str= $('.search input').attr('placeholder');
      if(index == str.length+1) {
        setTimeout(function(){
          index = 0
        },1000)
      }
      $('.search input').attr('placeholder',str.substring(0, index++));
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
  background-color #f2f2f2
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
      top 52px
      bottom 0
      li
        line-height 3rem
        a
          display block
          padding-left 52px
          background url('../../assets/images/check@2x.png') no-repeat 15px
          background-size 30px 30px
  .app-ol
    margin 20px
    padding 10px
    background-color #fff
    p
      margin-bottom 10px
      color #aaa
    ol
      border-top 1px solid #ccc
      border-bottom 1px solid #ccc
      padding 10px 0
      li
        float left
        padding 5px 10px
        margin-right 5px
        border 1px solid #ccc
        border-radius 20px
        cursor pointer
        &:hover
          background-color #86CBD6
          color #fff
      &:after
        display block
        content ''
        clear both
</style>
