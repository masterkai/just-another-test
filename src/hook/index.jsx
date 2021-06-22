import React from "react";
import Page from "../_internal/Page";
import Button from "./Button";
import Block from "../_internal/Block";
export default () => {
  return (
    <Page title="React hook">
      <p>
        我想實現一個功能，在非同步的情境下記錄按鈕被連點了幾次，但為何行不通呢？
      </p>
      <p>
        <code>請在 src/hook/Button.jsx 作答</code>
      </p>
      <Block>
        <Button />
      </Block>
    </Page>
  );
};
