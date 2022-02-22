import React from "react";
import { useParams } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContextProvider";

import { Loader } from "../common/Loader";
import { Error } from "../common/Error";
import { NoData } from "../common/NoData";
import { PostCard } from "./PostCard";

export const PostList = (props) => {
  const { state, loadPosts } = React.useContext(GlobalContext);

  const { postData, loading, error } = state;
  let params = useParams();
  React.useEffect(() => {
    loadPosts(params.topicId);
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (postData.postList.length <= 0) return <NoData />;

  return (
    <div className="row">
      <h1>{postData.topic.title}</h1>

      {postData.postList.map((post) => (
        <PostCard key={post.pid} post={post} />
      ))}
    </div>
  );
};
