import { useState } from 'react';

import styles from '@/components/CheckboxWithLabel/CheckboxWithLabel.module.css';

interface CheckboxProps {
    label: string;
    subscription: string;
    onChange: (subscription: string, isChecked: boolean) => void;
}

const CheckboxComponent = ({ label, subscription, onChange }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        onChange(subscription, e.target.checked);
    };

    return (
        <label className={styles.checkboxContainer}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                className={styles.checkboxInput}
            />
            <span className={styles.switch}></span>
            <span className={styles.label}>{label}</span>
        </label>
    );
};

export default CheckboxComponent;
