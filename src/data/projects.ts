// Every number and claim on the site lives in this file. Figures are as the
// projects stood on 9 October 2026; check a project's repository before
// changing one.

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "quran", label: "Quran" },
  { id: "education", label: "Education" },
  { id: "seerah", label: "Seerah" },
  { id: "extension", label: "Extension" },
  { id: "tools", label: "Tools" },
] as const;

export interface Project {
  id: string;
  title: string;
  arabicTitle?: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  category: Exclude<(typeof categories)[number]["id"], "all">;
  categoryLabel: string;
  stats: { label: string; value: string }[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "quran-content",
    title: "Quran Verse Video Pipeline",
    subtitle: "Vertical recitation videos for Instagram, Facebook and YouTube",
    description:
      "A Python pipeline that renders 1080×1920 videos of Quran passages. The Arabic appears about five words at a time, timed to the recitation, over nature footage. Whisper reads word timing from the audio, with Quran.com segments scaled to the audio length as a fallback. Posting goes through the official APIs of the three platforms. A daily GitHub Actions workflow is included but is switched off for now.",
    features: [
      "1,282 entries that together cover every ayah of the Qur'an, about 3.5 years at one a day",
      "Five reciters in rotation: al-Afasy, al-Husary, al-Minshawi, Muhammad Ayyub and as-Sudais",
      "Word timing from faster-whisper, with proportional timing from Quran.com segments as the fallback",
      "Instagram Reels through the Graph API's resumable upload, Facebook as a Page video, YouTube through the Data API",
      "Backgrounds come from Pexels, searched with 70 nature-only queries",
    ],
    techStack: [
      "Python",
      "FFmpeg",
      "faster-whisper",
      "Pillow",
      "GitHub Actions",
      "Meta Graph API",
      "YouTube Data API",
    ],
    category: "quran",
    categoryLabel: "Quran · Automation",
    stats: [
      { label: "Ayahs covered", value: "6,236" },
      { label: "Reciters", value: "5" },
      { label: "At one a day", value: "3.5 yrs" },
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/quran-content",
      },
    ],
  },
  {
    id: "tajweed-trainer",
    title: "Tajweed Trainer",
    subtitle: "Tajweed lessons, practice questions and a 604-page mushaf reader",
    description:
      "A web app in English and Arabic for learning the rules of Qur'an recitation. Nine lesson modules run from the points of articulation (makharij) through madd and waqf, with practice questions and spaced review. A Madinah mushaf reader colours each tajweed rule, plays the recitation verse by verse and tracks memorisation. It runs in the browser with no account and no server, and works offline as an installed app.",
    features: [
      "Nine modules and more than 270 practice questions",
      "Colour-coded text for 20 tajweed rule classes, across five manuscript themes",
      "A 604-page mushaf with navigation by page, rub' and juz",
      "42 Hafs reciters: 12 from Quran.com and 30 from EveryAyah",
      "Leitner-box review for quiz questions and SM-2 scheduling for memorised verses",
      "Progress stays on the device, in the browser's local storage",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Quran.com API",
      "EveryAyah",
    ],
    category: "education",
    categoryLabel: "Quran · Education",
    stats: [
      { label: "Modules", value: "9" },
      { label: "Questions", value: "270+" },
      { label: "Reciters", value: "42" },
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/tajweed-trainer",
      },
      { label: "Live site", href: "https://tajweedtrainer.vercel.app" },
    ],
  },
  {
    id: "seerah",
    title: "Noor al-Seerah",
    arabicTitle: "نور السيرة",
    subtitle: "The Light of the Prophetic Biography",
    description:
      "An interactive reader for the life of Prophet Muhammad ﷺ in English, Arabic and French. Forty-nine events are arranged across three eras: before prophethood, the Meccan period and the Medinan period. Each event has a title, location, summary and significance in all three languages, with the English as the source of record. The content lives in JSON and the application does not change it.",
    features: [
      "49 events: 14 before prophethood, 18 Meccan and 17 Medinan",
      "36 Qur'an passages taken from published editions: the Uthmani text, Saheeh International and Hamidullah's French",
      "31 hadith citations, each with a review record that the build checks, and the grading shown on the page",
      "191 proper nouns with Arabic and French forms, checked at build",
      "Fonts are self-hosted and the content security policy limits connections to the site itself",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    category: "seerah",
    categoryLabel: "Seerah · History",
    stats: [
      { label: "Events", value: "49" },
      { label: "Eras", value: "3" },
      { label: "Languages", value: "3" },
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/seerah",
      },
      { label: "Live site", href: "https://noor-al-seerah.vercel.app" },
    ],
  },
  {
    id: "asmaa",
    title: "Asmaa",
    arabicTitle: "أسماء",
    subtitle: "Learn the 99 Names of Allah",
    description:
      "A web app for learning the 99 Beautiful Names of Allah (Asma ul-Husna). It has a browsable grid with the Arabic, transliteration and meaning of each name, a study mode with a short reflection, a ten-question quiz, and a progress view with favourites, a daily streak and quiz accuracy. The interface is in English, Arabic (with full right-to-left layout) and French, in light and dark themes. It is plain JavaScript and CSS with no framework and no build step.",
    features: [
      "All 99 names in Arabic with diacritics, a transliteration, meanings in English, Arabic and French, and a short reflection in each language",
      "A name of the day at the top of the browse view, which you can hide until the next day",
      "A ten-question multiple-choice quiz with immediate feedback that keeps your place when you switch views or languages",
      "Progress kept in the browser: names learned, favourites, daily streak and quiz accuracy",
      "No runtime dependencies and no build step",
    ],
    techStack: ["Vanilla JavaScript", "CSS", "Web Speech API", "localStorage"],
    category: "education",
    categoryLabel: "Names of Allah · Education",
    stats: [
      { label: "Names", value: "99" },
      { label: "Languages", value: "3" },
      { label: "Dependencies", value: "0" },
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/asmaa",
      },
      { label: "Live site", href: "https://asmaa-alpha.vercel.app" },
    ],
  },
  {
    id: "noor-guide",
    title: "Noor Guide",
    subtitle: "A learning path for new Muslims",
    description:
      "A free website for new Muslims and anyone learning the basics of Islam, in English, Arabic and French. Nine parts are meant to be read in order: belief, the five pillars, wudu, salah, essential surahs, daily du'as, purity beyond wudu, prayer in practice, and what follows a death. Three tools sit beside the lessons: prayer times from the AlAdhan API, a qibla direction worked out on the device, and a link to find a mosque. There is no account, no payment and no advertising.",
    features: [
      "Nine parts, 51 lessons and about 245 minutes of study",
      "The Qur'an passages use the Uthmani text from AlQuran Cloud, with Saheeh International in English and Hamidullah in French, and the page names the edition",
      "Hadith name their collection and number; the English and French renderings of hadith, du'as and the words of prayer are the project's own and are labelled that way",
      "Six short surahs, verse by verse, with recitation by Mishary Alafasy",
      "Rulings in the practical lessons are marked as awaiting review by a qualified scholar",
      "Location is rounded to about a kilometre before it is saved or sent, and progress stays in the browser",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "next-intl",
      "AlAdhan API",
    ],
    category: "education",
    categoryLabel: "New Muslims · Education",
    stats: [
      { label: "Parts", value: "9" },
      { label: "Lessons", value: "51" },
      { label: "Languages", value: "3" },
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/noor-guide",
      },
      { label: "Live site", href: "https://noor-guide-dusky.vercel.app" },
    ],
  },
  {
    id: "islam-extension",
    title: "Qur'an & Sunnah Companion",
    subtitle: "Recitation, a hadith on each visit and dhikr reminders in the browser",
    description:
      "A browser extension with Qur'an recitation, a hadith from Sahih al-Bukhari or Sahih Muslim each time you open it, and dhikr reminders. The Chrome build uses Manifest V3 and the Firefox build uses Manifest V2. One searchable list merges reciters from Quran.com, MP3Quran and Al-Quran Cloud, and every entry plays whole surahs. There are no accounts, analytics, ads or tracking.",
    features: [
      "426 reciters from three catalogues, merged and de-duplicated, on 9 October 2026",
      "Hadith from Sahih al-Bukhari and Sahih Muslim in English, French or Arabic, each linked to its page on sunnah.com with its collection and number",
      "28 adhkar in Arabic with a transliteration and an English meaning, each naming its source; for adhkar taken from hadith the English line is the project's own rendering",
      "Reminders from every 30 seconds to every hour, as a system notification or a small window",
      "Playback continues after the popup closes, with a sleep timer of 15, 30, 45 or 60 minutes",
    ],
    techStack: [
      "Vanilla JavaScript",
      "Chrome MV3",
      "Firefox MV2",
      "Quran.com API",
      "MP3Quran",
      "web-ext",
    ],
    category: "extension",
    categoryLabel: "Browser Extension · Tools",
    stats: [
      { label: "Reciters", value: "400+" },
      { label: "Hadith collections", value: "2" },
      { label: "Adhkar", value: "28" },
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/islam-extension",
      },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/quran-sunnah-companion/okkohadnmodfaienacdlfaledjblcbka",
      },
    ],
  },
  {
    id: "salaat-widget",
    title: "Salaat Widget",
    subtitle: "A desktop prayer-times widget that docks to screen edges",
    description:
      "A desktop prayer-times widget for Windows, macOS and Linux, built with Tauri 2 and React. It shows the six daily times in English and Arabic, highlights the current prayer and counts down to the next. Drag it to a screen edge and it docks as a horizontal bar, a vertical sidebar or a compact floating window. The Rust side plays the adhan and sends system notifications, so both work while the window is hidden. Installers are published on GitHub Releases.",
    features: [
      "12 calculation methods through the adhan library",
      "Six adhan recordings: Makkah, Madinah, Al-Aqsa, Abdul Basit, Minshawi and Egypt, with per-prayer muting",
      "Docking within 40 px of a screen edge, with three layouts that switch automatically",
      "131 bundled cities, with IP geolocation as the automatic option",
      "The adhan plays from Rust on its own audio thread, and the widget stays in the system tray",
      "The Windows installer is about 5 MB",
    ],
    techStack: ["Tauri 2", "Rust", "React", "TypeScript", "Tailwind CSS", "adhan"],
    category: "tools",
    categoryLabel: "Tools · Desktop",
    stats: [
      { label: "Methods", value: "12" },
      { label: "Cities", value: "131" },
      { label: "Platforms", value: "3" },
    ],
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/salaat-widget",
      },
      {
        label: "Download",
        href: "https://github.com/Abdalla-Eldoumani/salaat-widget/releases/latest",
      },
    ],
  },
];
