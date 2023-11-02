import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FixedDepositCalculator } from '../fixed deposit calculator/fixed-deposit-calculator.component';
import {Block} from 'baseui/block'
import { Input } from "baseui/input";
import React from 'react';

export function Calculators() {

    const calculators = [
        { name: 'Fixed Deposit', path: '/calculator1', element: FixedDepositCalculator },
      ];

    const [value, setValue] = React.useState("");

    return (
        <BrowserRouter>
            <Block style={{ display: 'flex' }}>
                <Block style={{ flex: '1', padding: '2%', backgroundColor: 'grey' }}>
                    <Input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Search"
                        clearOnEscape
                    />
                    <ul>
                        {calculators.map((calculator, index) => (
                        <li key={index}>
                            <Link to={calculator.path}>{calculator.name}</Link>
                        </li>
                        ))}
                    </ul>
                </Block>
                <Block style={{ flex: '5', paddingLeft: '2%', paddingRight: '2%' }}>
                    <Routes>
                        {calculators.map((calculator, index) => (
                            <Route key={index} path={calculator.path} element={<calculator.element />} />
                        ))}
                    </Routes>
                </Block>
            </Block>
        </BrowserRouter>
    )
};