import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import {lens, withLenses} from '@dhmk/zustand-lens';
import createExampleSlice, {ExampleSlice} from "./createExampleSlice";
import { immer } from "zustand/middleware/immer";

export type StoreState = {
  example: ExampleSlice
}

export type UseStore = ReturnType<typeof useStore>;

const useStore = create<StoreState>()(
  devtools(
    immer(
      withLenses<StoreState>({
        example: lens(createExampleSlice)
      })
    )
  )
);

export default useStore;