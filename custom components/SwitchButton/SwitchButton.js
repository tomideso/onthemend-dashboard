import React from 'react'
import classes from './SwitchButton.module.css'


const SwitchButton = ({ name, defaultChecked, handleChange }) => {

    return (
        <label>
            <input onInput={handleChange} defaultChecked={defaultChecked} type="checkbox" name={name} className={[classes.iosSwitch, classes.blue, classes.tinyswitch].join(" ")} />
            <div><div></div></div>
        </label>
    )

}

export default SwitchButton;