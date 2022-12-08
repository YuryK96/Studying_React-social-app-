import React from "react";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ProfileStatus component", () => {
  it("status from props should be in state", () => {
    render(<ProfileStatuswithHooks status="lala" />);
    expect(screen.getByText("lala")).toBeInTheDocument();
  });
  it("after creation <span> should be displayed ", () => {
    render(<ProfileStatuswithHooks status="lala" />);
    expect(screen.getByRole("span")).toBeInTheDocument();
  });
  it("after creation <input> should't be displayed ", () => {
    render(<ProfileStatuswithHooks status="lala" />);
    expect(screen.queryByRole("textbox")).toBeNull();
  });
  it(" <input> should be displayed in edtiMode instead of <span>", () => {
    render(<ProfileStatuswithHooks status="lala" />);

    let status = screen.getByRole("span");
    fireEvent.doubleClick(status);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
