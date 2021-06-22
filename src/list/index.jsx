import React from "react";
import Page from "../_internal/Page";
import Block from "../_internal/Block";
import List from "./List";
import ExampleSrc from "../_internal/assets/list.gif";
export default () => {
  return (
    <Page title="List rendering">
      <img alt="example" src={ExampleSrc} />
      <p>請找出這段程式碼有什麼問題，修改讓其能正常執行。</p>
      <p>
        <code>請在 src/list/List.jsx 作答</code>
      </p>
      <Block>
        <List />
      </Block>
    </Page>
  );
};
