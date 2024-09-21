import React from "react";

import styles from '@/components/CheckBox/CheckBox.module.css';

interface CheckBoxProps {
    isChecked: boolean;
    isDeactivated: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked, isDeactivated, onChange }) => {
    return (
        <>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
                disabled={isDeactivated}
                className={styles.checkboxInput}
            />
            <span className={styles.switch}/>
        </>
    );
};

export default CheckBox;