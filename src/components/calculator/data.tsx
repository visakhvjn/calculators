import { FixedDepositCalculator } from "../fixed deposit calculator/fixed-deposit-calculator.component";

export const allCalculators = [
    {
        id: 1,
        label: 'Investment',
        isExpanded: false,
        children: [
            { id: 11, label: 'Fixed Deposit', path: 'fixed-deposit', element: FixedDepositCalculator },
            { id: 12, label: 'Simple Interest', path: '', element: FixedDepositCalculator },
            { id: 12, label: 'EPF', path: '', element: FixedDepositCalculator }
        ]
    },
    {
        id: 2,
        label: 'Health',
        isExpanded: false,
        children: [
            { id: 21, label: 'BMI', path: '', element: FixedDepositCalculator },
        ]
    }
]