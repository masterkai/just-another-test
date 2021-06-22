import React from "react";
import Page from "../_internal/Page";
export default () => {
  return (
    <Page title="FlattenDeep">
      <p>
        實作 flatten 函數
        <br />
        參數可以傳入任意維度的陣列，扁平化後回傳一維陣列
        <br />
        <code>flatten([1, [2, [3, [4]]], 5])</code>
        <br />
        <code>{"=> [1, 2, 3, 4, 5]"}</code>
      </p>
      <code>請在 src/flatten/question.js 作答</code>
    </Page>
  );
};
