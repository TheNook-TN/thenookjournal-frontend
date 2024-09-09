import React from 'react';
import Link from 'next/link';

interface NavItemProps {
    href: string;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
    return (
        <li>
            <Link href={href} passHref>
                {label}
            </Link>
        </li>
    );
};

export default NavItem;
