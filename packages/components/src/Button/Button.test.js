import React from "react";
import { render } from "react-testing-library";
import { Button } from ".";

describe("Button", () => {
  it("renders", () => {
    const { getByText } = render(<Button>Test</Button>);
    getByText("Test");
  });
});
