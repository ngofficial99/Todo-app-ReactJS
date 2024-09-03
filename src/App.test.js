import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Todo App", () => {

  test("renders input field and add button", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);
    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });


  test("adds a new todo to the list", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);

    fireEvent.change(inputElement, { target: { value: "Learn React" } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText(/learn react/i);
    expect(todoItem).toBeInTheDocument();
  });


  test("deletes a todo from the list", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);


    fireEvent.change(inputElement, { target: { value: "Learn React" } });
    fireEvent.click(addButton);


    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);

    const todoItem = screen.queryByText(/learn react/i);
    expect(todoItem).not.toBeInTheDocument();
  });


  test("clears all todos", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);


    fireEvent.change(inputElement, { target: { value: "Learn React" } });
    fireEvent.click(addButton);
    fireEvent.change(inputElement, { target: { value: "Write Tests" } });
    fireEvent.click(addButton);


    const clearButton = screen.getByText(/clear all/i);
    fireEvent.click(clearButton);

    const todoItems = screen.queryAllByRole("listitem");
    expect(todoItems.length).toBe(0);
  });


  test('"Clear All" button visibility', () => {
    render(<App />);
    const clearButton = screen.queryByText(/clear all/i);
    expect(clearButton).not.toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByText(/add todo/i);


    fireEvent.change(inputElement, { target: { value: "Learn React" } });
    fireEvent.click(addButton);

    const visibleClearButton = screen.getByText(/clear all/i);
    expect(visibleClearButton).toBeInTheDocument();
  });
});
