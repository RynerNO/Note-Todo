import Vue from 'vue'
import Vuex from 'vuex'
import notes from './notes'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes
  }
});