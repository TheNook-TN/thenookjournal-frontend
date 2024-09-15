import React from 'react';
import Image from 'next/image';

import styles from '@/components/Footer/Footer.module.css';
import logo from '../../../public/logo_blank.png'; 

const Footer = () => {
    return (
        <div className={styles.footer}>
            {/* <div className={styles.logoContainer}>
                <Image src={logo} alt="The Nook Journal Logo" width={50} height={50} className={styles.logo} />
            </div> */}
            <div className={styles.links}>
                <a href="/terms_of_service" className={styles.link}>Terms of service</a>
                <a href="/privacy_policy" className={styles.link}>Privacy Policy</a>
            </div>
        </div>
    );
};

export default Footer;
