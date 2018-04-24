<template>
  <div class="height100 animated" :class="{slideInRight: slideShow,slideInLeft: !slideShow}">
    <v-header :headerData="headerData"></v-header>
    <app-content :contentData="diseasesData" :clickRoute="clickRoute"></app-content>
    <my-loading :isShow="LOADING"></my-loading>
  </div>
</template>

<script>
  import vHeader from "../commonSub/header.vue"
  import appContent from '../commonSub/appContent.vue'
  export default {
    components:{
      "v-header": vHeader,
      "app-content": appContent
    },
    data () {
      return {
        "LOADING": true,
        "slideShow": true,
        "diseasesData":[],
        "headerData": {
          "navLeftButton": true,
          "navLeftButtonFn": () => {
            this.$router.push({name:'auxi',params:{back:'false'}})
          },
          "navTitle": "疑似疾病",
          "navRightButton": false
        },
        "clickRoute": (itemId,itemName) =>{
          this.$store.state.hisStep.DISEASE.id = itemId;
          this.$store.state.hisStep.DISEASE.name = itemName;
          this.$confirm(`${itemName}之中医证型？`, '展开', {
            confirmButtonText: '是',
            cancelButtonText: '否',
            type: 'info'
          }).then(() => {
            this.$router.push({name:'syndrome',params:{"name":itemName}})
          }).catch(() => {
            console.log(2)
          });
        }
      }
    },
    created () {
      this.slideShow = (this.$route.params.back === 'false'?false:true);
      let ZZID = this.$store.state.hisStep.ZZJB.id;
      let SEX = this.$store.state.sexData;
      let ONSETID= this.$store.state.hisStep.ONSET.id;
      let AUXIID= this.$store.state.hisStep.AUXI.id;
      this.$post(this.API.diseases,{"sex":SEX,"symptoms":ZZID,"onset":ONSETID,"auxiliarys":AUXIID}).then(data => {
        for (var item of data){
          item.check = 0;
        }
        this.diseasesData = data
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(() => {
        this.LOADING = false
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

</style>
