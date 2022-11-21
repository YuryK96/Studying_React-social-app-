import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "72e23854-f5e3-4835-a7c4-abe54c7e9e9c",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
  unFollow(id) {
    return instance.delete(`follow/${id}`);
  },
  follow(id) {
    return instance.post(`follow/${id}`);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};
