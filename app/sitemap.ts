import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.krystal3d.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.krystal3d.com/Browse',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.2,
    },
    {
      url: 'https://www.krystal3d.com/Materials',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.krystal3d.com/Materials/MaterialPreview',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
        {
      url: 'https://www.krystal3d.com/Materials/TexturePreview',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.krystal3d.com/Models',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
        {
      url: 'https://www.krystal3d.com/Models/ModelPreview',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.krystal3d.com/Prints',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
        {
      url: 'https://www.krystal3d.com/Prints/PrintPreview',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.krystal3d.com/AboutUs',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.krystal3d.com/ContactUs',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
     {
      url: 'https://www.krystal3d.com/SupportUs',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}