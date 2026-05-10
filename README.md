# 🚨 HealthAlert — Emergency Health Response System

AI-powered emergency health platform built with **Next.js 14 + TypeScript + Tailwind + Claude AI**.

---

## 🚀 Setup (CodeSpace mein)

### 1. Dependencies install karo
```bash
npm install
```

### 2. Environment variables set karo
```bash
cp .env.example .env.local
```

`.env.local` file kholo aur apni keys daalo:

```env
ANTHROPIC_API_KEY=sk-ant-...         # Required — AI spam detection ke liye
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...  # Optional — real hospital data ke liye
IPGEO_API_KEY=...                    # Optional — IP location ke liye
```

> **Note:** Sirf `ANTHROPIC_API_KEY` required hai. Baki keys ke bina bhi app kaam karega (mock hospital data use hoga).

### 3. Dev server chalao
```bash
npm run dev
```

App `http://localhost:3000` par open hoga.

---

## 📁 Project Structure

```
healthalert/
├── app/
│   ├── page.tsx              # 🏠 Landing page
│   ├── alert/
│   │   └── page.tsx          # 🆘 Emergency alert form
│   ├── dashboard/
│   │   └── page.tsx          # 🏥 Hospital dashboard
│   └── api/
│       ├── analyze/route.ts  # 🤖 AI emergency analysis (Claude)
│       ├── alert/route.ts    # 📨 Alert CRUD API
│       └── location/route.ts # 📍 IP-based location fallback
├── lib/
│   └── store.ts              # 💾 File-based storage + hospital finder
├── data/
│   └── alerts.json           # 📊 Alert storage (auto-created)
└── .env.example              # 🔑 API keys template
```

---

## 🔄 How It Works

```
User types problem
      ↓
Claude AI analyzes → Is it a real emergency?
      ↓ (if yes)
GPS / IP location detect hoti hai
      ↓
Nearest hospitals dhundhe jaate hain
      ↓
Alert save hota hai (alerts.json)
      ↓
Hospital dashboard par real-time dikhta hai
      ↓
Hospital staff accept + respond karta hai
```

---

## 🔑 API Keys kahan se milenge

| Key | Platform | Free? |
|-----|----------|-------|
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) | Free credits milte hain |
| `GOOGLE_MAPS_API_KEY` | [console.cloud.google.com](https://console.cloud.google.com) | $200/month free credit |
| `IPGEO_API_KEY` | [ipgeolocation.io](https://ipgeolocation.io) | 1000 req/day free |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/analyze` | AI se emergency analyze karo |
| `POST` | `/api/alert` | Naya alert create karo |
| `GET`  | `/api/alert` | Saare alerts fetch karo |
| `PATCH`| `/api/alert` | Alert status update karo |
| `GET`  | `/api/location` | IP se location detect karo |

---

## 🛣️ Pages

| URL | Description |
|-----|-------------|
| `/` | Landing page |
| `/alert` | Emergency alert form |
| `/dashboard` | Hospital control panel |

---

*HealthAlert — Made for India 🇮🇳 · May 2026*
