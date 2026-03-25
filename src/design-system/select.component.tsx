import { Select as AntSelect } from 'antd';
import type { FC } from 'react';
import type { SelectProps } from "antd";

export const Select: FC<SelectProps> = (props) => {

    return (
        <AntSelect {...props} />
    )
}
