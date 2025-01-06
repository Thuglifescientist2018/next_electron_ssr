
# Next.js EXE Project

This project demonstrates how to create an executable file (`.exe`) for a Next.js application that works seamlessly on other Windows PCs. The executable includes a Server Side Rendered (SSR) page at `app/ssr/page.jsx`, showcasing advanced features like SSR SEO with dynamic server-side HTML `<head>` tag modifications.

## Features

1. **Executable File Compatibility**:

   - The `.exe` file has been tested and verified to work on fresh Windows installations without requiring additional setup.

2. **Server Side Rendering (SSR)**:

   - A fully functional SSR page (`app/ssr/page.jsx`) that renders HTML on the server, ensuring better SEO and faster initial load times.

3. **Dynamic SSR SEO**:

   - Demonstrates the ability to modify `<head>` tags dynamically on the server for improved search engine optimization (SEO).

## Prerequisites

Ensure your development environment meets the following requirements:

- Node.js (LTS version recommended)
- Yarn (preferred package manager)
- Windows OS (for `.exe` file testing and execution)
- Electron (used to package the Next.js app into an executable)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

## Building the Executable

Follow these steps to create the `.exe` file:

1. Package the app using Electron:

   ```bash
   yarn build-electron
   ```

2. Locate the generated `.exe` file in the `/dist` directory.

3. Test the `.exe` on a fresh Windows PC to confirm compatibility.

## SSR Page Details

The SSR page can be found at:

```
app/ssr/page.jsx
```

### Key Features:

- **Server-rendered content**: Ensures dynamic content is pre-rendered on the server.
- **Dynamic ****************************`<head>`**************************** modifications**: The server customizes `<title>`, `<meta>`, and other SEO-relevant tags based on the rendered content.

Example Code Snippet from `page.jsx`:

```jsx
export async function generateMetadata() {
    const response = await fetch('https://catfact.ninja/fact', {
        cache: 'no-store',
    });
    const data = await response.json();

    return {
        title: 'Damak ko Developer - Web App Specialist',
        description: data.fact,
        keywords: 'Damak developer, web app developer, Damak ko developer, software engineer in Damak, web development',
        author: 'Damak ko Developer',
        openGraph: {
            title: 'Damak ko Developer - Web App Specialist',
            description: data.fact,
            type: 'website',
            url: 'https://yourwebsite.com/ssr-page',
            images: ['https://yourwebsite.com/your-image.jpg'],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Damak ko Developer - Web App Specialist',
            description: data.fact,
        },
    };
}

export default async function Page() {
    const response = await fetch('https://catfact.ninja/fact', {
        cache: 'no-store',
    });
    const data = await response.json();

    return (
        <div>
            <h1>SSR Page</h1>
            <p>{data.fact}</p>
            <p>{data.fact.length}</p>
        </div>
    );
}

```

## Testing

To verify the `.exe` functionality:

1. Copy the generated `.exe` to a fresh Windows PC.
2. Double-click the file to run the application.
3. Confirm the SSR page renders correctly in the browser. Note: Windows SmartScreen may block the app initially. Click 'Allow' to run the application.

## Notes

- This project has been built and tested on Windows 10 and 11 without Node.js, ensuring reliability across different Windows PCs.
- The executable is a fully functional server application and not a static website.
