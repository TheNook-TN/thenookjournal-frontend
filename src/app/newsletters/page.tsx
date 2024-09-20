import React from 'react';

import RoundedBox from '@/components/RoundedBox/RoundedBox';
import BackArrow from '@/components/BackArrow/BackArrow';

import styles from '@/app/newsletters/page.module.css';

const NewslettersPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backArrow}>
                <BackArrow />
            </div>
            <div className={styles.roundedBoxContainer}>
                <RoundedBox
                    emoji="💡"
                    title="Thougts (coming soon)"
                    description="Here we get intense, just thoughts, ideas, and opinions of a daily basis. Like trying to fix the world with your friend but in a 2-5 minute read. How that sounds?"
                    shortDescription="Here we get intense, just thoughts, ideas, and opinions of a daily basis. Fixing the world with your friend but in a 2-5 minute read."
                />
                <RoundedBox
                    emoji="🧠"
                    title="AI, Data Science & Machine Learning"
                    description="Tools and Resources everyday? You've got it. Daily Papers summarized? You've got it. Articles to keep learning? Quick news summarized and its link? You've got it. And of course a daily meme, because life is too short not to laugh."
                    shortDescription="A daily Meme, Tools, Resources, Summarized Papers, StepByStep Tutorials and Articles, and of course the latest"
                />
                <RoundedBox
                    emoji="🤖"
                    title="Robotics (coming soon)"
                    description="Tools and Resources everyday? You've got it. Daily Papers summarized? You've got it. Articles to keep learning? Quick news summarized and its link? You've got it. And of course a daily meme, because life is too short not to laugh."
                    shortDescription="A daily Meme, Tools, Resources, Summarized Papers, StepByStep Tutorials and Articles, and of course the latest"
                />
                <RoundedBox
                    emoji="🧑‍💻"
                    title="Software (coming soon)"
                    description="Tools and Resources everyday? You've got it. Daily Papers summarized? You've got it. Articles to keep learning? Quick news summarized and its link? You've got it. And of course a daily meme, because life is too short not to laugh."
                    shortDescription="A daily Meme, Tools, Resources, Summarized Papers, StepByStep Tutorials and Articles, and of course the latest"
                />
            </div>
        </div>
    );
};

export default NewslettersPage;