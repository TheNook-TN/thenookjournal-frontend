import React from 'react';

import RoundedBox from '@/components/RoundedBox/RoundedBox';
import BackArrow from '@/components/BackArrow/BackArrow';

import { newsletterTopics } from '@/data/newsletterTopics';

import styles from '@/app/newsletters/page.module.css';

const NewslettersPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backArrow}>
                <BackArrow />
            </div>
            <div className={styles.roundedBoxContainer}>
                {newsletterTopics.map((topic, index) => (
                    <RoundedBox
                        key={index}
                        emoji={topic.emoji}
                        title={topic.title}
                        description={topic.description}
                        shortDescription={topic.shortDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewslettersPage;