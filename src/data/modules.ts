import type { TrainingModule } from '../types'

export const MODULES: TrainingModule[] = [
  {
    id: 'fire-explosion',
    code: 'SAFE-01',
    domain: 'Fire & Explosion Response',
    title: {
      en: 'Fire & Explosion Response',
      hi: 'अग्नि एवं विस्फोट प्रतिक्रिया',
      sat: 'ᱥᱮᱝᱜᱮᱞ ᱟᱨ ᱯᱷᱚᱴᱟᱣ ᱨᱮᱥᱯᱚᱱᱥ',
    },
    summary: {
      en: 'Identify exits, use extinguishers correctly, and evacuate in the right sequence — overlaid on your real surroundings.',
      hi: 'निकास द्वार पहचानें, अग्निशामक सही उपयोग करें, और सही क्रम में निकासी करें — वास्तविक परिवेश पर ओवरले।',
      sat: 'ᱵᱟᱦᱨᱮ ᱰᱟᱦᱟᱨ ᱧᱮᱞ, ᱥᱮᱝᱜᱮᱞ ᱵᱚᱸᱫᱚᱭ ᱥᱟᱹᱫᱷᱚᱱ ᱵᱮᱵᱷᱟᱨ, ᱟᱨ ᱥᱚᱦᱤ ᱠᱨᱚᱢ ᱛᱮ ᱵᱟᱦᱨᱮᱭᱮᱱ᱾',
    },
    durationMin: 12,
    status: 'available',
    color: '#c4452d',
    icon: 'flame',
    passScore: 70,
    steps: [
      {
        id: 'f1',
        title: {
          en: 'Locate emergency exits',
          hi: 'आपातकालीन निकास खोजें',
          sat: 'ᱮᱢᱚᱨᱡᱮᱱᱥᱤ ᱵᱟᱦᱨᱮ ᱰᱟᱦᱟᱨ ᱧᱮᱞ',
        },
        instruction: {
          en: 'Scan the space. Tap the highlighted EXIT markers in your camera view. Never use lifts during fire.',
          hi: 'स्थान स्कैन करें। कैमरे में हाइलाइट EXIT मार्कर्स पर टैप करें। आग में लिफ्ट न लें।',
          sat: 'ᱡᱟᱭᱜᱟ ᱥᱠᱮᱱ ᱢᱮ᱾ EXIT ᱢᱟᱨᱠᱚᱨ ᱨᱮ ᱴᱮᱯ ᱢᱮ᱾ ᱥᱮᱝᱜᱮᱞ ᱨᱮ ᱞᱤᱯᱷᱴ ᱟᱞᱚᱢ ᱵᱮᱵᱷᱟᱨᱟ᱾',
        },
        hint: {
          en: 'Find both primary and secondary exits.',
          hi: 'प्राथमिक और द्वितीयक दोनों निकास खोजें।',
          sat: 'ᱯᱟᱹᱦᱤᱞ ᱟᱨ ᱫᱚᱥᱟᱨ ᱵᱟᱦᱨᱮ ᱰᱟᱦᱟᱨ ᱧᱮᱞᱢᱮ᱾',
        },
        actionLabel: {
          en: 'Mark exits found',
          hi: 'निकास चिह्नित करें',
          sat: 'ᱵᱟᱦᱨᱮ ᱰᱟᱦᱟᱨ ᱪᱤᱱᱦᱟᱹ',
        },
        overlayType: 'exit',
        choices: [
          { id: 'a', label: { en: 'Use nearest EXIT, avoid lift', hi: 'निकटतम EXIT, लिफ्ट नहीं', sat: 'ᱥᱩᱨ EXIT, ᱞᱤᱯᱷᱴ ᱵᱟᱝ' }, correct: true },
          { id: 'b', label: { en: 'Take the lift to ground', hi: 'लिफ्ट से नीचे जाएँ', sat: 'ᱞᱤᱯᱷᱴ ᱛᱮ ᱞᱟᱛᱟᱨ' }, correct: false },
          { id: 'c', label: { en: 'Wait for announcement only', hi: 'केवल घोषणा का इंतज़ार', sat: 'ᱠᱷᱚᱵᱚᱨ ᱛᱟᱺᱜᱤ' }, correct: false },
        ],
      },
      {
        id: 'f2',
        title: {
          en: 'Extinguisher selection & PASS',
          hi: 'अग्निशामक चयन और PASS',
          sat: 'ᱥᱮᱝᱜᱮᱞ ᱵᱚᱸᱫᱚ ᱟᱨ PASS',
        },
        instruction: {
          en: 'For electrical panel fire, pick CO₂ / clean agent — not water. Then apply PASS: Pull, Aim, Squeeze, Sweep.',
          hi: 'विद्युत पैनल की आग पर पानी नहीं — CO₂ चुनें। फिर PASS: खींचें, निशाना, दबाएँ, झाड़ें।',
          sat: 'ᱤᱞᱮᱠᱴᱨᱤᱠ ᱯᱮᱱᱮᱞ ᱥᱮᱝᱜᱮᱞ ᱨᱮ ᱫᱟᱜ ᱵᱟᱝ — CO₂ ᱵᱟᱪᱷᱟᱣ᱾ ᱤᱱᱟᱹ ᱛᱟᱭᱚᱢ PASS᱾',
        },
        hint: {
          en: 'Wrong extinguisher can spread electrical fire.',
          hi: 'गलत अग्निशामक विद्युत आग बढ़ा सकता है।',
          sat: 'ᱵᱷᱩᱞ ᱥᱟᱫᱷᱚᱱ ᱛᱮ ᱥᱮᱝᱜᱮᱞ ᱰᱷᱮᱨᱚᱜᱼᱟ᱾',
        },
        actionLabel: {
          en: 'Confirm PASS sequence',
          hi: 'PASS क्रम पुष्टि करें',
          sat: 'PASS ᱠᱨᱚᱢ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'extinguisher',
        choices: [
          { id: 'a', label: { en: 'Water extinguisher on panel', hi: 'पैनल पर पानी वाला', sat: 'ᱯᱮᱱᱮᱞ ᱨᱮ ᱫᱟᱜ' }, correct: false },
          { id: 'b', label: { en: 'CO₂ + PASS technique', hi: 'CO₂ + PASS विधि', sat: 'CO₂ + PASS' }, correct: true },
          { id: 'c', label: { en: 'Foam on live wires', hi: 'लाइव तारों पर फोम', sat: 'ᱞᱟᱭᱤᱵᱷ ᱨᱮ ᱯᱷᱚᱢ' }, correct: false },
        ],
      },
      {
        id: 'f3',
        title: {
          en: 'Evacuation sequencing',
          hi: 'निकासी क्रम',
          sat: 'ᱵᱟᱦᱨᱮᱭᱮᱱ ᱠᱨᱚᱢ',
        },
        instruction: {
          en: 'Order the drill: alarm → nearest exit → assembly point → headcount. Stay low if smoke is present.',
          hi: 'क्रम: अलार्म → निकटतम निकास → असेंबली पॉइंट → गणना। धुएँ में झुक कर चलें।',
          sat: 'ᱠᱨᱚᱢ: ᱟᱞᱟᱨᱢ → ᱥᱩᱨ ᱵᱟᱦᱨᱮ → ᱡᱩᱢᱤᱫ ᱡᱟᱭᱜᱟ → ᱦᱤᱥᱟᱹᱵ᱾',
        },
        hint: {
          en: 'Never re-enter until all-clear.',
          hi: 'ऑल-क्लियर तक वापस न जाएँ।',
          sat: 'ᱥᱟᱯᱷᱟ ᱥᱤᱜᱽᱱᱟᱞ ᱫᱷᱟᱹᱵᱤᱡ ᱟᱞᱚᱢ ᱨᱩᱣᱟᱹᱲᱚᱜᱼᱟ᱾',
        },
        actionLabel: {
          en: 'Complete evacuation drill',
          hi: 'निकासी ड्रिल पूर्ण करें',
          sat: 'ᱵᱟᱦᱨᱮᱭᱮᱱ ᱰᱨᱤᱞ ᱯᱩᱨᱟᱹᱣ',
        },
        overlayType: 'evacuate',
        choices: [
          { id: 'a', label: { en: 'Exit → alarm → gather', hi: 'निकास → अलार्म → जमाव', sat: 'ᱵᱟᱦᱨᱮ → ᱟᱞᱟᱨᱢ → ᱡᱩᱢᱤᱫ' }, correct: false },
          { id: 'b', label: { en: 'Alarm → exit → assembly → count', hi: 'अलार्म → निकास → असेंबली → गणना', sat: 'ᱟᱞᱟᱨᱢ → ᱵᱟᱦᱨᱮ → ᱡᱩᱢᱤᱫ → ᱦᱤᱥᱟᱹᱵ' }, correct: true },
          { id: 'c', label: { en: 'Fight fire then exit alone', hi: 'पहले आग बुझाएँ फिर अकेले निकलें', sat: 'ᱯᱟᱹᱦᱤᱞ ᱥᱮᱝᱜᱮᱞ ᱛᱟᱭᱚᱢ ᱮᱠᱞᱟ' }, correct: false },
        ],
      },
      {
        id: 'f4',
        title: {
          en: 'Fire alarm activation',
          hi: 'अग्नि अलार्म सक्रिय करना',
          sat: 'ᱥᱮᱝᱜᱮᱞ ᱟᱞᱟᱨᱢ ᱪᱟᱹᱞᱩ',
        },
        instruction: {
          en: 'Break glass or press the nearest manual call point. Confirm the alarm sounds, then start evacuation — do not delay to investigate.',
          hi: 'निकटतम मैनुअल कॉल पॉइंट दबाएँ या ग्लास तोड़ें। अलार्म सुनाई देने पर निकासी शुरू करें — जाँच में देरी न करें।',
          sat: 'ᱥᱩᱨ ᱠᱚᱞ ᱯᱚᱭᱮᱱᱴ ᱚᱛᱟᱭ ᱢᱮ᱾ ᱟᱞᱟᱨᱢ ᱟᱸᱡᱚᱢ ᱛᱟᱭᱚᱢ ᱵᱟᱦᱨᱮᱭᱮᱱ — ᱟᱞᱚᱢ ᱵᱤᱞᱚᱢᱟ᱾',
        },
        hint: {
          en: 'Raise the alarm before fighting a small fire.',
          hi: 'छोटी आग बुझाने से पहले अलार्म बजाएँ।',
          sat: 'ᱥᱮᱝᱜᱮᱞ ᱵᱚᱸᱫᱚ ᱢᱟᱲᱟᱝ ᱟᱞᱟᱨᱢ᱾',
        },
        actionLabel: {
          en: 'Confirm alarm raised',
          hi: 'अलार्म पुष्टि करें',
          sat: 'ᱟᱞᱟᱨᱢ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'alarm',
        choices: [
          { id: 'a', label: { en: 'Activate call point, then evacuate', hi: 'कॉल पॉइंट सक्रिय, फिर निकासी', sat: 'ᱠᱚᱞ ᱯᱚᱭᱮᱱᱴ ᱛᱟᱭᱚᱢ ᱵᱟᱦᱨᱮ' }, correct: true },
          { id: 'b', label: { en: 'Silence alarm and keep working', hi: 'अलार्म बंद कर काम जारी', sat: 'ᱟᱞᱟᱨᱢ ᱵᱚᱸᱫᱚ ᱠᱟᱹᱢᱤ' }, correct: false },
          { id: 'c', label: { en: 'Wait for someone else to raise it', hi: 'दूसरे के सक्रिय करने का इंतज़ार', sat: 'ᱮᱴᱟᱜ ᱦᱚᱲ ᱛᱟᱺᱜᱤ' }, correct: false },
        ],
      },
      {
        id: 'f5',
        title: {
          en: 'Stay low under smoke',
          hi: 'धुएँ के नीचे झुक कर रहें',
          sat: 'ᱫᱷᱩᱵᱟᱹᱣ ᱞᱟᱛᱟᱨ ᱛᱮ',
        },
        instruction: {
          en: 'Smoke rises. Crouch or crawl with your nose near the floor, cover mouth lightly, and move toward the exit along the wall.',
          hi: 'धुआँ ऊपर उठता है। फर्श के पास झुककर/रेंगकर चलें, मुँह ढकें, दीवार के सहारे निकास की ओर जाएँ।',
          sat: 'ᱫᱷᱩᱵᱟᱹᱣ ᱪᱮᱛᱟᱱ᱾ ᱞᱟᱛᱟᱨ ᱛᱮ ᱠᱟᱹᱴᱤᱡ, ᱢᱚᱪᱟ ᱵᱚᱸᱫᱚ, ᱵᱷᱤᱛ ᱥᱟᱶ ᱵᱟᱦᱨᱮ᱾',
        },
        hint: {
          en: 'Cleaner air is closer to the floor.',
          hi: 'साफ हवा फर्श के पास होती है।',
          sat: 'ᱥᱟᱯᱷᱟ ᱦᱚᱭ ᱞᱟᱛᱟᱨ ᱨᱮ᱾',
        },
        actionLabel: {
          en: 'Practise smoke crawl',
          hi: 'स्मोक क्रॉल अभ्यास',
          sat: 'ᱫᱷᱩᱵᱟᱹᱣ ᱠᱨᱚᱞ ᱯᱨᱮᱠᱴᱤᱥ',
        },
        overlayType: 'smoke_crawl',
        choices: [
          { id: 'a', label: { en: 'Stand tall to see over smoke', hi: 'धुएँ के ऊपर देखने सीधा खड़े', sat: 'ᱥᱤᱛᱩᱝ ᱛᱤᱸᱜᱩ' }, correct: false },
          { id: 'b', label: { en: 'Crawl low along wall to exit', hi: 'दीवार के साथ झुककर निकास', sat: 'ᱞᱟᱛᱟᱨ ᱛᱮ ᱵᱟᱦᱨᱮ' }, correct: true },
          { id: 'c', label: { en: 'Run upright through thick smoke', hi: 'घने धुएँ में सीधा दौड़ें', sat: 'ᱫᱟᱹᱲ ᱥᱤᱛᱩᱝ' }, correct: false },
        ],
      },
      {
        id: 'f6',
        title: {
          en: 'Muster at assembly point',
          hi: 'असेंबली पॉइंट पर जमाव',
          sat: 'ᱡᱩᱢᱤᱫ ᱡᱟᱭᱜᱟ ᱨᱮ',
        },
        instruction: {
          en: 'After exiting, go straight to the marked assembly / muster point. Report to the roll-call lead and stay until all-clear.',
          hi: 'निकासी के बाद चिह्नित असेंबली/मस्टर पॉइंट पर जाएँ। रोल-कॉल लीड को रिपोर्ट करें और ऑल-क्लियर तक रुकें।',
          sat: 'ᱵᱟᱦᱨᱮ ᱛᱟᱭᱚᱢ ᱡᱩᱢᱤᱫ ᱡᱟᱭᱜᱟ᱾ ᱨᱚᱞ-ᱠᱚᱞ ᱨᱤᱯᱚᱨᱴ ᱟᱨ ᱥᱟᱯᱷᱟ ᱫᱷᱟᱹᱵᱤᱡ ᱛᱟᱦᱮᱸᱱ᱾',
        },
        hint: {
          en: 'Do not re-enter to fetch belongings.',
          hi: 'सामान लेने वापस न जाएँ।',
          sat: 'ᱡᱤᱱᱤᱥ ᱞᱟᱹᱜᱤᱫ ᱟᱞᱚᱢ ᱨᱩᱣᱟᱹᱲᱚᱜᱼᱟ᱾',
        },
        actionLabel: {
          en: 'Confirm at muster point',
          hi: 'मस्टर पॉइंट पुष्टि',
          sat: 'ᱡᱩᱢᱤᱫ ᱡᱟᱭᱜᱟ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'assembly',
        choices: [
          { id: 'a', label: { en: 'Go home without headcount', hi: 'गिनती बिना घर जाएँ', sat: 'ᱦᱤᱥᱟᱹᱵ ᱵᱟᱝ ᱚᱲᱟᱜ' }, correct: false },
          { id: 'b', label: { en: 'Report at assembly, await all-clear', hi: 'असेंबली पर रिपोर्ट, ऑल-क्लियर प्रतीक्षा', sat: 'ᱡᱩᱢᱤᱫ ᱨᱤᱯᱚᱨᱴ, ᱥᱟᱯᱷᱟ ᱛᱟᱺᱜᱤ' }, correct: true },
          { id: 'c', label: { en: 'Return inside for tools', hi: 'औज़ार के लिए अंदर लौटें', sat: 'ᱥᱟᱢᱟᱱ ᱞᱟᱹᱜᱤᱫ ᱨᱩᱣᱟᱹᱲ' }, correct: false },
        ],
      },
    ],
    quiz: [
      {
        id: 'fq1',
        question: {
          en: 'During a fire, which route should you prefer?',
          hi: 'आग के दौरान कौन सा मार्ग चुनें?',
          sat: 'ᱥᱮᱝᱜᱮᱞ ᱨᱮ ᱚᱠᱟ ᱰᱟᱦᱟᱨ?',
        },
        options: {
          en: ['Nearest marked EXIT stairs', 'Lift to ground floor', 'Window without latch', 'Back into smoke to save tools'],
          hi: ['निकटतम चिह्नित EXIT सीढ़ियाँ', 'लिफ्ट से नीचे', 'बिना कुंडी की खिड़की', 'औज़ार बचाने धुएँ में वापस'],
          sat: ['ᱥᱩᱨ EXIT ᱥᱤᱲᱤ', 'ᱞᱤᱯᱷᱴ', 'ᱣᱤᱱᱰᱚ', 'ᱥᱟᱢᱟᱱ ᱞᱟᱹᱜᱤᱫ ᱨᱩᱣᱟᱹᱲ'],
        },
        correctIndex: 0,
      },
      {
        id: 'fq2',
        question: {
          en: 'PASS in extinguisher use stands for?',
          hi: 'अग्निशामक PASS का अर्थ?',
          sat: 'PASS ᱨᱮᱭᱟᱜ ᱢᱮᱱᱮᱛ?',
        },
        options: {
          en: ['Pull Aim Squeeze Sweep', 'Push And Spray Strong', 'Pick Alarm Stop Shout', 'Point Activate Seal Seal'],
          hi: ['Pull Aim Squeeze Sweep', 'Push And Spray Strong', 'Pick Alarm Stop Shout', 'Point Activate Seal Seal'],
          sat: ['Pull Aim Squeeze Sweep', 'Push And Spray Strong', 'Pick Alarm Stop Shout', 'Point Activate Seal Seal'],
        },
        correctIndex: 0,
      },
      {
        id: 'fq3',
        question: {
          en: 'Best extinguisher class for electrical panel fire?',
          hi: 'विद्युत पैनल आग के लिए सही अग्निशामक?',
          sat: 'ᱤᱞᱮᱠᱴᱨᱤᱠ ᱯᱮᱱᱮᱞ ᱥᱮᱝᱜᱮᱞ ᱞᱟᱹᱜᱤᱫ?',
        },
        options: {
          en: ['Water', 'CO₂ / clean agent', 'Wet chemical only', 'Sand only'],
          hi: ['पानी', 'CO₂ / क्लीन एजेंट', 'केवल वेट केमिकल', 'केवल रेत'],
          sat: ['ᱫᱟᱜ', 'CO₂', 'ᱣᱮᱴ ᱠᱮᱢᱤᱠᱟᱞ', 'ᱵᱟᱞᱤ'],
        },
        correctIndex: 1,
      },
      {
        id: 'fq4',
        question: {
          en: 'Correct evacuation order starts with?',
          hi: 'सही निकासी क्रम किससे शुरू?',
          sat: 'ᱥᱚᱦᱤ ᱵᱟᱦᱨᱮᱭᱮᱱ ᱚᱠᱟ ᱠᱷᱚᱱ?',
        },
        options: {
          en: ['Alarm activation', 'Personal belongings', 'Photo for social media', 'Fighting alone'],
          hi: ['अलार्म सक्रिय करना', 'निजी सामान', 'सोशल मीडिया फ़ोटो', 'अकेले लड़ना'],
          sat: ['ᱟᱞᱟᱨᱢ', 'ᱱᱤᱡᱮᱨ ᱡᱤᱱᱤᱥ', 'ᱯᱷᱚᱴᱚ', 'ᱮᱠᱞᱟ ᱞᱟᱹᱲᱦᱟᱹᱭ'],
        },
        correctIndex: 0,
      },
      {
        id: 'fq5',
        question: {
          en: 'In smoke-filled corridor you should?',
          hi: 'धुएँ भरे कॉरिडोर में क्या करें?',
          sat: 'ᱫᱷᱩᱵᱟᱹᱣ ᱠᱚᱨᱤᱰᱚᱨ ᱨᱮ?',
        },
        options: {
          en: ['Stay low and crawl to exit', 'Stand tall to see better', 'Run randomly', 'Hide under machinery'],
          hi: ['झुक कर निकास की ओर रेंगें', 'बेहतर दिखने सीधा खड़े रहें', 'बेतरतीब दौड़ें', 'मशीनरी के नीचे छुपें'],
          sat: ['ᱞᱟᱛᱟᱨ ᱛᱮ ᱵᱟᱦᱨᱮ', 'ᱥᱤᱛᱩᱝ ᱛᱤᱸᱜᱩ', 'ᱫᱟᱹᱲ', 'ᱢᱮᱥᱤᱱ ᱞᱟᱛᱟᱨ'],
        },
        correctIndex: 0,
      },
    ],
  },
  {
    id: 'gas-confined',
    code: 'SAFE-02',
    domain: 'Gas Leak & Confined Space',
    title: {
      en: 'Gas Leak & Confined Space Protocol',
      hi: 'गैस लीक और सीमित स्थान प्रोटोकॉल',
      sat: 'ᱜᱮᱥ ᱞᱤᱠ ᱟᱨ ᱠᱚᱱᱯᱷᱟᱭᱤᱱᱰ ᱥᱯᱮᱥ',
    },
    summary: {
      en: 'Recognise hazard zones, select correct PPE, and practise buddy-system entry — simulated in AR.',
      hi: 'खतरा क्षेत्र पहचानें, सही PPE चुनें, और बडी-सिस्टम एंट्री अभ्यास करें — AR में।',
      sat: 'ᱠᱷᱚᱛᱨᱟ ᱡᱟᱭᱜᱟ, PPE, ᱟᱨ ᱵᱚᱰᱤ-ᱥᱤᱥᱴᱚᱢ — AR ᱨᱮ᱾',
    },
    durationMin: 14,
    status: 'available',
    color: '#2d6a4f',
    icon: 'wind',
    passScore: 70,
    steps: [
      {
        id: 'g1',
        title: {
          en: 'Hazard zone recognition',
          hi: 'खतरा क्षेत्र पहचान',
          sat: 'ᱠᱷᱚᱛᱨᱟ ᱡᱟᱭᱜᱟ ᱪᱤᱱᱦᱟᱹ',
        },
        instruction: {
          en: 'Hot zone = leak source. Warm = restricted. Cold = safe muster. Do not enter hot zone without clearance.',
          hi: 'हॉट ज़ोन = लीक स्रोत। वार्म = प्रतिबंधित। कोल्ड = सुरक्षित जमाव। अनुमति बिना हॉट में न जाएँ।',
          sat: 'ᱦᱚᱴ = ᱞᱤᱠ᱾ ᱣᱟᱨᱢ = ᱵᱟᱝ ᱵᱚᱞᱚ᱾ ᱠᱚᱞᱰ = ᱥᱟᱯᱷᱟ᱾',
        },
        hint: {
          en: 'Smell is not a reliable detector for all gases.',
          hi: 'सभी गैसों के लिए गंध भरोसेमंद नहीं।',
          sat: 'ᱡᱚᱛᱚ ᱜᱮᱥ ᱨᱮᱭᱟᱜ ᱜᱚᱸᱫᱷᱚ ᱵᱟᱝ ᱧᱮᱞᱚᱜᱼᱟ᱾',
        },
        actionLabel: {
          en: 'Map the zones',
          hi: 'ज़ोन मैप करें',
          sat: 'ᱡᱚᱱ ᱢᱮᱯ',
        },
        overlayType: 'hazard',
        choices: [
          { id: 'a', label: { en: 'Walk into hot zone to check', hi: 'जाँच के लिए हॉट ज़ोन में जाएँ', sat: 'ᱦᱚᱴ ᱨᱮ ᱵᱚᱞᱚ' }, correct: false },
          { id: 'b', label: { en: 'Stay cold zone, report & isolate', hi: 'कोल्ड ज़ोन में रहकर रिपोर्ट व अलग करें', sat: 'ᱠᱚᱞᱰ ᱨᱮ ᱨᱤᱯᱚᱨᱴ' }, correct: true },
          { id: 'c', label: { en: 'Ignore mild smell', hi: 'हल्की गंध नज़रअंदाज़', sat: 'ᱜᱚᱸᱫᱷᱚ ᱵᱟᱝ ᱟᱸᱡᱚᱢ' }, correct: false },
        ],
      },
      {
        id: 'g2',
        title: {
          en: 'PPE selection',
          hi: 'PPE चयन',
          sat: 'PPE ᱵᱟᱪᱷᱟᱣ',
        },
        instruction: {
          en: 'Confined space entry needs: helmet, gas detector, harness, correct respirator, gloves, and radio link to attendant.',
          hi: 'सीमित स्थान: हेलमेट, गैस डिटेक्टर, हार्नेस, सही रेस्पिरेटर, दस्ताने, अटेंडेंट से रेडियो।',
          sat: 'ᱦᱮᱞᱢᱮᱴ, ᱜᱮᱥ ᱰᱤᱴᱮᱠᱴᱚᱨ, ᱦᱟᱨᱱᱮᱥ, ᱨᱮᱥᱯᱤᱨᱮᱴᱚᱨ, ᱜᱞᱚᱵᱷᱥ, ᱨᱮᱰᱤᱭᱚ᱾',
        },
        hint: {
          en: 'Cotton mask is not enough for toxic gas.',
          hi: 'ज़हरीली गैस के लिए कॉटन मास्क पर्याप्त नहीं।',
          sat: 'ᱠᱚᱴᱚᱱ ᱢᱟᱥᱠ ᱵᱟᱝ ᱥᱚᱢᱟᱱ᱾',
        },
        actionLabel: {
          en: 'Confirm PPE kit',
          hi: 'PPE किट पुष्टि करें',
          sat: 'PPE ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'ppe',
        choices: [
          { id: 'a', label: { en: 'Cloth mask + slippers', hi: 'कपड़े का मास्क + चप्पल', sat: 'ᱠᱟᱯᱲᱟ ᱢᱟᱥᱠ' }, correct: false },
          { id: 'b', label: { en: 'Full kit: detector, harness, respirator', hi: 'पूर्ण किट: डिटेक्टर, हार्नेस, रेस्पिरेटर', sat: 'ᱯᱩᱨᱟᱹ ᱠᱤᱴ' }, correct: true },
          { id: 'c', label: { en: 'Helmet only', hi: 'केवल हेलमेट', sat: 'ᱦᱮᱞᱢᱮᱴ ᱜᱮ' }, correct: false },
        ],
      },
      {
        id: 'g3',
        title: {
          en: 'Buddy-system procedure',
          hi: 'बडी-सिस्टम प्रक्रिया',
          sat: 'ᱵᱚᱰᱤ-ᱥᱤᱥᱴᱚᱢ',
        },
        instruction: {
          en: 'Attendant stays outside with radio. Entrant signals every 2 minutes. Rescue only with trained team — never alone.',
          hi: 'अटेंडेंट बाहर रेडियो के साथ। प्रवेशी हर 2 मिनट सिग्नल। बचाव केवल प्रशिक्षित टीम — अकेले नहीं।',
          sat: 'ᱟᱴᱮᱱᱰᱮᱱᱴ ᱵᱟᱦᱨᱮ᱾ ᱒ ᱴᱤᱡ ᱥᱤᱜᱽᱱᱟᱞ᱾ ᱮᱠᱞᱟ ᱵᱟᱝ ᱨᱮᱥᱠᱭᱩ᱾',
        },
        hint: {
          en: 'Most confined-space deaths are would-be rescuers.',
          hi: 'अधिकांश मौतें बचाने गए लोगों की होती हैं।',
          sat: 'ᱟᱭᱢᱟ ᱜᱮ ᱨᱮᱥᱠᱭᱩᱣᱟᱨ ᱜᱮ ᱜᱚᱡᱚᱜ ᱠᱚᱣᱟ᱾',
        },
        actionLabel: {
          en: 'Lock buddy checklist',
          hi: 'बडी चेकलिस्ट लॉक करें',
          sat: 'ᱵᱚᱰᱤ ᱪᱮᱠᱞᱤᱥᱴ',
        },
        overlayType: 'buddy',
        choices: [
          { id: 'a', label: { en: 'Enter alone to finish faster', hi: 'जल्दी खत्म करने अकेले प्रवेश', sat: 'ᱮᱠᱞᱟ ᱵᱚᱞᱚ' }, correct: false },
          { id: 'b', label: { en: 'Attendant outside + timed signals', hi: 'बाहर अटेंडेंट + समयबद्ध सिग्नल', sat: 'ᱟᱴᱮᱱᱰᱮᱱᱴ + ᱥᱤᱜᱽᱱᱟᱞ' }, correct: true },
          { id: 'c', label: { en: 'Untrained peer pulls you out', hi: 'अप्रशिक्षित साथी बाहर खींचे', sat: 'ᱵᱟᱝ ᱥᱮᱪᱮᱫ ᱜᱟᱛᱮ' }, correct: false },
        ],
      },
      {
        id: 'g4',
        title: {
          en: 'Gas meter pre-entry check',
          hi: 'प्रवेश से पहले गैस मीटर जाँच',
          sat: 'ᱜᱮᱥ ᱢᱤᱴᱚᱨ ᱧᱮᱞ',
        },
        instruction: {
          en: 'Bump-test and zero the multi-gas meter in clean air. Monitor O₂, LEL, H₂S, and CO before and during entry.',
          hi: 'साफ हवा में मल्टी-गैस मीटर बम्प-टेस्ट और ज़ीरो करें। प्रवेश से पहले और दौरान O₂, LEL, H₂S, CO मॉनिटर करें।',
          sat: 'ᱥᱟᱯᱷᱟ ᱦᱚᱭ ᱨᱮ ᱢᱤᱴᱚᱨ ᱴᱮᱥᱴ᱾ O₂, LEL, H₂S, CO ᱧᱮᱞ᱾',
        },
        hint: {
          en: 'Never enter if O₂ is outside safe range or LEL is rising.',
          hi: 'O₂ सुरक्षित सीमा से बाहर या LEL बढ़े तो प्रवेश न करें।',
          sat: 'O₂ / LEL ᱵᱟᱝ ᱥᱟᱯᱷᱟ ᱞᱮᱠᱷᱟᱱ ᱟᱞᱚᱢ ᱵᱚᱞᱚ᱾',
        },
        actionLabel: {
          en: 'Confirm meter reading',
          hi: 'मीटर रीडिंग पुष्टि',
          sat: 'ᱢᱤᱴᱚᱨ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'gas_meter',
        choices: [
          { id: 'a', label: { en: 'Enter without testing meter', hi: 'मीटर जाँच बिना प्रवेश', sat: 'ᱴᱮᱥᱴ ᱵᱟᱝ ᱵᱚᱞᱚ' }, correct: false },
          { id: 'b', label: { en: 'Bump-test, verify O₂/LEL, then proceed', hi: 'बम्प-टेस्ट, O₂/LEL जाँच, फिर आगे', sat: 'ᱴᱮᱥᱴ + O₂/LEL ᱛᱟᱭᱚᱢ' }, correct: true },
          { id: 'c', label: { en: 'Trust smell instead of meter', hi: 'मीटर की जगह गंध पर भरोसा', sat: 'ᱜᱚᱸᱫᱷᱚ ᱜᱮ ᱵᱷᱚᱨᱚᱥᱟ' }, correct: false },
        ],
      },
      {
        id: 'g5',
        title: {
          en: 'Respirator fit & selection',
          hi: 'रेस्पिरेटर फिट और चयन',
          sat: 'ᱨᱮᱥᱯᱤᱨᱮᱴᱚᱨ ᱵᱟᱪᱷᱟᱣ',
        },
        instruction: {
          en: 'Match cartridge/SCBA to the hazard. Perform a seal check. Cloth masks are not approved for toxic or oxygen-deficient atmospheres.',
          hi: 'खतरे के अनुसार कार्ट्रिज/SCBA चुनें। सील चेक करें। ज़हरीली या ऑक्सीजन-कम हवा के लिए कपड़े का मास्क स्वीकृत नहीं।',
          sat: 'ᱠᱷᱚᱛᱨᱟ ᱞᱮᱠᱟ ᱨᱮᱥᱯᱤᱨᱮᱴᱚᱨ᱾ ᱥᱤᱞ ᱪᱮᱠ᱾ ᱠᱟᱯᱲᱟ ᱢᱟᱥᱠ ᱵᱟᱝ᱾',
        },
        hint: {
          en: 'Beard or loose straps break the seal.',
          hi: 'दाढ़ी या ढीली पट्टियाँ सील तोड़ती हैं।',
          sat: 'ᱫᱟᱹᱲᱤ / ᱰᱷᱤᱞᱟ ᱥᱴᱨᱮᱯ ᱥᱤᱞ ᱨᱟᱹᱯᱩᱫ᱾',
        },
        actionLabel: {
          en: 'Confirm respirator ready',
          hi: 'रेस्पिरेटर तैयार पुष्टि',
          sat: 'ᱨᱮᱥᱯᱤᱨᱮᱴᱚᱨ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'respirator',
        choices: [
          { id: 'a', label: { en: 'Cloth mask is enough', hi: 'कपड़े का मास्क काफी', sat: 'ᱠᱟᱯᱲᱟ ᱢᱟᱥᱠ ᱥᱚᱢᱟᱱ' }, correct: false },
          { id: 'b', label: { en: 'Correct respirator + seal check', hi: 'सही रेस्पिरेटर + सील चेक', sat: 'ᱥᱚᱦᱤ ᱨᱮᱥᱯᱤᱨᱮᱴᱚᱨ + ᱥᱤᱞ' }, correct: true },
          { id: 'c', label: { en: 'Skip respirator if smell is mild', hi: 'हल्की गंध पर रेस्पिरेटर छोड़ें', sat: 'ᱞᱮᱛᱟᱲ ᱜᱚᱸᱫᱷᱚ ᱨᱮ ᱵᱟᱝ' }, correct: false },
        ],
      },
      {
        id: 'g6',
        title: {
          en: 'Tripod & retrieval setup',
          hi: 'ट्राइपॉड और रिट्रीवल सेटअप',
          sat: 'ᱴᱨᱟᱭᱯᱚᱰ ᱟᱨ ᱨᱤᱴᱨᱤᱵᱷᱟᱞ',
        },
        instruction: {
          en: 'Position the tripod over the opening, attach the retractable lifeline to the harness, and keep a trained attendant on the winch.',
          hi: 'ट्राइपॉड को खुले मुँह पर लगाएँ, हार्नेस से लाइफलाइन जोड़ें, और विन्च पर प्रशिक्षित अटेंडेंट रखें।',
          sat: 'ᱴᱨᱟᱭᱯᱚᱰ ᱫᱚᱦᱚ, ᱦᱟᱨᱱᱮᱥ ᱨᱮ ᱞᱟᱭᱤᱯᱞᱟᱭᱤᱱ, ᱟᱴᱮᱱᱰᱮᱱᱴ ᱣᱤᱱᱪ ᱨᱮ᱾',
        },
        hint: {
          en: 'Retrieval gear must be ready before anyone enters.',
          hi: 'किसी के प्रवेश से पहले रिट्रीवल गियर तैयार हो।',
          sat: 'ᱵᱚᱞᱚ ᱢᱟᱲᱟᱝ ᱨᱤᱴᱨᱤᱵᱷᱟᱞ ᱥᱟᱡᱟᱣ᱾',
        },
        actionLabel: {
          en: 'Lock tripod checklist',
          hi: 'ट्राइपॉड चेकलिस्ट लॉक',
          sat: 'ᱴᱨᱟᱭᱯᱚᱰ ᱪᱮᱠᱞᱤᱥᱴ',
        },
        overlayType: 'tripod',
        choices: [
          { id: 'a', label: { en: 'Enter with rope only, no tripod', hi: 'केवल रस्सी, बिना ट्राइपॉड', sat: 'ᱨᱚᱥᱤ ᱜᱮ, ᱴᱨᱟᱭᱯᱚᱰ ᱵᱟᱝ' }, correct: false },
          { id: 'b', label: { en: 'Tripod + lifeline + attendant on winch', hi: 'ट्राइपॉड + लाइफलाइन + विन्च पर अटेंडेंट', sat: 'ᱴᱨᱟᱭᱯᱚᱰ + ᱞᱟᱭᱤᱯᱞᱟᱭᱤᱱ + ᱟᱴᱮᱱᱰᱮᱱᱴ' }, correct: true },
          { id: 'c', label: { en: 'Set up retrieval after entry', hi: 'प्रवेश के बाद रिट्रीवल लगाएँ', sat: 'ᱵᱚᱞᱚ ᱛᱟᱭᱚᱢ ᱥᱟᱡᱟᱣ' }, correct: false },
        ],
      },
      {
        id: 'g7',
        title: {
          en: 'Forced ventilation',
          hi: 'जबरदस्ती वेंटिलेशन',
          sat: 'ᱵᱷᱮᱱᱴᱤᱞᱮᱥᱚᱱ',
        },
        instruction: {
          en: 'Purge the space with blowers before entry. Keep ventilation running while occupied and re-test atmosphere after any interruption.',
          hi: 'प्रवेश से पहले ब्लोअर से स्थान साफ करें। अंदर रहने तक वेंटिलेशन चालू रखें और रुकावट के बाद वातावरण फिर जाँचें।',
          sat: 'ᱵᱚᱞᱚ ᱢᱟᱲᱟᱝ ᱵᱞᱚᱣᱟᱨ᱾ ᱵᱷᱤᱛᱨᱤ ᱨᱮ ᱦᱚᱸ ᱪᱟᱹᱞᱩ ᱫᱚᱦᱚ᱾ ᱛᱟᱭᱚᱢ ᱫᱚᱦᱲᱟ ᱴᱮᱥᱴ᱾',
        },
        hint: {
          en: 'Ventilation does not replace continuous gas monitoring.',
          hi: 'वेंटिलेशन गैस मॉनिटरिंग की जगह नहीं लेता।',
          sat: 'ᱵᱷᱮᱱᱴᱤᱞᱮᱥᱚᱱ ᱢᱤᱴᱚᱨ ᱵᱟᱝ ᱵᱚᱫᱚᱞᱟ᱾',
        },
        actionLabel: {
          en: 'Confirm ventilation running',
          hi: 'वेंटिलेशन चालू पुष्टि',
          sat: 'ᱵᱷᱮᱱᱴᱤᱞᱮᱥᱚᱱ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'ventilation',
        choices: [
          { id: 'a', label: { en: 'Skip purge if space looks empty', hi: 'खाली दिखे तो पर्ज छोड़ें', sat: 'ᱮᱢᱯᱴᱤ ᱞᱮᱠᱷᱟᱱ ᱵᱟᱝ ᱯᱚᱨᱡ' }, correct: false },
          { id: 'b', label: { en: 'Purge, keep fans on, re-test air', hi: 'पर्ज, पंखे चालू, हवा फिर जाँच', sat: 'ᱯᱚᱨᱡ + ᱯᱷᱮᱱ + ᱫᱚᱦᱲᱟ ᱴᱮᱥᱴ' }, correct: true },
          { id: 'c', label: { en: 'Ventilate only after alarm', hi: 'केवल अलार्म के बाद वेंटिलेट', sat: 'ᱟᱞᱟᱨᱢ ᱛᱟᱭᱚᱢ ᱜᱮ' }, correct: false },
        ],
      },
    ],
    quiz: [
      {
        id: 'gq1',
        question: {
          en: 'Hot zone means?',
          hi: 'हॉट ज़ोन का मतलब?',
          sat: 'ᱦᱚᱴ ᱡᱚᱱ ᱢᱮᱱᱮᱛ?',
        },
        options: {
          en: ['Leak / contamination source', 'Canteen area', 'Parking lot', 'Office cabin'],
          hi: ['लीक / संदूषण स्रोत', 'कैंटीन', 'पार्किंग', 'ऑफिस केबिन'],
          sat: ['ᱞᱤᱠ ᱡᱟᱭᱜᱟ', 'ᱠᱮᱱᱴᱤᱱ', 'ᱯᱟᱨᱠᱤᱝ', 'ᱚᱯᱷᱤᱥ'],
        },
        correctIndex: 0,
      },
      {
        id: 'gq2',
        question: {
          en: 'Minimum PPE for confined space?',
          hi: 'सीमित स्थान के लिए न्यूनतम PPE?',
          sat: 'ᱠᱚᱱᱯᱷᱟᱭᱤᱱᱰ ᱥᱯᱮᱥ PPE?',
        },
        options: {
          en: ['Detector + harness + respirator + attendant link', 'Cap only', 'Gloves only', 'Phone torch only'],
          hi: ['डिटेक्टर + हार्नेस + रेस्पिरेटर + अटेंडेंट लिंक', 'केवल टोपी', 'केवल दस्ताने', 'केवल फ़ोन टॉर्च'],
          sat: ['ᱰᱤᱴᱮᱠᱴᱚᱨ + ᱦᱟᱨᱱᱮᱥ + ᱨᱮᱥᱯᱤᱨᱮᱴᱚᱨ', 'ᱴᱚᱯᱤ', 'ᱜᱞᱚᱵᱷᱥ', 'ᱴᱚᱨᱪ'],
        },
        correctIndex: 0,
      },
      {
        id: 'gq3',
        question: {
          en: 'Buddy system requires?',
          hi: 'बडी सिस्टम में आवश्यक?',
          sat: 'ᱵᱚᱰᱤ ᱥᱤᱥᱴᱚᱢ ᱨᱮ?',
        },
        options: {
          en: ['Outside attendant with continuous contact', 'Two people both inside only', 'No radio needed', 'Social media live'],
          hi: ['बाहर अटेंडेंट निरंतर संपर्क', 'दोनों अंदर ही', 'रेडियो ज़रूरी नहीं', 'सोशल मीडिया लाइव'],
          sat: ['ᱵᱟᱦᱨᱮ ᱟᱴᱮᱱᱰᱮᱱᱴ', 'ᱵᱟᱨᱭᱟ ᱵᱷᱤᱛᱨᱤ', 'ᱨᱮᱰᱤᱭᱚ ᱵᱟᱝ', 'ᱞᱟᱭᱤᱵᱷ'],
        },
        correctIndex: 0,
      },
      {
        id: 'gq4',
        question: {
          en: 'If entrant stops signalling?',
          hi: 'प्रवेशी सिग्नल बंद करे तो?',
          sat: 'ᱥᱤᱜᱽᱱᱟᱞ ᱵᱚᱸᱫᱚ ᱞᱮᱠᱷᱟᱱ?',
        },
        options: {
          en: ['Trigger rescue protocol — do not enter alone', 'Shout and wait one hour', 'Enter alone immediately', 'Turn off detector'],
          hi: ['रेस्क्यू प्रोटोकॉल — अकेले प्रवेश न करें', 'चिल्लाकर एक घंटा प्रतीक्षा', 'तुरंत अकेले प्रवेश', 'डिटेक्टर बंद'],
          sat: ['ᱨᱮᱥᱠᱭᱩ — ᱮᱠᱞᱟ ᱵᱟᱝ', 'ᱢᱤᱫ ᱴᱟᱲᱟᱝ ᱛᱟᱺᱜᱤ', 'ᱮᱠᱞᱟ ᱵᱚᱞᱚ', 'ᱰᱤᱴᱮᱠᱴᱚᱨ ᱵᱚᱸᱫᱚ'],
        },
        correctIndex: 0,
      },
      {
        id: 'gq5',
        question: {
          en: 'Why is smell unreliable for gas leaks?',
          hi: 'गैस लीक के लिए गंध क्यों अविश्वसनीय?',
          sat: 'ᱜᱚᱸᱫᱷᱚ ᱪᱮᱫᱟᱜ ᱵᱟᱝ ᱵᱷᱚᱨᱚᱥᱟ?',
        },
        options: {
          en: ['Some gases are odourless / olfactory fatigue', 'Smell is always accurate', 'Gases never smell', 'Only dogs can smell'],
          hi: ['कुछ गैसें गंधहीन / थकान', 'गंध हमेशा सही', 'गैसों में गंध नहीं', 'केवल कुत्ते सूंघते'],
          sat: ['ᱛᱤᱱᱟᱹᱜ ᱜᱮᱥ ᱵᱟᱝ ᱜᱚᱸᱫᱷᱚ', 'ᱜᱚᱸᱫᱷᱚ ᱥᱚᱦᱤ', 'ᱜᱮᱥ ᱵᱟᱝ ᱜᱚᱸᱫᱷᱚ', 'ᱥᱮᱛᱟ ᱜᱮ'],
        },
        correctIndex: 0,
      },
    ],
  },
  {
    id: 'machinery',
    code: 'SAFE-03',
    domain: 'Machinery Guarding',
    title: {
      en: 'Machinery Guarding & Lockout',
      hi: 'मशीनरी गार्डिंग और लॉकआउट',
      sat: 'ᱢᱮᱥᱤᱱ ᱜᱟᱰᱤᱝ ᱟᱨ ᱞᱚᱠᱟᱭᱩᱴ',
    },
    summary: {
      en: 'Live now — practise LOTO, conveyor guards, and barrier discipline in AR.',
      hi: 'अब लाइव — AR में LOTO, कन्वेयर गार्ड और बैरियर अनुशासन अभ्यास करें।',
      sat: 'ᱱᱤᱛᱚᱜ ᱞᱟᱭᱤᱵᱷ — LOTO, ᱠᱚᱱᱵᱷᱮᱭᱟᱨ ᱜᱟᱰᱤᱝ, ᱵᱮᱨᱤᱭᱟᱨ AR ᱨᱮ᱾',
    },
    durationMin: 11,
    status: 'available',
    color: '#4a6fa5',
    icon: 'cog',
    passScore: 70,
    steps: [
      {
        id: 'm1',
        title: {
          en: 'Lockout / Tagout (LOTO)',
          hi: 'लॉकआउट / टैगआउट (LOTO)',
          sat: 'ᱞᱚᱠᱟᱭᱩᱴ / ᱴᱮᱜᱟᱭᱩᱴ',
        },
        instruction: {
          en: 'Isolate energy sources, apply your personal lock and tag, and verify zero energy before any maintenance.',
          hi: 'ऊर्जा स्रोत अलग करें, अपना लॉक और टैग लगाएँ, और रखरखाव से पहले ज़ीरो एनर्जी सत्यापित करें।',
          sat: 'ᱫᱟᱲᱮ ᱵᱚᱸᱫᱚ, ᱱᱤᱡᱮᱨ ᱞᱚᱠ ᱟᱨ ᱴᱮᱜ, ᱛᱟᱭᱚᱢ ᱡᱤᱨᱚ ᱫᱟᱲᱮ ᱧᱮᱞ᱾',
        },
        hint: {
          en: 'Never remove another worker’s lock.',
          hi: 'दूसरे मजदूर का लॉक कभी न हटाएँ।',
          sat: 'ᱮᱴᱟᱜ ᱦᱚᱲ ᱨᱮᱭᱟᱜ ᱞᱚᱠ ᱟᱞᱚᱢ ᱚᱪᱚᱜᱟ᱾',
        },
        actionLabel: {
          en: 'Confirm LOTO applied',
          hi: 'LOTO लागू पुष्टि',
          sat: 'LOTO ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'loto',
        choices: [
          { id: 'a', label: { en: 'Work while machine still live', hi: 'मशीन चालू रहते काम', sat: 'ᱪᱟᱹᱞᱩ ᱢᱮᱥᱤᱱ ᱨᱮ ᱠᱟᱹᱢᱤ' }, correct: false },
          { id: 'b', label: { en: 'Isolate, lock, tag, verify zero energy', hi: 'अलग, लॉक, टैग, ज़ीरो एनर्जी', sat: 'ᱵᱚᱸᱫᱚ + ᱞᱚᱠ + ᱴᱮᱜ + ᱡᱤᱨᱚ' }, correct: true },
          { id: 'c', label: { en: 'Ask anyone to remove your lock', hi: 'किसी से अपना लॉक हटवाएँ', sat: 'ᱚᱠᱚᱭ ᱦᱚᱸ ᱞᱚᱠ ᱚᱪᱚᱜ' }, correct: false },
        ],
      },
      {
        id: 'm2',
        title: {
          en: 'Conveyor guard check',
          hi: 'कन्वेयर गार्ड जाँच',
          sat: 'ᱠᱚᱱᱵᱷᱮᱭᱟᱨ ᱜᱟᱰᱤᱝ',
        },
        instruction: {
          en: 'Confirm nip points and moving belts are guarded. Never reach under a running conveyor — stop and LOTO first.',
          hi: 'निप पॉइंट और चलते बेल्ट गार्डेड हों। चलते कन्वेयर के नीचे हाथ न डालें — पहले रोकें और LOTO करें।',
          sat: 'ᱱᱤᱯ ᱯᱚᱭᱮᱱᱴ ᱜᱟᱰᱤᱝ᱾ ᱪᱟᱹᱞᱩ ᱠᱚᱱᱵᱷᱮᱭᱟᱨ ᱞᱟᱛᱟᱨ ᱟᱞᱚᱢ — ᱯᱟᱹᱦᱤᱞ LOTO᱾',
        },
        hint: {
          en: 'Missing guards must be reported before restart.',
          hi: 'गायब गार्ड रिपोर्ट करें, फिर रीस्टार्ट।',
          sat: 'ᱵᱟᱝᱟᱜ ᱜᱟᱰᱤᱝ ᱨᱤᱯᱚᱨᱴ ᱛᱟᱭᱚᱢ ᱪᱟᱹᱞᱩ᱾',
        },
        actionLabel: {
          en: 'Confirm guards in place',
          hi: 'गार्ड मौजूद पुष्टि',
          sat: 'ᱜᱟᱰᱤᱝ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'conveyor_guard',
        choices: [
          { id: 'a', label: { en: 'Reach under running belt', hi: 'चलते बेल्ट के नीचे हाथ', sat: 'ᱪᱟᱹᱞᱩ ᱵᱮᱞᱴ ᱞᱟᱛᱟᱨ' }, correct: false },
          { id: 'b', label: { en: 'Guards fitted; stop + LOTO before access', hi: 'गार्ड लगे; पहुँच से पहले रोक + LOTO', sat: 'ᱜᱟᱰᱤᱝ + LOTO ᱛᱟᱭᱚᱢ' }, correct: true },
          { id: 'c', label: { en: 'Run without guards to save time', hi: 'समय बचाने बिना गार्ड चलाएँ', sat: 'ᱜᱟᱰᱤᱝ ᱵᱟᱝ ᱪᱟᱹᱞᱩ' }, correct: false },
        ],
      },
      {
        id: 'm3',
        title: {
          en: 'Barrier & exclusion zone',
          hi: 'बैरियर और बहिष्करण क्षेत्र',
          sat: 'ᱵᱮᱨᱤᱭᱟᱨ ᱡᱚᱱ',
        },
        instruction: {
          en: 'Set hard barriers around crushers and swing radii. Only authorised tagged persons enter the exclusion zone.',
          hi: 'क्रशर और स्विंग रेडियस के चारों ओर हार्ड बैरियर लगाएँ। बहिष्करण क्षेत्र में केवल अधिकृत टैग वाले व्यक्ति।',
          sat: 'ᱠᱨᱚᱥᱚᱨ ᱥᱩᱨ ᱵᱮᱨᱤᱭᱟᱨ᱾ ᱠᱷᱟᱹᱞᱤ ᱟᱹᱭᱩᱨ ᱴᱮᱜ ᱦᱚᱲ ᱵᱚᱞᱚ᱾',
        },
        hint: {
          en: 'Tape alone is not enough for live crushers.',
          hi: 'लाइव क्रशर के लिए केवल टेप पर्याप्त नहीं।',
          sat: 'ᱴᱮᱯ ᱜᱮ ᱵᱟᱝ ᱥᱚᱢᱟᱱ᱾',
        },
        actionLabel: {
          en: 'Confirm barrier set',
          hi: 'बैरियर सेट पुष्टि',
          sat: 'ᱵᱮᱨᱤᱭᱟᱨ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'barrier',
        choices: [
          { id: 'a', label: { en: 'Walk through swing radius casually', hi: 'स्विंग रेडियस से बेफिक्र गुज़रें', sat: 'ᱥᱣᱤᱝ ᱨᱮ ᱪᱟᱞᱟᱜ' }, correct: false },
          { id: 'b', label: { en: 'Hard barrier + authorised entry only', hi: 'हार्ड बैरियर + केवल अधिकृत प्रवेश', sat: 'ᱵᱮᱨᱤᱭᱟᱨ + ᱟᱹᱭᱩᱨ ᱵᱚᱞᱚ' }, correct: true },
          { id: 'c', label: { en: 'No barrier if operator is watching', hi: 'ऑपरेटर देखे तो बैरियर नहीं', sat: 'ᱚᱯᱚᱨᱮᱴᱚᱨ ᱧᱮᱞ ᱞᱮᱠᱷᱟᱱ ᱵᱟᱝ' }, correct: false },
        ],
      },
    ],
    quiz: [
      {
        id: 'mq1',
        question: {
          en: 'Before maintenance on powered equipment you must?',
          hi: 'पावर्ड उपकरण पर रखरखाव से पहले?',
          sat: 'ᱢᱮᱥᱤᱱ ᱨᱤᱯᱮᱭᱟᱨ ᱢᱟᱲᱟᱝ?',
        },
        options: {
          en: ['Apply LOTO and verify zero energy', 'Just shout stop', 'Hold the switch with your hand', 'Ask a passer-by to watch'],
          hi: ['LOTO लगाएँ और ज़ीरो एनर्जी जाँचें', 'केवल रुको चिल्लाएँ', 'स्विच हाथ से पकड़ें', 'राहगीर से देखने को कहें'],
          sat: ['LOTO + ᱡᱤᱨᱚ', 'ᱨᱚᱲ ᱜᱮ', 'ᱥᱣᱤᱪ ᱛᱤ', 'ᱮᱴᱟᱜ ᱦᱚᱲ'],
        },
        correctIndex: 0,
      },
      {
        id: 'mq2',
        question: {
          en: 'Who may remove your LOTO lock?',
          hi: 'आपका LOTO लॉक कौन हटा सकता है?',
          sat: 'ᱟᱢᱟᱜ LOTO ᱞᱚᱠ ᱚᱠᱚᱭ?',
        },
        options: {
          en: ['Only you (or authorised emergency procedure)', 'Any supervisor anytime', 'The next shift casually', 'Anyone with pliers'],
          hi: ['केवल आप (या अधिकृत आपात प्रक्रिया)', 'कोई भी सुपरवाइज़र कभी भी', 'अगली शिफ्ट बेफिक्र', 'प्लायर वाला कोई भी'],
          sat: ['ᱟᱢ ᱜᱮ / ᱟᱹᱭᱩᱨ ᱮᱢᱚᱨᱡᱮᱱᱥᱤ', 'ᱚᱠᱚᱭ ᱦᱚᱸ', 'ᱫᱚᱥᱟᱨ ᱥᱤᱯᱷᱴ', 'ᱯᱞᱟᱭᱟᱨ'],
        },
        correctIndex: 0,
      },
      {
        id: 'mq3',
        question: {
          en: 'If a conveyor guard is missing you should?',
          hi: 'कन्वेयर गार्ड गायब हो तो?',
          sat: 'ᱜᱟᱰᱤᱝ ᱵᱟᱝᱟᱜ ᱞᱮᱠᱷᱟᱱ?',
        },
        options: {
          en: ['Stop, report, do not run until guarded', 'Run slowly without guard', 'Cover with cloth', 'Ignore if familiar'],
          hi: ['रोकें, रिपोर्ट करें, गार्ड तक न चलाएँ', 'बिना गार्ड धीरे चलाएँ', 'कपड़े से ढकें', 'जान-पहचान पर अनदेखा'],
          sat: ['ᱵᱚᱸᱫᱚ + ᱨᱤᱯᱚᱨᱴ', 'ᱵᱟᱝ ᱜᱟᱰᱤᱝ ᱪᱟᱹᱞᱩ', 'ᱠᱟᱯᱲᱟ', 'ᱵᱟᱝ ᱟᱸᱡᱚᱢ'],
        },
        correctIndex: 0,
      },
      {
        id: 'mq4',
        question: {
          en: 'Exclusion zones around crushers need?',
          hi: 'क्रशर के बहिष्करण क्षेत्र में आवश्यक?',
          sat: 'ᱠᱨᱚᱥᱚᱨ ᱡᱚᱱ ᱨᱮ?',
        },
        options: {
          en: ['Hard barriers and authorised access only', 'Paint marks only', 'Verbal warning only', 'No control needed'],
          hi: ['हार्ड बैरियर और केवल अधिकृत पहुँच', 'केवल पेंट निशान', 'केवल मौखिक चेतावनी', 'नियंत्रण ज़रूरी नहीं'],
          sat: ['ᱵᱮᱨᱤᱭᱟᱨ + ᱟᱹᱭᱩᱨ', 'ᱯᱮᱱᱴ ᱜᱮ', 'ᱨᱚᱲ ᱜᱮ', 'ᱵᱟᱝ ᱫᱚᱨᱠᱟᱨ'],
        },
        correctIndex: 0,
      },
      {
        id: 'mq5',
        question: {
          en: 'Reaching under a running belt is?',
          hi: 'चलते बेल्ट के नीचे हाथ डालना?',
          sat: 'ᱪᱟᱹᱞᱩ ᱵᱮᱞᱴ ᱞᱟᱛᱟᱨ?',
        },
        options: {
          en: ['Forbidden — stop and LOTO first', 'Allowed if quick', 'OK with gloves', 'Safer than stopping'],
          hi: ['मना — पहले रोकें और LOTO', 'जल्दी हो तो ठीक', 'दस्तानों से ठीक', 'रोकने से सुरक्षित'],
          sat: ['ᱵᱟᱝ — LOTO ᱯᱟᱹᱦᱤᱞ', 'ᱞᱚᱜᱚᱱ ᱞᱮᱠᱷᱟᱱ', 'ᱜᱞᱚᱵᱷᱥ ᱛᱮ', 'ᱵᱚᱸᱫᱚ ᱠᱷᱚᱱ ᱥᱟᱯᱷᱟ'],
        },
        correctIndex: 0,
      },
    ],
  },
  {
    id: 'ppe-general',
    code: 'SAFE-04',
    domain: 'Workplace PPE',
    title: {
      en: 'Site-wide PPE Discipline',
      hi: 'साइट-व्यापी PPE अनुशासन',
      sat: 'ᱥᱟᱭᱤᱴ PPE',
    },
    summary: {
      en: 'Live now — daily PPE checks for mining & mica units in AR.',
      hi: 'अब लाइव — AR में खनन/माइका इकाइयों के लिए दैनिक PPE जाँच।',
      sat: 'ᱱᱤᱛᱚᱜ ᱞᱟᱭᱤᱵᱷ — ᱫᱤᱱᱟᱹᱢ PPE AR ᱨᱮ᱾',
    },
    durationMin: 10,
    status: 'available',
    color: '#c49200',
    icon: 'shield',
    passScore: 70,
    steps: [
      {
        id: 'p1',
        title: {
          en: 'Cap lamp readiness',
          hi: 'कैप लैंप तैयारी',
          sat: 'ᱠᱮᱯ ᱞᱮᱢᱯ ᱥᱟᱡᱟᱣ',
        },
        instruction: {
          en: 'Charge and test your cap lamp before shift. Check beam, battery level, and secure fit on the helmet.',
          hi: 'शिफ्ट से पहले कैप लैंप चार्ज और टेस्ट करें। बीम, बैटरी स्तर, और हेलमेट पर सुरक्षित फिट जाँचें।',
          sat: 'ᱥᱤᱯᱷᱴ ᱢᱟᱲᱟᱝ ᱞᱮᱢᱯ ᱪᱟᱨᱡ ᱟᱨ ᱴᱮᱥᱴ᱾ ᱵᱤᱢ, ᱵᱮᱴᱨᱤ, ᱦᱮᱞᱢᱮᱴ ᱯᱷᱤᱴ᱾',
        },
        hint: {
          en: 'A dim lamp is a reportable defect — replace before entry.',
          hi: 'धुँधला लैंप रिपोर्ट योग्य दोष — प्रवेश से पहले बदलें।',
          sat: 'ᱟᱸᱧᱚᱲ ᱞᱮᱢᱯ ᱨᱤᱯᱚᱨᱴ — ᱵᱚᱫᱚᱞ ᱢᱟᱲᱟᱝ᱾',
        },
        actionLabel: {
          en: 'Confirm lamp tested',
          hi: 'लैंप टेस्ट पुष्टि',
          sat: 'ᱞᱮᱢᱯ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'cap_lamp',
        choices: [
          { id: 'a', label: { en: 'Enter with untested / flat lamp', hi: 'बिना टेस्ट / फ्लैट लैंप से प्रवेश', sat: 'ᱵᱟᱝ ᱴᱮᱥᱴ ᱞᱮᱢᱯ' }, correct: false },
          { id: 'b', label: { en: 'Charge, test beam, fit on helmet', hi: 'चार्ज, बीम टेस्ट, हेलमेट पर फिट', sat: 'ᱪᱟᱨᱡ + ᱴᱮᱥᱴ + ᱯᱷᱤᱴ' }, correct: true },
          { id: 'c', label: { en: 'Phone torch is enough underground', hi: 'अंडरग्राउंड में फ़ोन टॉर्च काफी', sat: 'ᱯᱷᱚᱱ ᱴᱚᱨᱪ ᱜᱮ' }, correct: false },
        ],
      },
      {
        id: 'p2',
        title: {
          en: 'Gloves & safety boots',
          hi: 'दस्ताने और सुरक्षा बूट',
          sat: 'ᱜᱞᱚᱵᱷᱥ ᱟᱨ ᱵᱩᱴ',
        },
        instruction: {
          en: 'Wear task-rated gloves and steel/composite-toe boots with good tread. Replace torn gloves and worn soles immediately.',
          hi: 'कार्य-योग्य दस्ताने और अच्छी पकड़ वाले स्टील/कंपोजिट-टो बूट पहनें। फटे दस्ताने और घिसे तलवे तुरंत बदलें।',
          sat: 'ᱠᱟᱹᱢᱤ ᱜᱞᱚᱵᱷᱥ ᱟᱨ ᱥᱟᱯᱷᱟ ᱵᱩᱴ᱾ ᱨᱟᱹᱯᱩᱫ ᱫᱚᱦᱲᱟ ᱵᱚᱫᱚᱞ᱾',
        },
        hint: {
          en: 'Slippers and bare hands are not site PPE.',
          hi: 'चप्पल और नंगे हाथ साइट PPE नहीं।',
          sat: 'ᱪᱚᱯᱯᱚᱞ / ᱮᱝᱜᱟ ᱛᱤ PPE ᱵᱟᱝ᱾',
        },
        actionLabel: {
          en: 'Confirm gloves & boots',
          hi: 'दस्ताने व बूट पुष्टि',
          sat: 'ᱜᱞᱚᱵᱷᱥ ᱵᱩᱴ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'gloves_boots',
        choices: [
          { id: 'a', label: { en: 'Slippers and bare hands', hi: 'चप्पल और नंगे हाथ', sat: 'ᱪᱚᱯᱯᱚᱞ + ᱮᱝᱜᱟ ᱛᱤ' }, correct: false },
          { id: 'b', label: { en: 'Rated gloves + safety boots', hi: 'रेटेड दस्ताने + सुरक्षा बूट', sat: 'ᱜᱞᱚᱵᱷᱥ + ᱥᱟᱯᱷᱟ ᱵᱩᱴ' }, correct: true },
          { id: 'c', label: { en: 'Boots optional in dry weather', hi: 'सूखे मौसम में बूट वैकल्पिक', sat: 'ᱨᱚᱦᱚᱲ ᱨᱮ ᱵᱩᱴ ᱵᱟᱝ' }, correct: false },
        ],
      },
      {
        id: 'p3',
        title: {
          en: 'Heed warning signs',
          hi: 'चेतावनी संकेतों का पालन',
          sat: 'ᱣᱟᱨᱱᱤᱝ ᱥᱤᱜᱽᱱᱟᱞ',
        },
        instruction: {
          en: 'Read and obey mandatory, prohibition, and hazard signs at every gate and workfront. Do not remove or cover signs.',
          hi: 'हर गेट और वर्कफ्रंट पर अनिवार्य, निषेध और खतरा संकेतों को पढ़ें और मानें। संकेत न हटाएँ और न ढकें।',
          sat: 'ᱥᱤᱜᱽᱱᱟᱞ ᱯᱟᱲᱦᱟᱣ ᱟᱨ ᱢᱟᱱᱟ᱾ ᱟᱞᱚᱢ ᱚᱪᱚᱜ / ᱵᱚᱸᱫᱚ᱾',
        },
        hint: {
          en: 'Ignoring a sign is a reportable near-miss.',
          hi: 'संकेत अनदेखा करना रिपोर्ट योग्य नियर-मिस है।',
          sat: 'ᱥᱤᱜᱽᱱᱟᱞ ᱵᱟᱝ ᱢᱟᱱᱟ ᱨᱤᱯᱚᱨᱴ᱾',
        },
        actionLabel: {
          en: 'Confirm signs reviewed',
          hi: 'संकेत समीक्षा पुष्टि',
          sat: 'ᱥᱤᱜᱽᱱᱟᱞ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'warning_sign',
        choices: [
          { id: 'a', label: { en: 'Cover signs for convenience', hi: 'सुविधा के लिए संकेत ढकें', sat: 'ᱥᱤᱜᱽᱱᱟᱞ ᱵᱚᱸᱫᱚ' }, correct: false },
          { id: 'b', label: { en: 'Read and follow all posted signs', hi: 'सभी लगे संकेतों को पढ़कर मानें', sat: 'ᱯᱟᱲᱦᱟᱣ ᱟᱨ ᱢᱟᱱᱟ' }, correct: true },
          { id: 'c', label: { en: 'Signs apply only to visitors', hi: 'संकेत केवल आगंतुकों के लिए', sat: 'ᱠᱷᱟᱹᱞᱤ ᱵᱤᱡᱤᱴᱚᱨ' }, correct: false },
        ],
      },
    ],
    quiz: [
      {
        id: 'pq1',
        question: {
          en: 'Before underground shift your cap lamp must be?',
          hi: 'अंडरग्राउंड शिफ्ट से पहले कैप लैंप?',
          sat: 'ᱥᱤᱯᱷᱴ ᱢᱟᱲᱟᱝ ᱠᱮᱯ ᱞᱮᱢᱯ?',
        },
        options: {
          en: ['Charged and beam-tested', 'Optional if daytime', 'Shared with a friend', 'Replaced by phone torch'],
          hi: ['चार्ज और बीम-टेस्टेड', 'दिन में वैकल्पिक', 'दोस्त से साझा', 'फ़ोन टॉर्च से बदला'],
          sat: ['ᱪᱟᱨᱡ + ᱴᱮᱥᱴ', 'ᱫᱤᱱ ᱨᱮ ᱵᱟᱝ', 'ᱦᱟᱹᱴᱤᱧ', 'ᱯᱷᱚᱱ ᱴᱚᱨᱪ'],
        },
        correctIndex: 0,
      },
      {
        id: 'pq2',
        question: {
          en: 'Minimum foot protection on site?',
          hi: 'साइट पर न्यूनतम पैर सुरक्षा?',
          sat: 'ᱡᱟᱭᱜᱟ ᱨᱮ ᱡᱟᱸᱜᱟ?',
        },
        options: {
          en: ['Safety boots with protective toe', 'Open slippers', 'Bare feet if dry', 'Sports shoes only'],
          hi: ['सुरक्षा बूट सुरक्षात्मक टो के साथ', 'खुली चप्पल', 'सूखा हो तो नंगे पैर', 'केवल स्पोर्ट्स जूते'],
          sat: ['ᱥᱟᱯᱷᱟ ᱵᱩᱴ', 'ᱪᱚᱯᱯᱚᱞ', 'ᱮᱝᱜᱟ ᱡᱟᱸᱜᱟ', 'ᱥᱯᱚᱨᱴᱥ'],
        },
        correctIndex: 0,
      },
      {
        id: 'pq3',
        question: {
          en: 'Torn gloves should be?',
          hi: 'फटे दस्ताने क्या करें?',
          sat: 'ᱨᱟᱹᱯᱩᱫ ᱜᱞᱚᱵᱷᱥ?',
        },
        options: {
          en: ['Replaced before continuing work', 'Taped and reused forever', 'Worn inside-out', 'Ignored if clean'],
          hi: ['काम जारी रखने से पहले बदलें', 'टेप लगाकर हमेशा इस्तेमाल', 'अंदर-बाहर पहनें', 'साफ हों तो अनदेखा'],
          sat: ['ᱵᱚᱫᱚᱞ ᱯᱟᱹᱦᱤᱞ', 'ᱴᱮᱯ ᱛᱮ ᱫᱚᱦᱲᱟ', 'ᱩᱞᱴᱟ', 'ᱥᱟᱯᱷᱟ ᱞᱮᱠᱷᱟᱱ ᱵᱟᱝ'],
        },
        correctIndex: 0,
      },
      {
        id: 'pq4',
        question: {
          en: 'Warning signs at a workfront are?',
          hi: 'वर्कफ्रंट पर चेतावनी संकेत?',
          sat: 'ᱣᱟᱨᱱᱤᱝ ᱥᱤᱜᱽᱱᱟᱞ?',
        },
        options: {
          en: ['Mandatory to read and follow', 'Decoration only', 'For visitors alone', 'Optional after induction'],
          hi: ['पढ़ना और मानना अनिवार्य', 'केवल सजावट', 'केवल आगंतुकों के लिए', 'इंडक्शन बाद वैकल्पिक'],
          sat: ['ᱯᱟᱲᱦᱟᱣ ᱟᱨ ᱢᱟᱱᱟ', 'ᱥᱟᱡᱟᱣ ᱜᱮ', 'ᱵᱤᱡᱤᱴᱚᱨ', 'ᱵᱟᱝ ᱫᱚᱨᱠᱟᱨ'],
        },
        correctIndex: 0,
      },
      {
        id: 'pq5',
        question: {
          en: 'Phone torch instead of cap lamp is?',
          hi: 'कैप लैंप की जगह फ़ोन टॉर्च?',
          sat: 'ᱠᱮᱯ ᱞᱮᱢᱯ ᱵᱚᱫᱚᱞ ᱯᱷᱚᱱ?',
        },
        options: {
          en: ['Not acceptable as primary light', 'Preferred underground', 'Allowed if battery low', 'Safer than cap lamp'],
          hi: ['प्राथमिक रोशनी के रूप में स्वीकार्य नहीं', 'अंडरग्राउंड में पसंदीदा', 'बैटरी कम हो तो ठीक', 'कैप लैंप से सुरक्षित'],
          sat: ['ᱵᱟᱝ ᱥᱚᱢᱟᱱ', 'ᱥᱚᱠᱟᱭ', 'ᱵᱮᱴᱨᱤ ᱠᱚᱢ', 'ᱞᱮᱢᱯ ᱠᱷᱚᱱ ᱥᱟᱯᱷᱟ'],
        },
        correctIndex: 0,
      },
    ],
  },
  {
    id: 'first-aid',
    code: 'SAFE-05',
    domain: 'First Response',
    title: {
      en: 'On-site First Response',
      hi: 'साइट पर प्रथम प्रतिक्रिया',
      sat: 'ᱯᱟᱹᱦᱤᱞ ᱨᱮᱥᱯᱚᱱᱥ',
    },
    summary: {
      en: 'Live now — first-aid kit use, eyewash, and muster assist in AR.',
      hi: 'अब लाइव — AR में फर्स्ट-एड किट, आईवॉश और मस्टर सहायता।',
      sat: 'ᱱᱤᱛᱚᱜ ᱞᱟᱭᱤᱵᱷ — ᱯᱩᱭᱞᱟ ᱜᱚᱲᱚ, ᱟᱭᱣᱚᱥ, ᱡᱩᱢᱤᱫ AR ᱨᱮ᱾',
    },
    durationMin: 12,
    status: 'available',
    color: '#c4452d',
    icon: 'heart',
    passScore: 70,
    steps: [
      {
        id: 'a1',
        title: {
          en: 'Locate & open first-aid kit',
          hi: 'फर्स्ट-एड किट खोजें और खोलें',
          sat: 'ᱯᱩᱭᱞᱟ ᱜᱚᱲᱚ ᱠᱤᱴ',
        },
        instruction: {
          en: 'Know the nearest kit location. For bleeding: gloves on, direct pressure, elevate if possible, and call for medical help.',
          hi: 'निकटतम किट स्थान जानें। रक्तस्राव: दस्ताने, सीधा दबाव, संभव हो तो ऊँचा करें, चिकित्सा सहायता बुलाएँ।',
          sat: 'ᱥᱩᱨ ᱠᱤᱴ ᱵᱟᱲᱟᱭ᱾ ᱢᱟᱭᱟᱢ: ᱜᱞᱚᱵᱷᱥ, ᱚᱛᱟ, ᱪᱮᱛᱟᱱ, ᱰᱚᱠᱴᱚᱨ ᱦᱚᱦᱚ᱾',
        },
        hint: {
          en: 'Do not move a seriously injured person unless in immediate danger.',
          hi: 'तत्काल खतरे के बिना गंभीर घायल को न हिलाएँ।',
          sat: 'ᱡᱚᱛᱚᱨ ᱠᱷᱚᱛᱨᱟ ᱵᱟᱝ ᱞᱮᱠᱷᱟᱱ ᱟᱞᱚᱢ ᱩᱪᱟᱹᱲᱟ᱾',
        },
        actionLabel: {
          en: 'Confirm kit used correctly',
          hi: 'किट सही उपयोग पुष्टि',
          sat: 'ᱠᱤᱴ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'first_aid',
        choices: [
          { id: 'a', label: { en: 'Ignore bleeding and keep filming', hi: 'रक्तस्राव अनदेखा कर फ़िल्म करते रहें', sat: 'ᱢᱟᱭᱟᱢ ᱵᱟᱝ ᱧᱮᱞ' }, correct: false },
          { id: 'b', label: { en: 'Gloves, pressure, elevate, call help', hi: 'दस्ताने, दबाव, ऊँचा, मदद बुलाएँ', sat: 'ᱜᱞᱚᱵᱷᱥ + ᱚᱛᱟ + ᱜᱚᱲᱚ' }, correct: true },
          { id: 'c', label: { en: 'Give water to an unconscious casualty', hi: 'बेहोश घायल को पानी पिलाएँ', sat: 'ᱵᱟᱝ ᱦᱚᱥ ᱦᱚᱲ ᱫᱟᱜ' }, correct: false },
        ],
      },
      {
        id: 'a2',
        title: {
          en: 'Emergency eyewash use',
          hi: 'आपात आईवॉश उपयोग',
          sat: 'ᱟᱭᱣᱚᱥ ᱵᱮᱵᱷᱟᱨ',
        },
        instruction: {
          en: 'For chemical splash: rush to eyewash, hold eyes open, flush 15 minutes, then seek medical care. Remove contacts if worn.',
          hi: 'रसायन छींटे: आईवॉश पर जाएँ, आँखें खुली रखें, 15 मिनट धोएँ, फिर चिकित्सा सहायता। कॉन्टैक्ट लेंस हटाएँ।',
          sat: 'ᱠᱮᱢᱤᱠᱟᱞ: ᱟᱭᱣᱚᱥ, ᱢᱮᱫ ᱡᱷᱤᱡ, ᱑᱕ ᱴᱤᱡ ᱫᱟᱜ, ᱰᱚᱠᱴᱚᱨ᱾',
        },
        hint: {
          en: 'Do not rub eyes — flush continuously.',
          hi: 'आँखें न रगड़ें — लगातार धोएँ।',
          sat: 'ᱢᱮᱫ ᱟᱞᱚᱢ ᱜᱚᱥᱟ — ᱫᱟᱜ ᱪᱟᱹᱞᱩ᱾',
        },
        actionLabel: {
          en: 'Confirm eyewash flush',
          hi: 'आईवॉश फ्लश पुष्टि',
          sat: 'ᱟᱭᱣᱚᱥ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'eyewash',
        choices: [
          { id: 'a', label: { en: 'Rub eyes dry with cloth', hi: 'कपड़े से आँखें रगड़कर सुखाएँ', sat: 'ᱠᱟᱯᱲᱟ ᱛᱮ ᱜᱚᱥᱟ' }, correct: false },
          { id: 'b', label: { en: 'Flush 15 min at eyewash, then medical care', hi: 'आईवॉश पर 15 मिनट, फिर चिकित्सा', sat: '᱑᱕ ᱴᱤᱡ ᱫᱟᱜ + ᱰᱚᱠᱴᱚᱨ' }, correct: true },
          { id: 'c', label: { en: 'Wait to see if burning stops', hi: 'जलन रुकने का इंतज़ार', sat: 'ᱡᱚᱞᱚᱜ ᱛᱟᱺᱜᱤ' }, correct: false },
        ],
      },
      {
        id: 'a3',
        title: {
          en: 'Assist to assembly / muster',
          hi: 'असेंबली / मस्टर तक सहायता',
          sat: 'ᱡᱩᱢᱤᱫ ᱡᱟᱭᱜᱟ ᱜᱚᱲᱚ',
        },
        instruction: {
          en: 'After first response, guide the casualty (if mobile) or stretcher team to the assembly point and hand over to the medical lead.',
          hi: 'प्रथम प्रतिक्रिया के बाद घायल (यदि चल सकें) या स्ट्रेचर टीम को असेंबली पॉइंट ले जाएँ और मेडिकल लीड को सौंपें।',
          sat: 'ᱯᱩᱭᱞᱟ ᱜᱚᱲᱚ ᱛᱟᱭᱚᱢ ᱡᱩᱢᱤᱫ ᱡᱟᱭᱜᱟ ᱟᱨ ᱰᱚᱠᱴᱚᱨ ᱴᱤᱢ᱾',
        },
        hint: {
          en: 'Stay with the casualty until formal handover.',
          hi: 'औपचारिक हैंडओवर तक घायल के साथ रहें।',
          sat: 'ᱦᱮᱸᱰᱚᱵᱚᱨ ᱫᱷᱟᱹᱵᱤᱡ ᱥᱟᱶᱛᱮ᱾',
        },
        actionLabel: {
          en: 'Confirm at assembly',
          hi: 'असेंबली पर पुष्टि',
          sat: 'ᱡᱩᱢᱤᱫ ᱯᱩᱥᱴᱤ',
        },
        overlayType: 'assembly',
        choices: [
          { id: 'a', label: { en: 'Leave casualty alone at scene', hi: 'घायल को जगह पर अकेला छोड़ें', sat: 'ᱮᱠᱞᱟ ᱵᱟᱹᱜᱤ' }, correct: false },
          { id: 'b', label: { en: 'Escort to muster and hand over to medical lead', hi: 'मस्टर तक ले जाएँ, मेडिकल लीड को सौंपें', sat: 'ᱡᱩᱢᱤᱫ + ᱰᱚᱠᱴᱚᱨ ᱴᱤᱢ' }, correct: true },
          { id: 'c', label: { en: 'Send them back to work immediately', hi: 'तुरंत काम पर वापस भेजें', sat: 'ᱞᱚᱜᱚᱱ ᱠᱟᱹᱢᱤ ᱨᱩᱣᱟᱹᱲ' }, correct: false },
        ],
      },
    ],
    quiz: [
      {
        id: 'aq1',
        question: {
          en: 'First action for severe bleeding?',
          hi: 'गंभीर रक्तस्राव पर पहला कदम?',
          sat: 'ᱢᱟᱭᱟᱢ ᱨᱮ ᱯᱟᱹᱦᱤᱞ?',
        },
        options: {
          en: ['Gloves and direct pressure', 'Give food and water', 'Take photos first', 'Wait for bleeding to stop alone'],
          hi: ['दस्ताने और सीधा दबाव', 'खाना-पानी दें', 'पहले फ़ोटो', 'खुद रुकने का इंतज़ार'],
          sat: ['ᱜᱞᱚᱵᱷᱥ + ᱚᱛᱟ', 'ᱡᱚᱢ ᱫᱟᱜ', 'ᱯᱷᱚᱴᱚ', 'ᱛᱟᱺᱜᱤ'],
        },
        correctIndex: 0,
      },
      {
        id: 'aq2',
        question: {
          en: 'Chemical splash in eyes — flush for about?',
          hi: 'आँखों में रसायन — लगभग कितनी देर धोएँ?',
          sat: 'ᱢᱮᱫ ᱨᱮ ᱠᱮᱢᱤᱠᱟᱞ — ᱫᱟᱜ?',
        },
        options: {
          en: ['15 minutes at eyewash', '5 seconds only', 'No flush needed', 'Rub with dry cloth'],
          hi: ['आईवॉश पर 15 मिनट', 'केवल 5 सेकंड', 'धोना ज़रूरी नहीं', 'सूखे कपड़े से रगड़ें'],
          sat: ['᱑᱕ ᱴᱤᱡ', '᱕ ᱥᱮᱠᱮᱱᱰ', 'ᱵᱟᱝ ᱫᱚᱨᱠᱟᱨ', 'ᱠᱟᱯᱲᱟ'],
        },
        correctIndex: 0,
      },
      {
        id: 'aq3',
        question: {
          en: 'After initial aid, the casualty should go to?',
          hi: 'प्रारंभिक सहायता के बाद घायल किधर?',
          sat: 'ᱯᱩᱭᱞᱟ ᱜᱚᱲᱚ ᱛᱟᱭᱚᱢ?',
        },
        options: {
          en: ['Assembly / muster for medical handover', 'Home without telling anyone', 'Back to the hazard zone', 'Canteen alone'],
          hi: ['मेडिकल हैंडओवर के लिए असेंबली/मस्टर', 'बिना बताए घर', 'खतरा क्षेत्र वापस', 'अकेले कैंटीन'],
          sat: ['ᱡᱩᱢᱤᱫ / ᱰᱚᱠᱴᱚᱨ', 'ᱚᱲᱟᱜ', 'ᱠᱷᱚᱛᱨᱟ', 'ᱠᱮᱱᱴᱤᱱ'],
        },
        correctIndex: 0,
      },
      {
        id: 'aq4',
        question: {
          en: 'Before touching a bleeding wound you should?',
          hi: 'रक्तस्राव घाव छूने से पहले?',
          sat: 'ᱢᱟᱭᱟᱢ ᱛᱤ ᱢᱟᱲᱟᱝ?',
        },
        options: {
          en: ['Put on protective gloves', 'Use bare hands always', 'Wash with solvent', 'Blow on the wound'],
          hi: ['सुरक्षा दस्ताने पहनें', 'हमेशा नंगे हाथ', 'सॉल्वेंट से धोएँ', 'घाव पर फूँकें'],
          sat: ['ᱜᱞᱚᱵᱷᱥ', 'ᱮᱝᱜᱟ ᱛᱤ', 'ᱥᱚᱞᱵᱷᱮᱱᱴ', 'ᱯᱷᱩᱸᱠ'],
        },
        correctIndex: 0,
      },
      {
        id: 'aq5',
        question: {
          en: 'Moving a seriously injured person is OK when?',
          hi: 'गंभीर घायल को कब हिलाना ठीक?',
          sat: 'ᱜᱚᱡᱚᱜ ᱦᱚᱲ ᱩᱪᱟṲ ᱚᱠᱟ?',
        },
        options: {
          en: ['Only if immediate danger (fire, collapse)', 'Always immediately', 'To get a better photo', 'Never under any condition'],
          hi: ['केवल तत्काल खतरा (आग, गिरना)', 'हमेशा तुरंत', 'बेहतर फ़ोटो के लिए', 'किसी भी स्थिति में कभी नहीं'],
          sat: ['ᱡᱚᱛᱚᱨ ᱠᱷᱚᱛᱨᱟ ᱜᱮ', 'ᱡᱚᱛᱚ ᱚᱠᱚᱛᱚ', 'ᱯᱷᱚᱴᱚ', 'ᱛᱤᱱᱟ ᱦᱚ ᱵᱟᱝ'],
        },
        correctIndex: 0,
      },
    ],
  },
]
