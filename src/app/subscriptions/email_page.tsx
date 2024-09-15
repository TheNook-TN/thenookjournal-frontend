import React from 'react';

import BackArrow from '@/components/BackArrow/BackArrow';
import EmailForm from '@/components/EmailForm/EmailForm';
import AlertPopup from '@/components/AlertPopup/AlertPopup';
import SubtitleComponent from '@/components/SubtitleComponent/SubtitleComponent';

import styles from '@/app/subscriptions/page.module.css';

interface AskEmailPageProps {
    error: boolean;
    alertMessage: string;
    handleAlertClose: () => void;
}

const AskEmailPage: React.FC<AskEmailPageProps> = ({ 
    error, 
    alertMessage, 
    handleAlertClose, 
}) => {
    return (
            
        <div className={styles.container}>
            {error && <AlertPopup message={alertMessage} onClose={handleAlertClose} />}
            
            <div className={styles.backArrow}>
                <BackArrow />
            </div>
            <div>
                <SubtitleComponent 
                    text={['Manage your subscriptions', 'Please enter your email']}
                />
                <EmailForm />
            </div>
            
        </div>
    );
};

export default AskEmailPage;
