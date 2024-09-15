"use client"; 

import styles from './SubtitleComponent.module.css';

interface SubtitleComponentProps {
    text:string[];
}

const SubtitleComponent: React.FC<SubtitleComponentProps> = ({ text }) => {
    return (
        <h2 className={styles.subtitle}>
            {text.map((text, index) => (
                <span key={index}>
                    {text}
                    <br />
                </span>
            ))}
        </h2>
    );
}

export default SubtitleComponent;
