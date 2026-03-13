# CompanyX

CompanyX is a modern e-commerce storefront prototype built with **Next.js** and **React**.

The project focuses on **scalable frontend architecture**, **URL-driven filtering**, and **reusable component design** inspired by modern online retail platforms.

My goal was to demonstrate how a product catalogue can be built with clean component separation, **server rendering**, and **state driven** by the **URL** instead of heavy client state management.

---

## Design Goals

This projects focus was on **frontend architecture** and applying **UX patterns** used in modern e-commerce.

Key design principles:

- **URL-driven state** filters update the URL
- **Server-rendered product queries** – filtering handled on the server
- **Reusable UI components** – dropdowns, cards, banners, image gallery
- **Scalable layout system** – container/grid/flex
- **Accessible navigation**

Instead of relying on large client-side state libraries, the application demonstrates how N**ext.js routing** + **URLSearchParams** can drive the **UI state**.

---

## About

This project was created as part of frontend development practice and portfolio building, with emphasis on modern React patterns and scalable design principles.

---

## Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind**
- **URLSearchParams-based filtering**
- **Server & Client Component architecture**
- **Git & Github (Version Control)**

---

## Features

### Product Catalogue

- Dynamic product grid
- Pagination
- Reusable ProductCard component
- Discount price calculation utilities
- Image hover previews

### Filtering System

Filters are controlled through URL parameters:

`/products?category=3&price_min=50&price_max=200&limit=12&page=2`

Supported filters:

- Category filtering
- Price range filtering
- Product search
- Pagination
- Dynamic result count

This approach allows:

- sharable filtered URLs
- server-side filtering
- no heavy global state

---

## UI Components

The application is built around reusable UI building blocks:

Components and their purpose purpose:

`ProductCard` Displays product with price & discount

`CardGrid` Responsive grid layout

`CategoryDropdown` Mobile category filter

`PriceFilterDropdown` Price slider filter

`LimitSelect` Control number of products per page

`Pagination` URL-driven pagination

`SearchForm` Product search

These components are designed to be **generic** and **reusable** across pages.

---

## Architecture

The project follows Next.js App Router architecture with clear seperation between:

**Server components**

- Data fetching
- Product filtering
- Pagination logic

**Client components**

- Dropdown filters
- UI interactions
- Sliders
- Like button

Example structure:

```
src
│
├── app
│   ├── products
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   └──  page.tsx
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

## Running Locally

```bash
git clone https://github.com/ThomasJ99/Portfolio-Piece
npm install
npm run dev:full
```

---

## Author

Frontend Developer with solid knowledge of HTML, CSS, JavaScript, and React, experienced working in agile team environments. I build modular and reusable solutions with a focus on clean, readable code and user-centered design. Through my background in game development, I have developed a strong visual eye, solid problem-solving skills, and the ability to collaborate effectively in multidisciplinary teams.

### Contact info:

Email: thomas.jarnroth@gmail(.)com
Linkedin: https://www.linkedin.com/in/thomasjarnroth
