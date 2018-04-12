<template>
    <div class="app-wrapper">
      <div class="app-content">
        <ol>
          <li v-for="(item, index) in contentData" :key="index">
            <a :id="item.id" :class="{ActiveLink: item.check===0?false:true}" @click="setListCheck(index);clickRoute(item.id,item.name)">{{item.name}}</a>
          </li>
        </ol>
      </div>
    </div>
</template>

<script>
export default {
  name:'appContent',
  data () {
    return {

    }
  },
  props: {
    contentData: {
      type: Array
    },
    clickRoute:''
  },
  created () {

  },
  mounted () {

  },
  methods: {
    setListCheck: function(idx) {
      var check = this.contentData[idx].check;
      this.contentData[idx].check = check ===1?0:1;
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
</style>
