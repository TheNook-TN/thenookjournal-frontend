"use client";

import React, { useState, useEffect } from 'react';

import AskEmailPage from '@/app/subscriptions/email_page';
import ManageSubscriptionsPage from '@/app/subscriptions/manage_page';

import { handleUpdateSubscription } from '@/utils/subscriptions/subscriptionUpdateHandler';
import { handleDeleteSubscription } from '@/utils/subscriptions/subscriptionsDeleteHandler';

interface SubscriptionsPageProps {
  storedEmail: string | null;
}

const SubscriptionsPage: React.FC<SubscriptionsPageProps> = ({ storedEmail }) => {
    const [email, setEmail] = useState<string | null>(storedEmail);
    const [subscriptions, setSubscriptions] = useState<string[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState('');

    const fetchSubscriptions = async (userEmail: string) => {
        try {
        const response = await fetch(`https://thenookjournal.com/subscriptions?email=${userEmail}`);
            if (response.status === 404) {
                setError(true);
                setAlertMessage('User not found or does not exist');
                setEmail(null);
                return;
            }
            const data = await response.json();
            setSubscriptions(data.subscriptions);
        } catch (err) {
            setAlertMessage('Error fetching subscriptions: ' + err);
            setError(true);
        }
    };

    useEffect(() => {
        if (!email) {
            const urlParams = new URLSearchParams(window.location.search);
            const queryEmail = urlParams.get('email');

            if (queryEmail) {
                setEmail(queryEmail);
                fetchSubscriptions(queryEmail);
            }
        } else {
            fetchSubscriptions(email);
        }
    }, [email]);

    const handleEmailSubmit = (submittedEmail: string) => {
        setEmail(submittedEmail);
        fetchSubscriptions(submittedEmail);

        document.cookie = `thenookjournal_email=${submittedEmail}`; 
    };

    const handleCheckboxChange = (subscription: string, isChecked: boolean) => {
        setSubscriptions(prev =>
            isChecked 
            ? [...prev, subscription] 
            : prev.filter(sub => sub !== subscription)
        );
    };

    const handleAlertClose = () => {
        setError(false);
    };

    if (!email) {
        return (
            <AskEmailPage
                error={error}
                alertMessage={alertMessage}
                handleAlertClose={handleAlertClose}
                handleEmailSubmit={handleEmailSubmit}
            />
        );
    }

    return (
        <ManageSubscriptionsPage
            email={email}
            subscriptions={subscriptions}
            handleCheckboxChange={handleCheckboxChange}
            handleUpdateSubscription={() => handleUpdateSubscription(email, subscriptions)}
            handleDeleteSubscription={() => handleDeleteSubscription(email)}
        />
    );
};

export default SubscriptionsPage;