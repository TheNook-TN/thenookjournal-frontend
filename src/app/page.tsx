"use client"; 

import { useState } from 'react';

import TitleComponent from './components/TitleComponent/TitleComponent';
import SubtitleComponent from './components/SubtitleComponent/SubtitleComponent';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import EmailSubscriptionForm from './components/EmailSubscriptionForm/EmailSubscriptionForm';

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
        <div className={styles.container}>
            <TitleComponent />
            <SubtitleComponent />

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
        </div>
    );
}

