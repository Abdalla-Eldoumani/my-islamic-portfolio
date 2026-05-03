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
    subtitle: "Daily Quran videos for social media, automated end to end",
    description:
      "A Python pipeline that builds vertical 1080×1920 Quran verse videos and publishes them daily to Instagram, Facebook, and YouTube. Arabic text appears in timed chunks synced to recitation audio over scenic background footage. Whisper extracts word-level timing from the audio; if it cannot, chunk timing falls back to Quran.com word segments scaled proportionally to the audio duration. A GitHub Actions workflow runs the whole thing on a daily cron with no manual intervention.",
    features: [
      "1,282 passage entries spanning all 6,236 Quranic verses",
      "Five reciters: al-Afasy, al-Husary, al-Minshawi, Muhammad Ayyub, As-Sudais",
      "Whisper word-level timing with proportional fallback for unmapped reciters",
      "70 rotating Pexels nature backgrounds",
      "GitHub Actions cron handles daily publish to Meta Graph API and YouTube Data API",
    ],
    techStack: ["Python", "FFmpeg", "faster-whisper", "GitHub Actions", "Meta Graph API", "YouTube Data API"],
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
      "An interactive web app that teaches Tajweed through colour-coded text, audio examples, and spaced-repetition quizzes. Nine modules cover everything from articulation points (Makharij) through elongation (Madd) and stop signs (Waqf). All rules and Quranic examples ship as pre-verified JSON; a verified flag at every accessor stops anything else from rendering. Tajweed colour markup comes from the Quran.com Foundation API; recitation audio comes from Al Quran Cloud.",
    features: [
      "Nine modules: Makharij, Noon Sakinah, Meem Sakinah, Qalqalah, Madd, Laam, Raa, Tafkheem, Ghunnah, Waqf",
      "270+ authored practice questions with Leitner spaced-repetition scheduling",
      "604-page Madinan Mushaf reader with tap-to-play audio at every verse",
      "Colour-coded tajweed markup pulled from the Quran.com Foundation API",
      "Al-Husary pinned as default teaching reciter; full reciter list cached daily",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Quran.com API", "Al Quran Cloud API"],
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
      { label: "Questions", value: "270+" },
    ],
  },
  {
    id: "seerah",
    title: "Noor al-Seerah",
    arabicTitle: "نور السيرة",
    subtitle: "The Light of the Prophetic Biography",
    description:
      "A bilingual interactive reader presenting 49 key events from the life of Prophet Muhammad ﷺ. The events are arranged across three chronological eras: Pre-Prophethood, Meccan, and Medinan. All content is pre-verified from Sahih al-Bukhari, Sahih Muslim, Ar-Raheeq Al-Makhtum, and Ibn Ishaq's Sirat Rasul Allah. Visual treatment is parchment-and-gold, in the manner of illuminated Islamic manuscripts.",
    features: [
      "49 events across three chronological eras (571 to 632 CE)",
      "Pre-verified from Sahih al-Bukhari, Sahih Muslim, Ar-Raheeq Al-Makhtum, Ibn Ishaq",
      "Vertical timeline navigation spine with era-specific theming",
      "Bilingual English and Arabic via next-intl, locale-prefixed routing",
      "Synchronous JSON loading so every page is statically rendered",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "next-intl"],
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
      "A trilingual web app for learning and memorising the 99 Names of Allah (Asma ul-Husna). Arabic, English, and French interfaces all support full RTL layout. Includes browse, study, quiz, and progress views; the Web Speech API handles pronunciation; all state lives in localStorage. Built with vanilla JavaScript and CSS, no frameworks, no build step, no runtime dependencies.",
    features: [
      "Trilingual UI: Arabic, English, French, all RTL-aware",
      "Card-based study mode with Web Speech pronunciation",
      "Randomised 10-question multiple-choice quizzes",
      "Daily-name modal with one name surfaced per calendar day",
      "Logical CSS properties only, so RTL contexts mirror correctly",
      "Zero runtime dependencies, zero build step",
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
    id: "nour-guide",
    title: "Noor Guide",
    subtitle: "A learning path for new Muslims",
    description:
      "A free, open-source learning path for people who have recently embraced Islam. Six sequential modules cover aqeedah, the five pillars, wudu, salah with positional breakdowns, essential surahs with verse-by-verse audio, and daily duas. Three tools come bundled: location-based prayer times via AlAdhan, a GPS qibla compass, and a mosque finder. No accounts, no backend, no paid APIs.",
    features: [
      "Six sequential modules from aqeedah through daily duas",
      "Salah guide with full positional breakdowns and recitations",
      "Glossary of 22 Islamic terms and 13 common Arabic phrases",
      "Location-based prayer times via AlAdhan API",
      "GPS qibla compass and mosque finder",
      "English at /, Arabic at /ar via next-intl",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "next-intl", "AlAdhan API"],
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
      "A cross-browser extension that gives you Quran recitation, hadith, and dhikr reminders without leaving your tab. Chrome MV3 and Firefox MV2 are both supported, and audio works in the background through Chrome's offscreen document API. Reciters merge from four providers (Quran.com, MP3Quran.net, Islamic.network, Al-Quran Cloud) with deduplication and a daily coverage probe. Published on the Chrome Web Store. No personal data collected.",
    features: [
      "50+ reciters merged from four providers with automatic deduplication",
      "9-book Hadith collection with English and French translations",
      "32 configurable adhkar, each with Arabic, transliteration, translation, and reward",
      "Background audio in Chrome MV3 via the offscreen document API",
      "Cross-browser: Chrome MV3 and Firefox MV2 from a shared codebase",
      "Sleep timer presets at 15, 30, 45, and 60 minutes",
    ],
    techStack: ["Vanilla JavaScript", "Chrome MV3", "Firefox MV2", "Quran.com API", "MP3Quran.net", "web-ext"],
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
      { label: "Adhkar", value: "32" },
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