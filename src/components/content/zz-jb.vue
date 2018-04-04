<template>
    <div class="tuidao-wrapper">
      <div class="zz-jb">
        <div class="zz-header backgroundColor">
          <div class="zz-back">
            <router-link :to="{path:'/checkSex'}">返回</router-link>
          </div>
          <div class="select-zz">
            <span @click="sym">从主症进入</span>
            <span @click="ill">从疾病进入</span>
          </div>
        </div>
        <zz-search :searchData="symAllData.data" :place="place"></zz-search>
      </div>
    </div>
</template>

<script>
import vHeader from "../../components/header.vue";
import zzSearch from "../../components/content/zz-search.vue";
export default {
  data() {
    return {
      place: "",
      searchData: {},
      symAllData: {
        data: [],
        Twelve: "",
        HfWords: ""
      },
      illAllData: {
        data: [],
        Twelve: "",
        HfWords: ""
      }
    };
  },
  components: {
    "v-header": vHeader,
    "zz-search": zzSearch
  },
  created() {
    const _this = this;
    _this.$post(_this.API.bodysym, { sex: "female" }).then(
      res => {
        _this.symAllData.data = res;
      },
      function() {
        alert("请求失败处理"); //失败处理
      }
    );
    _this.$post(_this.API.disease, { sex: "female" }).then(
      function(res) {
        _this.illAllData.data = res.diseases;
      },
      function() {
        alert("请求失败处理"); //失败处理
      }
    );
    _this.$post(_this.API.SymTwelve, { sex: "female" }).then(
      function(res) {
        _this.symAllData.Twelve = res.body;
      },
      function() {
        alert("请求失败处理"); //失败处理
      }
    );

    _this.$post(_this.API.IllTwelve, { sex: "female" }).then(
      function(res) {
        _this.illAllData.Twelve = res.body;
      },
      function() {
        alert("请求失败处理"); //失败处理
      }
    );
  },
  mounted() {
    this.sym();
  },
  methods: {
    sym() {
      this.place = "请输入【主症】的首拼或中文";
      this.searchData = this.symAllData;
    },
    ill() {
      this.place = "请输入【疾病】的首拼或中文";
      this.searchData = this.illAllData;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.tuidao-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  .zz-jb {
    .zz-header {
      position: relative;
      height: 60px;

      .zz-back {
        position: absolute;
        top: 0;
        left: 0px;
        bottom: 0;
        width: 20%;
        line-height: 60px;
        background: url('../../assets/images/back_arrow@2x.png') no-repeat left;
        background-size: 12px 14px;
        margin-left: 14px;
        text-indent: 12px;

        a {
          color: #fff;
        }
      }
    }

    .select-zz {
      position: relative;
      top: 6px;
      width: 50%;
      margin: 0px auto;
      display: flex;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 5px;

      span {
        line-height: 45px;
        flex: 1;
        cursor: pointer;
        color: #fff;
      }
    }
  }
}
</style>
