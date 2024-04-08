import React from "react";
import { posts } from "../data/posts";
import { useParams } from "react-router-dom";

export const Article = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};
