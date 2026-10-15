# Coffee'station — Project Plan

## 1. Project Overview

### 1.1 Purpose
The purpose of this project is to build a simple, user-friendly, and convenient coffee ordering application.
The application allows customers to browse coffee products and place orders online quickly and easily. It also enables the cafe to showcase its coffee products on the website and introduce them to potential customers.

### 1.2 Project Objectives
1. Display products with their names, images, price, and categories.
2. Filter products by category.
3. Add products to a cart, update quantities, and remove items.
4. Calculate the subtotal and total consistently.
5. Validate checkout inputs and show a simulated order confirmation.
6. Validate booking inputs and show a simulated booking confirmation.
7. Work well on desktop, tablet and mobile devices.
8. Test the application to ensure all features work correctly.

### 1.3 Who Will Use
- Customers
- Cafe owner
    
---

## 2. Project Scope

### 2.1 Product Scope

- Home page
- Collection page
- About page
- Contact page
- Booking page
- Cart sidebar
- Checkout

### 2.2 Technical Scope

| Area | Technology |
|---|---|
| Frontend framework | React |
| Build tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Routing | React Router | 
| Component architecture | Reusable React components |
| State management | Zustand |
| Version control | Git + GitHub (issues, PRs) |

### 2.3 Future / Scalable Scope

The project scope may expand after the initial clone is completed.

The following features are outside the initial deadline unless explicitly required:

- Backend API (planned: NestJS)
- Database (planned: PostgreSQL)
- User authentication
- Real payment processing
- Dark mode

---

## 3. Project Requirements / Features

### 3.1 Major Functions

#### Browsing and Filtering
- Display all products as cards (image, name, description, price, rating)
- Filter by category; "All" shows every product

#### Cart
- Add products to the cart
- Increase or decrease the amount of products
- Show line the total price dynamically
- Remove an item directly
- Checkout

#### Booking
- User input for Booking
- Validate booking data (name, date, guests, time slot)

---

## 4. Technical Approach

### 4.1 Frontend

- **Framework:** React + Vite
- **Router:** React Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component Design:** Reusable functional components
- **State Management:** Zustand
- **Icons:** lucide-react

### 4.2 Backend

Out of scope for this version. Planned later: NestJS + TypeScript REST API.

### 4.3 Database

Out of scope for this version. Planned later: PostgreSQL.

### 4.4 Authentication / Security

1. Use TypeScript types to reduce avoidable runtime errors.
2. Avoid duplicating markup and styling unnecessarily.
3. Keep project configuration and dependencies organized.
4. Never commit secrets or credentials to the repository.
5. Validate user input wherever input controls are implemented.

---

## 5. Project Structure

### 5.1 High-Level Architecture

```text
┌─────────────────────────────────┐
│     React + Vite Web (now)      │
│                                 │
│   Pages   │   Cart (Zustand)    │
└────────────────┬────────────────┘
                 │  (planned, future)
                 │  REST
                 ▼
┌─────────────────────────────────┐
│          NestJS API             │
│    Menu   Orders   Bookings     │
└─────────────────┬───────────────┘
                  ▼
┌─────────────────────────────────┐
│          PostgreSQL             │
└─────────────────────────────────┘
```

### 5.2 Main Modules

#### Frontend

- `NavBar`
- `Footer`
- `Button`
- `Badge`
- `ProductCard`
- `CategoryFilter`
- `CartSideBar`
- `CartItem`
- `StaffCard`
- `MapSection`
- `CarouselCard`
- `ContactCard`
---

## 6. Development Plan

### Phase 1 — Foundation and requirements

#### Tasks

- Page Design
- Initialize the Git repository.
- Create the React + Vite + TypeScript application.
- Install and configure Tailwind CSS.
- React Router with empty pages
- Establish the initial folder structure.
- Verify the development environment.

### Phase 2 — Design system Development

#### Tasks

- Implement reusable UI components.

     `NavBar`, `Footer`, `Button`, `Badge`, `ProductCard`, `CategoryFilter`, `CartSideBar`, `CartItem`, `StaffCard`, `MapSection`, `CarouselCard`, `ContactCard`
- Build design system.


### Phase 3 — Core UI Development

#### Tasks

- Implement Home page
- Implement About page
- Implement Contact page
- Implement Collection page with filter
- Implement Cart sidebar (add to cart, quantities, checkout)
- Implement Booking page

### Phase 4 — QA and Delivery

#### Tasks

- Check mobile, tablet, desktop layouts
- Fix critical/high bugs; record the rest as issues
- README: setup, commands, scope, known limitations
