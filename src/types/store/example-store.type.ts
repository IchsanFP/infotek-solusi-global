import { AxiosResponse } from "axios";
import { ParamType } from "../param.type";

export type ExampleData = {
  name: string;
};

export type ExampleState = {
  loading: boolean,
  page: number,
  items: ExampleData[],
  itemPerPage: number,
  count: number
};

export type ExampleAction = {
  getExample: (payload: ParamType) => Promise<void>
  postExample: (payload: unknown) => Promise<AxiosResponse>
  getExampleById: (id: string) => Promise<void>
  updateExample: (id: string, payload: unknown) => Promise<AxiosResponse>
  deleteExample: (id: string) => Promise<AxiosResponse>
}