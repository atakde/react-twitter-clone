import { render, screen } from "@testing-library/react";
import reactDom from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  reactDom.render(<App />, div);
});

it("renders Latest Tweets text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Latest Tweets/i);
  expect(linkElement).toBeInTheDocument();
});
