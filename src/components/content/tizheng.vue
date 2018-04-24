<template>
    <div class="height100 animated" :class="{slideInRight: slideShow,slideInLeft: !slideShow}">
      <my-loading :isShow="LOADING"></my-loading>
      <v-header :headerData="headerData"></v-header>
      <div class="app-wrapper">
        <div class="app-content">
          <p>选择病势：</p>
          <ol>
            <li v-for="(item, index) in tzData.condition" :key="index" :id="item.id">
              <a @click="ToggleClassActiveBS(index,item.name)" :class="{ActiveLink: index === activeIndexBS}">{{item.name}}</a>
            </li>
          </ol>
          <p>选择体质：</p>
          <ol>
            <li v-for="(item, index) in tzData.physique" :key="index" :id="item.id">
              <a @click="ToggleClassActiveTZ(index,item.name)" :class="{ActiveLink: index === activeIndexTZ}">{{item.name}}</a>
            </li>
          </ol>
          <p>选择神志：</p>
          <ol>
            <li v-for="(item, index) in tzData.sz" :key="index" :id="item.id">
              <a @click="ToggleClassActiveSZ(index,item.name)" :class="{ActiveLink: index === activeIndexSZ}">{{item.name}}</a>
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
        "LOADING": true,
        "slideShow":true,
        "activeIndexBS": '',
        "activeIndexTZ": '',
        "activeIndexSZ": '',
        "tzData": {},
        "headerData": {
          "navLeftButton": true,
          "navLeftButtonFn": () => {
            this.$router.push('/home')
          },
          "navTitle": "生命体征",
          "navRightButton": false
        }
      }
    },
    created () {
      this.slideShow = (this.$route.params.back === 'false'?false:true);
      this.$get(this.API.triagecondition).then(data => {
        this.tzData = data
      })
        .catch(function(error) {
          console.log(error);
        })
        .finally(() => {
          this.LOADING = false
        })
    },
    methods: {
      ToggleClassActiveBS (number, text) {
        this.activeIndexBS = number;
        this.$store.state.hisStep.TZ.bs = text;
        if (this.activeIndexTZ !== '' && this.activeIndexSZ !== ''){
          this.$router.push('/home/onset')
        }
      },
      ToggleClassActiveTZ (number, text) {
        this.activeIndexTZ = number;
        this.$store.state.hisStep.TZ.tz = text;
        if (this.activeIndexBS !== '' && this.activeIndexSZ !== ''){
          this.$router.push('/home/onset')
        }
      },
      ToggleClassActiveSZ (number, text) {
        this.activeIndexSZ = number;
        this.$store.state.hisStep.TZ.sz = text;
        if (this.activeIndexTZ !== '' && this.activeIndexBS !== ''){
          this.$router.push('/home/onset')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  p
    line-height 44px
    font-size 16px
    background-color #ddd
    padding-left 10px
</style>
