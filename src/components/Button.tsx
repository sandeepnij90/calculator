import React, { FC } from "react";
import styled, { css } from "styled-components";

interface CalcButtonProps {
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
    label?: string
}

export const Button: FC<Props> = ({
    label,
    value,
    isZero
}) => {

    const renderText = () => {
        return label ? label : value
    }

    return (
        <CalcButton isZero={isZero}>
            {renderText()}
        </CalcButton>
    )
}