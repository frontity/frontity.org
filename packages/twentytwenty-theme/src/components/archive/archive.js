import { useArchiveInfiniteScroll } from "@frontity/hooks";
import { connect } from "frontity";
import React from "react";
import Loading from "../loading";
import ArchivePage from "./archive-page";

const Archive = () => {
  const { pages, isFetching, isError, fetchNext } = useArchiveInfiniteScroll();

  return (
    <>
      {pages.map(({ key, link, isLast, Wrapper }) => (
        <Wrapper key={key}>
          <ArchivePage link={link} />
          {!isLast && <hr />}
        </Wrapper>
      ))}
      {isFetching && <Loading />}
      {isError && <button onClick={fetchNext}>Something failed - Retry</button>}
    </>
  );
};

export default connect(Archive);
