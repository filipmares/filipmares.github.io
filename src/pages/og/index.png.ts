import satori from 'satori';
import sharp from 'sharp';
import type { APIContext } from 'astro';

async function loadFont(): Promise<ArrayBuffer> {
    const res = await fetch(
        'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff'
    );
    return res.arrayBuffer();
}

async function loadFontBold(): Promise<ArrayBuffer> {
    const res = await fetch(
        'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-500-normal.woff'
    );
    return res.arrayBuffer();
}

export async function GET(_context: APIContext) {
    const [fontRegular, fontMedium] = await Promise.all([loadFont(), loadFontBold()]);

    const markup = {
        type: 'div',
        props: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                width: '1200px',
                height: '630px',
                backgroundColor: '#f5f0eb',
                color: '#1a1a1a',
                padding: '60px 80px',
                fontFamily: 'Inter',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '40px',
                        },
                        children: [
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: '#f45b26',
                                        marginRight: '12px',
                                    },
                                },
                            },
                            {
                                type: 'span',
                                props: {
                                    style: {
                                        fontSize: '18px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: '#888',
                                    },
                                    children: 'filipmares.com',
                                },
                            },
                        ],
                    },
                },
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            flex: '1',
                            justifyContent: 'center',
                        },
                        children: [
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        fontSize: '64px',
                                        fontWeight: 500,
                                        letterSpacing: '-0.03em',
                                        lineHeight: '1.1',
                                        marginBottom: '24px',
                                    },
                                    children: 'Filip Mares',
                                },
                            },
                            {
                                type: 'div',
                                props: {
                                    style: {
                                        fontSize: '26px',
                                        color: '#666',
                                        lineHeight: '1.4',
                                        maxWidth: '800px',
                                    },
                                    children: 'Principal Software Engineer at Microsoft. Building App Builder in M365 Copilot.',
                                },
                            },
                        ],
                    },
                },
                {
                    type: 'div',
                    props: {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 'auto',
                        },
                        children: [
                            {
                                type: 'span',
                                props: {
                                    style: {
                                        fontSize: '14px',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        color: '#aaa',
                                    },
                                    children: 'San Francisco, CA',
                                },
                            },
                        ],
                    },
                },
            ],
        },
    };

    const svg = await satori(markup as any, {
        width: 1200,
        height: 630,
        fonts: [
            { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' as const },
            { name: 'Inter', data: fontMedium, weight: 500, style: 'normal' as const },
        ],
    });

    const png = await sharp(Buffer.from(svg)).png().toBuffer();

    return new Response(png, {
        headers: { 'Content-Type': 'image/png' },
    });
}
