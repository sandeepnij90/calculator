import React, { FC } from "react";
import styled, { css } from "styled-components";

interface CalcButtonProps {
    onClick: (value: string) => void;
    isZero: boolean;
}

const CalcButton = styled.button<CalcButtonProps>`
    width: 100%;
    height: 70px;
    color: #373d45;
    transition: 0.3s;
    ${({ isZero}) => isZero && css`
        grid-column: 1 / span 2;
    `}

    &:active {
        transform: scale(0.9);
    }
`

interface Props {
    value: string;
    isZero?: boolean;
    label?: string;
    onClick: (value: string) => void;
}

export const Button: FC<Props> = ({
    label,
    value,
    isZero,
    onClick
}) => {

    const renderText = () => {
        return label ? label : value
    }

    const handleClick = () => {
        onClick(value)
    }

    return (
        <CalcButton isZero={isZero} onClick={handleClick}>
            {renderText()}
        </CalcButton>
    )
}