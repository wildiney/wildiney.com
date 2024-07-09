import { render, screen } from "@testing-library/react";
import { ButtonPortfolio } from "./index";

describe("Button Portfólio", () => {
  test("should create a button", () => {
    const { getByRole } = render(
      <ButtonPortfolio icon="youtube" site="youtube" link="yotube.com" />
    );

    expect(getByRole("link", { name: /youtube/i })).toBeInTheDocument();
  });
});
