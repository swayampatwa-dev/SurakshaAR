import type { Lang, OverlayType } from '../types'

export type ModelHotspot = {
  n: number
  position: [number, number, number]
  title: Record<Lang, string>
  body: Record<Lang, string>
}

const L = (
  en: string,
  hi: string,
  sat: string,
): Record<Lang, string> => ({ en, hi, sat })

/** Clickable info points per 3D overlay — tap number to learn the part & how it works. */
export const MODEL_HOTSPOTS: Record<OverlayType, ModelHotspot[]> = {
  exit: [
    {
      n: 1,
      position: [-0.95, 0.7, 0.25],
      title: L('EXIT panel', 'EXIT पैनल', 'EXIT ᱯᱮᱱᱮᱞ'),
      body: L(
        'Photoluminescent green face stays visible in smoke/power cut. Always face the nearest clear route out.',
        'धुएँ/बिजली कटने पर भी हरा पैनल दिखता है। हमेशा सबसे साफ़ निकास मार्ग की ओर रहें।',
        'ᱫᱷᱩᱵᱟᱹᱣ/ᱵᱤᱡᱽᱞᱤ ᱵᱚᱸᱫᱚ ᱨᱮᱦᱚᱸ ᱦᱟᱹᱨᱤᱭᱟᱹ ᱯᱮᱱᱮᱞ ᱧᱮᱞᱚᱜᱼᱟ᱾',
      ),
    },
    {
      n: 2,
      position: [0.95, 0.4, 0.25],
      title: L('Direction arrow', 'दिशा तीर', 'ᱰᱤᱥᱟ ᱛᱤᱨ'),
      body: L(
        'Arrow points the evacuation flow. Never walk against EXIT arrows during a drill or real alarm.',
        'तीर निकासी की दिशा दिखाता है। अलार्म में तीर के उल्टा मत चलें।',
        'ᱛᱤᱨ ᱵᱟᱦᱨᱮᱭᱮᱱ ᱰᱟᱦᱟᱨ ᱩᱫᱩᱜᱟ᱾ ᱟᱞᱟᱨᱢ ᱨᱮ ᱩᱞᱴᱟ ᱟᱲᱟᱜ ᱟᱞᱚᱢ ᱪᱟᱞᱟᱜᱼᱟ᱾',
      ),
    },
  ],
  extinguisher: [
    {
      n: 1,
      position: [0.55, 0.9, 0.35],
      title: L('Handle & pin', 'हैंडल और पिन', 'ᱦᱮᱱᱰᱮᱞ ᱟᱨ ᱯᱤᱱ'),
      body: L(
        'Pull the safety pin first. Squeeze the handle only after you are aimed at the fire base.',
        'पहले सेफ्टी पिन खींचें। आग के आधार पर निशाना लगाने के बाद ही हैंडल दबाएँ।',
        'ᱯᱟᱹᱦᱤᱞ ᱯᱤᱱ ᱚᱰᱚᱠᱮᱢ᱾ ᱥᱮᱝᱜᱮᱞ ᱞᱟᱛᱟᱨ ᱨᱮ ᱧᱮᱞ ᱛᱟᱭᱚᱢ ᱦᱮᱱᱰᱮᱞ ᱚᱛᱟᱭᱢᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [0.85, 0.2, 0.2],
      title: L('Nozzle / horn', 'नोजल / हॉर्न', 'ᱱᱚᱡᱚᱞ'),
      body: L(
        'CO₂ horn aims gas at the base of the flames — never at a person. Keep 2–3 m stand-off.',
        'CO₂ हॉर्न लौ के आधार पर लगाएँ — व्यक्ति पर कभी नहीं। 2–3 मी दूरी रखें।',
        'CO₂ ᱦᱚᱨᱱ ᱥᱮᱝᱜᱮᱞ ᱞᱟᱛᱟᱨ ᱨᱮ ᱫᱚᱦᱚᱭᱢᱮ — ᱦᱚᱲ ᱪᱮᱛᱟᱱ ᱵᱟᱝ᱾',
      ),
    },
    {
      n: 3,
      position: [-0.5, 0.15, 0.4],
      title: L('PASS method', 'PASS विधि', 'PASS ᱦᱚᱨ'),
      body: L(
        'Pull pin → Aim at base → Squeeze → Sweep side to side until flame is out, then watch for re-ignition.',
        'पिन खींचो → आधार पर निशाना → दबाओ → इधर-उधर स्वाइप करो, फिर दोबारा जलने पर नज़र रखो।',
        'ᱯᱤᱱ → ᱧᱮᱞ → ᱚᱛᱟ → ᱥᱣᱤᱯ ᱢᱮ᱾ ᱫᱩᱦᱲᱟᱹ ᱡᱩᱞ ᱧᱮᱞᱢᱮ᱾',
      ),
    },
  ],
  evacuate: [
    {
      n: 1,
      position: [-1.4, 1.35, 0],
      title: L('Raise alarm', 'अलार्म बजाएँ', 'ᱟᱞᱟᱨᱢ ᱥᱟᱹᱛᱤᱭᱟᱹ'),
      body: L(
        'Step 1: shout / hit the nearest call point so everyone knows to leave — do not delay for tools.',
        'चरण 1: चिल्लाएँ / निकटतम कॉल पॉइंट दबाएँ — औज़ारों के लिए मत रुकें।',
        'ᱯᱟᱹᱦᱤᱞ: ᱨᱚᱲ ᱢᱮ / ᱠᱚᱞ ᱯᱚᱭᱮᱱᱴ ᱚᱛᱟᱭᱢᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [1.3, 1.15, 0],
      title: L('Follow EXIT → muster', 'EXIT → मस्टर', 'EXIT → ᱢᱚᱥᱴᱚᱨ'),
      body: L(
        'Walk the marked yellow path to EXIT, then report to the muster / assembly point for headcount.',
        'पीले मार्ग पर EXIT तक जाएँ, फिर हेडकाउंट के लिए मस्टर पॉइंट पर रिपोर्ट करें।',
        'ᱥᱟᱥᱟᱝ ᱰᱟᱦᱟᱨ ᱛᱮ EXIT, ᱛᱟᱭᱚᱢ ᱢᱚᱥᱴᱚᱨ ᱨᱮ ᱨᱤᱯᱚᱨᱴ᱾',
      ),
    },
  ],
  hazard: [
    {
      n: 1,
      position: [-1.2, 1.45, 0],
      title: L('HOT zone', 'हॉट ज़ोन', 'HOT ᱡᱚᱱ'),
      body: L(
        'Immediate danger — gas / heat / energy present. Only trained responders with SCBA may enter.',
        'तुरंत खतरा — गैस/गर्मी। केवल प्रशिक्षित रेस्पॉन्डर SCBA के साथ प्रवेश करें।',
        'ᱡᱷᱚᱛᱚ ᱠᱷᱚᱛᱨᱟ — ᱥᱮᱬᱟ ᱨᱮᱥᱯᱚᱱᱰᱚᱨ ᱜᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [0.1, 0.75, 0],
      title: L('WARM zone', 'वार्म ज़ोन', 'WARM ᱡᱚᱱ'),
      body: L(
        'Support / decontamination belt. Keep equipment staged here; do not wander into HOT without order.',
        'सपोर्ट/डीकॉन बेल्ट। उपकरण यहाँ रखें; आदेश बिना HOT में न जाएँ।',
        'ᱥᱚᱯᱚᱨᱴ ᱡᱚᱱ᱾ HOT ᱨᱮ ᱟᱫᱮᱥ ᱵᱟᱝᱛᱮ ᱟᱞᱚᱢ ᱪᱟᱞᱟᱜᱼᱟ᱾',
      ),
    },
    {
      n: 3,
      position: [1.5, 0.55, 0],
      title: L('COLD zone', 'कोल्ड ज़ोन', 'COLD ᱡᱚᱱ'),
      body: L(
        'Safe staging & command. Public / untrained workers stay here until all-clear.',
        'सुरक्षित स्टेजिंग और कमांड। ऑल-क्लियर तक बिना ट्रेनिंग वाले यहीं रहें।',
        'ᱨᱚᱠᱷᱟ ᱡᱟᱭᱜᱟ᱾ ᱚᱞ-ᱠᱞᱤᱭᱚᱨ ᱦᱟᱹᱵᱤᱡ ᱱᱚᱸᱰᱮ᱾',
      ),
    },
  ],
  ppe: [
    {
      n: 1,
      position: [-1.2, 0.95, 0.3],
      title: L('Hard hat', 'हेलमेट', 'ᱦᱮᱞᱢᱮᱴ'),
      body: L(
        'Protects skull from falling rock / tools. Chin strap on in windy shafts; replace if cracked.',
        'गिरते पत्थर/औज़ार से सिर बचाता है। दरार हो तो बदलें।',
        'ᱦᱟᱹᱛᱤᱧ ᱫᱷᱤᱨᱤ ᱠᱷᱚᱱ ᱵᱚᱸᱫᱚᱭᱟ᱾ ᱨᱟᱹᱯᱩᱫ ᱞᱮᱠᱷᱟᱱ ᱵᱚᱫᱚᱞᱢᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [0, 0.85, 0.25],
      title: L('Gas detector', 'गैस डिटेक्टर', 'ᱜᱮᱥ ᱰᱤᱴᱮᱠᱴᱚᱨ'),
      body: L(
        'Clip in breathing zone. Alarm = leave to fresh air immediately; never silence and keep working.',
        'साँस क्षेत्र में क्लिप करें। अलार्म = तुरंत ताज़ी हवा में जाएँ।',
        'ᱟᱞᱟᱨᱢ = ᱡᱷᱚᱛᱚ ᱛᱮ ᱵᱟᱦᱨᱮ ᱪᱟᱞᱟᱜ ᱢᱮ᱾',
      ),
    },
    {
      n: 3,
      position: [1.2, 0.7, 0.3],
      title: L('Safety harness', 'सेफ्टी हार्नेस', 'ᱦᱟᱨᱱᱮᱥ'),
      body: L(
        'Full-body fall arrest. Anchor above D-ring; inspect webbing before every confined entry.',
        'फॉल अरेस्ट। डी-रिंग के ऊपर एंकर; हर एंट्री से पहले वेबिंग जाँचें।',
        'ᱯᱮᱲᱟ ᱠᱷᱚᱱ ᱵᱟᱸᱪᱟᱣᱟ᱾ ᱡᱚᱛᱚ ᱫᱷᱟᱣ ᱧᱮᱞᱢᱮ᱾',
      ),
    },
  ],
  buddy: [
    {
      n: 1,
      position: [-1.1, 1.5, 0],
      title: L('Attendant', 'अटेंडेंट', 'ᱟᱴᱮᱱᱰᱮᱱᱴ'),
      body: L(
        'Stays outside the space, keeps log, holds rescue gear ready, and never leaves the post.',
        'बाहर रहता है, लॉग रखता है, रेस्क्यू गियर तैयार रखता है, पोस्ट नहीं छोड़ता।',
        'ᱵᱟᱦᱨᱮ ᱛᱟᱦᱮᱸᱱᱟ᱾ ᱯᱚᱥᱴ ᱵᱟᱝ ᱵᱟᱹᱜᱤᱭᱟ᱾',
      ),
    },
    {
      n: 2,
      position: [1.1, 1.5, 0],
      title: L('Entrant', 'एंट्रेंट', 'ᱮᱱᱴᱨᱮᱱᱴ'),
      body: L(
        'Worker inside confined space. Signals attendant every 2 min; exits on any alarm or lost contact.',
        'सीमित स्थान के अंदर। हर 2 मिनट सिग्नल; अलार्म/संपर्क टूटने पर बाहर।',
        'ᱵᱷᱤᱛᱨᱤ ᱨᱮ᱾ 2 ᱴᱤᱯᱤᱡ ᱨᱮ ᱥᱤᱜᱽᱱᱟᱞ᱾',
      ),
    },
  ],
  alarm: [
    {
      n: 1,
      position: [0.7, 0.55, 0.3],
      title: L('Beacon strobe', 'बीकन स्ट्रोब', 'ᱵᱤᱠᱚᱱ'),
      body: L(
        'Visual flash alerts workers in noisy plants where sirens are hard to hear. Move to EXIT on sight.',
        'शोर वाले प्लांट में रोशनी से चेतावनी। देखते ही EXIT की ओर जाएँ।',
        'ᱧᱮᱞ ᱛᱮᱜᱮ EXIT ᱪᱟᱞᱟᱜ ᱢᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [-0.55, -0.35, 0.3],
      title: L('Sounder base', 'साउंडर बेस', 'ᱥᱟᱣᱱᱰᱚᱨ'),
      body: L(
        'Audible horn. Know your site’s tone (continuous = evacuate). Do not reset without supervisor.',
        'हॉर्न। साइट टोन जानें (लगातार = निकासी)। सुपरवाइज़र बिना रीसेट न करें।',
        'ᱦᱚᱨᱱ᱾ ᱥᱩᱯᱚᱨᱵᱷᱟᱭᱡᱚᱨ ᱵᱟᱝᱛᱮ ᱨᱤᱥᱮᱴ ᱟᱞᱚᱢ᱾',
      ),
    },
  ],
  assembly: [
    {
      n: 1,
      position: [0, 0.7, 0.2],
      title: L('Muster board', 'मस्टर बोर्ड', 'ᱢᱚᱥᱴᱚᱨ ᱵᱚᱨᱰ'),
      body: L(
        'Stand inside the green ring, report your name/ID to the warden, wait for all-clear — do not leave early.',
        'हरी रिंग में खड़े हों, वॉर्डन को नाम/आईडी दें, ऑल-क्लियर तक रुकें।',
        'ᱦᱟᱹᱨᱤᱭᱟᱹ ᱨᱤᱝ ᱨᱮ ᱛᱟᱦᱮᱸᱱᱢᱮ᱾ ᱚᱞ-ᱠᱞᱤᱭᱚᱨ ᱦᱟᱹᱵᱤᱡ᱾',
      ),
    },
  ],
  smoke_crawl: [
    {
      n: 1,
      position: [0, 1.35, 0],
      title: L('Smoke layer', 'धुएँ की परत', 'ᱫᱷᱩᱵᱟᱹᱣ ᱞᱮᱭᱚᱨ'),
      body: L(
        'Hot toxic smoke rises. Keep head low — coolest, most breathable air is near the floor.',
        'गर्म जहरीला धुआँ ऊपर जाता है। सिर नीचे रखें — साँस योग्य हवा फर्श के पास।',
        'ᱫᱷᱩᱵᱟᱹᱣ ᱪᱮᱛᱟᱱ᱾ ᱞᱟᱛᱟᱨ ᱨᱮ ᱥᱟᱸᱥ᱾',
      ),
    },
    {
      n: 2,
      position: [0, -0.2, 0.5],
      title: L('Crawl path', 'रेंगने का पथ', 'ᱨᱮᱝᱜᱚ ᱰᱟᱦᱟᱨ'),
      body: L(
        'Crawl on hands/knees along wall or yellow markers toward EXIT. Cover nose/mouth if possible.',
        'दीवार या पीले मार्कर के साथ हाथ-घुटनों पर EXIT की ओर रेंगें।',
        'ᱦᱟᱹᱛᱤᱧ ᱠᱩᱴᱤ ᱛᱮ EXIT ᱥᱮᱫ ᱨᱮᱝᱜᱮᱢ᱾',
      ),
    },
  ],
  fire_blanket: [
    {
      n: 1,
      position: [0, 0.85, 0.2],
      title: L('Pull tabs', 'पुल टैब', 'ᱯᱩᱞ ᱴᱮᱵ'),
      body: L(
        'Pull downward tabs to release the blanket. Wrap from body toward flames; never throw over yourself first.',
        'टैब खींचकर कंबल निकालें। शरीर से आग की ओर लपेटें।',
        'ᱴᱮᱵ ᱚᱰᱚᱠᱮᱢ᱾ ᱦᱚᱲᱢᱚ ᱠᱷᱚᱱ ᱥᱮᱝᱜᱮᱞ ᱥᱮᱫ᱾',
      ),
    },
    {
      n: 2,
      position: [0, -0.55, 0.2],
      title: L('Smother fabric', 'बुझाने वाला कपड़ा', 'ᱵᱚᱸᱫᱚ ᱠᱟᱹᱯᱲᱟ'),
      body: L(
        'Cuts oxygen to small clothing / pan fires. Leave in place until cool; call for help if fire grows.',
        'छोटी आग की ऑक्सीजन काटता है। ठंडा होने तक छोड़ें; बढ़े तो मदद बुलाएँ।',
        'ᱚᱠᱥᱤᱡᱮᱱ ᱚᱰᱚᱠᱟ᱾ ᱨᱟᱵᱟᱝ ᱦᱟᱹᱵᱤᱡ ᱫᱚᱦᱚᱭᱢᱮ᱾',
      ),
    },
  ],
  gas_meter: [
    {
      n: 1,
      position: [0, 0.85, 0.25],
      title: L('Sensor snout', 'सेंसर स्नाउट', 'ᱥᱮᱱᱥᱚᱨ'),
      body: L(
        'Draws air sample. Hold at breathing height; bump-test before shift.',
        'हवा का सैंपल लेता है। साँस ऊँचाई पर पकड़ें; शिफ्ट से पहले बंप-टेस्ट।',
        'ᱦᱚᱭ ᱧᱮᱞᱟ᱾ ᱥᱤᱯᱷᱴ ᱞᱟᱦᱟ ᱴᱮᱥᱴ᱾',
      ),
    },
    {
      n: 2,
      position: [0.35, 0.35, 0.35],
      title: L('Display & LEDs', 'डिस्प्ले और LED', 'ᱰᱤᱥᱯᱞᱮ'),
      body: L(
        'Shows O₂, LEL, CO, H₂S. Green = OK; yellow/red = leave and report. Never ignore a flash.',
        'O₂, LEL, CO, H₂S दिखाता है। हरा = ठीक; पीला/लाल = बाहर जाकर रिपोर्ट।',
        'ᱦᱟᱹᱨᱤᱭᱟᱹ = ᱴᱷᱤᱠ᱾ ᱟᱨᱟᱜ/ᱥᱟᱥᱟᱝ = ᱵᱟᱦᱨᱮ᱾',
      ),
    },
  ],
  respirator: [
    {
      n: 1,
      position: [-0.55, 0.15, 0.45],
      title: L('Filter cartridge', 'फ़िल्टर कारतूस', 'ᱯᱷᱤᱞᱴᱚᱨ'),
      body: L(
        'Removes specific gases / dust. Match cartridge colour to hazard; change when saturated or expired.',
        'गैस/धूल हटाता है। खतरे के अनुसार रंग चुनें; संतृप्त होने पर बदलें।',
        'ᱜᱮᱥ/ᱫᱷᱩᱲᱤ ᱚᱰᱚᱠᱟ᱾ ᱚᱠᱛᱚ ᱯᱟᱨᱚᱢ ᱞᱮᱠᱷᱟᱱ ᱵᱚᱫᱚᱞᱢᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [0.2, -0.35, 0.55],
      title: L('Face seal', 'फेस सील', 'ᱢᱮᱫ ᱥᱤᱞ'),
      body: L(
        'Must seal against skin — no beard gaps. Do a negative-pressure check every donning.',
        'त्वचा पर सील जरूरी — दाढ़ी गैप नहीं। हर बार नेगेटिव-प्रेशर चेक करें।',
        'ᱥᱤᱞ ᱫᱚᱨᱠᱟᱨ᱾ ᱡᱚᱛᱚ ᱫᱷᱟᱣ ᱧᱮᱞᱢᱮ᱾',
      ),
    },
  ],
  tripod: [
    {
      n: 1,
      position: [0, 1.45, 0],
      title: L('Head / winch', 'हेड / विन्च', 'ᱦᱮᱰ / ᱣᱤᱧᱪ'),
      body: L(
        'Anchors the retrieval line. Only certified winch operators may raise/lower the entrant.',
        'रिट्रीवल लाइन का एंकर। केवल प्रमाणित ऑपरेटर ऊपर-नीचे करें।',
        'ᱥᱮᱬᱟ ᱚᱯᱚᱨᱮᱴᱚᱨ ᱜᱮ ᱪᱟᱞᱟᱣᱟ᱾',
      ),
    },
    {
      n: 2,
      position: [0, -0.35, 0.35],
      title: L('Rescue cradle', 'रेस्क्यू क्रैडल', 'ᱨᱮᱥᱠᱭᱩ'),
      body: L(
        'Supports the worker on the line. Keep legs clear of shaft edges while hoisting.',
        'लाइन पर वर्कर को सहारा। होइस्टिंग में शाफ्ट किनारे से पैर दूर रखें।',
        'ᱦᱚᱲᱢᱚ ᱥᱟᱹᱜᱩᱱ᱾ ᱡᱟᱝᱜᱟ ᱥᱟᱵᱽᱫᱷᱟᱱ᱾',
      ),
    },
  ],
  ventilation: [
    {
      n: 1,
      position: [0.9, 0.3, 0.3],
      title: L('Fan blades', 'पंखा ब्लेड', 'ᱯᱚᱸᱠᱷᱟ'),
      body: L(
        'Forced-air clears fumes from confined spaces before entry. Confirm airflow direction with smoke tube.',
        'जबरन हवा से धुएँ साफ़। एंट्री से पहले स्मोक ट्यूब से दिशा जाँचें।',
        'ᱦᱚᱭ ᱛᱮ ᱫᱷᱩᱵᱟᱹᱣ ᱥᱟᱯᱷᱟ᱾ ᱞᱟᱦᱟ ᱧᱮᱞᱢᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [-0.7, -0.7, 0.3],
      title: L('Housing', 'हाउसिंग', 'ᱦᱟᱣᱥᱤᱝ'),
      body: L(
        'Guards moving parts. Never reach into a running fan — lockout first if clearing debris.',
        'चलते हिस्से सुरक्षित। चलते पंखे में हाथ न डालें — पहले लॉकआउट।',
        'ᱪᱟᱞᱟᱣ ᱯᱚᱸᱠᱷᱟ ᱨᱮ ᱛᱤ ᱟᱞᱚᱢ᱾',
      ),
    },
  ],
  loto: [
    {
      n: 1,
      position: [0, 0.85, 0.2],
      title: L('Padlock shackle', 'पैडलॉक शेकल', 'ᱞᱚᱠ'),
      body: L(
        'Your personal lock on the energy isolation point. Only YOU may remove your lock.',
        'ऊर्जा आइसोलेशन पर आपका निजी लॉक। सिर्फ आप ही हटा सकते हैं।',
        'ᱟᱢᱟᱜ ᱞᱚᱠ᱾ ᱟᱢ ᱜᱮ ᱚᱰᱚᱠ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ᱾',
      ),
    },
    {
      n: 2,
      position: [0.55, 0.25, 0.2],
      title: L('Danger tag', 'खतरा टैग', 'ᱴᱮᱜ'),
      body: L(
        'Name, date, reason. Warns others not to energise. Follow Lock → Tag → Try zero-energy test.',
        'नाम, तारीख, कारण। Lock → Tag → Try ज़ीरो-एनर्जी टेस्ट करें।',
        'ᱧᱩᱛᱩᱢ ᱢᱮᱛᱟᱜᱼᱟ᱾ Lock → Tag → Try᱾',
      ),
    },
  ],
  conveyor_guard: [
    {
      n: 1,
      position: [0, 1.1, 0.4],
      title: L('Guard mesh', 'गार्ड मेश', 'ᱜᱟᱰᱟ'),
      body: L(
        'Physical barrier stops hands/clothes from nip points. Never remove while machine is live.',
        'निप पॉइंट से हाथ/कपड़े रोकता है। मशीन चालू रहते न हटाएँ।',
        'ᱢᱮᱥᱤᱱ ᱪᱟᱞᱟᱣ ᱨᱮ ᱟᱞᱚᱢ ᱚᱰᱚᱠᱟ᱾',
      ),
    },
    {
      n: 2,
      position: [0, -0.55, 0.4],
      title: L('Roller drum', 'रोलर ड्रम', 'ᱨᱚᱞᱚᱨ'),
      body: L(
        'Moving belt can pull limbs in. Stay outside yellow line; use emergency stop if anything catches.',
        'बेल्ट अंग खींच सकती है। पीली लाइन के बाहर रहें; फँसे तो ई-स्टॉप।',
        'ᱵᱮᱞᱴ ᱴᱟᱱᱟ᱾ ᱥᱟᱥᱟᱝ ᱞᱟᱭᱤᱱ ᱵᱟᱦᱨᱮ᱾',
      ),
    },
  ],
  barrier: [
    {
      n: 1,
      position: [0, 1.25, 0],
      title: L('Caution rails', 'सावधानी रेल', 'ᱠᱚᱥᱚᱱ ᱨᱮᱞ'),
      body: L(
        'Marks exclusion zone for excavation, blast, or open edge. Do not duck under tape/rails.',
        'खुदाई/ब्लास्ट/किनारे का ज़ोन। टेप/रेल के नीचे से न गुज़रें।',
        'ᱵᱟᱨᱚᱡ ᱡᱚᱱ᱾ ᱞᱟᱛᱟᱨ ᱛᱮ ᱟᱞᱚᱢ ᱪᱟᱞᱟᱜᱼᱟ᱾',
      ),
    },
  ],
  cap_lamp: [
    {
      n: 1,
      position: [0, 0.35, 0.7],
      title: L('Lamp head', 'लैंप हेड', 'ᱞᱮᱢᱯ'),
      body: L(
        'Hands-free light for dark galleries. Point down when facing others to avoid glare.',
        'अँधेरी गैलरी के लिए। दूसरों की ओर घुमाते समय नीचे रखें।',
        'ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱞᱟᱛᱟᱨ ᱫᱚᱦᱚᱭᱢᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [0, -0.45, -0.25],
      title: L('Battery pack', 'बैटरी पैक', 'ᱵᱮᱴᱟᱨᱤ'),
      body: L(
        'Charge before shift; swap if low. A dead lamp is a lost worker risk underground.',
        'शिफ्ट से पहले चार्ज करें। कम होने पर बदलें।',
        'ᱥᱤᱯᱷᱴ ᱞᱟᱦᱟ ᱪᱟᱨᱡᱽ᱾',
      ),
    },
  ],
  gloves_boots: [
    {
      n: 1,
      position: [-0.9, 0.75, 0.25],
      title: L('Cut-resistant gloves', 'कट-प्रतिरोधी दस्ताने', 'ᱜᱞᱚᱵᱷ'),
      body: L(
        'Protect hands from sharp rock, steel edges, chemicals. Remove before touching rotating shafts.',
        'तेज़ पत्थर/स्टील/रसायन से हाथ बचाएँ। घूमते शाफ्ट पर दस्ताने उतारें।',
        'ᱛᱤ ᱨᱚᱠᱷᱟ᱾ ᱜᱷᱩᱸᱨᱟᱹᱣ ᱥᱟᱯᱷᱴ ᱨᱮ ᱚᱰᱚᱠᱮᱢ᱾',
      ),
    },
    {
      n: 2,
      position: [0.9, 0.55, 0.35],
      title: L('Steel-toe boots', 'स्टील-टो जूते', 'ᱡᱩᱛᱟ'),
      body: L(
        'Toe cap + oil-resistant sole. Lace tight; replace if sole is worn smooth on wet floors.',
        'टो कैप + ऑयल-रेज़िस्टेंट सोल। गीले फर्श पर घिसे सोल बदलें।',
        'ᱡᱟᱝᱜᱟ ᱨᱚᱠᱷᱟ᱾ ᱨᱟᱹᱯᱩᱫ ᱥᱚᱞ ᱵᱚᱫᱚᱞᱢᱮ᱾',
      ),
    },
  ],
  warning_sign: [
    {
      n: 1,
      position: [0, 0.85, 0.25],
      title: L('Hazard symbol', 'खतरा चिह्न', 'ᱠᱷᱚᱛᱨᱟ ᱪᱤᱱᱦᱟᱹ'),
      body: L(
        'Yellow diamond = caution / danger ahead. Read text board below before crossing the line.',
        'पीला डायमंड = आगे सावधानी। लाइन पार करने से पहले नीचे का टेक्स्ट पढ़ें।',
        'ᱥᱟᱥᱟᱝ = ᱥᱟᱵᱽᱫᱷᱟᱱ᱾ ᱯᱟᱲᱦᱟᱣ ᱛᱟᱭᱚᱢ ᱪᱟᱞᱟᱜᱼᱟ᱾',
      ),
    },
  ],
  first_aid: [
    {
      n: 1,
      position: [0, 0.65, 0.35],
      title: L('Red cross kit', 'रेड क्रॉस किट', 'ᱯᱷᱟᱨᱥᱴ ᱮᱭᱤᱰ'),
      body: L(
        'Bandages, antiseptic, gloves, CPR mask. Know its wall location; only trained first-aiders treat serious injury.',
        'पट्टी, एंटीसेप्टिक, दस्ताने। दीवार स्थान जानें; गंभीर चोट पर प्रशिक्षित व्यक्ति ही।',
        'ᱡᱟᱭᱜᱟ ᱵᱟᱲᱟᱭᱢᱮ᱾ ᱥᱮᱬᱟ ᱦᱚᱲ ᱜᱮ ᱜᱚᱲᱚᱭᱟ᱾',
      ),
    },
  ],
  eyewash: [
    {
      n: 1,
      position: [0, 0.55, 0.4],
      title: L('Twin nozzles', 'ट्विन नोजल', 'ᱱᱚᱡᱚᱞ'),
      body: L(
        'Flush both eyes 15 minutes after chemical splash. Hold lids open; remove contacts; get medical check.',
        'केमिकल स्प्लैश पर दोनों आँखें 15 मिनट धोएँ। पलकें खुली रखें; डॉक्टर दिखाएँ।',
        '15 ᱴᱤᱯᱤᱡ ᱫᱟᱜ ᱛᱮ ᱥᱟᱯᱷᱟ᱾ ᱰᱚᱠᱴᱚᱨ ᱧᱮᱞᱢᱮ᱾',
      ),
    },
    {
      n: 2,
      position: [0, -0.55, 0.35],
      title: L('Reservoir tank', 'रिजर्वॉयर टैंक', 'ᱴᱮᱝᱠ'),
      body: L(
        'Holds sterile rinse water. Keep path clear — every second counts after acid/alkali in eyes.',
        'स्टेराइल पानी रखता है। रास्ता साफ़ रखें — आँख में एसिड/बेस पर हर सेकंड मायने रखता है।',
        'ᱰᱟᱦᱟᱨ ᱥᱟᱯᱷᱟ ᱫᱚᱦᱚᱭᱢᱮ᱾',
      ),
    },
  ],
}
