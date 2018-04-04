<template>
  <div id="app">
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
      enterActiveClass: "",
      leaveActiveClass: ""
    };
  },

  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.enterActiveClass =
        toDepth < fromDepth ? "animated slideInLeft" : "animated slideInRight";
      this.leaveActiveClass =
        toDepth < fromDepth
          ? "animated slideOutRight"
          : "animated slideOutLeft";
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/index.styl';
</style>
