import { UserType } from "../types/types";
import { InitialStateType } from "./users-reducer";
import usersReducer, { actions } from "./users-reducer";

let state: InitialStateType;

beforeEach(
  () =>
    (state = {
      users: [
        {
          name: "Lonsdale007",
          id: 0,
          uniqueUrlName: null,
          photos: {},
          status: null,
          followed: false,
        },
        {
          name: "Dukeen",
          id: 1,
          uniqueUrlName: null,
          photos: {},
          status: null,
          followed: false,
        },
        {
          name: "KateZ",
          id: 2,
          uniqueUrlName: null,
          photos: {},
          status: null,
          followed: false,
        },
        {
          name: "justas",
          id: 3,
          uniqueUrlName: null,
          photos: {},
          status: null,
          followed: true,
        },
        {
          name: "AHTOHoo1",
          id: 4,
          uniqueUrlName: null,
          photos: {},
          status: null,
          followed: false,
        },
      ] as Array<UserType>,
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
      filter: {
        term: "",
        friend: false,
      },
      isFetching: false,
      followingInProgress: [],
    })
);

test("followed should change on true", () => {
  let newState = usersReducer(state, actions.follow(0));
  expect(newState.users[0].followed).toBeTruthy();
  expect(newState.users[1].followed).toBeFalsy();
});
test("followed should change on false", () => {
  let newState = usersReducer(state, actions.unfollow(3));
  expect(newState.users[3].followed).toBeFalsy();
  expect(newState.users[2].followed).toBeFalsy();
});
test("isFetching should be true", () => {
  let action = {
    type: "SN/users/TOOGLE_IS_FETCHING",
    isFetching: true,
  } as const;
  let newState = usersReducer(state, action);
  expect(newState.isFetching).toBe(true);
});
test("CurrentPage should be correct", () => {
  let action = { type: "SN/users/SET_CURRENT_PAGE", page: 120 } as const;
  let newState = usersReducer(state, action);
  expect(newState.currentPage).toBe(120);
});
