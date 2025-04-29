# Mother's Day Tribute Blog

## Project Overview

This Next.js project is a blog dedicated to Mother's Day tributes. It features:

*   Display of tribute articles with title, excerpt, and author information.
*   Category-based filtering of articles.
*   A contact page for user inquiries.
*   A clean, responsive design.

## Setup Instructions

1.  Clone the repository:

    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory>
    ```

2.  Install dependencies:

    ```bash
    npm install  # or yarn install or pnpm install
    ```

3.  Set up environment variables:

    *   Create a `.env` file in the project root.
    *   Add the necessary environment variables.  For example:

        ```
        #GOOGLE_GENAI_API_KEY=YOUR_API_KEY
        ```

4.  Run the development server:

    ```bash
    npm run dev  # or yarn dev or pnpm dev
    ```

    The blog should be accessible at `http://localhost:9002` (or the port specified in your `package.json`).

## Features Implemented

*   **Article Listing:** Displays a list of tribute articles fetched from `/public/articles.json`.
*   **Category Filtering:** Allows users to filter articles by category (Stories, Health, Inspiration).
*   **Article Detail Page:** Shows the full content of a selected article.
*   **Search Functionality:** Enables users to search for articles by title or excerpt.
*   **Contact Form:** A contact page where users can submit inquiries.
*   **Responsive Design:** The layout adapts to different screen sizes.
*   **Sidebar Navigation:** Provides links to different categories and author information.

## Technologies Used

*   Next.js
*   React
*   Tailwind CSS
*   Shadcn UI
*   Genkit
