import React from 'react';

import RoundedBox from '@/components/RoundedBox/RoundedBox';
import BackArrow from '@/components/BackArrow/BackArrow';
// import styles from './About.module.css';
import Link from 'next/link';

const AboutPage: React.FC = () => {
    return (
    <div>
      <BackArrow />
      <div>
        <RoundedBox title="Our Mission" description="Learn about our goals and what we strive to achieve." />
        <RoundedBox title="Our Team" description="Meet the people behind our success." />
        <RoundedBox title="Our Values" description="Discover the core values that drive our actions." />
        <RoundedBox title="Our History" description="Explore the journey of our growth and milestones." />
      </div>
    </div>
  );
};

export default AboutPage;
