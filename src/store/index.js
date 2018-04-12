import Vuex from 'vuex'
import vue from 'vue'
import {fetch, post} from '../axios'
import API from '../../config/httpUrl'
vue.use(Vuex);
const store = new Vuex.Store({
  // 定义状态
  state: {
    fetchLoading: false,
    sexData: '',
    sym:'',
    sFlag: 0,
    hisStep: {
      ZZJB: {
        id:[],
        name:[]
      },
      TZ:{
        bs: '',
        tz: '',
        sz: ''
      },
      ONSET: {
        id:'',
        name:''
      },
      AUXI: {
        id:[],
        name:[]
      }
    },
    otherData: {}
  },
  mutations: {
    increment(state) {
      // 变更状态
      //  state.sFlag = state.sFlag === 0
      //    ? 1
      //    : 0;
    },
    SET_DATA(state, data) { //改变数值
      state.sFlag = data;
    },
    SET_Loading(state, data) { //改变数值
      state.fetchLoading = data;
    }
  },
  actions: {
    getData(context, data) { //异步请求数据方法
      post(API.bodysym, {
        "sex": "female",
        "age": "28岁"
      }).then(data => {
        context.commit('SET_DATA', data);
      })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
})
export default store
