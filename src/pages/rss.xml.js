import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Alumno de Astro | Blog',
        description: 'mi viaje de aprendicaje de Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: '<language>en-EN</language>',
    });
}
