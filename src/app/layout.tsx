import { ReactNode } from 'react';
import './globals.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
