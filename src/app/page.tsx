"use client";

import { useState } from 'react';

import TitleComponent from '@/components/TitleComponent/TitleComponent';
import SubtitleComponent from '@/components/SubtitleComponent/SubtitleComponent';
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent';
import EmailSubscriptionForm from '@/components/EmailSubscriptionForm/EmailSubscriptionForm';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

import styles from './page.module.css';

export default function HomePage() {
    const [clickedButtons, setClickedButtons] = useState<string[]>([]);

    const buttons = ["AI, Data Science & Machine Learning 🧠"];

    const handleButtonClick = (button: string) => {
        if (clickedButtons.includes(button)) {
            setClickedButtons(clickedButtons.filter(item => item !== button));
        } else {
            setClickedButtons([...clickedButtons, button]);
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.titleSubtitleGroup}>
                <TitleComponent />
                <SubtitleComponent />
            </div>

            <div className={styles.buttons}>
                {buttons.map((button, index) => (
                    <ButtonComponent
                        key={index}
                        label={button}
                        isActive={clickedButtons.includes(button)}
                        onClick={() => handleButtonClick(button)}
                    />
                ))}
            </div>

            <EmailSubscriptionForm activeButtons={clickedButtons} />
            <div className={styles.navBarContainer}>
                <NavBar />
            </div>
            <Footer />
        </main>
    );
}

