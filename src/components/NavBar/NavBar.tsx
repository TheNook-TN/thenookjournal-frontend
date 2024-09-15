import React from 'react';
import NavItem from '@/components/NavItem/NavItem';
import styles from '@/components/NavBar/NavBar.module.css';

const NavBar = () => {
    return (
        <nav>
            <ul className={styles.navList}>
                <NavItem href="/about" label="About" />
                <span className={styles.separator}>|</span>

                <NavItem href="/subscriptions" label="Subscriptions" />
                <span className={styles.separator}>|</span>

                <NavItem href="/archive" label="Archive" />
                <span className={styles.separator}>|</span>

                <NavItem href="/advertise" label="Advertise" />
                <span className={styles.separator}>|</span>

                <NavItem href="/follow" label="Follow" />
            </ul>
        </nav>
    );
};

export default NavBar;
