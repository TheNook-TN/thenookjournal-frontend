"use client";

import { useState, useEffect, useRef } from 'react';

import TitleComponent from '@/components/TitleComponent/TitleComponent';
import SubtitleComponent from '@/components/SubtitleComponent/SubtitleComponent';
import ButtonComponent from '@/components/ButtonComponent/ButtonComponent';
import EmailSubscriptionForm from '@/components/EmailSubscriptionForm/EmailSubscriptionForm';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';

import styles from '@/app/page.module.css';

export default function HomePage() {
    const buttons = [
        { label: "AI, Data Science & Machine Learning 🧠", code: "ai", isDeactivated: false },
        { label: "Robotics & Automation 🤖 (coming soon)", code: "rb", isDeactivated: true },
        { label: "Software Development 🧑‍💻 (coming soon)", code: "sf", isDeactivated: true },
        { label: "Thoughts 💡 (coming soon)", code: "th", isDeactivated: true }
    ];

    const emailInputRef = useRef<HTMLInputElement>(null);

    const [clickedButtonCodes, setClickedButtonCodes] = useState<string[]>([]);

    const handleButtonClick = (code: string) => {
        if (clickedButtonCodes.includes(code)) {
            setClickedButtonCodes(clickedButtonCodes.filter(item => item !== code));
        } else {
            setClickedButtonCodes([...clickedButtonCodes, code]);
        }
    };

    useEffect(() => {
        if (emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }, []);

    return (
        <main className={styles.container}>
            <div className={styles.navBarContainer}>
                <NavBar />
            </div>
            <div className={styles.titleSubtitleContainer}>
                <TitleComponent text="thenookjournal.com" />
                <SubtitleComponent text={["This is your Nook", "This is your Journal"]} />
            </div>
            <div className={styles.buttonsContainer}>
                {buttons.map((button, index) => (
                    <ButtonComponent
                        key={index}
                        label={button.label}
                        isActive={clickedButtonCodes.includes(button.code)}
                        isDeactivated={button.isDeactivated}
                        onClick={() => handleButtonClick(button.code)}
                        code={button.code}
                    />
                ))}
            </div>
            <div className={styles.emailFormContainer}>
                <EmailSubscriptionForm 
                    activeButtons={clickedButtonCodes}
                    inputRef={emailInputRef} 
                />
            </div>
            <div>
                <p className={styles.newsletterText}>
                    Join to our newsletters by selecting the topics you want to be daily updated
                </p>
            </div>
            <Footer />
        </main>
    );
}

