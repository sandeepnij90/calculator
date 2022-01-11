import React from "react"
import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'

import { App } from './App'

test('renders', () => {
    render(<App />)
    expect(screen.getByRole("heading")).toHaveTextContent("Hello world")
})