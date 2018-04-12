<template>
    <div class="height100 animated" :class="{slideInRight: slideShow,slideInLeft: !slideShow}">
      <v-header :headerData="headerData"></v-header>
      <app-content :contentData="onsetData" :clickRoute="clickRoute"></app-content>
    </div>
</template>

<script>
  import vHeader from "../commonSub/header.vue"
  import appContent from "../commonSub/appContent.vue"
  export default {
    components: {
      "v-header": vHeader,
      "app-content": appContent
    },
    data () {
      return {
        "slideShow": false,
        "onsetData":[],
        "headerData": {
          "navLeftButton": true,
          "navLeftButtonFn": () => {
            this.$router.push({name:'tizheng',params:{back:'false'}})
          },
          "navTitle": "发病特点",
          "navRightButton": false
        },
        "clickRoute": (itemId) =>{
          this.$store.state.hisStep.ONSET.id = itemId;
          this.$store.state.hisStep.ONSET.name = itemId
          this.$router.push('/home/auxi');
        }
      }
    },
    created () {
      let id = this.$store.state.hisStep.ZZJB.id;
      let sex = this.$store.state.sexData;
      this.slideShow = (this.$route.params.back === 'false'?false:true);
      this.$post(this.API.onset,{"sex":sex,"symptoms":id}).then(data => {
        for (var item of data){
          item.check = 0;
        }
        this.onsetData = data
      })
        .catch(function(error) {
          console.log(error);
        })
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
