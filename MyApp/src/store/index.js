import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from './util/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    engineOil_month: '0',
    battery_month: '0'
  },
  mutations: {
    changeOilMonth (state, month) {
      // state.engineOil_month = month
      localStorage.setItem('engineOil_month', month)
      // alert('changeOilMonth 실행')
      state.engineOil_month = localStorage.getItem('engineOil_month')
    },
    changeBatteryMonth (state, month) {
      // state.battery_month = month
      localStorage.setItem('battery_month', month)
      // alert('changeOilMonth 실행')
      state.battery_month = localStorage.getItem('battery_month')
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
