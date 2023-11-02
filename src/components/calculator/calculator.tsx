import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Block} from 'baseui/block'
import { Input } from "baseui/input";
import React, { useEffect, useState } from 'react';
import { TreeView, TreeNodeData, toggleIsExpanded } from "baseui/tree-view";
import { allCalculators } from './data';

export function Calculators() {
    const getLabel = (label: string, path: string) => () => {
        return (
          <Link to={path}>
              {label}
          </Link>
        );
      };

    const [calculatorTypes, setCalculatorTypes] = useState<TreeNodeData[]>([]);

    const loadCalculators = () => {
        const types = allCalculators.map<TreeNodeData>((calculators) => (
            {
                id: calculators.id,
                label: calculators.label,
                isExpanded: calculators.isExpanded,
                children: calculators.children.map((calculator) => (
                    { id: calculator.id, label: getLabel(calculator.label, calculator.path)}
                ))
            }
        ));

        setCalculatorTypes(types);
    }

    useEffect(() => {
        loadCalculators();
    }, [])

    const [value, setValue] = React.useState("");

    return (
        <BrowserRouter>
            <Block style={{ display: 'flex' }}>
                <Block style={{ flex: '1', padding: '2%' }}>
                    <Block>
                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Search"
                            clearOnEscape
                        />
                    </Block>
                    <Block style={{ marginTop: '5%'}}>
                        <TreeView
                            data={calculatorTypes}
                            indentGuides
                            onToggle={(node) => setCalculatorTypes((prevData) => toggleIsExpanded(prevData, node))}
                        />
                    </Block>
                </Block>
                <Block style={{ flex: '4', paddingLeft: '2%', paddingRight: '2%' }}>
                    <Routes>
                        {allCalculators.map((calculators, index) => (
                            calculators.children?.map((calculator) => (
                                <Route key={index} path={calculator.path} element={<calculator.element />} />
                            ))
                        
                        ))}
                    </Routes>
                </Block>
            </Block>
        </BrowserRouter>
    )
};