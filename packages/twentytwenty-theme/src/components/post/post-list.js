import { usePostTypeInfiniteScroll } from "@frontity/hooks";
import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import Loading from "../loading";
import Post from "./post";
import Button from "../styles/button";

const PostList = ({ state, actions }) => {
  const {
    posts,
    isFetching,
    isLimit,
    isError,
    fetchNext,
  } = usePostTypeInfiniteScroll({ limit: 3 });

  const { primary } = state.theme.colors;

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
      {(isLimit || isError) && (
        <ButtonContainer>
          <Button bg={primary} onClick={fetchNext}>
            {isError ? "Something failed - Retry" : "Load More"}
          </Button>
        </ButtonContainer>
      )}
    </div>
  );
};

export default connect(PostList);

const ButtonContainer = styled.div`
  display: block;
  text-align: center;
  margin: 80px auto;
`;
