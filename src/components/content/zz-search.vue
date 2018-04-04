<template>
    <div class="app-wrapper">
      <div class="search">
        <input type="text" :placeholder="place" @input="searchInput" v-model="searchVal">
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
      "inputShow": false,
      "searchVal": '1'
    }
  },
  props: {
    searchData: '',
    place: ''
  },
  created () {

  },
  computed: {

  },
  mounted () {

  },
  methods: {
    searchInput (e) {
      if(e.target.value != '') {
        this.inputShow = true;
      }else this.inputShow = false
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
  top 60px
  bottom 70px
  left 1px
  right 1px
  background-color #f2f2f2
  .search
    padding 20px
    width 100%
    box-sizing border-box
    input
      width 100%
      line-height 40px
      font-size 20px
      text-indent 5px
      box-sizing border-box
      border 1px solid #2ca2b4
    .app-content
      top 62px
      bottom 0
      li
        line-height 30px
        a
          display block
          padding-left 62px
          background-image url('../../assets/images/check@2x.png')
          background-repeat no-repeat
          background-position 15px
          background-size 35px 35px
          font-size 20px
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
        padding 10px 15px
        margin-right 10px
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
