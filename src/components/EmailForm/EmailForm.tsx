import React from 'react';
import { useState } from 'react';

import AlertPopup from '@/components/AlertPopup/AlertPopup';

import styles from '@/components/EmailForm/EmailForm.module.css';


const EmailForm: React.FC = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const [email, setEmail] = useState<string>('');
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);
    
    const handleSubmit = async () => {
        
        if (!email) {
            setShowAlert(true);
            setAlertMessage("Please enter an email address.");
            return;
        }

        try {
            const response = await fetch(apiUrl + `/subscriptions?email=${email}`, {
                method: 'GET',
            });

            if (!response.ok) {
                setShowAlert(true)
                setAlertMessage('Failed to read.');
            };
        } catch (error) {
            setShowAlert(true)
            setAlertMessage(`Sorry, an error has occured`);
        }
    };

    return (
        <div className={styles.container}>
            {showAlert && <AlertPopup message={alertMessage} onClose={() => setShowAlert(false)} />}

            <div className={styles.emailSection}>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className={styles.emailInput} 
                />
                <button className={styles.sendButton} onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default EmailForm;
