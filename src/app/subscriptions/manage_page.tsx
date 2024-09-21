import React from 'react';
import Link from 'next/link';

import { useState, useEffect } from 'react';

import BackArrow from '@/components/BackArrow/BackArrow';
import AlertPopup from '@/components/AlertPopup/AlertPopup';
import CustomButton from '@/components/CustomButton/CustomButtom';
import CheckboxWithLabel from '@/components/CheckBoxWithLabel/CheckBoxWithLabel';

import { newsletterTopics } from '@/data/newsletterTopics';

import styles from '@/app/subscriptions/page.module.css';

interface ManageSubscriptionsPageProps {
    email: string;
    initialSubscriptions: string[];
}

const ManageSubscriptionsPage: React.FC<ManageSubscriptionsPageProps> = ({ 
    email, 
    initialSubscriptions = []
}) => {
    
    const [redirect, setRedirect] = useState<boolean>(false);
    const [subscriptions, setSubscriptions] = useState<string[]>(initialSubscriptions);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    useEffect(() => {
        setSubscriptions(initialSubscriptions);
    }, [initialSubscriptions]);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const handleCheckboxChange = (subscription: string, isChecked: boolean) => {
        setSubscriptions(prev =>
            isChecked 
            ? [...prev, subscription] 
            : prev.filter(sub => sub !== subscription)
        );
    };
    
    const handleUpdateSubscription = async () => {
        try {
            const queryParams = new URLSearchParams();
            queryParams.append('email', email);
            subscriptions.forEach(sub => queryParams.append('subscriptions', sub));

            const response = await fetch(`${apiUrl}/subscriptions?${queryParams.toString()}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                setShowAlert(true)
                setAlertMessage('Failed to update subscriptions');
            }

            setShowAlert(true);
            setAlertMessage('Your subscriptions have been updated');

        } catch (error) {
            setShowAlert(true)
            setAlertMessage('Error updating your subscriptions');
        }
    };

    const handleDeleteSubscription = async () => {
        try {
            const response = await fetch(`${apiUrl}/subscriptions?email=${email}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                setShowAlert(true)
                setAlertMessage('Failed to delete subscriptions');
            }

            setShowAlert(true)
            setAlertMessage('Deleted subscriptions successfully');
            setSubscriptions([]);

            document.cookie = "thenookjournal_email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            setRedirect(true);
            

        } catch (error) {
            setShowAlert(true)
            setAlertMessage('Error deleting your subscription');
        }
    };

    return (
        <>
            {showAlert && <AlertPopup message={alertMessage} onClose={() => setShowAlert(false)} />}
            {redirect && <Link href="/" passHref />}
        
            <div className={styles.container}>
                
                <div className={styles.backArrow}>
                    <BackArrow />
                </div>

                <div className={styles.checkboxContainer}>
                    {newsletterTopics.map((topic) => (
                        <CheckboxWithLabel
                            key={topic.code}
                            label={topic.label}
                            subscription={topic.code}
                            isChecked={subscriptions.includes(topic.code)}
                            isDeactivated={topic.isDeactivated}
                            onChange={handleCheckboxChange}
                        />
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <CustomButton
                        color='#1c86ee'
                        buttonText='Update'
                        onClick={handleUpdateSubscription}
                    />
                    <CustomButton
                        color='#f03c3c'
                        buttonText='Delete'
                        onClick={handleDeleteSubscription}
                    />
                </div>
            </div>
        </>
    );
};

export default ManageSubscriptionsPage;
