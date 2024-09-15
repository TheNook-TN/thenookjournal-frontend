import React from 'react';
import { useState } from 'react';

import AlertPopup from '@/components/AlertPopup/AlertPopup';

import styles from '@/components/EmailForm/EmailForm.module.css';


const EmailForm: React.FC = () => {
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
            const response = await fetch(`https://api.thenookjournal.com/subscriptions?email=${email}`, {
                method: 'POST',
            });

            if (!response.ok) {
                setShowAlert(true)
                setAlertMessage('Failed to read.');
            }
;
        } catch (error) {
            setShowAlert(true)
            setAlertMessage(`Error:` + {error});
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
