import { usersAPI } from "../api/api";
import usersReducer from "./users-reducer";

let state = {
  users: [
    {
      name: "Lonsdale007",
      id: 26975,
      uniqueUrlName: null,
      photos: {},
      status: null,
      followed: false,
    },
    {
      name: "Dukeen",
      id: 26974,
      uniqueUrlName: null,
      photos: {},
      status: null,
      followed: false,
    },
    {
      name: "KateZ",
      id: 26973,
      uniqueUrlName: null,
      photos: {},
      status: null,
      followed: false,
    },
    {
      name: "justas",
      id: 26972,
      uniqueUrlName: null,
      photos: {},
      status: null,
      followed: true,
    },
    {
      name: "AHTOHoo1",
      id: 26971,
      uniqueUrlName: null,
      photos: {},
      status: null,
      followed: false,
    },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

test("followed should change on true", () => {
  let action = { type: "UNFOLLOW", userId: 26971 };
  let newState = usersReducer(state, action);
  expect(newState.users[4].followed).toBe(true);
});
test("followed should change on false", () => {
  let action = { type: "FOLLOW", userId: 26972 };
  let newState = usersReducer(state, action);
  expect(newState.users[3].followed).toBe(false);
});
test("isFetching should be true", () => {
  let action = { type: "TOOGLE_IS_FETCHING", isFetching: true };
  let newState = usersReducer(state, action);
  expect(newState.isFetching).toBe(true);
});
test("CurrentPage should be correct", () => {
  let action = { type: "SET_CURRENT_PAGE", page: 120 };
  let newState = usersReducer(state, action);
  expect(newState.currentPage).toBe(120);
});
