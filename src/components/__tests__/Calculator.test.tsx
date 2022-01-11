import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import { Calculator } from "../Calculator"

test("Should have default value of 0", () => {
    render(<Calculator />)
    expect(screen.getAllByText("0")).toHaveLength(2)
})

test("Should update screen on button click", () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText("2"));
    expect(screen.getAllByText("2")).toHaveLength(2)
})

test("Should carry out math operations and update value", () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getAllByText("4")).toHaveLength(2)
})

test("Should reset calculations and value on clear button press", () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getAllByText("4")).toHaveLength(2)
    fireEvent.click(screen.getByText("clear"));
    expect(screen.getAllByText("0")).toHaveLength(2)
})

test("Should clear last character when undo is pressed", () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    expect(screen.getAllByText("23")).toHaveLength(1)
    fireEvent.click(screen.getByText("undo"));
    expect(screen.queryByText("23")).not.toBeInTheDocument()
})