import React from 'react';
import Link from 'next/link';
import styles from './BackArrow.module.css'; // Ensure you have corresponding CSS file

const BackArrow = () => {
  return (
    <Link href="/" passHref>
      <img src="/icons/left-arrow.svg" alt="Back" className={styles.backArrow} />
    </Link>
  );
};

export default BackArrow;
