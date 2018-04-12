<template>
  <div id="app">
    <my-loading :isShow="showLoading"></my-loading>
    <transition
      mode="out-in"
      :duration="{enter: 300, leave: 10}"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import animate from "animate.css";
export default {
  name: "App",
  data() {
    return {
      fetchLoading: this.$store.state.fetchLoading,
      enterActiveClass: "",
      leaveActiveClass: "",
      showLoading: true
    };
  },
  mounted() {
    const _this = this;
    setTimeout(() => {
      _this.showLoading = false;
    }, 2000);
  },
  computed: {}
  //  watch: {
  //    '$route' (to, from) {
  //      const toDepth = to.path.split('/').length;
  //      const fromDepth = from.path.split('/').length;
  //      this.enterActiveClass = toDepth < fromDepth ? 'animated slideInLeft' : 'animated slideInRight';
  //      this.leaveActiveClass = toDepth < fromDepth ? 'animated slideOutRight' : 'animated slideOutLeft';
  //    }
  //  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/index.styl';
</style>
