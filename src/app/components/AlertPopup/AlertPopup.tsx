"use client"; 

import styles from './AlertPopup.module.css';

interface AlertPopupProps {
    message: string;
    onClose: () => void;
}

export default function AlertPopup({ message, onClose }: AlertPopupProps) {
    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}
