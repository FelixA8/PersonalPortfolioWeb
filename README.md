# PersonalPortfolioWeb

**PersonalPortfolioWeb** is my personal website developed using Next.js and React.js, designed to showcase professional experience, skills, and projects. The site is optimized for high efficiency, powered by React's framework, and features dynamic code execution. It uses AWS S3 Buckets for asset storage and Google Cloud services, while being hosted by Vercel.

## Features

- **High Efficiency:** Powered by the React framework, ensuring fast and dynamic page loads.
- **Cloud Integration:** Assets stored on AWS S3 Buckets and Google Cloud services integrated for seamless functionality.
- **TailwindCSS:** Modern styling framework for responsive and clean UI.
- **Hosted on Vercel:** Utilizing Vercel's serverless deployment for optimal performance.

## Technology Stack

- **Next.js:** Server-side rendered React applications for optimal performance and SEO.
- **React.js:** Modern JavaScript library for building user interfaces.
- **TailwindCSS:** Utility-first CSS framework for easy and responsive design.
- **AWS S3 Bucket:** For efficient and scalable storage of assets (e.g., images, files).
- **Google Cloud:** Integrated cloud services for enhanced functionality.
- **Vercel:** Cloud platform for static and serverless deployments.

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your development environment.
- AWS account and S3 Bucket set up for asset storage.
- Google Cloud account for cloud integration services.
- Basic knowledge of Next.js and React.js.

1. Clone the repository:

   ```bash
   git clone https://github.com/FelixA8/PersonalPortfolioWeb.git
   cd PersonalPortfolioWeb

2. Install Dependencies:

   ```bash
   npm install
   
3. Configure environment variables:
   
   Create a .env.local file to store sensitive environment variables like AWS credentials, Google Cloud API keys, etc.
   
4. Run the development server:

   ```bash
   npm run dev

Open http://localhost:3000 to view the site locally.

## Project Structure

    ```bash
    public/          # Static assets (images, files, etc.)
    src/
    ├── app/         # Main application logic and components
    ├── lib/         # External libraries, helpers, and utilities
    ├── pages/       # Pages for routing (Next.js auto-routes these pages)
    ├── styles/      # Global and component-level styles using TailwindCSS
    └── ui/          # Reusable UI components for the portfolio

## DEPLOYMENT

This project is hosted on Vercel. To deploy:

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Follow the instructions in Vercel to deploy the project with your custom domain or Vercel-provided URL.

<p align="center">Powered by React Framework, High Efficiency, and Dynamic Code 🚀</p>
