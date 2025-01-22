import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import QueryWrapper from "./QueryWrapper";
import { beforeEach } from "node:test";

describe("QueryWrapper", () => {
  beforeEach(cleanup);

  it("renders children when not loading and no error", () => {
    render(
      <QueryWrapper loading={false} error={null}>
        <div>Child Component</div>
      </QueryWrapper>
    );

    const childComponent = screen.getByText("Child Component");

    expect(childComponent).toBeInTheDocument();
  });

  it("renders Loader when loading is true", () => {
    render(
      <QueryWrapper loading={true} error={null}>
        <div>Child Component</div>
      </QueryWrapper>
    );

    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });

  it("renders ErrorCard when error is present", () => {
    const errorMessage = "An error occurred";

    render(
      <QueryWrapper loading={false} error={errorMessage}>
        <div>Child Component</div>
      </QueryWrapper>
    );

    const errorCard = screen.getByText(errorMessage);

    expect(errorCard).toBeInTheDocument();
  });

  it("renders both Loader and ErrorCard when loading is true and error is present", () => {
    const errorMessage = "An error occurred";

    render(
      <QueryWrapper loading={true} error={errorMessage}>
        <div>Child Component</div>
      </QueryWrapper>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
