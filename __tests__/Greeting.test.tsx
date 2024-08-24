import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Greeting from "../components/greeting/Greeting";

describe("Greeting Component", () => {
  test("renders the correct greeting message", () => {
    render(<Greeting name="John" />);
    expect(
      screen.getByText("Hello John, Welcome back to Online Banking!")
    ).toBeInTheDocument();
  });

  test("renders the correct greeting message with a different name", () => {
    render(<Greeting name="Jane" />);
    expect(
      screen.getByText("Hello Jane, Welcome back to Online Banking!")
    ).toBeInTheDocument();
  });
});
