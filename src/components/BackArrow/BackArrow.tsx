import React from 'react';
import Link from 'next/link';
import styles from '@/components/BackArrow/BackArrow.module.css'; 

const BackArrow = () => {
    return (
        <Link href="/" passHref>
            <img src="/icons/left-arrow.svg" alt="Back" className={styles.backArrow} />
        </Link>
    );
};

export default BackArrow;
