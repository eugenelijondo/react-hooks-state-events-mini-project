import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  for (const category of CATEGORIES) {
    expect(screen.queryByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  const categoryButton = screen.queryByText("Code");
  fireEvent.click(categoryButton);
  expect(categoryButton).toHaveClass("selected");
});
