# SurakshaAR — SIH 2026 PS 26041

End-to-end **web prototype** for *AR-Based Vocational Training Simulator for Industrial Safety in Jharkhand's Mining & Manufacturing Sector* (Govt. of Jharkhand).

> Vite + React web MVP — camera AR + 22 3D models, Hindi/Santali/English, certificates, admin dashboard.

## Live

**Production:** https://suraksha-ar-seven.vercel.app

Repo is linked to Vercel — every push to `main` auto-deploys.

## Features

- Login / Register / Logout (local demo auth)
- 5 live training modules with AR steps
- 22 industrial-safety 3D models (Three.js)
- Assessment engine (pass ≥ 70%)
- QR certificates + public verify
- Admin compliance dashboard
- EN / हिंदी / ᱥᱟᱱᱛᱟᲤ UI

## Demo accounts

| Role | Email | Password |
|------|--------|----------|
| Trainee | `ramesh@dhanbad.in` | `suraksha123` |
| Trainee | `suman@koderma.in` | `train123` |
| Admin dashboard | password `jharkhand2026` | |

## Local run

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Stack

Vite · React · TypeScript · Tailwind v4 · React Three Fiber · React Router

## SIH mapping

| Requirement | Status |
|-------------|--------|
| 2+ AR training modules | ✅ (5 live) |
| Assessment engine | ✅ |
| QR certificate + verify | ✅ |
| Hindi + Santali | ✅ |
| Offline | ✅ (localStorage) |
| Admin dashboard | ✅ |
| Public GitHub | ✅ this repo |
