// robots.ts
import { NextApiRequest, NextApiResponse } from 'next';

const robots = async (req: NextApiRequest, res: NextApiResponse) => {
  const robotsContent = `
    # Robots.txt for ${req.headers.host}

    User-agent: *
    Disallow: /
`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Cache-Control', 'must-revalidate');
  res.setHeader('Cache-Control', 'max-age=0');
  res.setHeader('Cache-Control', 's-maxage=0');

  res.status(200).send(robotsContent);
};

export default robots;