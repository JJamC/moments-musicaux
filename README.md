# Moments Musicaux App

Welcome to the **Moments Musicaux App** project! This app is built with the **T3 stack**, including **Next.js**, **Prisma**, **tRPC**, and **React**.
It is based on the NorthCoders NC News sprint and was a built as an exercise to improve my competency working with this tech stack.

Follow the instructions below to set up and run the project.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 18.x or higher)
- **npm** (version 10.x or higher)
- **PostgreSQL** (for local database setup)

## Getting Started

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/JJamC/moments-musicaux.git
cd moments-musicaux-app
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Database

```bash
npm run setup-db
```

### 4. Set Up Prisma

```bash
npm run postinstall
npm run db:migrate
npx prisma db seed
```

### 5. Dev Mode

```bash
npm run dev
```

### 6. Production Mode


```bash
npm run start
```

