import React from "react";
import styled from "styled-components";

const Layout = styled.div``;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const StyledText = styled.p`
  display: flex;
  justify-content: center;
  height: 200px;
`;

const firstPage = () => {
  return (
    <Layout>
      <StyledH1>aのページって話し</StyledH1>
      <StyledText>styled-component導入完了です〜〜</StyledText>
    </Layout>
  );
};

export default firstPage;
