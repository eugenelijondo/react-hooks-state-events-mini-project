import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task text and category", () => {
  render(<Task text="Buy rice" category="Food" />);
  expect(screen.getByText("Buy rice")).toBeInTheDocument();
  expect(screen.getByText("Food")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  const onDeleteTask = jest.fn();
  render(<Task text="Buy rice" category="Food" onDeleteTask={onDeleteTask} />);
  fireEvent.click(screen.getByText("X"));
  expect(onDeleteTask).toHaveBeenCalled();
});
