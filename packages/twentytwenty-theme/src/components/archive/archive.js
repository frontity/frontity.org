import { useArchiveInfiniteScroll } from "@frontity/hooks";
import { connect, styled } from "frontity";
import React from "react";
import Loading from "../loading";
import ArchivePage from "./archive-page";
import Button from "../styles/button";

const Archive = ({ state }) => {
  const {
    pages,
    isFetching,
    isLimit,
    isError,
    fetchNext,
  } = useArchiveInfiniteScroll({ limit: 3 });

  const { primary } = state.theme.colors;

  return (
    <>
      {pages.map(({ key, link, isLast, Wrapper }) => (
        <Wrapper key={key}>
          <ArchivePage link={link} />
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
    </>
  );
};

export default connect(Archive);

const ButtonContainer = styled.div`
  display: block;
  text-align: center;
  margin: 80px auto;
`;
