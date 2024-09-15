"use client"; 

import styles from './ButtonComponent.module.css';

interface ButtonProps {
    code: string;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export default function ButtonComponent({ label, isActive, onClick }: ButtonProps) {
    return (
        <button
          className={isActive ? styles.activeButton : styles.button}
          onClick={onClick}
        >
          {label}
        </button>
    );
}
