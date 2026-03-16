# 🛍️ CompanyX

CompanyX is a modern e-commerce storefront prototype built with **Next.js** and **React**.

The project focuses on **scalable frontend architecture**, **URL-driven filtering**, and **reusable component design** inspired by modern online retail platforms.

My goal with this project was to create a website that I could say was complete and I am very pleased with the result.

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
![URLSearchParams](https://img.shields.io/badge/URL--Driven_State-F97316?style=for-the-badge&logo=googlechrome&logoColor=white)
![Server & Client Components](https://img.shields.io/badge/Server_%26_Client_Components-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Git & GitHub](https://img.shields.io/badge/Git_%26_GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

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

| Component             | Purpose                                |
| --------------------- | -------------------------------------- |
| `ProductCard`         | Displays product with price & discount |
| `CardGrid`            | Responsive grid layout                 |
| `CategoryDropdown`    | Mobile category filter                 |
| `PriceFilterDropdown` | Price slider filter                    |
| `LimitSelect`         | Control number of products per page    |
| `Pagination`          | URL-driven pagination                  |
| `SearchForm`          | Product search                         |

Each component is designed to be **generic and reusable** across pages.

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

I am a Frontend Developer with solid knowledge of **HTML**, **CSS**, **Tailwind**, **TypeScript**, and **React**, experienced working in agile team environments. I build modular and reusable solutions with a focus on clean, readable code and user-centered design.

Through my background in game development, I have developed a strong visual eye, solid problem-solving skills, and the ability to collaborate effectively in multidisciplinary teams.

**Let's connect:**

- [thomas.jarnroth@gmail.com](mailto:thomas.jarnroth@gmail.com)
- [linkedin.com/in/thomasjarnroth](https://www.linkedin.com/in/thomasjarnroth)
