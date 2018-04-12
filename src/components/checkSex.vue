<template>
    <div class="sex-wrapper border-1px">
      <h2>请选择患者类别</h2>
      <div class="sex-select">
        <router-link :to="{name:'Home'}">
          <div @click="SEX('male')">
            <img sex="male" src="../assets/images/male.png" alt="">
            <p>男性</p>
          </div>
        </router-link>
        <router-link :to="{name:'Home'}">
          <div @click="SEX('female')">
            <img sex="male" src="../assets/images/female.png" alt="">
            <p>女性</p>
          </div>
        </router-link>
        <router-link :to="{name:'Home'}">
          <div @click="SEX('child')">
            <img sex="male" src="../assets/images/child.png" alt="">
            <p>儿童</p>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    SEX (data) {
      this.$store.state.sexData = data;
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.sex-wrapper
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  text-align center
  box-sizing border-box
  h2
    font-size 28px
  .sex-select
    display flex
    justify-content space-around
    width 80%
    margin 50px auto
    a
      width 30%
      color #2AB2FF
      img
        width 80%
      p
        font-size 16px
        line-height 22px


</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
