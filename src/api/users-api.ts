import axios, { AxiosResponse } from "axios";
import { UserType } from "../types/types";
import { instance, DefaultResponseTypes } from "./api";

export type GetUsersTypes = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export const usersAPI = {
  getUsers(
    currentPage: number,
    pageSize: number,
    term: string,
    friend: null | boolean = null
  ) {
    return instance
      .get<GetUsersTypes>(
        `users?page=${currentPage}&count=${pageSize}&term=${term}` +
          (friend === null ? "" : `&friend=${friend}`),
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        return response.data;
      });
  },
  unFollow(id: number) {
    return instance
      .delete<DefaultResponseTypes>(`follow/${id}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(id: number) {
    return instance
      .post<DefaultResponseTypes>(`follow/${id}`)
      .then((response) => {
        return response.data;
      });
  },
};
