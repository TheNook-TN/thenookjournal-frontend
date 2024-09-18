
import React from 'react';
import SocialCircle from '@/components/SocialCircle/SocialCircle';
import styles from '@/components/SocialCard/SocialCard.module.css';

interface SocialCardProps {
    title: string;
    link: string;
    imageSrc: string;
    altText: string;
    description?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ title, link, imageSrc, altText, description }) => {
    return (
        <div className={styles.card}>
            <SocialCircle 
                title={title} 
                link={link} 
                imageSrc={imageSrc} 
                altText={altText} 
            />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                {description && <p className={styles.description}>{description}</p>}
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Visit {title}
                </a>
            </div>
        </div>
    );
};

export default SocialCard;
