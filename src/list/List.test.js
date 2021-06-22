import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import List from "./List";

Enzyme.configure({ adapter: new Adapter() });

describe("List rendering", () => {
  test("testcase 1", () => {
    const wrapper = mount(<List />);
    wrapper.find("#add").first().simulate("click");
    wrapper.find("#add").first().simulate("click");
    wrapper.find("#add").first().simulate("click");
    const inputs = wrapper.find("li > input");
    inputs.at(0).instance().value = 0;
    inputs.at(1).instance().value = 1;
    inputs.at(2).instance().value = 2;
    wrapper.find("li").at(0).find("button").simulate("click");

    expect(wrapper.find("li > input").at(0).instance().value).toBe("1");
  });
});
