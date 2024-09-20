import React from 'react';

import CheckBox from '@/components/CheckBox/CheckBox';
import styles from '@/components/CheckBoxWithLabel/CheckBoxWithLabel.module.css';

interface CheckboxWithLabelProps {
    label: string;
    subscription: string;
    isChecked: boolean;
    onChange: (subscription: string, isChecked: boolean) => void;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ label, subscription, isChecked, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(subscription, e.target.checked);
    };

    return (
        <label className={styles.checkboxContainer}>
            <CheckBox
                isChecked={isChecked}
                onChange={handleChange}
            />
            <span className={styles.label}>{label}</span>
        </label>
    );
};

export default CheckboxWithLabel;
