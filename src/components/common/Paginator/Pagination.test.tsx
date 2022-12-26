import { render } from "@testing-library/react";
import Paginator from "./Pagination";

describe("Paginator component tests", () => {
  test("pages count is 11 but should be showed only 10", () => {
    const { container } = render(
      <Paginator
        onPageChanged={() => {}}
        totalItemsCount={11}
        pageSize={1}
        portionSize={10}
      />
    );
    let spans: any = container.querySelectorAll("span");
    expect(spans.length).toBe(10);
  });
  test("if pages count is more then 10 button NEXT should be present", () => {
    const { container } = render(
      <Paginator
        onPageChanged={() => {}}
        totalItemsCount={11}
        pageSize={1}
        portionSize={10}
      />
    );
    let button: any = container.querySelector("button");
    expect(button.innerHTML).toBe("Next");
  });
});
