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
        title: "Robotics (coming soon)",
        description:
            "Tools and Resources every day? You've got it. Daily papers summarized? You've got it. Articles to keep learning? Quick news summaries and links? You've got it. And of course, a daily meme, because life is too short not to laugh.",
        shortDescription:
            "A daily meme, tools, resources, summarized papers, step-by-step tutorials, and the latest news.",
    },
    {
        label: "Software Development 🧑‍💻 (coming soon)",
        code: "sf",
        isDeactivated: true,
        emoji: "🧑‍💻",
        title: "Software (coming soon)",
        description:
            "Tools and Resources every day? You've got it. Daily papers summarized? You've got it. Articles to keep learning? Quick news summaries and links? You've got it. And of course, a daily meme, because life is too short not to laugh.",
        shortDescription:
            "A daily meme, tools, resources, summarized papers, step-by-step tutorials, and the latest news.",
    },
    {
        label: "Thoughts 💡 (coming soon)",
        code: "th",
        isDeactivated: true,
        emoji: "💡",
        title: "Thoughts (coming soon)",
        description:
            "Here we get intense—just thoughts, ideas, and daily opinions. Like trying to fix the world with your friend but in a 2-5 minute read. How does that sound?",
        shortDescription:
            "Intense thoughts, ideas, and daily opinions. Fixing the world with your friend but in a 2-5 minute read.",
    },
];
