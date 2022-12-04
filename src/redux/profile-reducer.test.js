import profileReducer, { deletePost, onAddPost } from "./profile-reducer";

let state = {
  myPostData: [
    { value: "Hi my name is Petya", countLikes: "10", id: 1 },
    { value: "Hi my name is Wasya", countLikes: "11", id: 2 },
    { value: "Hi my name is Roma", countLikes: "1", id: 3 },
    { value: "Hi my name is Yury", countLikes: "8", id: 4 },
    { value: "Hi my name is Nastya", countLikes: "15", id: 5 },
  ],
};

test("lenght of posts should be incremented ", () => {
  let action = onAddPost("new Post");
  let newState = profileReducer(state, action);
  expect(newState.myPostData.length).toBe(6);
});

test("message of new post should be correct", () => {
  let action = onAddPost("new Post");
  let newState = profileReducer(state, action);
  expect(newState.myPostData[5].value).toBe("new Post");
});

test("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.myPostData.length).toBe(4);
});
test("after deleting length shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.myPostData.length).toBe(5);
});
