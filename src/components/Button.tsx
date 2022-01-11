import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface CalcButtonProps {
  onClick: (value: string) => void
  span2: boolean
}

const CalcButton = styled.button<CalcButtonProps>`
  width: 100%;
  height: 70px;
  color: #373d45;
  transition: 0.3s;
  background-color: #1795d433;
  border: 0;
  cursor: pointer;

  ${({ span2 }) =>
    span2 &&
    css`
      grid-column: 1 / span 2;
    `}

  &:hover {
    background-color: #1795d466;
  }

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    opacity: 0.6;
  }
`

interface Props {
  value: string
  span2?: boolean
  label?: string
  onClick: (value: string) => void
  disabled?: boolean
}

export const Button: FC<Props> = ({
  label,
  value,
  span2,
  onClick,
  disabled,
}) => {
  const renderText = () => {
    return label ? label : value
  }

  const handleClick = () => {
    onClick(value)
  }

  return (
    <CalcButton span2={span2} onClick={handleClick} disabled={disabled}>
      {renderText()}
    </CalcButton>
  )
}
