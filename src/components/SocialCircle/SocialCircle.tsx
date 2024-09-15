import React from 'react';
import styles from '@/components/SocialCircle/SocialCircle.module.css';

interface SocialCircleProps {
    title: string
    link: string;
    imageSrc: string;
    altText: string;
}

const SocialCircle: React.FC<SocialCircleProps> = ({ title, link, imageSrc, altText }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.circle}>
            <img title={title} src={imageSrc} alt={altText} className={styles.image} />
        </a>
    );
};

export default SocialCircle;
