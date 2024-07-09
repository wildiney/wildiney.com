import { render, queryByAttribute } from "@testing-library/react";
import Analytics from "./index";

describe("Analytics component", () => {
  it("should be render on the page", () => {
    render(<Analytics />);
    const componentId = document.getElementById("googleTagManager");

    expect(componentId).toBeInTheDocument();
  });
});
