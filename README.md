This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Image Gallery App

A modern, responsive image gallery built with Next.js, featuring infinite scrolling, modal previews, and image downloading capabilities. This project fetches images from the Picsum Photos API and displays them in a sleek, user-friendly interface.

## Features Implemented

- **Infinite Scrolling**: Loads more images as you scroll down the page, fetching 9 images per page from the Picsum Photos API.
- **Responsive Grid**: Displays images in a grid layout that adapts to screen size (1 column on mobile, 2 on tablets, 3 on desktops).
- **Image Modal**: Click an image to view it in a modal with author details, dimensions, and options to view the original or download it.
- **Hover Effects**: Image cards scale up and reveal the author’s name on hover.
- **Loading Indicator**: A spinning loader appears during image fetching, both for initial loads and infinite scroll.
- **Error Handling**: Displays user-friendly error messages if image fetching fails.
- **Accessibility**: Basic accessibility features like alt text, keyboard navigation (e.g., Escape to close modal), and ARIA roles (in progress).
- **Optimized Images**: Uses Next.js’s `Image` component for lazy loading and optimization.

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/image-gallery-app.git
   cd image-gallery-app

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Running with Docker

You can containerize and run the Image Gallery App using Docker for consistent development and deployment. Follow these steps:

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your machine.

### Steps to Run with Docker

1. **Create a `Dockerfile`**:
   In the root of your project, create a file named `Dockerfile` with the following content:
   ```Dockerfile
   # Use official Node.js runtime as the base image
   FROM node:18-alpine

   # Set working directory
   WORKDIR /app

   # Copy package.json and package-lock.json
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the rest of the application code
   COPY . .

   # Build the Next.js app
   RUN npm run build

   # Expose the port the app runs on
   EXPOSE 3000

   # Start the app
   CMD ["npm", "start"]