import React from "react";

import styles from '@/components/CheckBox/CheckBox.module.css';

interface CheckBoxProps {
    isChecked:boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox:React.FC<CheckBoxProps> = ({ isChecked, onChange }) => {
    return (
        <>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                className={styles.checkboxInput}
            />
            <span className={styles.switch}></span>
        </>
    );
}

export default CheckBox;