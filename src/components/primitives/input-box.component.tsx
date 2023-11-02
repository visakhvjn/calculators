import { Input, SIZE, InputProps } from "baseui/input";
import {Block} from 'baseui/block'
import { FormControl } from 'baseui/form-control';

interface InputBoxProps extends InputProps {
    startEnhancer?: string;
    value: number | undefined;
    label: string;
}

export const InputBox: React.FC<InputBoxProps> = ({
    startEnhancer,
    value, onChange,
    label
}) => {
    return (
        <Block overrides={{
            Block: {
                style: () => ({
                marginRight: '1%',
                }),
            },
        }}>
            <FormControl label={label}>
                <Input
                    startEnhancer={startEnhancer}
                    value={value}
                    onChange={onChange}
                    clearOnEscape
                    clearable
                    size={SIZE.compact}
                />
            </FormControl>
        </Block>
    )
}