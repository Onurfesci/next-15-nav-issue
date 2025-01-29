import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'My App',
    short_name: 'My App',
    start_url: '/',
    description: 'My App description',
    display: 'standalone',
    lang: 'en-GB',
    dir: 'auto',
    theme_color: '#142211',
    background_color: '#F2F6F6',
    orientation: 'portrait',
  };
}
