import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Calculator } from '../Calculator'
import { handlePercent } from '../handlePercent'

jest.mock('../handlePercent')
const mockHandlePercent = jest.mocked(handlePercent)

test('Should have default value of 0', () => {
  render(<Calculator />)
  expect(screen.getAllByText('0')).toHaveLength(2)
})

test('Should update screen on button click', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('2'))
  expect(screen.getAllByText('2')).toHaveLength(2)
})

test('Should carry out math operations and update value', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('1'))
  fireEvent.click(screen.getByText('+'))
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('='))
  expect(screen.getAllByText('3')).toHaveLength(2)
})

test('Should reset calculations and value on clear button press', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('+'))
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('='))
  expect(screen.getAllByText('4')).toHaveLength(2)
  fireEvent.click(screen.getByText('clear'))
  expect(screen.getAllByText('0')).toHaveLength(2)
})

test('Should clear last character when undo is pressed', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('3'))
  expect(screen.getAllByText('23')).toHaveLength(1)
  fireEvent.click(screen.getByText('undo'))
  expect(screen.queryByText('23')).not.toBeInTheDocument()
})

test('Should disabled operations initially', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('+'))
  expect(screen.getAllByText('+')).toHaveLength(1)
  expect(screen.getByText('+')).toBeDisabled()
})

test('Should disable operations if last input was an operation', () => {
  render(<Calculator />)
  fireEvent.click(screen.getByText('1'))
  fireEvent.click(screen.getByText('+'))
  expect(screen.getByText('+')).toBeDisabled()
})

test('Should convert percentage into decimal', () => {
  mockHandlePercent.mockReturnValue(0.5)
  render(<Calculator />)
  fireEvent.click(screen.getByText('5', { selector: 'button' }))
  fireEvent.click(screen.getByText('0', { selector: 'button' }))
  fireEvent.click(screen.getByText('%', { selector: 'button' }))
  expect(mockHandlePercent).toBeCalledWith('50')
  expect(screen.getByText('0.5')).toBeInTheDocument()
})
