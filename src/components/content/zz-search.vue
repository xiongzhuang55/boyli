<template>
    <div class="app-wrapper">
      <div class="search">
        <input type="text" :placeholder="place" v-model="searchVal">
        <div v-show="searchVal" class="app-content">
          <ul class="search-list">
            <li v-for="(item, index) in getSearchData" :key="index" :id="item.id" >
              <router-link :to="{path:'/'}">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="app-ol">
        <p>近期使用(可选用)</p>
        <ol v-if="symAllData.Twelve">
          <li v-for="(item, index) in symAllData.Twelve" :key="index" :id="item.p_mkey||item.p_key">{{item.p_msym||item.p_ill}}</li>
        </ol>
        <div class="app-list-placeholder" v-else>
          数据错误，请重新填写信息或联系管理员
        </div>
      </div>
      <div class="app-ol">
        <p>高频应用（可选用）</p>
        <ol v-if="symAllData.HfWords.length">
          <li v-for="(item, index) in symAllData.HfWords" :key="index" :id="item.key_no">{{item.cvocable}}</li>
        </ol>
        <div class="app-list-placeholder" v-else>
          数据错误，请重新填写信息或联系管理员
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      inputShow: false,
      searchVal: ""
    };
  },
  computed: {
    getSearchData() {
      const data = [];
      this.searchData.map(obj => {
        if (obj.py === this.searchVal.toUpperCase()) {
          data.push(obj);
        }
      });
      return data;
    }
  },
  props: {
    place: {
      type: String,
      default: "请输入【主症】的首拼或中文"
    },
    searchData: {
      type: Array,
      default: []
    },
    illAllData: {
      type: Object,
      default: {}
    },
    symAllData: {
      type: Object,
      default: {}
    }
  },
  created() {},
  mounted() {},
  methods: {
    updated() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.app-wrapper {
  position: absolute;
  top: 60px;
  bottom: 70px;
  left: 1px;
  right: 1px;
  background-color: #f2f2f2;

  .search {
    padding: 20px;
    width: 100%;
    box-sizing: border-box;

    input {
      width: 100%;
      line-height: 40px;
      font-size: 20px;
      text-indent: 5px;
      box-sizing: border-box;
      border: 1px solid #2ca2b4;
    }

    .app-content {
      top: 62px;
      bottom: 0;

      li {
        line-height: 30px;

        a {
          display: block;
          padding-left: 62px;
          background-image: url('../../assets/images/check@2x.png');
          background-repeat: no-repeat;
          background-position: 15px;
          background-size: 35px 35px;
          font-size: 20px;
        }
      }
    }
  }

  .app-ol {
    margin: 20px;
    padding: 10px;
    background-color: #fff;

    p {
      margin-bottom: 10px;
      color: #aaa;
    }

    ol {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 10px 0;

      li {
        float: left;
        padding: 10px 15px;
        margin-right: 10px;
        border: 1px solid #ccc; /* no */
        border-radius: 20px;
        cursor: pointer;

        &:hover {
          background-color: #86CBD6;
          color: #fff;
        }
      }

      &:after {
        display: block;
        content: '';
        clear: both;
      }
    }

    .app-list-placeholder {
      display: block;
      border: 1px solid #ccc; /* no */
      border-left: none;
      border-right: none;
      padding: 50px 15px;
      text-align: center;
      color: #aaa;
    }
  }
}
</style>
