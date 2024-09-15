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
    const buttons = ["AI, Data Science & Machine Learning 🧠"];

    const [clickedButtons, setClickedButtons] = useState<string[]>([]);

    const handleButtonClick = (button: string) => {
        if (clickedButtons.includes(button)) {
            setClickedButtons(clickedButtons.filter(item => item !== button));
        } else {
            setClickedButtons([...clickedButtons, button]);
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
                        label={button}
                        isActive={clickedButtons.includes(button)}
                        onClick={() => handleButtonClick(button)}
                    />
                ))}
            </div>
            <div className={styles.emailFormContainer}>
                <EmailSubscriptionForm 
                    activeButtons={clickedButtons} 
                />
            </div>
            <Footer />
        </main>
    );
}

