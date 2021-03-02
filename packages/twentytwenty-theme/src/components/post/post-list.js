import { usePostTypeInfiniteScroll } from "@frontity/hooks";
import { connect } from "frontity";
import React, { useEffect } from "react";
import Loading from "../loading";
import Post from "./post";

const PostList = ({ actions }) => {
  const { posts, isFetching, isError, fetchNext } = usePostTypeInfiniteScroll();

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  return (
    <div>
      {posts.map(({ key, link, isLast, Wrapper }) => (
        <Wrapper key={key}>
          <Post link={link} />
          {!isLast && <hr />}
        </Wrapper>
      ))}
      {isFetching && <Loading />}
      {isError && <button onClick={fetchNext}>Something failed - Retry</button>}
    </div>
  );
};

export default connect(PostList);
