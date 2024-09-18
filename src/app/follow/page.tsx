// /app/follow/page.tsx

import React from 'react';

import BackArrow from '@/components/BackArrow/BackArrow';
import SocialCard from '@/components/SocialCard/SocialCard';
import SubtitleComponent from '@/components/SubtitleComponent/SubtitleComponent';

import styles from '@/app/follow/page.module.css';

const FollowPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backArrow}>
                <BackArrow />
            </div>
            <div>
                <SubtitleComponent
                    text={['Follow us']}
                />
            </div>
            <div className={styles.socialContainer}>
                <SocialCard 
                    title="X"
                    link="https://x.com/thenookjournal" 
                    imageSrc="/social/twitter-x.svg"  
                    altText="X (Twitter)" 
                    description="Join us on X for the latest updates and conversations."
                />
                <SocialCard
                    title="LinkedIn" 
                    link="https://www.linkedin.com/company/thenookjournal" 
                    imageSrc="/social/linkedin.svg" 
                    altText="LinkedIn" 
                    description="Connect with us on LinkedIn for professional insights."
                />
                <SocialCard 
                    title="Medium"
                    link="https://medium.com/thenookjournal" 
                    imageSrc="/social/medium.svg" 
                    altText="Medium" 
                    description="Read our articles and stories on Medium."
                />
            </div>
        </div>
    );
};

export default FollowPage;
