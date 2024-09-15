"use client"; 

import { useState } from 'react';
import AlertPopup from '../AlertPopup/AlertPopup';
import styles from './EmailSubscriptionForm.module.css';

interface EmailSubscriptionFormProps {
    activeButtons: string[];
}

export default function EmailSubscriptionForm({ activeButtons  }: EmailSubscriptionFormProps) {
    const [email, setEmail] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleSubmit = async () => {
        if (activeButtons.length === 0) {
            setShowAlert(true);
            return;
        }

        if (!email) {
            alert("Please enter an email address.");
            return;
        }

        try {
            const query = activeButtons.map(button => `list=${button}`).join('&');
            const response = await fetch(`https://api.thenookjournal.com/subscriptions?email=${email}&${query}`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe.');
            }

            alert("Successfully subscribed!");
        } catch (error) {
        alert(`Error:`);
        }
    };

    return (
        <>
            {showAlert && <AlertPopup message="Choose the newsletter you want to read" onClose={() => setShowAlert(false)} />}

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