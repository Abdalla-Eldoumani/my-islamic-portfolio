// Every project figure, sentence and link on the site lives in this file.
// Figures are as the projects stood on 10 October 2026; check a project's
// repository before changing one. The order here is the order of the plates.
//
// Images are in public/projects/ and are made by scripts/capture-screenshots.mjs:
// the live sites are captured from their URLs, and the other four are
// assembled from the projects' own screenshots.

export interface Fact {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  arabicTitle: string;
  kind: string;
  summary: string;
  facts: [Fact, Fact, Fact];
  sources: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "noor-guide",
    title: "Noor Guide",
    arabicTitle: "نور",
    kind: "Web app · Learning",
    summary:
      "First lessons in Islam for new Muslims and anyone starting out, to be read in order, in English, Arabic or French.",
    facts: [
      { value: "9", label: "parts, from belief to what follows a death" },
      { value: "51", label: "lessons, about 245 minutes in all" },
      { value: "0", label: "accounts, payments or advertisements" },
    ],
    sources:
      "Qur'an text is from AlQuran Cloud and quran.com, with Saheeh International in English and Hamidullah in French. Hadith give their collection and number. Rulings are marked as awaiting review by a qualified scholar.",
    image: {
      src: "/projects/noor-guide.webp",
      width: 1440,
      height: 900,
      alt: "The Noor Guide home page: a heading, two entry points for new readers and the list of the nine parts.",
      caption: "Home page, noor-guide-dusky.vercel.app",
    },
    links: [
      { label: "Live site", href: "https://noor-guide-dusky.vercel.app" },
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/noor-guide",
      },
    ],
  },
  {
    id: "tajweed-trainer",
    title: "Tajweed Trainer",
    arabicTitle: "معلّم التجويد",
    kind: "Web app · Recitation",
    summary:
      "Lessons, practice questions and a 604-page mushaf reader for anyone learning the rules of Qur'an recitation, in English and Arabic.",
    facts: [
      { value: "604", label: "pages in the mushaf reader, with the rules coloured" },
      { value: "276", label: "practice questions across 9 lesson modules" },
      { value: "42", label: "reciters, played verse by verse" },
    ],
    sources:
      "Text and tajweed colouring come from the Quran.com API and are shown as returned. Audio is from Quran.com and EveryAyah. The lessons follow Hafs 'an 'Asim, and every example carries its surah and ayah.",
    image: {
      src: "/projects/tajweed-trainer.webp",
      width: 1440,
      height: 900,
      alt: "The Tajweed Trainer home page with its side navigation, a Start Learning button and the verse of the day.",
      caption: "Home page, tajweedtrainer.vercel.app",
    },
    links: [
      { label: "Live site", href: "https://tajweedtrainer.vercel.app" },
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/tajweed-trainer",
      },
    ],
  },
  {
    id: "seerah",
    title: "Noor al-Seerah",
    arabicTitle: "نور السيرة",
    kind: "Web app · Seerah",
    summary:
      "An interactive reader for the life of the Prophet ﷺ in 49 events across three eras, in English, Arabic and French.",
    facts: [
      { value: "49", label: "events: 14 before prophethood, 18 Meccan, 17 Medinan" },
      { value: "36", label: "Qur'an passages from published editions" },
      { value: "31", label: "hadith citations, each with a review record the build checks" },
    ],
    sources:
      "Qur'an passages are the Uthmani text, Saheeh International and Hamidullah. The Arabic of each hadith is read from its collection; the English and French are the project's own abridgements, and each page says so.",
    image: {
      src: "/projects/seerah.webp",
      width: 1440,
      height: 900,
      alt: "The Noor al-Seerah home page: the title in Arabic and English and a button that opens the timeline.",
      caption: "Home page, noor-al-seerah.vercel.app",
    },
    links: [
      { label: "Live site", href: "https://noor-al-seerah.vercel.app" },
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/seerah",
      },
    ],
  },
  {
    id: "asmaa",
    title: "Asmaa",
    arabicTitle: "أسماء",
    kind: "Web app · Names of Allah",
    summary:
      "A study app for learning the 99 Names of Allah, with a quiz and a progress view, in English, Arabic and French.",
    facts: [
      { value: "99", label: "names, each with its meaning and a short reflection" },
      { value: "3", label: "languages, with full right-to-left layout in Arabic" },
      { value: "0", label: "dependencies and no build step" },
    ],
    sources:
      "The names and their order follow the list in Jami' at-Tirmidhi 3507, with al-Ahad added at number 67. sunnah.com gives that hadith the grading da'if. The reflections are explanation, not quotation.",
    image: {
      src: "/projects/asmaa.webp",
      width: 1440,
      height: 900,
      alt: "The Asmaa browse view: the name of the day, a search box and a grid of names in Arabic with their meanings.",
      caption: "Browse view, asmaa-alpha.vercel.app",
    },
    links: [
      { label: "Live site", href: "https://asmaa-alpha.vercel.app" },
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/asmaa",
      },
    ],
  },
  {
    id: "islam-extension",
    title: "Qur'an & Sunnah Companion",
    arabicTitle: "رفيق القرآن والسنة",
    kind: "Browser extension",
    summary:
      "A browser extension for listening to the Qur'an, reading a hadith each time you open it and getting dhikr reminders, in English, French and Arabic.",
    facts: [
      { value: "426", label: "reciters from three catalogues, on 9 October 2026" },
      { value: "28", label: "adhkar, each naming its source" },
      { value: "0", label: "accounts, analytics or tracking" },
    ],
    sources:
      "Hadith are from Sahih al-Bukhari and Sahih Muslim and link to sunnah.com. Reciters come from Quran.com, MP3Quran and Al-Quran Cloud. For adhkar taken from hadith, the English line is the project's own rendering unless the source line says it is from sunnah.com.",
    image: {
      src: "/projects/extension.webp",
      width: 1440,
      height: 900,
      alt: "Four states of the extension's popup: a surah chosen in English, the same in Arabic with the dark theme, the surah search, and the dhikr reminder window in both languages.",
      caption: "Popup states, from the extension's own screenshots",
    },
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/quran-sunnah-companion/okkohadnmodfaienacdlfaledjblcbka",
      },
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/islam-extension",
      },
    ],
  },
  {
    id: "salaat-widget",
    title: "Salaat Widget",
    arabicTitle: "أداة مواقيت الصلاة",
    kind: "Desktop app",
    summary:
      "A desktop widget that shows the five daily prayers and sunrise, counts down to the next and plays the adhan, on Windows, macOS and Linux.",
    facts: [
      { value: "12", label: "calculation methods" },
      { value: "131", label: "bundled cities, as an alternative to an IP lookup" },
      { value: "5.4 MB", label: "Windows installer" },
    ],
    sources:
      "Times are calculated on the device with the adhan library. The six adhan recordings come from PrayTimes.org, which publishes them without a licence, so they sit outside the project's MIT licence.",
    image: {
      src: "/projects/salaat-widget.webp",
      width: 1440,
      height: 640,
      alt: "The widget in its three layouts, a sidebar, a horizontal bar and a compact window, each in a light and a dark theme.",
      caption: "Sidebar, bar and compact layouts, from the widget's own screenshots",
    },
    links: [
      {
        label: "Download",
        href: "https://github.com/Abdalla-Eldoumani/salaat-widget/releases/latest",
      },
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/salaat-widget",
      },
    ],
  },
  {
    id: "sukoon",
    title: "Sukoon",
    arabicTitle: "سكون",
    kind: "Local app · Audio and video",
    summary:
      "A local app that takes the music out of audio and video files and keeps the voices, so a lecture, a recitation or a family video can be heard without its background music. It runs on your own computer and uploads nothing.",
    facts: [
      { value: "6.7×", label: "faster than real time with Best on an RTX 3060 Laptop GPU" },
      { value: "18.1 dB", label: "speech clarity (SI-SDR) after Best, up from 0.3\u00a0dB" },
      { value: "10", label: "output formats: 6 for audio and 4 for video" },
    ],
    sources:
      "Separation runs on two models made by other people under the MIT licence: Kimberley Jensen's Mel-Band RoFormer vocal model and UVR-MDX-NET Voc FT from Ultimate Vocal Remover. The split is not exact, so play a result against the original before relying on it.",
    image: {
      src: "/projects/sukoon.webp",
      width: 1440,
      height: 710,
      alt: "The sukoon window with a finished lecture open: a strip shows the voice kept above a line and the music removed below it, with a switch between the cleaned file and the original.",
      caption: "A finished job, with the voice kept above the line and the music below",
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/sukoon",
      },
    ],
  },
  {
    id: "quran-content",
    title: "Quran Verse Videos",
    arabicTitle: "فيديوهات آيات القرآن",
    kind: "Video tool · Python",
    summary:
      "A Python tool that renders vertical videos of Qur'an passages, with the Arabic timed to the recitation over nature footage, for Instagram, Facebook and YouTube.",
    facts: [
      { value: "6,236", label: "ayahs covered, in 1,282 passages" },
      { value: "5", label: "reciters, shared out evenly" },
      { value: "3.5 yrs", label: "of daily videos at one a day" },
    ],
    sources:
      "Arabic text and audio come from AlQuran Cloud, and the text is drawn as returned. Word timing is measured from the audio with faster-whisper. Footage is from Pexels. The daily posting workflow is switched off for now.",
    image: {
      src: "/projects/quran-content.webp",
      width: 1440,
      height: 640,
      alt: "Three frames from a rendered video: the same navy panel with gold borders, showing a different line of Surat al-Ikhlas in Arabic in each.",
      caption: "Three frames of a rendered video, Surat al-Ikhlas",
    },
    links: [
      {
        label: "Source",
        href: "https://github.com/Abdalla-Eldoumani/quran-content",
      },
    ],
  },
  {
    id: "maqra",
    title: "Maqra",
    arabicTitle: "مَقْرَأ",
    kind: "Dataset · Audio archive",
    summary:
      "An open mirror of everyayah.com's verse-by-verse Qur'an recitations, with a checksum for every file, so apps and researchers can fetch any ayah by its URL.",
    facts: [
      { value: "80", label: "recitation sets: 77 in Hafs and 3 in Warsh" },
      { value: "499,631", label: "audio files, each with a SHA-256 hash" },
      { value: "MIT", label: "licence of the code and manifests; the recordings stay the reciters'" },
    ],
    sources:
      "The recordings are the reciters' work, collected and split by everyayah.com, which publishes no licence. Maqra asks for credit, non-commercial use and no alteration. Files are checked against everyayah.com's MD5 lists where they exist.",
    image: {
      src: "/projects/maqra.webp",
      width: 1440,
      height: 900,
      alt: "A Maqra dataset page on Hugging Face, with the audio viewer listing recordings of a single reciter.",
      caption: "The Mishari Alafasy 64 kbps set, on Hugging Face",
    },
    links: [
      { label: "Hugging Face", href: "https://huggingface.co/maqra-project" },
      {
        label: "GitHub",
        href: "https://github.com/Abdalla-Eldoumani/maqra",
      },
    ],
  },
];
