import React from 'react';

import BackArrow from '@/components/BackArrow/BackArrow';
import SocialCircle from '@/components/SocialCircle/SocialCircle';
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
                <SocialCircle 
                    title="X"
                    link="https://twitter.com/yourprofile" 
                    imageSrc="/social/twitter-x.svg"  
                    altText="X (Twitter)" 
                />
                <SocialCircle
                    title="Linkedin" 
                    link="https://www.linkedin.com/in/yourprofile" 
                    imageSrc="/social/linkedin.svg" 
                    altText="LinkedIn" 
                />
                <SocialCircle 
                    title="Medium"
                    link="https://medium.com/@yourprofile" 
                    imageSrc="/social/medium.svg" 
                    altText="Medium" 
                />
            </div>
            
        </div>
    );
};

export default FollowPage;
