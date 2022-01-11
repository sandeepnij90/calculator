import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { Screen } from "./Screen"

const Wrapper = styled.div`
    height: 500px;
    max-width: 320px;
    padding: 20px;
    border-radius: 8px;
    border: 2px solid #373d45;
    margin: auto;
    box-sizing: border-box;
`

const Numbers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 8px;
`

const Calculator = () => {
    return (
        <Wrapper>
            <Screen value={0} calculation="2*2" />
            <Numbers>
                <Button value="7"/>
                <Button value="8"/>
                <Button value="9"/>
                <Button value="/"/>
                <Button value="4"/>
                <Button value="5"/>
                <Button value="6"/>
                <Button value="*" label="X"/>
                <Button value="1"/>
                <Button value="2"/>
                <Button value="3"/>
                <Button value="-"/>
                <Button value="0" isZero/>
                <Button value="."/>
                <Button value="="/>
            </Numbers>
        </Wrapper>


    )
}

export { Calculator }