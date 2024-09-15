"use client"; 

import { useState } from 'react';
import AlertPopup from '../AlertPopup/AlertPopup';
import styles from './EmailSubscriptionForm.module.css';

interface EmailSubscriptionFormProps {
    activeButtons: string[];
}

export default function EmailSubscriptionForm({ activeButtons  }: EmailSubscriptionFormProps) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const [email, setEmail] = useState<string>('');
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleSubmit = async () => {
        if (activeButtons.length === 0) {
            setShowAlert(true);
            return;
        }

        if (!email) {
            setShowAlert(true);
            setAlertMessage("Please enter an email address.");
            return;
        }

        try {
            const query = activeButtons.map(button => `subscriptions=${button}`).join('&'); 
            const response = await fetch(`${apiUrl}/subscriptions?email=${email}&${query}`, {
                method: 'POST',
            });
    
            if (!response.ok) {
                throw new Error('Failed to subscribe.');
            }
            setShowAlert(true);
            setAlertMessage("Successfully subscribed!");
        } catch (error) {
            setShowAlert(true);
            setAlertMessage(`You are already subscribe. If you want to make changes go to "subscriptions"`);
        }
    };

    return (
        <>
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
        </>
    );
}