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
