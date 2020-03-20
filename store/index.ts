import { GetterTree, ActionTree, MutationTree } from "vuex";
import axios from "axios";

import { NewsContent } from "@/types/news"

const endpoint = "http://localhost:5000"

type State = {
  newsList: Array<NewsContent>;
};

export const state = (): State =>
  ({
    newsList: []
  } as State);

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  newsList: state => state.newsList
};

export const mutations: MutationTree<RootState> = {
  update_news(state, payload: Array<NewsContent>) {
    state.newsList = payload;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async get_news(_, callback: Function) {
    const res = await axios.get(endpoint+"/news");
    this.commit("update_news", res.data.news as  Array<NewsContent>);
    callback();
  }
};
