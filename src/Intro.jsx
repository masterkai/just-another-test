import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Doc = styled.div`
  padding: 1rem;
`;

export default () => (
  <Doc>
    <h1>F2E Test</h1>
    <h2>Part I 上機考</h2>
    <div>
      請至少選 3 題實作
      <br />
      please implement at least 3 questions.
      <ul>
        <li>
          <Link to="/bind">Function bind</Link>
        </li>
        <li>
          <Link to="/flatten">FlattenDeep</Link>
        </li>
        <li>
          <Link to="/promise">Promise.all</Link>
        </li>
        <li>
          <Link to="/connect">Redux connect</Link>
        </li>
        <li>
          <Link to="/hook">React hook</Link>
        </li>
        <li>
          <Link to="/list">List rendering</Link>
        </li>
      </ul>
    </div>
    <h2> Part II</h2>
    <p>
      請在 <code>readme.md</code> 內作答
    </p>
    <ul>
      <li>
        請簡述最近參與最酷炫的專案
        <br />
        Please briefly describe what’s the coolest project that you’ve recently
        worked on.
      </li>
      <li>
        請簡述為何想成為一位前端工程師
        <br />
        Please briefly describe why you want to be a frontend engineer.
      </li>
      <li>
        請列出最近學到的一項前端技能或知識
        <br />
        Please list what frontend skill or knowledge that you recently learned.
      </li>
    </ul>
  </Doc>
);
