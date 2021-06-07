import { PostType, CommentType } from "./interfaces";

export const LOAD_POSTS = "LOAD_POSTS";
export const loadPosts = (posts: [PostType]) => ({
  type: LOAD_POSTS,
  payload: posts,
});

export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const loadComments = (comments: [CommentType]) => ({
  type: LOAD_COMMENTS,
  payload: comments,
});

export const CREATE_COMMENT = "CREATE_COMMENT";
export const createComment = (comment: CommentType) => ({
  type: CREATE_COMMENT,
  payload: comment,
});
