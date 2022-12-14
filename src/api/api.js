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
    console.warn("Obsolete method. Please profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
  updateProfile(data, userId) {
    return instance.put("profile", {
      userId: userId,
      AboutMe: data.aboutMe,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      fullName: data.name,
      contacts: {
        github: data.github,
        vk: data.vk,
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
        website: data.website,
        youtube: data.youtube,
        mainLink: data.mainLink,
      },
    });
  },
  setPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put("profile/photo/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe, captcha) {
    return instance.post("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete("auth/login");
  },
};
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get("security/get-captcha-url");
  },
};
