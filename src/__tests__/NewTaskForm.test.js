import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import { CATEGORIES } from "../data";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(<NewTaskForm categories={CATEGORIES} onAddTask={onTaskFormSubmit} />);

  fireEvent.change(screen.getByLabelText("Details"), { target: { value: "Pass the tests" } });
  fireEvent.change(screen.getByLabelText("Category"), { target: { value: "Code" } });
  fireEvent.click(screen.getByText("Add task"));

  expect(onTaskFormSubmit).toHaveBeenCalledWith({ text: "Pass the tests", category: "Code" });
});
