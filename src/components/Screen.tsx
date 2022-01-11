import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    text-align: center;
    background-color: #1795d4;
    padding: 16px;
    box-sizing: border-box;
    margin-bottom: 8px;
`

const baseFont = `
    font-family: Arial, Helvetica, sans-serif;
    color: #FFFFFF;
    margin: 0;
`

const Calculation = styled.h4`
    ${baseFont}
    font-size: 14px;
    font-weight: 300;
    margin-top: 8px;
`

const Value = styled.h3`
    ${baseFont}
    font-size: 32px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFFFFF;
    margin: 0;
`

interface Props {
    calculation: string,
    value: number,
}

export const Screen:FC <Props>= ({
    calculation,
    value = 0
}) => {
    return (
        <Wrapper>
            <Value>{value}</Value>
            <Calculation>{calculation}</Calculation>
        </Wrapper>
    )
}