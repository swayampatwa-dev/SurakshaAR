import type { OverlayType } from '../types'

/** Static SVG previews — no WebGL, works on every phone */
export function ModelThumbArt({ type }: { type: OverlayType }) {
  const common = {
    viewBox: '0 0 160 110',
    className: 'h-full w-full',
    preserveAspectRatio: 'xMidYMid slice' as const,
    'aria-hidden': true as const,
  }

  switch (type) {
    case 'exit':
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="g-exit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0d3b2e" />
              <stop offset="100%" stopColor="#061810" />
            </linearGradient>
          </defs>
          <rect width="160" height="110" fill="url(#g-exit)" />
          <rect x="28" y="32" width="90" height="42" rx="4" fill="#0a2a20" stroke="#19f08b" strokeWidth="2" />
          <rect x="34" y="38" width="78" height="30" rx="2" fill="#19f08b" />
          <text x="73" y="58" textAnchor="middle" fill="#04140e" fontSize="16" fontWeight="700" fontFamily="Barlow,sans-serif">
            EXIT
          </text>
          <polygon points="128,42 148,53 128,64" fill="#19f08b" />
        </svg>
      )
    case 'extinguisher':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#1a100e" />
          <ellipse cx="80" cy="98" rx="28" ry="5" fill="#000" opacity="0.35" />
          <rect x="66" y="28" width="28" height="62" rx="10" fill="#c4452d" />
          <rect x="64" y="48" width="32" height="14" fill="#f5b800" />
          <rect x="74" y="18" width="12" height="12" rx="2" fill="#2a2318" />
          <path d="M86 24 Q110 30 108 55" stroke="#1a1510" strokeWidth="4" fill="none" />
          <circle cx="108" cy="58" r="5" fill="#4a4338" />
          <text x="80" y="58" textAnchor="middle" fill="#14110d" fontSize="8" fontWeight="700">
            CO₂
          </text>
        </svg>
      )
    case 'alarm':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#1a0e0c" />
          <circle cx="80" cy="52" r="28" fill="#c4452d" />
          <circle cx="80" cy="52" r="18" fill="#f5b800" />
          <circle cx="80" cy="52" r="8" fill="#fff5cc" />
          <circle cx="80" cy="52" r="36" fill="none" stroke="#f5b800" strokeWidth="2" opacity="0.35" />
        </svg>
      )
    case 'evacuate':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#14110d" />
          <rect x="12" y="72" width="136" height="10" rx="2" fill="#f5b800" opacity="0.7" />
          <rect x="18" y="28" width="28" height="28" rx="3" fill="#f5b800" />
          <circle cx="70" cy="77" r="7" fill="#19f08b" />
          <circle cx="100" cy="77" r="7" fill="#19f08b" />
          <rect x="118" y="30" width="28" height="36" rx="3" fill="#0d3b2e" stroke="#19f08b" />
          <text x="132" y="52" textAnchor="middle" fill="#19f08b" fontSize="7" fontWeight="700">
            EXIT
          </text>
        </svg>
      )
    case 'smoke_crawl':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#121416" />
          <ellipse cx="80" cy="30" rx="50" ry="18" fill="#4a4338" opacity="0.55" />
          <rect x="20" y="78" width="120" height="8" fill="#3d444c" />
          <rect x="30" y="62" width="28" height="10" rx="2" fill="#f5b800" transform="rotate(-12 44 67)" />
          <rect x="66" y="58" width="28" height="10" rx="2" fill="#f5b800" transform="rotate(-12 80 63)" />
          <rect x="102" y="54" width="28" height="10" rx="2" fill="#f5b800" transform="rotate(-12 116 59)" />
        </svg>
      )
    case 'fire_blanket':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#1a100e" />
          <rect x="40" y="28" width="80" height="54" rx="4" fill="#c4452d" />
          <rect x="48" y="36" width="64" height="38" rx="2" fill="#8f2f1c" />
          <rect x="70" y="22" width="20" height="10" rx="2" fill="#f5b800" />
        </svg>
      )
    case 'assembly':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#0e1612" />
          <circle cx="80" cy="58" r="36" fill="none" stroke="#19f08b" strokeWidth="6" opacity="0.5" />
          <rect x="48" y="40" width="64" height="36" rx="3" fill="#0d3b2e" />
          <text x="80" y="62" textAnchor="middle" fill="#19f08b" fontSize="9" fontWeight="700">
            MUSTER
          </text>
        </svg>
      )
    case 'hazard':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#14110d" />
          <rect x="28" y="30" width="22" height="50" rx="8" fill="#c4452d" />
          <circle cx="50" cy="82" r="16" fill="none" stroke="#c4452d" strokeWidth="3" />
          <circle cx="90" cy="82" r="20" fill="none" stroke="#f5b800" strokeWidth="3" />
          <circle cx="128" cy="82" r="14" fill="none" stroke="#2d6a4f" strokeWidth="3" />
        </svg>
      )
    case 'gas_meter':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#0e0f10" />
          <rect x="55" y="22" width="50" height="66" rx="6" fill="#1c1f22" stroke="#3d444c" />
          <circle cx="80" cy="48" r="14" fill="#19f08b" />
          <rect x="62" y="68" width="14" height="8" fill="#f5b800" />
          <rect x="84" y="68" width="14" height="8" fill="#c4452d" />
        </svg>
      )
    case 'ppe':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#14110d" />
          <path d="M40 55 Q40 28 55 28 Q70 28 70 55" fill="#f5b800" />
          <rect x="72" y="35" width="22" height="32" rx="3" fill="#2c261e" stroke="#19f08b" />
          <circle cx="118" cy="50" r="16" fill="none" stroke="#c4452d" strokeWidth="5" />
        </svg>
      )
    case 'respirator':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#12100e" />
          <ellipse cx="80" cy="50" rx="32" ry="28" fill="#2c261e" />
          <circle cx="58" cy="50" r="10" fill="#3d444c" />
          <circle cx="102" cy="50" r="10" fill="#3d444c" />
          <rect x="70" y="58" width="20" height="12" rx="3" fill="#1a1510" />
        </svg>
      )
    case 'buddy':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#0e1210" />
          <circle cx="50" cy="34" r="10" fill="#e8dfd0" />
          <rect x="40" y="46" width="20" height="28" rx="6" fill="#2d6a4f" />
          <path d="M62 50 Q80 40 98 50" stroke="#f5b800" strokeWidth="2" fill="none" />
          <circle cx="110" cy="34" r="10" fill="#e8dfd0" />
          <rect x="100" y="46" width="20" height="28" rx="6" fill="#c4452d" />
        </svg>
      )
    case 'tripod':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#14110d" />
          <line x1="80" y1="22" x2="40" y2="90" stroke="#f5b800" strokeWidth="4" />
          <line x1="80" y1="22" x2="120" y2="90" stroke="#f5b800" strokeWidth="4" />
          <line x1="80" y1="22" x2="80" y2="90" stroke="#f5b800" strokeWidth="3" />
          <circle cx="80" cy="24" r="8" fill="#c4452d" />
          <rect x="70" y="70" width="20" height="22" rx="3" fill="#2d6a4f" />
        </svg>
      )
    case 'ventilation':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#121416" />
          <circle cx="80" cy="55" r="32" fill="#3d444c" />
          <g transform="translate(80 55)">
            <rect x="-28" y="-6" width="56" height="12" fill="#f5b800" transform="rotate(0)" />
            <rect x="-28" y="-6" width="56" height="12" fill="#f5b800" transform="rotate(90)" />
          </g>
          <circle cx="80" cy="55" r="8" fill="#1a1510" />
        </svg>
      )
    case 'loto':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#1a100e" />
          <rect x="60" y="40" width="40" height="48" rx="4" fill="#c4452d" />
          <path d="M70 40 V28 A10 10 0 0 1 90 28 V40" fill="none" stroke="#f5b800" strokeWidth="5" />
          <text x="80" y="70" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">
            LOTO
          </text>
        </svg>
      )
    case 'conveyor_guard':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#121416" />
          <rect x="20" y="60" width="120" height="16" rx="8" fill="#4a4338" />
          <rect x="28" y="28" width="104" height="40" fill="none" stroke="#f5b800" strokeWidth="2" strokeDasharray="4 3" />
        </svg>
      )
    case 'barrier':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#14110d" />
          <rect x="30" y="25" width="8" height="60" fill="#c4452d" />
          <rect x="122" y="25" width="8" height="60" fill="#c4452d" />
          <rect x="34" y="35" width="92" height="10" fill="#f5b800" />
          <rect x="34" y="52" width="92" height="10" fill="#1a1510" />
          <rect x="34" y="69" width="92" height="10" fill="#f5b800" />
        </svg>
      )
    case 'warning_sign':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#14110d" />
          <polygon points="80,18 130,88 30,88" fill="#f5b800" />
          <polygon points="80,30 118,82 42,82" fill="#1a1510" />
          <text x="80" y="72" textAnchor="middle" fill="#f5b800" fontSize="28" fontWeight="700">
            !
          </text>
        </svg>
      )
    case 'cap_lamp':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#14110d" />
          <path d="M50 60 Q50 28 80 28 Q110 28 110 60" fill="#f5b800" />
          <circle cx="80" cy="55" r="12" fill="#2c261e" />
          <circle cx="80" cy="55" r="7" fill="#fff5cc" />
          <rect x="68" y="68" width="24" height="18" rx="2" fill="#1a1510" />
        </svg>
      )
    case 'gloves_boots':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#14110d" />
          <rect x="35" y="30" width="28" height="40" rx="8" fill="#c4452d" transform="rotate(-15 49 50)" />
          <rect x="95" y="45" width="32" height="38" rx="4" fill="#1a1510" />
          <rect x="95" y="70" width="36" height="12" fill="#f5b800" />
        </svg>
      )
    case 'first_aid':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#16181a" />
          <rect x="45" y="28" width="70" height="54" rx="4" fill="#e8e8e8" />
          <rect x="70" y="40" width="20" height="30" fill="#c4452d" />
          <rect x="55" y="50" width="50" height="10" fill="#c4452d" />
        </svg>
      )
    case 'eyewash':
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#0e1216" />
          <rect x="55" y="48" width="50" height="36" rx="6" fill="#3d7ea6" />
          <rect x="62" y="32" width="12" height="22" rx="3" fill="#c4c9ce" />
          <rect x="86" y="32" width="12" height="22" rx="3" fill="#c4c9ce" />
          <circle cx="80" cy="28" r="6" fill="#7dd3fc" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <rect width="160" height="110" fill="#1c1f22" />
          <circle cx="80" cy="55" r="20" fill="#3d444c" />
        </svg>
      )
  }
}
