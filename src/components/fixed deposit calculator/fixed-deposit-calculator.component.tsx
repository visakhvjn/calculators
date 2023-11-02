import {Block} from 'baseui/block'
import { useEffect, useState } from 'react';
import { InputBox } from '../primitives/input-box.component';
import { Table } from "baseui/table";

export type YearData = {
    year: number;
    principal: number;
    amount: number;
    returns: number;
}

export function FixedDepositCalculator() {

    const [totalInvestment, setTotalInvestment] = useState<number>(5000);
    const [rateOfInterest, setRateOfInterest] = useState<number>(6);
    const [timePeriod, setTimePeriod] = useState<number>(1);
    const [amount, setAmount] = useState<number>(0);
    const [yearly, setYearly] = useState<YearData[]>([]);

    const calculate = () => {
        const amount = Math.ceil(totalInvestment * Math.pow((1 + (rateOfInterest / 100)), timePeriod));
        setAmount(amount);
    }

    const calculateYearly = () => {
        const yearlyValues: YearData[] = [];
        let principal = totalInvestment;
        let amount = 0;

        for (let i  = 0; i < timePeriod; i++) {
            amount = Math.ceil(principal * (1 + (rateOfInterest / 100)));

            yearlyValues.push({
                year: i + 1,
                principal,
                returns: amount - principal,
                amount: amount,
            });

            principal = amount;
        }

        setYearly(yearlyValues);
    }

    useEffect(() => {
        calculate();
        calculateYearly();
    }, [totalInvestment, rateOfInterest, timePeriod]);

    return (
        <Block>
            <Block>
                <h1>Fixed Deposit</h1>
                <p>A fixed deposit is a type of term investment offered by several banks and NBFCs. These deposits typically offer a higher rate of interest, subject to certain terms and conditions. The amount you deposit in these deposits is locked for a predetermined period which can vary between 7 days and 10 years.</p>
                <p>An FD calculator can be used to determine the interest and the amount that it will accrue at the time of maturity. It is a simple-to-use tool available on the Groww website.</p>
            </Block>
            <Block style={{display: 'flex'}}>
                <InputBox
                    startEnhancer='₹'
                    value={totalInvestment}
                    onChange={(e) => {
                        setTotalInvestment(Number(e.target.value));
                    }}
                    label='Total Investment'
                />
                <InputBox
                    startEnhancer='%'
                    value={rateOfInterest}
                    onChange={(e) => {
                        setRateOfInterest(Number(e.target.value));
                    }}
                    label='Rate of Interest (p.a)'
                />
                <InputBox
                    value={timePeriod}
                    onChange={(e) => {
                        setTimePeriod(Number(e.target.value));
                    }}
                    label='Time Period (in years)'
                />
            </Block>
            <Block style={{ marginBottom: '2%'}}>
                Invested Amount = ₹ {totalInvestment} <br />
                Estimated Returns = ₹ {amount - totalInvestment} <br />
                Total Value = ₹ {amount}
            </Block>
            {yearly.length && <Block>
                <Table
                    columns={["Year", "Investment", "Returns", "Amount"]}
                    data={yearly.map((year) => [year.year, year.principal, year.returns, year.amount])}
                />
            </Block>}
        </Block>

    );
}
