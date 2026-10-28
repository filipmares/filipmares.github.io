import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const projects = await getCollection('projects');
    // Sort by sortOrder (ascending = newest first)
    projects.sort((a, b) => a.data.sortOrder - b.data.sortOrder);

    return rss({
        title: 'Filip Mares - Software Engineer',
        description: 'Forward Deployed Engineer at Microsoft Frontier Company, turning AI into real-world outcomes for Energy customers.',
        site: context.site!.toString(),
        items: projects.map((project) => ({
            title: project.data.title,
            link: `/projects/${project.id}`,
            description: project.data.description,
            pubDate: new Date(project.data.dateRange.split('-')[0] + '-01-01'),
        })),
    });
}
