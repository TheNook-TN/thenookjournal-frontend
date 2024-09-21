export interface NewsletterTopic {
    label: string;
    code: string;
    isDeactivated: boolean;
    emoji: string;
    title: string;
    description: string;
    shortDescription: string;
}

export const newsletterTopics: NewsletterTopic[] = [
    {
        label: "AI, Data Science & Machine Learning 🧠",
        code: "ai",
        isDeactivated: false,
        emoji: "🧠",
        title: "AI, Data Science & Machine Learning",
        description:
            "Tools and Resources every day? You've got it. Daily papers summarized? You've got it. Articles to keep learning? Quick news summaries and links? You've got it. And of course, a daily meme, because life is too short not to laugh.",
        shortDescription:
            "A daily meme, tools, resources, summarized papers, step-by-step tutorials, and the latest news.",
    },
    {
        label: "Robotics & Automation 🤖 (coming soon)",
        code: "rb",
        isDeactivated: true,
        emoji: "🤖",
        title: "Robotics & Automation (coming soon)",
        description:
            "Explore the future of robotics and automation with our upcoming newsletter. Receive updates on cutting-edge technologies, industry trends, and practical tutorials to build and innovate in the world of robotics.",
        shortDescription:
            "Upcoming insights on robotics and automation. Latest technologies, industry trends, and practical tutorials."
    },
    {
        label: "Tech & Software 🧑‍💻 (coming soon)",
        code: "sf",
        isDeactivated: true,
        emoji: "🧑‍💻",
        title: "Tech & Software (coming soon)",
        description:
            "Dive into the world of software development with our forthcoming newsletter. Stay informed about best practices, emerging frameworks, coding tutorials, and the latest industry news to elevate your development skills.",
        shortDescription:
            "Upcoming updates on software development. Best practices, emerging frameworks, coding tutorials, and industry news."
    },
    {
        label: "Thoughts 💡 (coming soon)",
        code: "th",
        isDeactivated: true,
        emoji: "💡",
        title: "Thoughts (coming soon)",
        description:
            "Engage with profound thoughts, innovative ideas, and daily reflections. Our upcoming newsletter offers bite-sized reads that inspire you to think differently and spark meaningful conversations.",
        shortDescription:
            "Daily reflections and innovative ideas. Bite-sized reads to inspire and spark meaningful conversations."
    },
];
