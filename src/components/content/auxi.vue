<template>
    <div class="height100 animated" :class="{slideInRight: slideShow,slideInLeft: !slideShow}">
      <v-header :headerData="headerData"></v-header>
      <app-content :contentData="auxiData" :clickRoute="clickRoute"></app-content>
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
        "slideShow": true,
        "auxiData":[],
        "auxiNewData":{
          "id":[],
          "name":[]
        },
        "headerData": {
          "navLeftButton": true,
          "navLeftButtonFn": () => {
            this.$router.push({name:'onset',params:{back:'false'}})
          },
          "navTitle": "辅助症状",
          "navRightButton": true,
          "navRightButtonFn": () => {
            this.$store.state.hisStep.AUXI.id = this.auxiNewData.id;
            this.$store.state.hisStep.AUXI.name = this.auxiNewData.name;
            this.$router.push('/home/auxi')
          }
        },
        "clickRoute": (itemId,itemName) =>{
          var index = this.auxiNewData.id.indexOf(itemId);
          var name = this.auxiNewData.name.indexOf(itemName);
          if (index != -1){
            this.auxiNewData.id.splice(index,1);
            this.auxiNewData.name.splice(name,1);
          }else{
            this.auxiNewData.id.push(itemId);
            this.auxiNewData.name.push(itemName);
          }
        }
      }
    },
    created () {
      let id = this.$store.state.hisStep.ZZJB.id;
      let sex = this.$store.state.sexData;
      let ONSETID= this.$store.state.hisStep.ONSET.id;
      this.$post(this.API.auxiliarys,{"sex":sex,"symptoms":id,"onset":ONSETID}).then(data => {
        for (var item of data){
          item.check = 0;
        }
        this.auxiData = data
      })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
