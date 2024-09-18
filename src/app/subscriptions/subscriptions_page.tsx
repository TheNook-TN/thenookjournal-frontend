"use client";

import React, { useState, useEffect } from 'react';

import AskEmailPage from '@/app/subscriptions/email_page';
import ManageSubscriptionsPage from '@/app/subscriptions/manage_page';

interface SubscriptionsPageProps {
  storedEmail: string | null;
}

const SubscriptionsPage: React.FC<SubscriptionsPageProps> = ({ storedEmail }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const [email, setEmail] = useState<string | null>(storedEmail);
    const [subscriptions, setSubscriptions] = useState<string[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState('');

    const fetchSubscriptions = async (email: string) => {
        try {
        const response = await fetch(apiUrl + `/subscriptions?email=${email}`);
            if (response.status === 404) {
                setError(true);
                setAlertMessage('User not found or does not exist');
                setEmail(null);
                return;
            }
            const data = await response.json();
            setSubscriptions(data.subscriptions);
            document.cookie = `thenookjournal_email=${email}`;
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
            initialSubscriptions={subscriptions}
        />
    );
};

export default SubscriptionsPage;