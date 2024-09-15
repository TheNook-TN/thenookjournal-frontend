import React from 'react';
import styles from '@/components/RoundedBox/RoundedBox.module.css'; 

interface RoundedBoxProps {
    emoji?: string
    title: string;
    description: string;
    shortDescription?: string; 
}

const RoundedBox: React.FC<RoundedBoxProps> = ({ emoji, title, description, shortDescription }) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    console.log(isMobile)
    return (
        <div className={styles.box}>
            {emoji && <div className={styles.emoji}>{emoji}</div>}
            <h2>{title}</h2>
            <p>{isMobile && shortDescription ? shortDescription : description}</p>
        </div>
    );
};

export default RoundedBox;
