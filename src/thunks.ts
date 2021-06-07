import { loadPosts, loadComments } from "./actions";

const backendUrl = "https://jsonplaceholder.typicode.com";

export const getPosts = () => async (dispatch: any) => {
  try {
    const response = await fetch(`${backendUrl}/posts`);
    const posts = await response.json();
    dispatch(loadPosts(posts));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const getComments = () => async (dispatch: any) => {
  try {
    const response = await fetch(`${backendUrl}/comments`);
    const comments = await response.json();
    dispatch(loadComments(comments));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text: string) => () => {
  alert(text);
};
