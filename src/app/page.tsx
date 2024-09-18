"use client";

import { useState } from 'react';

import TitleComponent from '@/components/TitleComponent/TitleComponent';
import SubtitleComponent from '@/components/SubtitleComponent/SubtitleComponent';
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent';
import EmailSubscriptionForm from '@/components/EmailSubscriptionForm/EmailSubscriptionForm';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

import styles from '@/app/page.module.css';

export default function HomePage() {
    const buttons = [
        { label: "AI, Data Science & Machine Learning 🧠", code: "ai" },
        { label: "Robotics & Automation 🤖 (coming soon)", code: "rb"},
        { label: "Software Development 🧑‍💻 (coming soon)", code: "sf"},
        { label: "Thoughts 💡 (coming soon)", code: "th"}  
    ];

    const [clickedButtonCodes, setClickedButtonCodes] = useState<string[]>([]);

    const handleButtonClick = (code: string) => {
        if (clickedButtonCodes.includes(code)) {
            setClickedButtonCodes(clickedButtonCodes.filter(item => item !== code));
        } else {
            setClickedButtonCodes([...clickedButtonCodes, code]);
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.navBarContainer}>
                <NavBar />
            </div>
            <div className={styles.titleSubtitleContainer}>
                <TitleComponent 
                    text='thenookjournal.com'
                />
                <SubtitleComponent 
                    text={['This is your Nook', 'This is your Journal']}
                />
            </div>
            <div className={styles.buttonsContainer}>
                {buttons.map((button, index) => (
                    <ButtonComponent
                        key={index}
                        label={button.label}
                        isActive={clickedButtonCodes.includes(button.code)}
                        onClick={() => handleButtonClick(button.code)}
                        code={button.code}
                    />
                ))}
            </div>
            <div className={styles.emailFormContainer}>
                <EmailSubscriptionForm 
                    activeButtons={clickedButtonCodes} 
                />
            </div>
            <Footer />
        </main>
    );
}

