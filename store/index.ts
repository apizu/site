import { GetterTree, ActionTree, MutationTree } from "vuex";

import axios from "axios";

const endpoint = "localhost:5000"

type State = {
  news: Array<string>;
};

export const state = (): State =>
  ({
    news: []
  } as State);

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  news: state => state.news
};

export const mutations: MutationTree<RootState> = {
  update_news(state, payload: Array<string>) {
    state.news = payload;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async getNews({ dispatch, commit }, callback: Function) {
    const res = await axios.get(endpoint+"/news");
    commit("update_news", res);
    callback();
  }
};
