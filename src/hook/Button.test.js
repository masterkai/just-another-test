import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";

Enzyme.configure({ adapter: new Adapter() });

const sleep = (timeout) =>
  new Promise((resolve) => setTimeout(() => resolve(), timeout));

describe("React hook", () => {
  test("testcase 1", async () => {
    const wrapper = mount(<Button />);
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    await sleep(1050);
    expect(wrapper.text()).toBe("4");
  });
});
