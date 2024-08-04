import { useState } from 'react';
import { TextField, Button, ButtonGroup } from '@mui/material';

export default function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('0');

    const handleNum1Input = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Input = (e) => {
        setNum2(e.target.value);
    };

    const handlebuttonClick = (op) => {
        calculateResult(op);
    }

    const disabledButton = !num1 || !num2;

    const calculateResult = (op) => {
        let a = parseFloat(num1);
        let b = parseFloat(num2);

        let res;
        switch (op) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                if (b === 0) {
                    setResult("Can't Divide by zero");
                    return;
                }
                res = a / b;
                break;
            default:
                return;
        }

        setResult(res.toString());
    };

    return (
        <div className="calculator">
            <h2>Simple Calculator</h2>
            <div>
                <TextField
                    id="num1"
                    value={num1}
                    label="Number 1"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleNum1Input}
                />
                <br />
                <br />
                <TextField
                    id="num2"
                    value={num2}
                    label="Number 2"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleNum2Input}
                />
                <br />
                <br />
                <ButtonGroup variant='outlined'>
                    <Button disabled={disabledButton} onClick={() => handlebuttonClick('+')}>+</Button>
                    <Button disabled={disabledButton} onClick={() => handlebuttonClick('-')}>-</Button>
                    <Button disabled={disabledButton} onClick={() => handlebuttonClick('*')}>*</Button>
                    <Button disabled={disabledButton} onClick={() => handlebuttonClick('/')}>/</Button>
                </ButtonGroup>
                <br />
                <br />
                <TextField
                    id="result"
                    label="Result"
                    value={result}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>
        </div>
    );
}
