import React from 'react';
import styles from './RoundedBox.module.css'; 

interface RoundedBoxProps {
    title: string;
    description: string;
}

const RoundedBox: React.FC<RoundedBoxProps> = ({ title, description }) => {
    return (
        <div className={styles.box}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default RoundedBox;
