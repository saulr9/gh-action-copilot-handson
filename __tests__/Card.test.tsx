import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Card from "../components/card/Card";

describe("Card Component", () => {
  it("renders the title", () => {
    const { getByText } = render(
      <Card title="Test Title" amount={100} icon={<span>Icon</span>} />
    );
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it("renders the amount", () => {
    const { getByText } = render(
      <Card title="Test Title" amount={100} icon={<span>Icon</span>} />
    );
    expect(getByText("100")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    const { getByText } = render(
      <Card title="Test Title" amount={100} icon={<span>Icon</span>} />
    );
    expect(getByText("Icon")).toBeInTheDocument();
  });

  it("renders the amount as a string", () => {
    const { getByText } = render(
      <Card title="Test Title" amount="One Hundred" icon={<span>Icon</span>} />
    );
    expect(getByText("One Hundred")).toBeInTheDocument();
  });
});
