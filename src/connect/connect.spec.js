import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { StoreComponent } from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("Redux connect", () => {
  it("test-case-1", () => {
    const wrapper = mount(<StoreComponent />);
    const incBtn = wrapper.find("button").at(0);
    const decBtn = wrapper.find("button").at(1);
    const count = wrapper.find("span");
    let i = +count.text();
    incBtn.simulate("click");
    expect(count.text()).toBe(String(++i));
    incBtn.simulate("click");
    expect(count.text()).toBe(String(++i));
    decBtn.simulate("click");
    expect(count.text()).toBe(String(--i));
  });
});
