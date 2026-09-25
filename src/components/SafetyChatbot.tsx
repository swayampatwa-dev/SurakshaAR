import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import { useStore } from '../store'
import { t } from '../i18n'
import type { Lang } from '../types'

type Msg = { id: string; role: 'bot' | 'user'; text: string }

type Faq = {
  keys: string[]
  answer: Record<Lang, string>
}

const FAQS: Faq[] = [
  {
    keys: ['what is', 'suraksha', 'app', 'prototype', 'about', 'क्या है', 'सुरक्षा', 'ᱪᱤᱠᱟᱹ'],
    answer: {
      en: 'SurakshaAR is a phone-first AR safety trainer for Jharkhand mining & manufacturing. Train on your camera, pass a quiz (≥70%), get a QR-verifiable certificate — no VR headset needed.',
      hi: 'SurakshaAR झारखंड खनन/उद्योग के लिए फोन-आधारित AR सुरक्षा प्रशिक्षण है। कैमरे पर सीखें, क्विज़ (≥70%) पास करें, QR प्रमाणपत्र पाएँ — VR हेडसेट नहीं चाहिए।',
      sat: 'SurakshaAR ᱯᱷᱚᱱ AR ᱥᱩᱨᱚᱠᱷᱭᱟ ᱥᱮᱪᱮᱫ᱾ ᱠᱮᱢᱮᱨᱟ ᱨᱮ ᱥᱮᱬᱟ, quiz ≥70%, QR certificate — VR ᱵᱟᱝ ᱫᱚᱨᱠᱟᱨ᱾',
    },
  },
  {
    keys: ['pass', 'extinguisher', 'fire', 'co2', 'अग्नि', 'अग्निशामक', 'ᱥᱮᱝᱜᱮᱞ'],
    answer: {
      en: 'PASS for extinguishers: Pull the pin → Aim at the base of the fire → Squeeze the handle → Sweep side to side. Keep 2–3 m away. Never use water on electrical fires — use CO₂ / dry powder as trained.',
      hi: 'PASS: पिन खींचो → आग के आधार पर निशाना → हैंडल दबाओ → इधर-उधर स्वाइप। 2–3 मी दूर रहें। बिजली की आग पर पानी न डालें।',
      sat: 'PASS: ᱯᱤᱱ → ᱞᱟᱛᱟᱨ ᱧᱮᱞ → ᱚᱛᱟ → ᱥᱣᱤᱯ᱾ 2–3 ᱢᱤ ᱥᱟᱺᱜᱤᱧ᱾',
    },
  },
  {
    keys: ['ppe', 'helmet', 'gloves', 'boots', 'harness', 'दस्ताने', 'हेलमेट', 'ᱦᱮᱞᱢᱮᱴ'],
    answer: {
      en: 'Site PPE basics: hard hat on, steel-toe boots laced, cut-resistant gloves for sharp edges, harness for height/confined entry, and a charged gas detector clipped in the breathing zone.',
      hi: 'PPE: हेलमेट, स्टील-टो जूते, कट-प्रतिरोधी दस्ताने, ऊँचाई/सीमित स्थान पर हार्नेस, और साँस क्षेत्र में गैस डिटेक्टर।',
      sat: 'PPE: ᱦᱮᱞᱢᱮᱴ, ᱡᱩᱛᱟ, ᱜᱞᱚᱵᱷ, ᱦᱟᱨᱱᱮᱥ, ᱜᱮᱥ ᱰᱤᱴᱮᱠᱴᱚᱨ᱾',
    },
  },
  {
    keys: ['loto', 'lock', 'tag', 'machinery', 'lockout', 'लॉक', 'मशीन'],
    answer: {
      en: 'LOTO = Lock · Tag · Try. Isolate energy, put YOUR padlock, fill the danger tag, then try to start — it must not energise. Only you may remove your lock.',
      hi: 'LOTO = लॉक · टैग · ट्राई। ऊर्जा काटें, अपना पैडलॉक लगाएँ, टैग भरें, फिर स्टार्ट ट्राई करें — चालू नहीं होना चाहिए।',
      sat: 'LOTO = Lock · Tag · Try᱾ ᱟᱢᱟᱜ ᱞᱚᱠ ᱜᱮ ᱚᱰᱚᱠ᱾',
    },
  },
  {
    keys: ['gas', 'confined', 'buddy', 'hot', 'warm', 'cold', 'गैस', 'सीमित', 'ᱜᱮᱥ'],
    answer: {
      en: 'Confined space: test with 4-gas meter first. HOT = trained responders only. Attendant stays outside, entrant signals every 2 min. Tripod & rescue line ready before entry.',
      hi: 'सीमित स्थान: पहले 4-गैस मीटर। HOT = केवल प्रशिक्षित। अटेंडेंट बाहर, एंट्रेंट हर 2 मिनट सिग्नल। ट्राइपॉड तैयार रखें।',
      sat: 'ᱠᱚᱱᱯᱷᱟᱭᱤᱱᱰ: 4-ᱜᱮᱥ ᱴᱮᱥᱴ᱾ Attendant ᱵᱟᱦᱨᱮ᱾ 2 ᱴᱤᱯᱤᱡ ᱥᱤᱜᱽᱱᱟᱞ᱾',
    },
  },
  {
    keys: ['certificate', 'qr', 'quiz', 'pass mark', '70', 'प्रमाण', 'क्विज़', 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ'],
    answer: {
      en: 'Finish AR steps → take the module quiz → score ≥70% → certificate is issued with a QR code. Supervisors verify it on the Verify page without logging in.',
      hi: 'AR स्टेप्स पूरे करें → क्विज़ ≥70% → QR वाला प्रमाणपत्र। सुपरवाइज़र Verify पेज पर बिना लॉगिन जाँच सकते हैं।',
      sat: 'AR ᱯᱩᱨᱟᱹ → quiz ≥70% → QR certificate᱾ Verify ᱥᱟᱦᱴᱟ ᱨᱮ ᱧᱮᱞ᱾',
    },
  },
  {
    keys: ['language', 'hindi', 'santali', 'english', 'भाषा', 'संताली', 'ᱯᱟᱹᱨᱥᱤ'],
    answer: {
      en: 'Use the EN / हिं / ᱥᱟᱱ switch in the top bar. Modules, quiz, and this chat follow your language choice.',
      hi: 'ऊपर EN / हिं / ᱥᱟᱱ चुनें। मॉड्यूल, क्विज़ और यह चैट आपकी भाषा में चलेंगे।',
      sat: 'ᱪᱮᱛᱟᱱ EN / हिं / ᱥᱟᱱ ᱵᱟᱪᱷᱟᱣᱢᱮ᱾',
    },
  },
  {
    keys: ['emergency', 'evacuate', 'exit', 'alarm', 'smoke', 'निकासी', 'अलार्म', 'EXIT'],
    answer: {
      en: 'On alarm: raise alert → follow EXIT arrows → stay low under smoke → report at assembly/muster for headcount. Never go back for tools.',
      hi: 'अलार्म: सूचना दें → EXIT तीर फॉलो करें → धुएँ में नीचे रहें → मस्टर पॉइंट पर हेडकाउंट। औज़ार लेने वापस न जाएँ।',
      sat: 'ᱟᱞᱟᱨᱢ → EXIT → ᱫᱷᱩᱵᱟᱹᱣ ᱞᱟᱛᱟᱨ → ᱢᱚᱥᱴᱚᱨ᱾',
    },
  },
  {
    keys: ['help', 'how', 'train', 'start', 'demo', 'शुरू', 'मदद', 'ᱜᱚᱲᱚ'],
    answer: {
      en: 'Start: Register/Login → Training modules → open a module → Start AR → tap numbered points on 3D models → finish quiz → get certificate. Also try AR Models and this Safety Chat.',
      hi: 'शुरू: रजिस्टर/लॉगिन → ट्रेनिंग मॉड्यूल → AR शुरू → 3D पर नंबर टैप → क्विज़ → प्रमाणपत्र। AR Models और यह Safety Chat भी देखें।',
      sat: 'Login → Modules → AR → ● tap → Quiz → Certificate᱾',
    },
  },
]

function matchFaq(input: string, lang: Lang): string {
  const q = input.toLowerCase().trim()
  if (!q) {
    return t('chatEmpty', lang)
  }
  let best: Faq | null = null
  let score = 0
  for (const faq of FAQS) {
    const s = faq.keys.reduce((acc, k) => (q.includes(k.toLowerCase()) ? acc + 1 : acc), 0)
    if (s > score) {
      score = s
      best = faq
    }
  }
  if (best && score > 0) return best.answer[lang] || best.answer.en
  return (
    {
      en: 'I can help with SurakshaAR, PASS/fire, PPE, LOTO, gas/confined space, evacuation, certificates, or languages. Try a quick chip below, or ask in simple words.',
      hi: 'मैं SurakshaAR, PASS/आग, PPE, LOTO, गैस/सीमित स्थान, निकासी, प्रमाणपत्र या भाषा में मदद कर सकता हूँ। नीचे चिप्स आज़माएँ।',
      sat: 'SurakshaAR, PASS, PPE, LOTO, ᱜᱮᱥ, EXIT, certificate ᱵᱟᱵᱚᱛ ᱠᱩᱞᱤᱭᱟᱹᱢᱮ᱾',
    } as Record<Lang, string>
  )[lang]
}

const CHIPS: { label: Record<Lang, string>; ask: Record<Lang, string> }[] = [
  {
    label: { en: 'What is SurakshaAR?', hi: 'SurakshaAR क्या है?', sat: 'SurakshaAR?' },
    ask: { en: 'What is SurakshaAR?', hi: 'SurakshaAR क्या है?', sat: 'SurakshaAR ᱪᱤᱠᱟᱹ?' },
  },
  {
    label: { en: 'PASS method', hi: 'PASS विधि', sat: 'PASS' },
    ask: { en: 'Explain PASS extinguisher', hi: 'PASS अग्निशामक', sat: 'PASS ᱥᱮᱝᱜᱮᱞ' },
  },
  {
    label: { en: 'LOTO', hi: 'LOTO', sat: 'LOTO' },
    ask: { en: 'How does LOTO work?', hi: 'LOTO कैसे काम करता है?', sat: 'LOTO?' },
  },
  {
    label: { en: 'Get certificate', hi: 'प्रमाणपत्र', sat: 'Certificate' },
    ask: { en: 'How do I get a certificate?', hi: 'प्रमाणपत्र कैसे मिले?', sat: 'Certificate ᱚᱠᱟᱞᱮ?' },
  },
]

export function SafetyChatbot() {
  const { language } = useStore()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([])
  const endRef = useRef<HTMLDivElement>(null)
  const welcome = useMemo(() => t('chatWelcome', language), [language])

  useEffect(() => {
    setMsgs([{ id: 'w', role: 'bot', text: welcome }])
  }, [welcome])

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, open])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const userMsg: Msg = { id: `u-${Date.now()}`, role: 'user', text: trimmed }
    const botMsg: Msg = {
      id: `b-${Date.now()}`,
      role: 'bot',
      text: matchFaq(trimmed, language),
    }
    setMsgs((m) => [...m, userMsg, botMsg])
    setInput('')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-4 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-safety text-ink shadow-[0_8px_28px_rgba(232,163,23,0.45)] transition hover:bg-safety-dim sm:bottom-6 sm:right-6"
        aria-label={t('chatOpen', language)}
      >
        {open ? <X className="h-6 w-6" strokeWidth={2.5} /> : <MessageCircle className="h-6 w-6" strokeWidth={2.5} />}
      </button>

      {open && (
        <div
          className="fixed bottom-[5.5rem] right-3 z-[70] flex w-[min(100vw-1.5rem,380px)] flex-col overflow-hidden rounded-2xl border border-line bg-coal shadow-[0_20px_50px_rgba(0,0,0,0.55)] sm:bottom-24 sm:right-6"
          role="dialog"
          aria-label={t('chatTitle', language)}
        >
          <div className="flex items-center gap-2.5 border-b border-line bg-panel px-3.5 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-safety/15 text-safety">
              <Bot className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-bone">{t('chatTitle', language)}</div>
              <div className="text-[11px] text-muted">{t('chatSub', language)}</div>
            </div>
            <Link
              to="/train"
              className="rounded border border-line px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-safety hover:border-safety/50"
              onClick={() => setOpen(false)}
            >
              {t('modules', language)}
            </Link>
          </div>

          <div className="flex max-h-[min(52vh,380px)] flex-col gap-2.5 overflow-y-auto px-3 py-3">
            {msgs.map((m) => (
              <div
                key={m.id}
                className={`max-w-[92%] rounded-xl px-3 py-2 text-[13px] leading-relaxed ${
                  m.role === 'user'
                    ? 'ml-auto bg-safety text-ink'
                    : 'mr-auto border border-line bg-panel text-soft'
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="flex gap-1.5 overflow-x-auto border-t border-line px-2.5 py-2 [scrollbar-width:none]">
            {CHIPS.map((c) => (
              <button
                key={c.label.en}
                type="button"
                onClick={() => send(c.ask[language] || c.ask.en)}
                className="shrink-0 rounded-full border border-line bg-panel-2 px-2.5 py-1 text-[11px] font-medium text-soft hover:border-safety/40 hover:text-safety"
              >
                {c.label[language] || c.label.en}
              </button>
            ))}
          </div>

          <form
            className="flex gap-2 border-t border-line p-2.5"
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('chatPlaceholder', language)}
              className="min-w-0 flex-1 rounded-lg border border-line bg-ink px-3 py-2 text-sm text-bone outline-none placeholder:text-muted focus:border-safety/50"
            />
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-safety text-ink hover:bg-safety-dim"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
