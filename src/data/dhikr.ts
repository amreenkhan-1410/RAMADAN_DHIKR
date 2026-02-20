export interface DhikrItem {
  id: string;
  arabic?: string;
  transliteration: string;
  target: number;
}

export const dhikrList: DhikrItem[] = [
  { id: "subhanallah", arabic: "سُبْحَانَ اللَّهِ", transliteration: "SubhanAllah", target: 100 },
  { id: "alhamdulillah", arabic: "الْحَمْدُ لِلَّهِ", transliteration: "Alhamdulillah", target: 100 },
  { id: "la-ilaha-illallah", arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ", transliteration: "La ilaha illallah", target: 100 },
  { id: "allahu-akbar", arabic: "اللَّهُ أَكْبَرُ", transliteration: "Allahu Akbar", target: 100 },
  { id: "astaghfirullah", arabic: "أَسْتَغْفِرُ اللَّهَ", transliteration: "Astaghfirullah", target: 100 },
  { id: "la-hawla", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", transliteration: "La hawla wa la quwwata illa billah", target: 100 },
  { id: "la-ilaha-illa-anta", arabic: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin", target: 100 },
  { id: "ikhlas-3", transliteration: "Surah Ikhlas", target: 3 },
  { id: "ikhlas-10", transliteration: "Surah Ikhlas", target: 10 },
  { id: "subhanallahi-wa-bihamdihi", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ", transliteration: "SubhanAllahi wa bihamdihi SubhanAllahil 'Azim", target: 100 },
  { id: "afiyah", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ", transliteration: "Allahumma inni as'alukal 'afiyah", target: 1 },
  { id: "ajirni", arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ", transliteration: "Allahumma ajirni minan-naar", target: 1 },
  { id: "rabbi-inni", arabic: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", transliteration: "Rabbi inni lima anzalta ilaiyya min khairin faqir", target: 100 },
  { id: "durud-ibrahim", transliteration: "Durud Ibrahim", target: 100 },
  { id: "afwa", arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", transliteration: "Allahumma innaka afu'un tuhibbul afwa fa'fu anni", target: 100 },
  { id: "rabbir-hamhuma", arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", transliteration: "Rabbir hamhuma kama rabbayani saghira", target: 1 },
  { id: "husnal-khatimah", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُسْنَ الْخَاتِمَةِ", transliteration: "Allahumma inni as'alukal husnal khatimah", target: 1 },
  { id: "sallallahu", arabic: "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ", transliteration: "Sallallahu alaihi wa sallam", target: 100 },
  { id: "ya-hayyu", arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ", transliteration: "Ya Hayyu Ya Qayyum bi rahmatika astagheeth", target: 100 },
  { id: "atiq-riqabana", arabic: "رَبَّنَا أَعْتِقْ رِقَابَنَا مِنَ النَّارِ", transliteration: "Rabbana atiq riqabana minan naar", target: 1 },
  { id: "laylatul-qadr", arabic: "اللَّهُمَّ بَلِّغْنِي لَيْلَةَ الْقَدْرِ", transliteration: "Allahumma ballighni Laylatul Qadr", target: 1 },
  { id: "taqabbal", arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ", transliteration: "Rabbana taqabbal minna innaka antas samee'ul aleem", target: 1 },
];

export const dailyReflections: string[] = [
  "Every SubhanAllah is a seed planted in Jannah.",
  "Allah loves those who are consistent, even if it's small.",
  "Dhikr polishes the heart — let your heart shine today.",
  "The tongue is light, but its words are heavy on the scale.",
  "Ramadan is the month of mercy — take your share.",
  "A moment of Dhikr is better than hours of heedlessness.",
  "Your Dhikr today is your light tomorrow.",
  "The Prophet ﷺ said: 'The best Dhikr is La ilaha illallah.'",
  "Let your Dhikr be with presence — Allah hears every whisper.",
  "Forgiveness flows in Ramadan. Ask and keep asking.",
  "Istighfar opens doors you didn't know existed.",
  "Each tasbeeh removes a sin and raises your rank.",
  "The angels surround those who remember Allah.",
  "Be among those whose tongues are moist with Dhikr.",
  "This Ramadan could change your entire akhirah.",
  "Patience and Dhikr — the two wings of a believer.",
  "Your heart finds peace only in the remembrance of Allah.",
  "Don't let a single day pass without remembering Him.",
  "The doors of Jannah have your name — keep knocking.",
  "Allah is closer to you than your jugular vein.",
  "Every Alhamdulillah fills the scale of good deeds.",
  "Turn to Allah before you return to Allah.",
  "Ramadan passes quickly — make every moment count.",
  "The night prayer and Dhikr — gifts of Ramadan.",
  "Laylatul Qadr awaits the persistent ones.",
  "Your Durud upon the Prophet ﷺ brings you closer to him.",
  "The last ten nights are the crown of Ramadan.",
  "Finish strong — the end determines everything.",
  "What you built in Ramadan, carry it beyond.",
  "May Allah accept your Dhikr and grant you Laylatul Qadr.",
];

export const reminderMessages: string[] = [
  "A few moments of Dhikr can change your akhirah 🌙",
  "Do not miss today's tasbeeh — Allah loves consistency.",
  "Let your tongue remember Allah today.",
  "Every tasbeeh is sadaqah — don't miss this reward.",
  "Your daily Dhikr awaits — a date with the Divine.",
  "The best among you are those who remember Allah often.",
  "A few minutes of Dhikr, an eternity of reward.",
];
