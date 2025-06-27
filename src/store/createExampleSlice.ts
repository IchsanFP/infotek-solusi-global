import { produce } from 'immer';
import { httpGet, httpPost, httpPut, httpDel } from '@/lib/interceptors';
import {StateCreator} from 'zustand';
import { ExampleAction, ExampleState } from '@/types/store/example-store.type';
import { ParamType } from '@/types/param.type';


export type ExampleSlice = ExampleState & ExampleAction;

export const initialState:ExampleState = {
  loading: false,
  page: 1,
  items: [],
  itemPerPage: 10,
  count: 0
}

const createExampleSlice:StateCreator<ExampleSlice> = (set) => ({
  ...initialState,
  getExample: async (payload: ParamType) => {
    set(produce((state: ExampleState) => {state.loading = true}));
    try {
      const res = await httpGet(`example`, {params: payload});

      if (res) {
        set(produce((state: ExampleState) => {
          state.loading = true;
          state.items = res?.data?.data;
          state.page = res?.data?.page;
          state.itemPerPage = res?.data?.itemPerPage;
          state.count = res?.data?.count
        }))
      }
    }catch(err) {
      console.log(err);
      set(produce((state: ExampleState) => {state.loading = false}));
    }
  },
  postExample: async (payload: unknown) => {
    return new Promise(async (resolve, reject) => {
      set(produce((state: ExampleState) => {state.loading = true}));

      try {
        const res = await httpPost('example', payload);

        if (res) {
          set(produce((state: ExampleState) => {state.loading = false}));
          resolve(res);
        }
      } catch (err) {
        set(produce((state: ExampleState) => {state.loading = false}));
        reject(err);
      }
    })
  },
  getExampleById: async(id: string) => {
    set(produce((state: ExampleState) => {state.loading = true}));
    try {
      const res = await httpGet(`example/${id}`);

      if (res) {
        set(produce((state: ExampleState) => {state.loading = false}));
      }
    } catch (err) {
      console.log(err);
      set(produce((state: ExampleState) => {state.loading = false}));
    }
  },
  updateExample: async (id, payload) => {
    return new Promise(async (resolve, reject) => {
      set(produce((state: ExampleState) => {state.loading = true}));

      try {
        const res = await httpPut(`example/id`, payload);

        if (res) {
          set(produce((state: ExampleState) => {state.loading = false}));
          resolve(res);
        }
      } catch (err) {
        console.log(err);
        set(produce((state: ExampleState) => {state.loading = false}));
        reject(err);
      }
    })
  },
  deleteExample: async(id) => {
    return new Promise(async (resolve, reject) => {
      set(produce((state: ExampleState) => {state.loading = true}));

      try {
        const res = await httpDel(`example/${id}`);

        if (res) {
          set(produce((state: ExampleState) => {state.loading = false}));
          resolve(res);
        }
      }catch (err) {
        console.log(err);
        set(produce((state: ExampleState) => {state.loading = false}));
        reject(err);
      }
    })
  },
});

export default createExampleSlice;