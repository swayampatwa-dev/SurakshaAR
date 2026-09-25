import type { Lang } from './types'

type Dict = Record<string, Record<Lang, string>>

export const t = (key: string, lang: Lang, dict: Dict = ui): string =>
  dict[key]?.[lang] ?? dict[key]?.en ?? key

export const ui: Dict = {
  brand: {
    en: 'SurakshaAR',
    hi: 'सुरक्षाAR',
    sat: 'ᱥᱩᱨᱚᱠᱷᱭᱟAR',
  },
  tagline: {
    en: 'Industrial safety training on every mid-range phone — no headset.',
    hi: 'हर मिड-रेंज फ़ोन पर औद्योगिक सुरक्षा प्रशिक्षण — हेडसेट की ज़रूरत नहीं।',
    sat: 'ᱡᱷᱚᱛᱚ ᱢᱤᱰ-ᱨᱮᱸᱡᱽ ᱯᱷᱚᱱ ᱨᱮ ᱤᱱᱰᱚᱥᱴᱨᱤ ᱥᱩᱨᱚᱠᱷᱭᱟ ᱥᱮᱪᱮᱫ — ᱦᱮᱰᱥᱮᱴ ᱵᱟᱹᱱᱩᱜᱼᱟ᱾',
  },
  heroSub: {
    en: 'Safety certification for Jharkhand’s industrial workforce',
    hi: 'झारखंड के औद्योगिक श्रमिकों के लिए सुरक्षा प्रमाणन',
    sat: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱤᱱᱰᱚᱥᱴᱨᱤ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱥᱩᱨᱚᱠᱷᱭᱟ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  heroSupport: {
    en: 'Interactive modules, comprehension checks, and QR-verifiable certificates in Hindi and Santali.',
    hi: 'इंटरैक्टिव मॉड्यूल, समझ की जाँच, और हिंदी व संताली में QR-सत्यापित प्रमाणपत्र।',
    sat: 'ᱤᱱᱴᱚᱨᱮᱠᱴᱤᱵᱷ ᱢᱚᱰᱭᱩᱞ, ᱵᱩᱡᱷᱟᱹᱣ ᱧᱮᱞ, ᱟᱨ ᱦᱤᱱᱫᱤ ᱟᱨ ᱥᱟᱱᱛᱟᱲᱤ ᱨᱮ QR ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ᱾',
  },
  startTraining: {
    en: 'Start training',
    hi: 'प्रशिक्षण शुरू करें',
    sat: 'ᱥᱮᱪᱮᱫ ᱮᱦᱚᱵ',
  },
  verifyCert: {
    en: 'Verify certificate',
    hi: 'प्रमाणपत्र जाँचें',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ',
  },
  admin: {
    en: 'Compliance admin',
    hi: 'अनुपालन एडमिन',
    sat: 'ᱠᱚᱢᱯᱞᱟᱭᱮᱱᱥ ᱮᱰᱢᱤᱱ',
  },
  modules: {
    en: 'Training modules',
    hi: 'प्रशिक्षण मॉड्यूल',
    sat: 'ᱥᱮᱪᱮᱫ ᱢᱚᱰᱭᱩᱞ',
  },
  arModels: {
    en: 'AR Models',
    hi: 'AR मॉडल',
    sat: 'AR ᱢᱚᱰᱮᱞ',
  },
  wallet: {
    en: 'Certificate wallet',
    hi: 'प्रमाणपत्र वॉलेट',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱣᱟᱞᱮᱴ',
  },
  offline: {
    en: 'Offline',
    hi: 'ऑफ़लाइन',
    sat: 'ᱚᱯᱷᱞᱟᱭᱤᱱ',
  },
  online: {
    en: 'Synced',
    hi: 'सिंक',
    sat: 'ᱥᱤᱝᱠ',
  },
  continue: {
    en: 'Continue',
    hi: 'आगे बढ़ें',
    sat: 'ᱞᱟᱦᱟ',
  },
  pass: {
    en: 'Passed',
    hi: 'उत्तीर्ण',
    sat: 'ᱯᱟᱥ',
  },
  fail: {
    en: 'Retry required',
    hi: 'फिर से प्रयास करें',
    sat: 'ᱫᱚᱦᱲᱟ ᱪᱮᱥᱴᱟ',
  },
  submitQuiz: {
    en: 'Submit assessment',
    hi: 'मूल्यांकन जमा करें',
    sat: 'ᱮᱥᱮᱥᱢᱮᱱᱴ ᱡᱚᱢᱟ',
  },
  startAr: {
    en: 'Enter AR training',
    hi: 'AR प्रशिक्षण शुरू करें',
    sat: 'AR ᱥᱮᱪᱮᱫ ᱮᱦᱚᱵ',
  },
  cameraHint: {
    en: 'Point your phone at the floor or wall — AR overlays appear on your real surroundings.',
    hi: 'फ़ोन को फ़र्श या दीवार की ओर रखें — AR ओवरले आपके आसपास दिखेंगे।',
    sat: 'ᱯᱷᱚᱱ ᱫᱚ ᱚᱛ ᱟᱨᱵᱟᱝ ᱫᱤᱥᱩᱣᱟᱹ ᱥᱮᱫ ᱫᱚᱦᱚᱭ ᱢᱮ — AR ᱳᱵᱷᱚᱨᱞᱮ ᱧᱮᱞᱚᱜᱼᱟ᱾',
  },
  demoNote: {
    en: 'SIH 2026 prototype · PS SIH26041 · Govt. of Jharkhand',
    hi: 'SIH 2026 प्रोटोटाइप · PS SIH26041 · झारखंड सरकार',
    sat: 'SIH 2026 ᱯᱨᱚᱴᱚᱴᱟᱭᱤᱯ · PS SIH26041 · ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱥᱚᱨᱠᱟᱨ',
  },
  govBar: {
    en: 'Department of Higher & Technical Education · Government of Jharkhand',
    hi: 'उच्च एवं तकनीकी शिक्षा विभाग · झारखंड सरकार',
    sat: 'ᱩᱥᱩᱞ ᱟᱨ ᱴᱮᱠᱱᱤᱠᱟᱞ ᱥᱮᱪᱮᱫ ᱵᱤᱵᱷᱟᱜ · ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱥᱚᱨᱠᱟᱨ',
  },
  platformSub: {
    en: 'Industrial Safety Platform',
    hi: 'औद्योगिक सुरक्षा मंच',
    sat: 'ᱤᱱᱰᱚᱥᱴᱨᱤ ᱥᱩᱨᱚᱠᱷᱭᱟ ᱯᱞᱮᱴᱯᱷᱚᱨᱢ',
  },
  signIn: {
    en: 'Sign in',
    hi: 'साइन इन',
    sat: 'ᱥᱟᱭᱤᱱ ᱤᱱ',
  },
  logout: {
    en: 'Log out',
    hi: 'लॉग आउट',
    sat: 'ᱞᱚᱜᱽ ᱟᱭᱩᱴ',
  },
  registerNav: {
    en: 'Register',
    hi: 'रजिस्टर',
    sat: 'ᱨᱮᱡᱤᱥᱴᱚᱨ',
  },
  authAccess: {
    en: 'Account access',
    hi: 'खाता पहुँच',
    sat: 'ᱮᱠᱟᱭᱩᱱᱴ ᱵᱚᱞᱚ',
  },
  loginTitle: {
    en: 'Log in',
    hi: 'लॉग इन',
    sat: 'ᱞᱚᱜᱽ ᱤᱱ',
  },
  loginDesc: {
    en: 'Sign in with your SurakshaAR trainee or supervisor account.',
    hi: 'अपने सुरक्षाAR प्रशिक्षु या पर्यवेक्षक खाते से साइन इन करें।',
    sat: 'ᱥᱩᱨᱚᱠᱷᱭᱟAR ᱮᱠᱟᱭᱩᱱᱴ ᱛᱮ ᱥᱟᱭᱤᱱ ᱤᱱ᱾',
  },
  loginBtn: {
    en: 'Log in',
    hi: 'लॉग इन करें',
    sat: 'ᱞᱚᱜᱽ ᱤᱱ',
  },
  registerTitle: {
    en: 'Create account',
    hi: 'खाता बनाएँ',
    sat: 'ᱮᱠᱟᱭᱩᱱᱴ ᱛᱮᱭᱟᱨ',
  },
  registerDesc: {
    en: 'Register as a Jharkhand industrial trainee to access AR modules and certificates.',
    hi: 'AR मॉड्यूल और प्रमाणपत्र के लिए झारखंड औद्योगिक प्रशिक्षु के रूप में रजिस्टर करें।',
    sat: 'AR ᱢᱚᱰᱭᱩᱞ ᱟᱨ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱞᱟᱹᱜᱤᱫ ᱨᱮᱡᱤᱥᱴᱚᱨ᱾',
  },
  registerBtn: {
    en: 'Create account',
    hi: 'खाता बनाएँ',
    sat: 'ᱮᱠᱟᱭᱩᱱᱴ ᱛᱮᱭᱟᱨ',
  },
  email: {
    en: 'Email',
    hi: 'ईमेल',
    sat: 'ᱤᱢᱮᱞ',
  },
  phone: {
    en: 'Mobile number',
    hi: 'मोबाइल नंबर',
    sat: 'ᱢᱚᱵᱟᱭᱤᱞ',
  },
  confirmPassword: {
    en: 'Confirm password',
    hi: 'पासवर्ड पुष्टि',
    sat: 'ᱯᱟᱥᱣᱚᱨᱰ ᱯᱩᱥᱴᱤ',
  },
  noAccount: {
    en: 'New trainee?',
    hi: 'नए प्रशिक्षु?',
    sat: 'ᱱᱟᱶᱟ ᱴᱨᱮᱱᱤ?',
  },
  haveAccount: {
    en: 'Already registered?',
    hi: 'पहले से रजिस्टर हैं?',
    sat: 'ᱨᱮᱡᱤᱥᱴᱚᱨ ᱢᱮᱱᱟᱜ ᱠᱚᱣᱟ?',
  },
  demoAccounts: {
    en: 'Demo accounts',
    hi: 'डेमो खाते',
    sat: 'ᱰᱮᱢᱚ ᱮᱠᱟᱭᱩᱱᱴ',
  },
  authInvalid: {
    en: 'Invalid email or password.',
    hi: 'गलत ईमेल या पासवर्ड।',
    sat: 'ᱵᱷᱩᱞ ᱤᱢᱮᱞ ᱟᱨᱵᱟᱝ ᱯᱟᱥᱣᱚᱨᱰ᱾',
  },
  authExists: {
    en: 'An account with this email already exists.',
    hi: 'इस ईमेल से खाता पहले से मौजूद है।',
    sat: 'ᱱᱚᱣᱟ ᱤᱢᱮᱞ ᱛᱮ ᱮᱠᱟᱭᱩᱱᱴ ᱢᱮᱱᱟᱜᱼᱟ᱾',
  },
  authMissing: {
    en: 'Please fill all required fields.',
    hi: 'कृपया सभी आवश्यक फ़ील्ड भरें।',
    sat: 'ᱡᱷᱚᱛᱚ ᱯᱷᱤᱞᱰ ᱯᱮᱨᱮᱡ ᱢᱮ᱾',
  },
  authWeakPass: {
    en: 'Password must be at least 6 characters.',
    hi: 'पासवर्ड कम से कम ६ अक्षर का होना चाहिए।',
    sat: 'ᱯᱟᱥᱣᱚᱨᱰ ᱠᱚᱢ ᱠᱟᱛᱮ ᱖ ᱚᱪᱷᱚᱨ᱾',
  },
  authPassMismatch: {
    en: 'Passwords do not match.',
    hi: 'पासवर्ड मेल नहीं खाते।',
    sat: 'ᱯᱟᱥᱣᱚᱨᱰ ᱵᱟᱝ ᱢᱮᱞ᱾',
  },
  loginRequired: {
    en: 'Please log in to continue training.',
    hi: 'प्रशिक्षण जारी रखने के लिए लॉग इन करें।',
    sat: 'ᱥᱮᱪᱮᱫ ᱞᱟᱹᱜᱤᱫ ᱞᱚᱜᱽ ᱤᱱ᱾',
  },
  protoBadge: {
    en: 'Production prototype · Mid-range Android AR · No headset',
    hi: 'प्रोटोटाइप · मिड-रेंज Android AR · हेडसेट नहीं',
    sat: 'ᱯᱨᱚᱴᱚᱴᱟᱭᱤᱯ · Mid-range Android AR · ᱦᱮᱰᱥᱮᱴ ᱵᱟᱹᱱᱩᱜᱼᱟ',
  },
  gapTitle: {
    en: 'The operational gap',
    hi: 'कामकाजी अंतर',
    sat: 'ᱠᱟᱹᱢᱤ ᱨᱮᱭᱟᱜ ᱚᱸᱛᱚᱨ',
  },
  gapHeadline: {
    en: 'Classroom manuals and VR headsets both fail the pit floor',
    hi: 'कक्षा की किताबें और VR हेडसेट दोनों खदान फर्श पर असफल',
    sat: 'ᱠᱞᱟᱥ ᱯᱚᱛᱚᱵ ᱟᱨ VR ᱦᱮᱰᱥᱮᱴ ᱠᱷᱚᱫᱟᱱ ᱨᱮ ᱵᱟᱝ ᱠᱟᱹᱢᱤᱭᱟ',
  },
  gapP1: {
    en: 'Young tribal recruits often arrive with no industrial exposure. Static manuals lose most learners within a week. Live drills interrupt production. Headset simulators stay out of reach for small mines and contract crews.',
    hi: 'युवा आदिवासी भर्ती अक्सर बिना औद्योगिक अनुभव के आते हैं। स्थिर मैनुअल एक सप्ताह में अधिकांश सीख खो देते हैं। लाइव ड्रिल उत्पादन रोकते हैं। छोटे खदानों के लिए हेडसेट सिम्युलेटर पहुँच से बाहर रहते हैं।',
    sat: 'ᱠᱚᱲᱟ ᱟᱹᱫᱤᱵᱟᱹᱥᱤ ᱠᱚ ᱵᱟᱝ ᱤᱱᱰᱚᱥᱴᱨᱤ ᱵᱟᱲᱟᱭ ᱛᱮ ᱦᱤᱡᱩᱜ ᱠᱚᱣᱟ᱾ ᱢᱮᱱᱩᱣᱟᱞ ᱢᱤᱫ ᱦᱟᱯᱛᱟ ᱨᱮ ᱦᱤᱲᱤᱧᱚᱜᱼᱟ᱾ ᱞᱟᱭᱤᱵᱷ ᱰᱨᱤᱞ ᱠᱟᱹᱢᱤ ᱡᱚᱸᱰᱨᱟᱣᱟ᱾ ᱦᱮᱰᱥᱮᱴ ᱦᱩᱰᱤᱧ ᱠᱷᱚᱫᱟᱱ ᱞᱟᱹᱜᱤᱫ ᱵᱟᱝ ᱧᱟᱢᱚᱜᱼᱟ᱾',
  },
  gapP2: {
    en: 'SurakshaAR runs on ordinary Android phones: camera-based AR overlays, assessments that prove comprehension, and certificates supervisors can verify on site — aligned with Factories Act and Mines Act training obligations.',
    hi: 'सुरक्षाAR सामान्य Android फ़ोन पर चलता है: कैमरा-आधारित AR, समझ साबित करने वाले मूल्यांकन, और साइट पर सत्यापित प्रमाणपत्र — कारखाना अधिनियम व खान अधिनियम के अनुरूप।',
    sat: 'ᱥᱩᱨᱚᱠᱷᱭᱟAR ᱥᱟᱫᱷᱟᱨᱚᱱ Android ᱯᱷᱚᱱ ᱨᱮ ᱪᱟᱹᱞᱩᱜᱼᱟ: ᱠᱮᱢᱮᱨᱟ AR, ᱮᱥᱮᱥᱢᱮᱱᱴ, ᱟᱨ ᱥᱟᱭᱤᱴ ᱨᱮ ᱧᱮᱞ ᱫᱟᱲᱮᱭᱟᱜ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ — Factories Act ᱟᱨ Mines Act ᱞᱮᱠᱟ᱾',
  },
  capsTitle: {
    en: 'Platform capabilities',
    hi: 'मंच क्षमताएँ',
    sat: 'ᱯᱞᱮᱴᱯᱷᱚᱨᱢ ᱠᱟᱹᱢᱤ',
  },
  capsHeadline: {
    en: 'Everything required for SIH demonstration — end to end',
    hi: 'SIH प्रदर्शन के लिए आवश्यक सब कुछ — शुरू से अंत तक',
    sat: 'SIH ᱫᱮᱠᱷᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱡᱷᱚᱛᱚ ᱡᱤᱱᱤᱥ — ᱮᱦᱚᱵ ᱠᱷᱚᱱ ᱢᱩᱪᱟᱹᱫ',
  },
  cap1t: {
    en: 'Phone AR modules',
    hi: 'फ़ोन AR मॉड्यूल',
    sat: 'ᱯᱷᱚᱱ AR ᱢᱚᱰᱭᱩᱞ',
  },
  cap1d: {
    en: 'Headset-free training over live camera with 3D safety assets — exits, extinguishers, hazard zones, PPE, buddy protocol.',
    hi: 'लाइव कैमरे पर बिना हेडसेट प्रशिक्षण — निकास, अग्निशामक, खतरा क्षेत्र, PPE, बडी प्रोटोकॉल।',
    sat: 'ᱞᱟᱭᱤᱵᱷ ᱠᱮᱢᱮᱨᱟ ᱨᱮ ᱦᱮᱰᱥᱮᱴ ᱵᱟᱝ — ᱵᱟᱦᱨᱮ, ᱥᱮᱝᱜᱮᱞ ᱵᱚᱸᱫᱚ, ᱠᱷᱚᱛᱨᱟ, PPE, ᱵᱚᱰᱤ ᱯᱨᱚᱴᱚᱠᱚᱞ᱾',
  },
  cap2t: {
    en: 'Assessment engine',
    hi: 'मूल्यांकन इंजन',
    sat: 'ᱮᱥᱮᱥᱢᱮᱱᱴ ᱤᱧᱡᱤᱱ',
  },
  cap2d: {
    en: 'Module-gated quizzes with a 70% pass threshold. Retries allowed; certificates only after demonstrated comprehension.',
    hi: '७०% पास थ्रेशहोल्ड वाले क्विज़। पुनः प्रयास संभव; प्रमाणपत्र केवल समझ साबित होने पर।',
    sat: '᱗᱐% ᱯᱟᱥ ᱛᱮ ᱠᱩᱭᱤᱡ᱾ ᱫᱚᱦᱲᱟ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ; ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱵᱩᱡᱷᱟᱹᱣ ᱛᱟᱭᱚᱢ ᱜᱮ᱾',
  },
  cap3t: {
    en: 'QR certification',
    hi: 'QR प्रमाणन',
    sat: 'QR ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  cap3d: {
    en: 'Digital credentials with public verification URL for employers, trainers, and compliance officers.',
    hi: 'नियोक्ता, प्रशिक्षक और अनुपालन अधिकारियों के लिए सार्वजनिक सत्यापन URL वाले डिजिटल प्रमाण।',
    sat: 'ᱠᱟᱹᱢᱤ ᱮᱢᱚᱜ ᱦᱚᱲ, ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱟᱨ ᱚᱯᱷᱤᱥᱚᱨ ᱞᱟᱹᱜᱤᱫ ᱯᱚᱵᱽᱞᱤᱠ ᱧᱮᱞ URL᱾',
  },
  cap4t: {
    en: 'Regional languages + offline',
    hi: 'क्षेत्रीय भाषाएँ + ऑफ़लाइन',
    sat: 'ᱴᱚᱴᱷᱚ ᱯᱟᱹᱨᱥᱤ + ᱚᱯᱷᱞᱟᱭᱤᱱ',
  },
  cap4d: {
    en: 'English, Hindi, and Santali UI. Training content remains available when connectivity drops.',
    hi: 'अंग्रेज़ी, हिंदी और संताली UI। कनेक्टिविटी गिरने पर भी प्रशिक्षण उपलब्ध।',
    sat: 'ᱤᱝᱞᱤᱥ, ᱦᱤᱱᱫᱤ, ᱥᱟᱱᱛᱟᱲᱤ UI᱾ ᱱᱮᱴ ᱵᱟᱝ ᱛᱮᱦᱚᱸ ᱥᱮᱪᱮᱫ ᱢᱮᱱᱟᱜᱼᱟ᱾',
  },
  curriculum: {
    en: 'Curriculum',
    hi: 'पाठ्यक्रम',
    sat: 'ᱯᱟᱲᱦᱟᱣ',
  },
  fiveDomains: {
    en: 'Five safety domains',
    hi: 'पाँच सुरक्षा क्षेत्र',
    sat: 'ᱢᱚᱬᱮ ᱥᱩᱨᱚᱠᱷᱭᱟ ᱴᱚᱴᱷᱚ',
  },
  openConsole: {
    en: 'Open trainee console',
    hi: 'प्रशिक्षु कंसोल खोलें',
    sat: 'ᱴᱨᱮᱱᱤ ᱠᱚᱱᱥᱚᱞ ᱡᱷᱤᱡ',
  },
  code: { en: 'Code', hi: 'कोड', sat: 'ᱠᱚᱰ' },
  module: { en: 'Module', hi: 'मॉड्यूल', sat: 'ᱢᱚᱰᱭᱩᱞ' },
  domain: { en: 'Domain', hi: 'क्षेत्र', sat: 'ᱴᱚᱴᱷᱚ' },
  status: { en: 'Status', hi: 'स्थिति', sat: 'ᱥᱛᱷᱤᱛᱤ' },
  live: { en: 'Live', hi: 'लाइव', sat: 'ᱞᱟᱭᱤᱵᱷ' },
  scheduled: { en: 'Scheduled', hi: 'निर्धारित', sat: 'ᱛᱟᱺᱜᱤ' },
  ctaTitle: {
    en: 'Ready for evaluator walkthrough',
    hi: 'मूल्यांकनकर्ता डेमो के लिए तैयार',
    sat: 'ᱮᱵᱷᱟᱞᱩᱭᱮᱴᱚᱨ ᱰᱮᱢᱚ ᱞᱟᱹᱜᱤᱫ ᱛᱮᱭᱟᱨ',
  },
  ctaSub: {
    en: 'Trainee flow · AR session · assessment · QR verify · compliance admin',
    hi: 'प्रशिक्षु प्रवाह · AR सत्र · मूल्यांकन · QR जाँच · अनुपालन एडमिन',
    sat: 'ᱴᱨᱮᱱᱤ · AR · ᱮᱥᱮᱥᱢᱮᱱᱴ · QR · ᱮᱰᱢᱤᱱ',
  },
  beginDemo: {
    en: 'Begin trainee demo',
    hi: 'प्रशिक्षु डेमो शुरू करें',
    sat: 'ᱴᱨᱮᱱᱤ ᱰᱮᱢᱚ ᱮᱦᱚᱵ',
  },
  openAdmin: {
    en: 'Open admin',
    hi: 'एडमिन खोलें',
    sat: 'ᱮᱰᱢᱤᱱ ᱡᱷᱤᱡ',
  },
  enrolTitle: {
    en: 'Create training profile',
    hi: 'प्रशिक्षण प्रोफ़ाइल बनाएँ',
    sat: 'ᱥᱮᱪᱮᱫ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱛᱮᱭᱟᱨ',
  },
  enrolEyebrow: {
    en: 'Trainee enrolment',
    hi: 'प्रशिक्षु नामांकन',
    sat: 'ᱴᱨᱮᱱᱤ ᱧᱩᱛᱩᱢ',
  },
  enrolDesc: {
    en: 'Required before module access. Profiles under 30 days on site are flagged for priority orientation.',
    hi: 'मॉड्यूल से पहले आवश्यक। साइट पर ३० दिन से कम प्रोफ़ाइल प्राथमिकता झंडा मिलता है।',
    sat: 'ᱢᱚᱰᱭᱩᱞ ᱢᱟᱲᱟᱝ ᱞᱟᱹᱠᱛᱤ᱾ ᱓᱐ ᱫᱤᱱ ᱠᱷᱚᱱ ᱠᱚᱢ ᱞᱮᱠᱷᱟᱱ ᱯᱨᱟᱭᱚᱨᱤᱴᱤ᱾',
  },
  fullName: {
    en: 'Full legal name',
    hi: 'पूरा कानूनी नाम',
    sat: 'ᱯᱩᱨᱟᱹ ᱧᱩᱛᱩᱢ',
  },
  sector: {
    en: 'Industry sector',
    hi: 'उद्योग क्षेत्र',
    sat: 'ᱤᱱᱰᱚᱥᱴᱨᱤ ᱴᱚᱴᱷᱚ',
  },
  siteUnit: {
    en: 'Site / unit',
    hi: 'साइट / इकाई',
    sat: 'ᱥᱟᱭᱤᱴ / ᱭᱩᱱᱤᱴ',
  },
  daysOnSite: {
    en: 'Days on site',
    hi: 'साइट पर दिन',
    sat: 'ᱥᱟᱭᱤᱴ ᱨᱮ ᱫᱤᱱ',
  },
  uiLang: {
    en: 'Interface language',
    hi: 'इंटरफ़ेस भाषा',
    sat: 'ᱤᱱᱴᱚᱨᱯᱷᱮᱥ ᱯᱟᱹᱨᱥᱤ',
  },
  priorityFlag: {
    en: 'Priority flag: orientation window under 30 days. Complete both live modules before unsupervised site duty.',
    hi: 'प्राथमिकता: ३० दिन से कम अभिविन्यास। बिना निगरानी ड्यूटी से पहले दोनों लाइव मॉड्यूल पूरे करें।',
    sat: 'ᱯᱨᱟᱭᱚᱨᱤᱴᱤ: ᱓᱐ ᱫᱤᱱ ᱠᱷᱚᱱ ᱠᱚᱢ᱾ ᱵᱟᱨᱭᱟ ᱞᱟᱭᱤᱵᱷ ᱢᱚᱰᱭᱩᱞ ᱯᱩᱨᱟᱹᱣ ᱢᱮ᱾',
  },
  welcome: {
    en: 'Welcome',
    hi: 'स्वागत है',
    sat: 'ᱡᱚᱦᱟᱨ',
  },
  certificates: {
    en: 'Certificates',
    hi: 'प्रमाणपत्र',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  modAvailable: {
    en: 'Modules available',
    hi: 'उपलब्ध मॉड्यूल',
    sat: 'ᱢᱮᱱᱟᱜ ᱢᱚᱰᱭᱩᱞ',
  },
  assessPassed: {
    en: 'Assessments passed',
    hi: 'उत्तीर्ण मूल्यांकन',
    sat: 'ᱯᱟᱥ ᱮᱥᱮᱥᱢᱮᱱᱴ',
  },
  certsIssued: {
    en: 'Certificates issued',
    hi: 'जारी प्रमाणपत्र',
    sat: 'ᱮᱢᱟᱠ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  certified: {
    en: 'Certified',
    hi: 'प्रमाणित',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱟᱭᱤᱰ',
  },
  roadmap: {
    en: 'Roadmap',
    hi: 'रोडमैप',
    sat: 'ᱨᱚᱰᱢᱮᱯ',
  },
  unavailable: {
    en: 'Unavailable',
    hi: 'अनुपलब्ध',
    sat: 'ᱵᱟᱝ ᱢᱮᱱᱟᱜ',
  },
  viewCert: {
    en: 'View certificate',
    hi: 'प्रमाणपत्र देखें',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ',
  },
  resume: {
    en: 'Resume',
    hi: 'फिर शुरू',
    sat: 'ᱫᱚᱦᱲᱟ ᱮᱦᱚᱵ',
  },
  startModule: {
    en: 'Start module',
    hi: 'मॉड्यूल शुरू करें',
    sat: 'ᱢᱚᱰᱭᱩᱞ ᱮᱦᱚᱵ',
  },
  daysOnSiteShort: {
    en: 'days on site',
    hi: 'दिन साइट पर',
    sat: 'ᱫᱤᱱ ᱥᱟᱭᱤᱴ ᱨᱮ',
  },
  allModules: {
    en: 'All modules',
    hi: 'सभी मॉड्यूल',
    sat: 'ᱡᱷᱚᱛᱚ ᱢᱚᱰᱭᱩᱞ',
  },
  replayAr: {
    en: 'Replay AR session',
    hi: 'AR सत्र दोबारा चलाएँ',
    sat: 'AR ᱫᱚᱦᱲᱟ',
  },
  openAssess: {
    en: 'Open assessment',
    hi: 'मूल्यांकन खोलें',
    sat: 'ᱮᱥᱮᱥᱢᱮᱱᱴ ᱡᱷᱤᱡ',
  },
  assetsInModule: {
    en: '3D assets in this module',
    hi: 'इस मॉड्यूल में ३डी एसेट',
    sat: 'ᱱᱚᱣᱟ ᱢᱚᱰᱭᱩᱞ ᱨᱮ 3D',
  },
  arSession: {
    en: 'AR session',
    hi: 'AR सत्र',
    sat: 'AR ᱥᱮᱥᱚᱱ',
  },
  stepOf: {
    en: 'Step',
    hi: 'चरण',
    sat: 'ᱥᱴᱮᱯ',
  },
  of: {
    en: 'of',
    hi: 'में से',
    sat: '/',
  },
  done: {
    en: 'done',
    hi: 'पूर्ण',
    sat: 'ᱯᱩᱨᱟᱹᱣ',
  },
  hint: {
    en: 'Hint',
    hi: 'संकेत',
    sat: 'ᱦᱤᱸᱴ',
  },
  incorrect: {
    en: 'Incorrect response — review the hint.',
    hi: 'गलत उत्तर — संकेत देखें।',
    sat: 'ᱵᱷᱩᱞ — ᱦᱤᱸᱴ ᱧᱮᱞᱢᱮ᱾',
  },
  correctAdv: {
    en: 'Correct — advancing.',
    hi: 'सही — आगे बढ़ रहे हैं।',
    sat: 'ᱥᱚᱦᱤ — ᱞᱟᱦᱟ᱾',
  },
  liveCam: {
    en: 'Live camera + 3D overlay',
    hi: 'लाइव कैमरा + ३डी ओवरले',
    sat: 'ᱞᱟᱭᱤᱵᱷ ᱠᱮᱢᱮᱨᱟ + 3D',
  },
  simEnv: {
    en: 'Simulated environment + 3D',
    hi: 'सिम्युलेटेड परिवेश + ३डी',
    sat: 'ᱥᱤᱢᱭᱩᱞᱮᱴᱮᱰ + 3D',
  },
  assessEyebrow: {
    en: 'Assessment',
    hi: 'मूल्यांकन',
    sat: 'ᱮᱥᱮᱥᱢᱮᱱᱴ',
  },
  assessDesc: {
    en: 'Pass threshold {n}%. Certificate issued only after demonstrated comprehension.',
    hi: 'पास थ्रेशहोल्ड {n}%। समझ साबित होने पर ही प्रमाणपत्र।',
    sat: 'ᱯᱟᱥ {n}%᱾ ᱵᱩᱡᱷᱟᱹᱣ ᱛᱟᱭᱚᱢ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ᱾',
  },
  score: { en: 'Score', hi: 'अंक', sat: 'ᱥᱠᱚᱨ' },
  retryAssess: {
    en: 'Retry assessment',
    hi: 'मूल्यांकन फिर करें',
    sat: 'ᱫᱚᱦᱲᱟ ᱮᱥᱮᱥᱢᱮᱱᱴ',
  },
  openCertArrow: {
    en: 'Open certificate →',
    hi: 'प्रमाणपत्र खोलें →',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ →',
  },
  credIssued: {
    en: 'Credential issued',
    hi: 'प्रमाण जारी',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱮᱢᱟᱠ',
  },
  indSafetyCert: {
    en: 'Industrial safety certificate',
    hi: 'औद्योगिक सुरक्षा प्रमाणपत्र',
    sat: 'ᱤᱱᱰᱚᱥᱴᱨᱤ ᱥᱩᱨᱚᱠᱷᱭᱟ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  certDesc: {
    en: 'Assessment-gated digital credential with public QR verification.',
    hi: 'मूल्यांकन-आधारित डिजिटल प्रमाणपत्र, सार्वजनिक QR सत्यापन सहित।',
    sat: 'ᱮᱥᱮᱥᱢᱮᱱᱴ ᱛᱟᱭᱚᱢ ᱰᱤᱡᱤᱴᱟᱞ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ, QR ᱧᱮᱞ᱾',
  },
  govJh: {
    en: 'Government of Jharkhand · SurakshaAR',
    hi: 'झारखंड सरकार · सुरक्षाAR',
    sat: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱥᱚᱨᱠᱟᱨ · ᱥᱩᱨᱚᱠᱷᱭᱟAR',
  },
  verifiedRecord: {
    en: 'Verified record',
    hi: 'सत्यापित रिकॉर्ड',
    sat: 'ᱥᱚᱦᱤ ᱨᱮᱠᱚᱨᱰ',
  },
  certifiesThat: {
    en: 'This certifies that',
    hi: 'यह प्रमाणित करता है कि',
    sat: 'ᱱᱚᱣᱟ ᱥᱟᱹᱨᱤ ᱢᱮᱱᱟᱜᱼᱟ ᱡᱮ',
  },
  demonstratedIn: {
    en: 'has demonstrated comprehension in',
    hi: 'ने इसमें समझ प्रदर्शित की है',
    sat: 'ᱱᱚᱣᱟ ᱨᱮ ᱵᱩᱡᱷᱟᱹᱣ ᱩᱫᱩᱜ ᱟᱠᱟᱫᱟ',
  },
  issued: { en: 'Issued', hi: 'जारी', sat: 'ᱮᱢᱟᱠ' },
  certId: {
    en: 'Certificate ID',
    hi: 'प्रमाणपत्र आईडी',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ID',
  },
  certFoot: {
    en: 'Issued after supervised assessment · Prototype aligned to Mines Act / Factories Act training intent',
    hi: 'पर्यवेक्षित मूल्यांकन के बाद जारी · खान/कारखाना अधिनियम प्रशिक्षण आशय के अनुरूप प्रोटोटाइप',
    sat: 'ᱮᱥᱮᱥᱢᱮᱱᱴ ᱛᱟᱭᱚᱢ ᱮᱢᱟᱠ · Mines/Factories Act ᱞᱮᱠᱟ ᱯᱨᱚᱴᱚᱴᱟᱭᱤᱯ',
  },
  scanVerify: {
    en: 'Scan to verify',
    hi: 'सत्यापित करने के लिए स्कैन करें',
    sat: 'ᱥᱠᱮᱱ ᱠᱟᱛᱮ ᱧᱮᱞ',
  },
  publicVerify: {
    en: 'Public verify page',
    hi: 'सार्वजनिक सत्यापन पृष्ठ',
    sat: 'ᱯᱚᱵᱽᱞᱤᱠ ᱧᱮᱞ ᱥᱟᱦᱟ',
  },
  print: { en: 'Print', hi: 'प्रिंट', sat: 'ᱯᱨᱤᱱᱴ' },
  noCert: {
    en: 'No certificate on file for this module.',
    hi: 'इस मॉड्यूल के लिए कोई प्रमाणपत्र नहीं।',
    sat: 'ᱱᱚᱣᱟ ᱢᱚᱰᱭᱩᱞ ᱞᱟᱹᱜᱤᱫ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱵᱟᱹᱱᱩᱜᱼᱟ᱾',
  },
  completeAssess: {
    en: 'Complete assessment →',
    hi: 'मूल्यांकन पूरा करें →',
    sat: 'ᱮᱥᱮᱥᱢᱮᱱᱴ ᱯᱩᱨᱟᱹᱣ →',
  },
  credentials: {
    en: 'Credentials',
    hi: 'प्रमाण',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  walletDesc: {
    en: 'All assessment-gated certificates issued to this trainee profile.',
    hi: 'इस प्रशिक्षु प्रोफ़ाइल को जारी सभी मूल्यांकन-आधारित प्रमाणपत्र।',
    sat: 'ᱱᱚᱣᱟ ᱴᱨᱮᱱᱤ ᱨᱮᱭᱟᱜ ᱡᱷᱚᱛᱚ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ᱾',
  },
  empty: { en: 'Empty', hi: 'खाली', sat: 'ᱮᱢᱯᱴᱤ' },
  noCertsYet: {
    en: 'No certificates yet.',
    hi: 'अभी कोई प्रमाणपत्र नहीं।',
    sat: 'ᱱᱤᱛᱚᱜ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱵᱟᱹᱱᱩᱜᱼᱟ᱾',
  },
  browseModules: {
    en: 'Browse modules',
    hi: 'मॉड्यूल देखें',
    sat: 'ᱢᱚᱰᱭᱩᱞ ᱧᱮᱞ',
  },
  view: { en: 'View', hi: 'देखें', sat: 'ᱧᱮᱞ' },
  publicRegistry: {
    en: 'Public registry',
    hi: 'सार्वजनिक रजिस्ट्री',
    sat: 'ᱯᱚᱵᱽᱞᱤᱠ ᱨᱮᱡᱤᱥᱴᱨᱤ',
  },
  verifyTitle: {
    en: 'Verify certificate',
    hi: 'प्रमाणपत्र सत्यापित करें',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ',
  },
  verifyDesc: {
    en: 'Confirm worker credentials without relying on paper documents.',
    hi: 'कागज़ी दस्तावेज़ों के बिना श्रमिक प्रमाण की पुष्टि करें।',
    sat: 'ᱠᱟᱜᱚᱡ ᱵᱟᱝ ᱛᱮ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞᱢᱮ᱾',
  },
  pasteId: {
    en: 'Certificate ID',
    hi: 'प्रमाणपत्र आईडी',
    sat: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ID',
  },
  validCert: {
    en: 'Valid certificate',
    hi: 'वैध प्रमाणपत्र',
    sat: 'ᱥᱚᱦᱤ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  noMatch: {
    en: 'No matching record',
    hi: 'कोई मेल नहीं',
    sat: 'ᱵᱟᱝ ᱧᱟᱢᱚᱜ',
  },
  worker: { en: 'Worker', hi: 'श्रमिक', sat: 'ᱠᱟᱹᱢᱤᱭᱟᱹ' },
  restricted: {
    en: 'Restricted',
    hi: 'प्रतिबंधित',
    sat: 'ᱵᱟᱝ ᱵᱚᱞᱚ',
  },
  adminTitle: {
    en: 'Compliance admin',
    hi: 'अनुपालन एडमिन',
    sat: 'ᱠᱚᱢᱯᱞᱟᱭᱮᱱᱥ ᱮᱰᱢᱤᱱ',
  },
  adminLoginDesc: {
    en: 'Site supervisors and auditors only.',
    hi: 'केवल साइट पर्यवेक्षक और लेखा परीक्षक।',
    sat: 'ᱥᱟᱭᱤᱴ ᱥᱩᱯᱚᱨᱵᱷᱟᱭᱤᱡᱚᱨ ᱜᱮ᱾',
  },
  password: {
    en: 'Password',
    hi: 'पासवर्ड',
    sat: 'ᱯᱟᱥᱣᱚᱨᱰ',
  },
  demoAccess: {
    en: 'Demo access',
    hi: 'डेमो पहुँच',
    sat: 'ᱰᱮᱢᱚ ᱵᱚᱞᱚ',
  },
  invalidCreds: {
    en: 'Invalid credentials',
    hi: 'अमान्य क्रेडेंशियल',
    sat: 'ᱵᱷᱩᱞ ᱯᱟᱥᱣᱚᱨᱰ',
  },
  enterDash: {
    en: 'Sign in',
    hi: 'साइन इन',
    sat: 'ᱥᱟᱭᱤᱱ ᱤᱱ',
  },
  operations: {
    en: 'Operations',
    hi: 'संचालन',
    sat: 'ᱠᱟᱹᱢᱤ',
  },
  dashTitle: {
    en: 'Compliance dashboard',
    hi: 'अनुपालन डैशबोर्ड',
    sat: 'ᱠᱚᱢᱯᱞᱟᱭᱮᱱᱥ ᱰᱮᱥᱵᱚᱨᱰ',
  },
  dashDesc: {
    en: 'Training completion across mining, steel, and mica sites.',
    hi: 'खनन, इस्पात और माइका साइटों पर प्रशिक्षण पूर्णता।',
    sat: 'ᱠᱷᱚᱫᱟᱱ, ᱤᱥᱯᱟᱛ, ᱢᱟᱭᱠᱟ ᱥᱟᱭᱤᱴ ᱨᱮ ᱥᱮᱪᱮᱫ᱾',
  },
  exportCsv: {
    en: 'Export CSV',
    hi: 'CSV निर्यात',
    sat: 'CSV ᱮᱠᱥᱯᱚᱨᱴ',
  },
  regWorkers: {
    en: 'Registered workers',
    hi: 'पंजीकृत श्रमिक',
    sat: 'ᱨᱮᱡᱤᱥᱴᱚᱨ ᱠᱟᱹᱢᱤᱭᱟᱹ',
  },
  withCert: {
    en: 'With ≥1 certificate',
    hi: '≥१ प्रमाणपत्र वाले',
    sat: '≥᱑ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  quizAttempts: {
    en: 'Quiz attempts',
    hi: 'क्विज़ प्रयास',
    sat: 'ᱠᱩᱭᱤᱡ ᱪᱮᱥᱴᱟ',
  },
  searchPh: {
    en: 'Search name or site',
    hi: 'नाम या साइट खोजें',
    sat: 'ᱧᱩᱛᱩᱢ ᱟᱨᱵᱟᱝ ᱥᱟᱭᱤᱴ ᱥᱮᱸᱫᱽᱨᱟ',
  },
  allSectors: {
    en: 'All sectors',
    hi: 'सभी क्षेत्र',
    sat: 'ᱡᱷᱚᱛᱚ ᱴᱚᱴᱷᱚ',
  },
  lastActive: {
    en: 'Last active',
    hi: 'अंतिम सक्रिय',
    sat: 'ᱢᱩᱪᱟᱹᱫ ᱠᱟᱹᱢᱤ',
  },
  recentCerts: {
    en: 'Recent certificates',
    hi: 'हाल के प्रमाणपत्र',
    sat: 'ᱱᱤᱛᱚᱜᱟᱜ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
  },
  noCertsSession: {
    en: 'No certificates in this browser session.',
    hi: 'इस ब्राउज़र सत्र में कोई प्रमाणपत्र नहीं।',
    sat: 'ᱱᱚᱣᱟ ᱥᱮᱥᱚᱱ ᱨᱮ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱵᱟᱹᱱᱩᱜᱼᱟ᱾',
  },
  assetLib: {
    en: 'Asset library',
    hi: 'एसेट लाइब्रेरी',
    sat: 'ᱮᱥᱮᱴ ᱞᱟᱭᱵᱽᱨᱮᱨᱤ',
  },
  modelsTitle: {
    en: '3D training models',
    hi: '३डी प्रशिक्षण मॉडल',
    sat: '3D ᱥᱮᱪᱮᱫ ᱢᱚᱰᱮᱞ',
  },
  modelsDesc: {
    en: 'Tap the numbered points on each model to learn what that part is and how it works. Assets also overlay the camera in AR training.',
    hi: 'हर मॉडल पर नंबर वाले बिंदु टैप करें — उस हिस्से का नाम और काम समझें। AR ट्रेनिंग में ये कैमरे पर भी दिखते हैं।',
    sat: 'ᱱᱚᱢᱵᱚᱨ ᱴᱩᱯ ᱛᱮ ᱦᱟᱹᱛᱤᱧ ᱵᱟᱲᱟᱭᱢᱮ᱾ AR ᱨᱮᱦᱚᱸ ᱠᱮᱢᱮᱨᱟ ᱪᱮᱛᱟᱱ ᱧᱮᱞᱚᱜᱼᱟ᱾',
  },
  dragOrbit: {
    en: 'Drag to orbit · tap ● to learn',
    hi: 'घुमाएँ · ● टैप कर सीखें',
    sat: 'ᱜᱷᱩᱨᱟᱹᱣ · ● ᱛᱮ ᱥᱮᱬᱟ',
  },
  tryDemoCert: {
    en: 'Try a demo ID',
    hi: 'डेमो आईडी आज़माएँ',
    sat: 'ᱰᱮᱢᱚ ID ᱪᱮᱥᱴᱟ',
  },
  min: {
    en: 'min',
    hi: 'मिनट',
    sat: 'ᱴᱤᱡ',
  },
}

export function tf(key: string, lang: Lang, vars: Record<string, string | number>): string {
  let s = t(key, lang)
  Object.entries(vars).forEach(([k, v]) => {
    s = s.replace(`{${k}}`, String(v))
  })
  return s
}
