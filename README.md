# CompanyX 🛍️

CompanyX is a modern e-commerce storefront prototype built with **Next.js** and **React**.

The project focuses on **scalable frontend architecture**, **URL-driven filtering**, and **reusable component design** inspired by modern online retail platforms.

My goal was to show how a product catalogue can be built with clean component separation, **server rendering**, and **state driven by the URL** — no heavy client state management needed.

> 🔗 **Live Demo:** [your-demo-link.vercel.app](#) &nbsp;|&nbsp; 📸 **Screenshots below**

---

## 🎯 Design Goals

This project was all about **frontend architecture** and applying the **UX patterns** you see in modern e-commerce — done the right way.

Key design principles:

- **URL-driven state** — filters update the URL, not component state
- **Server-rendered product queries** — filtering handled on the server
- **Reusable UI components** — dropdowns, cards, banners, image gallery
- **Scalable layout system** — container/grid/flex
- **Accessible navigation**

Instead of reaching for a state management library, I wanted to explore how **Next.js routing** + **URLSearchParams** can drive the entire UI state cleanly and shareably.

---

## ⚙️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **URLSearchParams-based filtering**
- **Server & Client Component architecture**
- **Git & GitHub**

---

## ✨ Features

### 🗂️ Product Catalogue

- Dynamic product grid
- Pagination
- Reusable `ProductCard` component
- Discount price calculation utilities
- Image hover previews

### 🔍 Filtering System

Filters are controlled entirely through URL parameters:
```
/products?category=3&price_min=50&price_max=200&limit=12&page=2
```

Supported filters:

- Category filtering
- Price range filtering
- Product search
- Pagination
- Dynamic result count

This approach gives you:

- ✅ Shareable filtered URLs
- ✅ Server-side filtering
- ✅ Zero heavy global state

---

## 🧩 UI Components

The app is built around reusable, generic building blocks:

| Component | Purpose |
|---|---|
| `ProductCard` | Displays product with price & discount |
| `CardGrid` | Responsive grid layout |
| `CategoryDropdown` | Mobile category filter |
| `PriceFilterDropdown` | Price slider filter |
| `LimitSelect` | Control number of products per page |
| `Pagination` | URL-driven pagination |
| `SearchForm` | Product search |

Each component is designed to be **generic and reusable** across pages — drop it in and it just works.

---

## 🏗️ Architecture

The project follows Next.js App Router conventions with a clear split between server and client responsibilities:

**Server components** handle:
- Data fetching
- Product filtering
- Pagination logic

**Client components** handle:
- Dropdown filters
- UI interactions
- Sliders
- Like button
```
src
│
├── app
│   ├── products
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   └── page.tsx
│
├── components
│   ├── ui
│   │   ├── product-card.tsx
│   │   ├── card-grid.tsx
│   │   ├── pagination.tsx
│   │   └── dropdowns
│   └── main-navigation
│
├── data
│   └── product.ts
│
├── lib
│   ├── pricing.ts
│   └── utils.ts
│
└── types
    └── pricing.ts
```

---

## 🚀 Running Locally
```bash
git clone https://github.com/ThomasJ99/Portfolio-Piece
npm install
npm run dev:full
```

---

## 👋 About Me

I'm a frontend developer who genuinely enjoys building things that feel good to use. I care about clean architecture and readable code just as much as the end result looking polished.

My background in game development gave me a strong visual eye and a problem-solving mindset — I'm used to working in multidisciplinary teams where communication and collaboration matter as much as the code itself.

I work with **HTML, CSS, JavaScript, and React**, and I like building modular, reusable solutions that other developers can actually enjoy maintaining.

**Let's connect:**

- 📧 [thomas.jarnroth@gmail.com](mailto:thomas.jarnroth@gmail.com)
- 💼 [linkedin.com/in/thomasjarnroth](https://www.linkedin.com/in/thomasjarnroth)