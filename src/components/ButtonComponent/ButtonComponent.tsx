"use client";

import styles from './ButtonComponent.module.css';

interface ButtonProps {
    code: string;
    label: string;
    isActive: boolean;
    isDeactivated: boolean;
    onClick: () => void;
}

export default function ButtonComponent({ label, isActive, isDeactivated, onClick }: ButtonProps) {
    return (
        <button
            className={
                isDeactivated ? styles.deactivatedButton 
                : isActive ? styles.activeButton 
                : styles.button
            }
            onClick={!isDeactivated ? onClick : undefined} 
            disabled={isDeactivated} 
        >
            {label}
        </button>
    );
}

