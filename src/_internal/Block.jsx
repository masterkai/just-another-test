import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.5rem;
  background: #f2f2f2;
  border-radius: 3px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 10px;
  color: #666;
`;

export default function Block({ children }) {
  return (
    <Wrapper>
      <Title>Example</Title>
      <div>{children}</div>
    </Wrapper>
  );
}
