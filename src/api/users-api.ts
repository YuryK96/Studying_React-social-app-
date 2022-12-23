import axios, { AxiosResponse } from "axios";
import { UserType } from "../types/types";
import { instance, DefaultResponseTypes } from "./api";

type GetUsersTypes = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<GetUsersTypes>(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
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
