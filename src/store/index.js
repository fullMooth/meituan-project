import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position:"北京",
  },
  mutations: {
    setPosition(state,val){
      state.position = val;
    }
  },
  actions: {
    //异步操作
    setPosition({ commit },val){
      //异步请求获取当前数据
      commit('setPosition',val);
    }
  },
  modules: {
  }
})
