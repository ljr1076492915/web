/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-05-18 10:09:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-05-18 10:22:42
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: '',
    },
    mutations: {
        setState(state, obj) {
            Object.assign(state, obj);
        }
    },
    actions: {
    },
    modules: {
    },
    plugins: [createPersistedState()]
})
