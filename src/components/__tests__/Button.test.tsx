import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { Button } from "../Button"

test("Should render value", () => {
    render(<Button value="1" />)
    expect(screen.getByRole("button")).toHaveTextContent("1")
})

test("Should render label instead of value", () => {
        render(<Button value="1" label="new label" />)
        expect(screen.getByRole("button")).toHaveTextContent("new label")


})