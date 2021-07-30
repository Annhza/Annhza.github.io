import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state = {
  cityName:sessionStorage.getItem('cityName')?sessionStorage.getItem('cityName'):'西安'
};
const mutations = {//mutation用来修改state中的数据
  changeCity(state,data){
    state.cityName = data;
    // localStorage.cityName=data;   //不clear情况下会永久储存
    sessionStorage.cityName=data;  //浏览器关闭以后清除，这两个都封装由Api，区别与cookie
  },
};

export default new Vuex.Store({
  state,
  mutations
})
