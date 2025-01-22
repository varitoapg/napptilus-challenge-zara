import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import QueryWrapper from "./QueryWrapper";
import { beforeEach } from "node:test";

describe("QueryWrapper", () => {
  beforeEach(cleanup);
  const testText = "Child Component";
  const loaderTestId = "loader";

  it("renders children when not loading and no error", () => {
    render(
      <QueryWrapper loading={false} error={null}>
        <div>{testText}</div>
      </QueryWrapper>
    );

    const childComponent = screen.getByText(testText);

    expect(childComponent).toBeInTheDocument();
  });

  it("renders Loader when loading is true", () => {
    render(
      <QueryWrapper loading={true} error={null}>
        <div>{testText}</div>
      </QueryWrapper>
    );

    const loader = screen.getByTestId(loaderTestId);

    expect(loader).toBeInTheDocument();
  });

  it("renders ErrorCard when error is present", () => {
    const errorMessage = "An error occurred";

    render(
      <QueryWrapper loading={false} error={errorMessage}>
        <div>{testText}</div>
      </QueryWrapper>
    );

    const errorCard = screen.getByText(errorMessage);

    expect(errorCard).toBeInTheDocument();
  });

  it("renders both Loader and ErrorCard when loading is true and error is present", () => {
    const errorMessage = "An error occurred";

    render(
      <QueryWrapper loading={true} error={errorMessage}>
        <div>{testText}</div>
      </QueryWrapper>
    );

    const errorCard = screen.getByText(errorMessage);
    const loader = screen.getByTestId(loaderTestId);

    expect(loader).toBeInTheDocument();
    expect(errorCard).toBeInTheDocument();
  });
});
