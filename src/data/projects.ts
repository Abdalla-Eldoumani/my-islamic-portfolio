export interface Project {
  id: string;
  title: string;
  arabicTitle?: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  category: "quran" | "education" | "seerah" | "tools" | "extension";
  categoryLabel: string;
  accentColor: string;
  accentColorMuted: string;
  githubUrl: string;
  liveUrl?: string;
  chromeStoreUrl?: string;
  icon: string; // Lucide icon name
  stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "quran-content",
    title: "Quran Verse Video Pipeline",
    subtitle: "Automated daily Quran videos for social media",
    description:
      "A Python pipeline that generates vertical Quran verse videos for Instagram Reels, TikTok, and YouTube Shorts. Arabic text appears in timed chunks synced to recitation audio, overlaid on scenic background video. All Quranic text and audio is fetched from authenticated APIs at runtime — nothing is hardcoded or AI-generated. A GitHub Actions workflow automates daily posting to Instagram, Facebook, and YouTube with no manual intervention.",
    features: [
      "Covers all 6,236 verses across 1,282 passage entries",
      "Five reciters with 70 rotating nature scenery queries",
      "Automated daily posting via GitHub Actions",
      "Platform-specific handling for Meta Graph API and YouTube Data API",
      "State tracking across runs — cycles through the full Quran over ~3.5 years",
    ],
    techStack: ["Python", "FFmpeg", "Pillow", "GitHub Actions", "Meta Graph API", "YouTube Data API"],
    category: "quran",
    categoryLabel: "Quran · Automation",
    accentColor: "#2DD4BF",
    accentColorMuted: "#1A8A7A",
    githubUrl: "https://github.com/Abdalla-Eldoumani/quran-content",
    icon: "Video",
    stats: [
      { label: "Verses", value: "6,236" },
      { label: "Reciters", value: "5" },
      { label: "Cycle", value: "~3.5 yrs" },
    ],
  },
  {
    id: "tajweed-trainer",
    title: "Tajweed Trainer",
    subtitle: "Interactive Quranic recitation rules",
    description:
      "An interactive web application that teaches Tajweed rules through color-coded text, audio examples, and practice exercises. Covers nine learning modules including articulation points (Makharij), Noon Sakinah & Tanween, Meem Sakinah, Qalqalah, and elongation (Madd). All rules and Quranic examples are sourced from pre-verified JSON data — nothing AI-generated. Integrates with the Quran.com Foundation API for color-coded tajweed markup and the Al Quran Cloud API for verse audio.",
    features: [
      "Nine structured learning modules with interactive quizzes",
      "Color-coded tajweed markup following standard Mushaf conventions",
      "Progress tracking with localStorage persistence",
      "Reciter selection, playback speed, and dark mode settings",
      "Arabic text with full tashkeel using Amiri Quran font",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Quran.com API", "Al Quran Cloud API"],
    category: "education",
    categoryLabel: "Quran · Education",
    accentColor: "#A78BFA",
    accentColorMuted: "#6D5BBF",
    githubUrl: "https://github.com/Abdalla-Eldoumani/tajweed-trainer",
    liveUrl: "https://tajweed-trainer-sigma.vercel.app",
    icon: "BookOpen",
    stats: [
      { label: "Modules", value: "9" },
      { label: "Rules", value: "30+" },
      { label: "Quizzes", value: "Interactive" },
    ],
  },
  {
    id: "seerah",
    title: "Noor al-Seerah",
    arabicTitle: "نور السيرة",
    subtitle: "The Light of the Prophetic Biography",
    description:
      "An interactive web experience presenting 49 key events from the life of Prophet Muhammad ﷺ through a manuscript-inspired reading interface. Organized across three chronological eras — Pre-Prophethood, Meccan, and Medinan. All content is pre-verified from Sahih al-Bukhari, Sahih Muslim, Ar-Raheeq Al-Makhtum, and Ibn Ishaq's Sirat Rasul Allah. Features a parchment-and-gold color palette inspired by illuminated Islamic manuscripts.",
    features: [
      "49 key events across three chronological eras (571–632 CE)",
      "Pre-verified from Sahih al-Bukhari, Sahih Muslim, Ar-Raheeq Al-Makhtum, Ibn Ishaq",
      "Vertical timeline navigation spine with era-specific theming",
      "Full Arabic text support with RTL rendering",
      "Scroll-driven animations and reading-optimized typography",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Static JSON", "Amiri Font"],
    category: "seerah",
    categoryLabel: "Seerah · History",
    accentColor: "#F59E0B",
    accentColorMuted: "#B57B0A",
    githubUrl: "https://github.com/Abdalla-Eldoumani/seerah",
    liveUrl: "https://noor-al-seerah.vercel.app",
    icon: "ScrollText",
    stats: [
      { label: "Events", value: "49" },
      { label: "Eras", value: "3" },
      { label: "Sources", value: "4 primary" },
    ],
  },
  {
    id: "asmaa",
    title: "Asmaa",
    arabicTitle: "أسماء",
    subtitle: "Learn the 99 Names of Allah",
    description:
      "A web application for learning and memorizing the 99 Names of Allah (Asma ul-Husna). Supports Arabic, English, and French interfaces with full RTL layout. Includes a browse grid, card-based study mode with text-to-speech pronunciation, randomized quizzes, and progress tracking with streaks and favorites. Built with vanilla JavaScript — no frameworks or build tools required.",
    features: [
      "Trilingual interface: Arabic, English, and French with full RTL",
      "Card-based study mode with text-to-speech pronunciation",
      "Randomized quizzes for memorization testing",
      "Progress tracking with streaks and favorites",
      "Zero dependencies — pure vanilla JavaScript and CSS",
    ],
    techStack: ["Vanilla JavaScript", "CSS Custom Properties", "LocalStorage", "Web Speech API"],
    category: "education",
    categoryLabel: "Names of Allah · Education",
    accentColor: "#34D399",
    accentColorMuted: "#1E9B6E",
    githubUrl: "https://github.com/Abdalla-Eldoumani/asmaa",
    liveUrl: "https://asmaa-alpha.vercel.app",
    icon: "Star",
    stats: [
      { label: "Names", value: "99" },
      { label: "Languages", value: "3" },
      { label: "Dependencies", value: "0" },
    ],
  },
  {
    id: "noor-guide",
    title: "Noor Guide",
    subtitle: "A learning path for new Muslims",
    description:
      "A free, open-source web application providing a structured, step-by-step learning journey for people who have recently embraced Islam. Guides users through six sequential modules — core beliefs, five pillars, wudu, salah with positional breakdowns, essential surahs with verse-by-verse audio, and daily supplications. Includes location-based prayer times, a GPS-driven qibla compass, and a mosque finder. No accounts, no backend, no paid APIs.",
    features: [
      "Six sequential learning modules from aqeedah to daily duas",
      "Salah guide with full positional breakdowns and recitations",
      "Location-based prayer times via AlAdhan API",
      "GPS-driven qibla compass using spherical trigonometry",
      "Mosque finder with map integration",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "AlAdhan API", "Geolocation API"],
    category: "education",
    categoryLabel: "New Muslims · Education",
    accentColor: "#60A5FA",
    accentColorMuted: "#3B82F6",
    githubUrl: "https://github.com/Abdalla-Eldoumani/noor-guide",
    liveUrl: "https://noor-guide-dusky.vercel.app",
    icon: "Compass",
    stats: [
      { label: "Modules", value: "6" },
      { label: "Accounts", value: "None" },
      { label: "Cost", value: "Free" },
    ],
  },
  {
    id: "islam-extension",
    title: "Qur'an & Sunnah Companion",
    subtitle: "Cross-browser Islamic content extension",
    description:
      "A cross-browser extension providing Qur'an recitation with over 50 reciters, authentic Hadith from a 9-book Arabic collection with English and French translations, and configurable Dhikr reminders with 26+ adhkar. Supports Chrome (Manifest V3) and Firefox (Manifest V2). Published on the Chrome Web Store. Integrates multiple Islamic APIs with automatic fallback chains. No personal data collected.",
    features: [
      "50+ Quran reciters with background audio playback",
      "9-book Hadith collection with trilingual translations",
      "26+ configurable Dhikr reminders",
      "Cross-browser: Chrome (MV3) and Firefox (MV2)",
      "Message-based architecture for popup/background coordination",
    ],
    techStack: ["Vanilla JavaScript", "Chrome APIs", "Manifest V3/V2", "Quran.com API", "MP3Quran.net"],
    category: "extension",
    categoryLabel: "Browser Extension · Tools",
    accentColor: "#FB923C",
    accentColorMuted: "#D97706",
    githubUrl: "https://github.com/Abdalla-Eldoumani/islam-extension",
    chromeStoreUrl:
      "https://chromewebstore.google.com/detail/quran-sunnah-companion/okkohadnmodfaienacdlfaledjblcbka",
    icon: "Chrome",
    stats: [
      { label: "Reciters", value: "50+" },
      { label: "Hadith Books", value: "9" },
      { label: "Adhkar", value: "26+" },
    ],
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "quran", label: "Quran" },
  { id: "education", label: "Education" },
  { id: "seerah", label: "Seerah" },
  { id: "extension", label: "Extension" },
  { id: "tools", label: "Tools" },
] as const;