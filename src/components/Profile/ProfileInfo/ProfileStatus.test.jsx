import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatuswithHooks status="lala" />);
    const instance = component.getInstance();
    expect(instance.statusState).toBe("lala");
  });
  test("after creation <span> should be displayed ", () => {
    const component = create(<ProfileStatuswithHooks status="lala" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).toBe(1);
  });
  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatuswithHooks status="lala" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.innerText).toBe("lala");
  });
});
