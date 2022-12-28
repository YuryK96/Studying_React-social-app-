import { DefaultResponseTypes, ResultCodesEnum } from "../api/api";
import { GetUsersTypes, usersAPI } from "../api/users-api";
import {
  actions,
  requestUsers,
  toggleUserFollow,
  toggleUserUnFollow,
} from "./users-reducer";
jest.mock("../api/users-api");

const responseData: DefaultResponseTypes = {
  data: {},
  resultCode: ResultCodesEnum.Success,
  messages: [],
};
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;
const dispatchMock = jest.fn();
const getStateMock = jest.fn();
test("success follow thunk ", async () => {
  usersAPIMock.unFollow.mockReturnValue(Promise.resolve(responseData));

  const thunk = toggleUserFollow(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.toggleIsFollowing(true, 1)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollow(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.toggleIsFollowing(false, 1)
  );
});
test("success unfollow thunk ", async () => {
  usersAPIMock.follow.mockReturnValue(Promise.resolve(responseData));

  const thunk = toggleUserUnFollow(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.toggleIsFollowing(true, 1)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.toggleIsFollowing(false, 1)
  );
});

const usersResponse: GetUsersTypes = {
  error: null,
  items: [
    {
      name: "Petya",
      id: 0,
      uniqueUrlName: null,
      followed: false,
      photos: {
        large: null,
        small: null,
      },
      status: "i am Oleg",
    },
    {
      name: "Petya",
      id: 1,
      uniqueUrlName: null,
      followed: false,
      photos: {
        large: null,
        small: null,
      },
      status: "i am Oleg",
    },
  ],
  totalCount: 200,
};
test("success requestsUsers thunk", async () => {
  usersAPIMock.getUsers.mockReturnValue(Promise.resolve(usersResponse));

  const thunk = requestUsers(1, 1, { term: "", friend: null });
  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(6);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.toggleIsFetching(true)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setCurrentPage(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.setFilter({ term: "", friend: null })
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    4,
    actions.toggleIsFetching(false)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    5,
    actions.setUsers(usersResponse.items)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(
    6,
    actions.setTotalUserCount(usersResponse.totalCount)
  );
});
