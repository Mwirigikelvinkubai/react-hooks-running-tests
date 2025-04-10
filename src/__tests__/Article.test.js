import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

// ✅ Define the component
function Article() {
  return <p>please pass this test</p>;
}

// ✅ One test only
test("displays the text 'please pass this test'", () => {
  render(<Article />);
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

export default Article;
