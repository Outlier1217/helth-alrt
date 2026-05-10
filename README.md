# 🚨 HealthAlert — Emergency Health Response System

AI-powered emergency health platform built with **Next.js 14 + TypeScript + Tailwind CSS + Claude AI**.

---

# 🚀 Setup Guide (Using GitHub Codespaces or Local Machine)

## 1. Install Dependencies

Run the following command:

```bash
npm install
```

---

## 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Open the `.env.local` file and add your API keys:

```env
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
IPGEO_API_KEY=...
```

### Environment Variables Explanation

| Variable                          | Required   | Purpose                                          |
| --------------------------------- | ---------- | ------------------------------------------------ |
| `ANTHROPIC_API_KEY`               | ✅ Yes      | Used for AI-powered emergency and spam detection |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | ❌ Optional | Used to fetch real nearby hospital data          |
| `IPGEO_API_KEY`                   | ❌ Optional | Used for IP-based location detection             |

> **Note:** Only `ANTHROPIC_API_KEY` is required.
> Without the other keys, the application will still work using mock hospital data.

---

## 3. Start Development Server

Run:

```bash
npm run dev
```

The application will start at:

```bash
http://localhost:3000
```

---

# 📁 Project Structure

```bash
healthalert/
├── app/
│   ├── page.tsx
│   │
│   ├── alert/
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   └── api/
│       ├── analyze/route.ts
│       ├── alert/route.ts
│       └── location/route.ts
│
├── lib/
│   └── store.ts
│
├── data/
│   └── alerts.json
│
└── .env.example
```

---

# 📂 Folder & File Explanation

| File / Folder               | Description                                     |
| --------------------------- | ----------------------------------------------- |
| `app/page.tsx`              | 🏠 Landing/Home page                            |
| `app/alert/page.tsx`        | 🆘 Emergency alert submission form              |
| `app/dashboard/page.tsx`    | 🏥 Hospital dashboard/control panel             |
| `app/api/analyze/route.ts`  | 🤖 Claude AI emergency analysis API             |
| `app/api/alert/route.ts`    | 📨 Alert CRUD API                               |
| `app/api/location/route.ts` | 📍 IP-based location fallback API               |
| `lib/store.ts`              | 💾 File-based storage and hospital finder logic |
| `data/alerts.json`          | 📊 Stores emergency alerts                      |
| `.env.example`              | 🔑 Example environment variables                |

---

# 🔄 How The System Works

```text
User submits emergency problem
          ↓
Claude AI analyzes the message
          ↓
Checks whether it is a real emergency
          ↓
User location is detected (GPS or IP)
          ↓
Nearest hospitals are searched
          ↓
Emergency alert is stored in alerts.json
          ↓
Hospital dashboard updates in real time
          ↓
Hospital staff can accept and respond
```

---

# 🔑 API Keys

| API Key               | Platform                 | Free Plan              |
| --------------------- | ------------------------ | ---------------------- |
| `ANTHROPIC_API_KEY`   | console.anthropic.com    | Free credits available |
| `GOOGLE_MAPS_API_KEY` | console.cloud.google.com | $200/month free credit |
| `IPGEO_API_KEY`       | ipgeolocation.io         | 1000 requests/day free |

---

# 📡 API Endpoints

| Method  | Endpoint        | Description                   |
| ------- | --------------- | ----------------------------- |
| `POST`  | `/api/analyze`  | Analyze emergency using AI    |
| `POST`  | `/api/alert`    | Create new emergency alert    |
| `GET`   | `/api/alert`    | Fetch all alerts              |
| `PATCH` | `/api/alert`    | Update alert status           |
| `GET`   | `/api/location` | Detect user location using IP |

---

# 🛣️ Application Pages

| Route        | Description                   |
| ------------ | ----------------------------- |
| `/`          | Landing/Home page             |
| `/alert`     | Emergency alert form          |
| `/dashboard` | Hospital management dashboard |

---

# ✨ Features

* 🤖 AI-powered emergency detection using Claude AI
* 📍 Automatic location detection
* 🏥 Nearby hospital search
* ⚡ Real-time emergency dashboard
* 📊 File-based emergency alert storage
* 📱 Responsive modern UI with Tailwind CSS
* 🇮🇳 Designed for Indian emergency response systems

---

# 🧰 Tech Stack

| Technology         | Usage                        |
| ------------------ | ---------------------------- |
| Next.js 14         | Frontend + Backend Framework |
| TypeScript         | Type-safe development        |
| Tailwind CSS       | UI styling                   |
| Claude AI          | Emergency analysis           |
| Google Maps API    | Hospital search              |
| IP Geolocation API | User location detection      |

---

# ▶️ Quick Start

```bash
git clone <your-repository-url>

cd healthalert

npm install

cp .env.example .env.local

npm run dev
```

---

# 📌 Notes

* This project uses file-based storage (`alerts.json`) for simplicity.
* Recommended for prototype/demo usage.
* For production deployment, use:

  * PostgreSQL / MongoDB
  * WebSockets or Firebase
  * Authentication system
  * Real-time notification service

---

# 🇮🇳 HealthAlert

Emergency Health Response System for India
Built with ❤️ using Next.js + Claude AI — May 2026
