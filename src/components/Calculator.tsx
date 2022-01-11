import React, { FC, useState} from "react"
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

const Calculator:FC = () => {
    const [calculation, setCalculation] = useState("")
    const [value, setValue] = useState(0)

    const updateCalculation = (val: string) => {
        setCalculation(`${calculation}${val}`)
    }

    const handleUndo = () => {
        const updatedCalculation = calculation.substring(0, calculation.length -1);
        setCalculation(updatedCalculation)
    }

    const handleClear = () => {
        setValue(0)
        setCalculation("")
    }

    const updateValue = () => {
        setValue(eval(calculation))
    }
 
    return (
        <Wrapper>
            <Screen value={value} calculation={calculation} />
            <Numbers>
                <Button value="" span2 label="clear" onClick={handleClear} />
                <Button value="" label="undo" onClick={handleUndo} />
                <Button value="/" onClick={updateCalculation}/>
                <Button value="7" onClick={updateCalculation}/> 
                <Button value="8" onClick={updateCalculation}/>
                <Button value="9" onClick={updateCalculation}/>
                <Button value="*" label="X" onClick={updateCalculation}/>
                <Button value="4" onClick={updateCalculation}/>
                <Button value="5" onClick={updateCalculation}/>
                <Button value="6" onClick={updateCalculation}/>
                <Button value="-"  onClick={updateCalculation}/>
                <Button value="1" onClick={updateCalculation}/>
                <Button value="2" onClick={updateCalculation}/>
                <Button value="3" onClick={updateCalculation}/>
                <Button value="+" onClick={updateCalculation}/>
                <Button value="0" span2 onClick={updateCalculation}/>
                <Button value="." onClick={updateCalculation}/>
                <Button value="=" onClick={updateValue}/>
            </Numbers>
        </Wrapper>
    )
}

export { Calculator }