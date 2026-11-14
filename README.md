# Super Sand – Sai Super Sand Minerals Pvt. Ltd.

> **Official Website Reference:** [https://supersand.in/](https://supersand.in/)  
> **Brand Identity:** Forest Green (`#087A35`), Deep Forest Green (`#004B2D`), Charcoal (`#17231D`), Golden Yellow (`#F4C928`)  
> **Corporate Headquarters:** Lane No. 4, Opposite SBI, Nehru Nagar Colony, West Marredpally, Secunderabad, Telangana – 500026, India.  
> **Established:** 2006 | **Commercial Production:** 2008  

---

## 🌟 Overview

Super Sand (**Sai Super Sand Minerals Pvt. Ltd.**) is a premier manufacturer and supplier of high-grade construction aggregates, precision-graded manufactured sand (M-Sand, P-Sand), and engineered road bases (W.M.M & G.S.B) in South India.

This repository contains the complete production-ready, pixel-accurate, fully responsive corporate website engineered according to official brand guidelines and exact UI mockups.

---

## 🚀 Key Highlights & Architectural Features

1. **Pixel-Accurate UI & Design System**:
   - Recreates the desktop and mobile reference designs with rigorous fidelity.
   - Curved green frames, rich typography, corporate color palette, and micro-interactions.
   - Clean, transparent SVG/PNG Super Sand branding without white patchwork.

2. **Dynamic Hero Carousel**:
   - Autoplay (5.5s cycle) with smooth crossfade and subtle Ken Burns zoom.
   - Responsive hero image delivery (widescreen desktop and vertical mobile crops).
   - Touch-swipe support on mobile and pause-on-hover.
   - 4 official trust indicators (*Premium Quality, Reliable Supply, Environmentally Responsible, Trusted Partner*).

3. **Authentic Photographic Archive & Interactive Lightbox**:
   - Features 22 high-resolution, genuine on-site photos of Sai Super Sand operations.
   - Categorized across *Quarrying, Production, Logistics, Quality Control, Infrastructure, Sustainability, Maintenance, and Site Administration*.
   - Modal image lightbox with full-resolution previews and zoom capability.

4. **Multi-Page Architecture (No Fake Anchor Jumps)**:
   - `Home` (`/`)
   - `About Us` (`/about`)
   - `Products` (`/products`)
   - `Individual Product Details` (`/products/[slug]`)
     - `Coarse Aggregates` (`/products/coarse-aggregates`)
     - `Fine Aggregates` (`/products/fine-aggregates`)
     - `Coarse Aggregate Mix` (`/products/coarse-aggregate-mix`)
     - `Insta Super Mix` (`/products/insta-super-mix`)
   - `Services` (`/services`)
   - `Infrastructure` (`/infrastructure`)
   - `Sustainability` (`/sustainability`)
   - `Projects` (`/projects`)
   - `Testimonials` (`/testimonials`)
   - `Contact Us` (`/contact`)
   - `Admin Portal` (`/admin`)

5. **Real Server-Side Enquiry Handling & Admin Console**:
   - Connects to `/api/enquiry` with input validation, spam prevention, and persistent database storage (`src/data/db.json`).
   - Secure Admin Dashboard at `/admin` protected by session authentication.
   - Manage incoming leads, update status (`new`, `contacted`, `resolved`), and edit corporate settings.

6. **Omnichannel Communication**:
   - Clickable international phone dialing: `+91 95338 95920` / `+91 95536 31919`.
   - Direct email links: `info@supersand.in` / `krishnareddy@supersand.in`.
   - Floating and embedded WhatsApp integrations opening pre-filled project enquiries.
   - Embedded Google Maps directions card.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS Transforms, Transitions, and Keyframe animations
- **Persistence**: Server-side JSON database layer (`src/data/db.json`)

---

## 📦 Getting Started

### Prerequisites

- Node.js `v18.x` or higher
- npm `v9.x` or higher

### Installation

```bash
git clone https://github.com/aircomtech/super-sand-.git
cd super-sand-
npm install
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🔒 Admin Credentials

- **URL**: `/admin`
- **Default Password**: `supersand2026` *(Configurable via `ADMIN_PASSWORD` in `.env.local`)*

---

## 📄 License & Ownership

© 2026 Super Sand (Sai Super Sand Minerals Pvt. Ltd.). All Rights Reserved.
