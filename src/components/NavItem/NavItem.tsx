import React from 'react';
import Link from 'next/link';

import styles from '@/components/NavItem/NavItem.module.css';

interface NavItemProps {
    href: string;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
    return (
        <li>
            <Link className={styles.navItem} href={href} passHref>
                {label}
            </Link>
        </li>
    );
};

export default NavItem;
