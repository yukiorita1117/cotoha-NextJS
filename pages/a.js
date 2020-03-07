import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  padding: 10px;
`;

const firstPage = () => {
  return (
    <>
      <StyledH1>aのページって話し</StyledH1>
      <div>styled-component導入完了です〜〜</div>
    </>
  );
};

export default firstPage;
