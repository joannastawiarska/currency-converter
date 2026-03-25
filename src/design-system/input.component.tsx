import { Input as AntInput, type InputProps } from 'antd';
import type { FC } from 'react';

export const Input: FC<InputProps> = (props) => {
    return (
        <AntInput {...props} />
    )
}
