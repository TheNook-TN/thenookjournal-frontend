import React from 'react';

import CheckBox from '@/components/CheckBox/CheckBox';
import styles from '@/components/CheckBoxWithLabel/CheckBoxWithLabel.module.css';

interface CheckboxWithLabelProps {
    label: string;
    subscription: string;
    isChecked: boolean;
    isDeactivated: boolean;
    onChange: (subscription: string, isChecked: boolean) => void;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
    label,
    subscription,
    isChecked,
    isDeactivated,
    onChange,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(subscription, e.target.checked);
    };

    return (
        <label className={styles.checkboxContainer}>
            <span className={styles.label}>{label}</span>
            <CheckBox
                isChecked={isChecked}
                isDeactivated={isDeactivated}
                onChange={handleChange}
            />
        </label>
    );
};

export default CheckboxWithLabel;
