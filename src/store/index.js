import Vuex from 'vuex'
import vue from 'vue'
import {fetch, post} from '../axios'
import API from '../../config/httpUrl'
vue.use(Vuex);
const store = new Vuex.Store({
  // 定义状态
  state: {
    sex: 'male',
    upData: {
      name: 'hao'
    },
    otherData: {}
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.sex = state.sex === 'male'
        ? 'female'
        : 'male';
    },
    SET_DATA(state, data) { //改变数值
      state.otherData = data;
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
