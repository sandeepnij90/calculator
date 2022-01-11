import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import { Button } from "../Button"

test("Should render value", () => {
    const func = jest.fn()
    render(<Button value="1" onClick={func} />)
    expect(screen.getByRole("button")).toHaveTextContent("1")
})

test("Should render label instead of value", () => {
        const func = jest.fn()
        render(<Button value="1" label="new label" onClick={func} />)
        expect(screen.getByRole("button")).toHaveTextContent("new label")
})

test("Should handle onClick callback", () => {
    const func = jest.fn()
    render(<Button value="1" onClick={func} />)
    fireEvent.click(screen.getByText("1"))
    expect(func).toBeCalledWith("1")
})
