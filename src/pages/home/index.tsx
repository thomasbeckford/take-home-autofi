import React, { useEffect, useState } from "react";
import { PostType, CommentType } from "../../interfaces";
import { Button, Collapse, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../actions";
import { getPosts, getComments } from "../../thunks";

import "./home.css";

const { TextArea } = Input;
const { Panel } = Collapse;

function Home() {
  const commentInitialState = {
    postId: 0,
    id: 0,
    name: "",
    email: "",
    body: "",
  };

  const [newComment, setNewComment] = useState<CommentType>(commentInitialState);

  const [showComments, setShowComments] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const getData = () => {
      dispatch(getPosts());
      dispatch(getComments());
    };

    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onFinish = () => {
    dispatch(createComment(newComment));
    setNewComment(commentInitialState);
    form.resetFields();
  };

  const handleChange = (e: any, post: PostType, comments: any) => {
    setNewComment({
      postId: post.id,
      id: comments.length + 1,
      name: e.target.name === "name" ? e.target.value : newComment.name,
      email: "test@test.com",
      body: e.target.name === "body" ? e.target.value : newComment.body,
    });
  };

  const dispatch = useDispatch();
  const posts: any = useSelector<any>((state) => state.posts);
  const comments: any = useSelector<any>((state) => state.comments);

  return (
    <div className='home__page-container'>
      <h1>Posts</h1>

      <Collapse accordion>
        {posts.map((post: PostType) => (
          <Panel header={post.title} key={post.id}>
            <div className='home__post-body'>{post.body}</div>
            <Button type='link' className='home__comments-toggle-button' onClick={() => setShowComments(!showComments)}>
              {!showComments ? "Show comments" : "Hide comments"}
            </Button>
            {showComments
              ? comments?.map(
                  (comment: CommentType) =>
                    comment.postId === post.id && (
                      <div key={comment.id} className='home__comment-container'>
                        <div className='home__comment-header'>
                          <div className='home__comment-name'>{comment.name}</div>
                          <p className='home__comment-email'>{comment.email}</p>
                        </div>
                        <div className='home__comment-body'>{comment.body}</div>
                      </div>
                    )
                )
              : null}
            <Form layout='vertical' form={form} name='posts' onFinish={onFinish}>
              <div className='home__form-control'>
                <Form.Item
                  style={{ marginBottom: 10 }}
                  label='Title'
                  name='name'
                  rules={[{ required: true, message: "Please write a title" }]}
                >
                  <Input
                    name='name'
                    value={newComment.postId === post.id ? newComment.name : ""}
                    type='text'
                    onChange={(e) => handleChange(e, post, comments)}
                    className='home__input'
                  />
                </Form.Item>
                <Form.Item
                  label='Comment'
                  style={{ marginBottom: 10 }}
                  name='body'
                  rules={[{ required: true, message: "Please write a comment" }]}
                >
                  <TextArea
                    className='home__text-area'
                    rows={3}
                    name='body'
                    id={`${post.id}-new-comment`}
                    value={newComment.postId === post.id ? newComment.body : ""}
                    onChange={(e) => handleChange(e, post, comments)}
                  />
                </Form.Item>
              </div>

              <Button type='primary' htmlType='submit' className='home__comment-button'>
                Add a comment
              </Button>
            </Form>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default Home;
