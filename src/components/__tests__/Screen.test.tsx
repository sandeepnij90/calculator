import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Screen } from '../Screen'

test('Screen should display calculation', () => {
  render(<Screen calculation="2*2" value={4} />)
  expect(screen.getByText('2*2')).toBeInTheDocument()
})

test('Screen should display value', () => {
  render(<Screen calculation="2*2" value={4} />)
  expect(screen.getByText('4')).toBeInTheDocument()
})
