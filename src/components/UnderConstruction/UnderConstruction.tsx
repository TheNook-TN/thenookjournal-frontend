import React from 'react';
import styles from '@/components/UnderConstruction/UnderConstruction.module.css'
import BackArrow from '@/components/BackArrow/BackArrow';

const UnderConstruction = ({ message }: { message: string }) => {
    return (
        <>
            <BackArrow />
        
            <div className={styles.container}>
                <span className={styles.emoji} role="img" aria-label="Man working">👷</span>
                <p className="message">{message}</p>
            </div>
        </>
    );
};

export default UnderConstruction;
