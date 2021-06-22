import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 1rem;
`;

export default ({ children, title }) => (
  <Wrapper>
    <Link to="/">上一頁</Link>
    <h1>{title}</h1>
    <div>{children}</div>
  </Wrapper>
);
