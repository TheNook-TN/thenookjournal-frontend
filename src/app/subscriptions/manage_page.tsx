import React from 'react';

import BackArrow from '@/components/BackArrow/BackArrow';
import CustomButton from '@/components/CustomButton/CustomButtom';
import CheckboxWithLabel from '@/components/CheckBoxWithLabel/CheckBoxWithLabel';

import styles from '@/app/subscriptions/page.module.css';

interface ManageSubscriptionsPageProps {
    email: string;
    subscriptions: string[];
    handleCheckboxChange: (subscription: string, isChecked: boolean) => void;
    handleUpdateSubscription: () => void;
    handleDeleteSubscription: () => void;
}

const ManageSubscriptionsPage: React.FC<ManageSubscriptionsPageProps> = ({ 
    email, 
    subscriptions, 
    handleCheckboxChange, 
    handleUpdateSubscription, 
    handleDeleteSubscription 
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.backArrow}>
                <BackArrow />
            </div>

            <div className={styles.checkboxContainer}>
                <CheckboxWithLabel
                    label="AI, Data Science & Machine Learning 🧠"
                    subscription="ai"
                    onChange={handleCheckboxChange}
                />
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
    );
};

export default ManageSubscriptionsPage;