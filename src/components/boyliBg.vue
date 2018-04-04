<template>
    <div class="boyli-wrapper">
      <img class="boyli-bg" src="./../assets/images/enter.jpg">
      <router-link :to="{path:'/checkSex'}">
        <div class="boyli-enter">
          <img src="./../assets/images/enter_btn.png" alt="">
        </div>
      </router-link>
      <!-- <div class="boyli-enter" @click="chageSex">
          <img src="./../assets/images/enter_btn.png" alt="">
        </div>
      <div class="test-font">{{$store.state.sex}}</div> -->
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$post(this.API.gethistorybydate, {
      check_dt: "tens",
      user: "陈宝国",
      usertype: "基层医生",
      p_tel: "15988687954"
    })
      .then(data => {
        //请求后存入值
        this.$store.state.upData = data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    chageSex() {
      this.$store.commit("increment");
      this.$store.dispatch("getData");
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.test-font {
  color: red;
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 50px;
}

.boyli-wrapper {
  position: absolute;
  top: 0;
  left: 0px;
  bottom: 0px;
  right: 0px;
  text-align: center;
  overflow: hidden;

  .boyli-bg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .boyli-enter {
    position: absolute;
    bottom: 20px;
    left: 0px;
    right: 0px;

    img {
      width: 270px;
      height: 150px;
    }
  }
}
</style>
