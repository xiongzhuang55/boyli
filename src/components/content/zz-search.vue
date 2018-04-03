<template>
    <div>
      {{this.searchData}}
    </div>
</template>

<script>
export default {
  props: {
    searchData: {
      type: String
    }
  },
  created () {

  },
  mounted () {

  },
  updated () {
    console.log(this.searchData)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
