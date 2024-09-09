// sitemap.ts
import { SitemapStream, streamToPromise } from 'sitemap';
import { NextApiRequest, NextApiResponse } from 'next';

const sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const smStream = new SitemapStream({
            hostname: 'https://thenookjournal.com',
        });

        // List of pages
        const pages = [
            { url: '/', changefreq: 'daily', priority: 1.0 },
            { url: '/about', changefreq: 'monthly', priority: 0.8 },
            { url: '/subscriptions', changefreq: 'weekly', priority: 0.9 },
            { url: '/follow', changefreq: 'weekly', priority: 0.6 },
            { url: '/archive', changefreq: 'monthly', priority: 0.5 },
            { url: '/privacy_policy', changefreq: 'yearly', priority: 0.3 }
        ];

        // Create each URL row
        pages.forEach(page => smStream.write(page));
        smStream.end();

        // XML sitemap string
        const sitemapOutput = (await streamToPromise(smStream)).toString();

        // Set response header and write XML sitemap
        res.setHeader('Content-Type', 'application/xml');
        res.write(sitemapOutput);
        res.end();
    }
    catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
            res.status(500).send(e.message);
        } else {
            console.log('An unexpected error occurred');
            res.status(500).send('An unexpected error occurred');
        }
    }
};

export default sitemap;
