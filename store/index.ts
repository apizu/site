import { GetterTree, ActionTree, MutationTree } from "vuex";
import axios from "axios";

import { NewsContent } from "@/types/news"

const endpoint = "https://apizu.microcms.io/api/v1"

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
    const res = await axios.get(endpoint+"/news", {
      headers: { "X-API-KEY": "c73950ee-636c-404b-99dc-451e5a202689" },
      data: {}
    });
    this.commit("update_news", res.data.news as  Array<NewsContent>);
    console.log(res);
    callback();
  }
};
