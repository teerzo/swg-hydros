// Packages
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
// Common components
import Label from 'components/common/label';
// Styles
import './input.scss';

export default function CmpInput({ value, onChange, ...props }) {

    const [_value, setValue] = useState(value);

    useEffect(() => {
        console.log('props.value', value);
        setValue(_value);
    },[value])

    function handleChange(e) {
        console.log('inputChange', _value, e.target.value);
        setValue(e.target.value);

        if( onChange ) { onChange(e)}
    }


    const componentClasses = cx(
        'component-input',
    )

    return (
        <input className={componentClasses} value={_value} onChange={handleChange} />
    );
}