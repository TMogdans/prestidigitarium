import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Magie Wiki',
      defaultLocale: 'de',
      locales: {
        de: { label: 'Deutsch', lang: 'de' },
      },
      sidebar: [
        { label: 'Startseite', link: '/' },
        {
          label: 'Sparten',
          autogenerate: { directory: 'sparten' },
        },
        {
          label: 'Techniken',
          autogenerate: { directory: 'techniken' },
        },
        {
          label: 'Effekte',
          autogenerate: { directory: 'effekte' },
        },
        {
          label: 'Requisiten',
          autogenerate: { directory: 'requisiten' },
        },
        {
          label: 'Ressourcen',
          autogenerate: { directory: 'ressourcen' },
        },
      ],
    }),
  ],
});
