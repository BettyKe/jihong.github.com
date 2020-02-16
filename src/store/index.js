import Vuex from "vuex";
import Vue from "vue";
import createLogger from "vuex/dist/logger";
import state from "./state"
import mutations from "./mutations"
import getters from "./getters"
import * as actions from "./actions"
Vue.use(Vuex);

const debug = process.env.NODE_ENV !=="production";

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    plugins:debug?[createLogger()]:[]
});

