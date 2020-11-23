import { SET_IS_LOGIN, SET_USER_DETAIL } from "../type";
const state = {
  USER_DETAIL: {},
  IS_LOGIN: false,
};
const mutations = {
  [SET_USER_DETAIL](state, data) {
    state.USER_DETAIL = data;
  },
  [SET_IS_LOGIN](state, data) {
    state.IS_LOGIN = data;
    console.log(state.IS_LOGIN);
  },
};
const actions = {};
const getters = {
  GEI_ISLOGIN(state) {
    return state.IS_LOGIN;
  },
  GET_USER_DETAIL(state) {
    return state.USER_DETAIL;
  },
};
export const user = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
