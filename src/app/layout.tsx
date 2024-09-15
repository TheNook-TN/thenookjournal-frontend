import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'TheNookJournal - Your Source for AI, Data Science, and Machine Learning Insights',
    description: 'Stay updated with the latest news, trends, and insights in AI, Data Science, Machine Learning, and more with TheNookJournal Newsletter.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Basic SEO */}
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favico.ico" type="image/x-icon" />
                
                {/* Open Graph (OG) tags for social sharing */}
                <meta property="og:title" content="TheNookJournal - Your Source for AI, Data Science, and Machine Learning Insights" />
                <meta property="og:description" content="Stay updated with the latest news, trends, and insights in AI, Data Science, Machine Learning, and more with TheNookJournal Newsletter." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://thenookjournal.com" />
                <meta property="og:image" content="https://thenookjournal.com/og-image.jpg" />

                {/* Twitter Card tags for better presentation on Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@TheNookJournal" />
                <meta name="twitter:title" content="TheNookJournal - Your Source for AI, Data Science, and Machine Learning Insights" />
                <meta name="twitter:description" content="Stay updated with the latest news, trends, and insights in AI, Data Science, Machine Learning, and more with TheNookJournal Newsletter." />
                <meta name="twitter:image" content="https://thenookjournal.com/og-image.jpg" />

                {/* Additional tags for better SEO */}
                <meta name="keywords" content="AI, Data Science, Machine Learning, Newsletter, TheNookJournal, Technology Trends, Artificial Intelligence, Data Analysis" />
                <meta name="author" content="TheNookJournal" />
                <link rel="canonical" href="https://thenookjournal.com" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}