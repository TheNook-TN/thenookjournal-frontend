"use client"; 

import React from 'react';
import styles from '@/components/TitleComponent/TitleComponent.module.css';


interface TitleComponentProps {
    text: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ text }) => {
    return (
        <h1 className={styles.title}>
            { text }
        </h1>
    );
}

export default TitleComponent;
