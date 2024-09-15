import React from 'react';

import BackArrow from '@/components/BackArrow/BackArrow';
import AdvertiseForm from '@/components/AdvertiseForm/AdvertiseForm';
import SubtitleComponent from '@/components/SubtitleComponent/SubtitleComponent';

import styles from '@/app/advertise/page.module.css';

const AdvertisePage: React.FC = () => {
    return (
        <>
            <div className={styles.backArrow}>
                <BackArrow />
            </div>
            <div className={styles.container}>
                <h2 className={styles.title}>Advertise with Us</h2>
                <p className={styles.description}>
                    Fill out the form below and we will get back to you regarding advertising opportunities.
                </p>
                <AdvertiseForm />
            </div>
        </>
    );
};

export default AdvertisePage;
