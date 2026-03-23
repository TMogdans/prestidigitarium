import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Prestidigitarium',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Deutsch', lang: 'de' },
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
          label: 'Tricks',
          autogenerate: { directory: 'tricks' },
        },
        {
          label: 'Konzepte',
          autogenerate: { directory: 'konzepte' },
        },
        {
          label: 'Ressourcen',
          autogenerate: { directory: 'ressourcen' },
        },
        {
          label: 'Glossar',
          link: '/glossar',
        },
      ],
    }),
  ],
});
