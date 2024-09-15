"use client";

import React, { useState } from 'react';

import AlertPopup from '@/components/AlertPopup/AlertPopup';

import styles from '@/components/AdvertiseForm/AdvertiseForm.module.css';

const AdvertiseForm: React.FC = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [formData, setFormData] = useState({
        email: '',
        companyName: '',
        targetAudience: '',
        advertiseTime: '',
        comments: '',
    });
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const mapAdvertiseTimeToKey = (advertiseTime: string) => {
        switch (advertiseTime) {
            case 'this_week':
                return '0';
            case 'this_month':
                return '1';
            case '1_3_months':
                return '2';
            case '3_6_months':
                return '3';
            case 'more_than_6_months':
                return '4';
            default:
                return null;
        }
    };

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const advertiseTimeKey = mapAdvertiseTimeToKey(formData.advertiseTime);

        const payload = {
            email: formData.email,
            company_name: formData.companyName,
            target_audience: formData.targetAudience,
            advertise_time: advertiseTimeKey,
            comments: formData.comments,
        };

        try {
            const response = await fetch(apiUrl + '/advertise', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Form submitted successfully:', payload);
                setAlertMessage('Done!');
            } else {
                console.error('Failed to submit form');
                setAlertMessage('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setAlertMessage('Error submitting the form. Please try again.');
        }

        setShowAlert(true);

        setFormData({
            email: '',
            companyName: '',
            targetAudience: '',
            advertiseTime: '',
            comments: '',
        });
    };

    return (
        <>
            {showAlert && <AlertPopup message={alertMessage} onClose={handleAlertClose} />}
            
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="companyName" className={styles.label}>Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="targetAudience" className={styles.label}>Target Audience</label>
                    <input
                        type="text"
                        id="targetAudience"
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="advertiseTime" className={styles.label}>When do you want to advertise?</label>
                    <select
                        id="advertiseTime"
                        name="advertiseTime"
                        value={formData.advertiseTime}
                        onChange={handleChange}
                        className={styles.select}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="this_week">This week</option>
                        <option value="this_month">This month</option>
                        <option value="1_3_months">1-3 months</option>
                        <option value="3_6_months">More than 3 months</option>
                        <option value="more_than_6_months">More than 6 months</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="comments" className={styles.label}>Comments (optional)</label>
                    <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        className={styles.textarea}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </>
    );
};

export default AdvertiseForm;
