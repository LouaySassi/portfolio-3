// src/projects/kingSolar.ts
import React from 'react';
import { ProjectData } from './types';

export const kingSolar: ProjectData = {
  title: 'King Solar Agency',
  company: 'Founder',
  year: '2024-2025',
  description: 'A results-driven web design & development agency focused on delivering exponential lead growth for solar companies in the U.S. market.',
  image: '/king solar.png',
  website: 'https://www.linkedin.com/company/king-solar-agency/',
  logo: '/king-solar-agency.png',
  sections: [
    {
      id: 'overview',
      title: 'Agency Overview',
      content: (
        <div className="flex flex-col gap-4">
          <p>
            King Solar Agency is a specialized firm dedicated to one primary goal: generating high-quality, high-volume leads for solar installation companies. We design and develop bespoke, conversion-optimized websites that serve as powerful customer acquisition funnels.
          </p>
          <p>
            Our strategy combines compelling design with aggressive internal and external SEO, leveraging Google's latest tools to ensure our clients dominate their local markets and achieve measurable, rapid business growth.
          </p>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Client Success Stories', // Renamed for more impact
      content: (
        [
          {
            title: 'Client Success: Gazda Solar',
            description: 'Gazda Solar faced challenges with low online visibility and inconsistent lead flow. We engineered a high-converting website funnel for them using WordPress and the Divi builder. By implementing a professional internal and external SEO strategy, Gazda Solar saw exponential growth in qualified leads within the first 3 months of launch.',
            screenshots: [
              '/gazda-solar-screenshot.png', // Replace with your actual screenshot path
            ]
          },
          {
            title: 'Client Success: SolenergyNY',
            description: 'SolenergyNY needed to strengthen their digital presence to compete in a crowded market. We built a custom, optimized website on the WordPress/Divi platform, focusing on user experience and a clear conversion path. Our targeted SEO campaign, utilizing the latest Google tools, resulted in exponential lead growth in just the first quarter after deployment.',
            screenshots: [
              '/solenergyny-screenshot.png', // Replace with your actual screenshot path
            ]
          },
        ]
      )
    },
    {
      id: 'services',
      title: 'Core Services',
      content: (
        [
          {
            title: 'High-Converting Website Development',
            description: 'We build fast, professional websites on the WordPress & Divi platform, specifically designed as lead-generation funnels tailored to the solar industry.',
          },
          {
            title: 'Professional SEO (Internal & External)',
            description: 'Our comprehensive SEO strategies ensure clients rank prominently in local search results, driving a consistent stream of organic traffic and capturing high-intent customers.',
          },
          {
            title: 'Conversion Rate Optimization (CRO)',
            description: 'We meticulously analyze user behavior and implement data-driven optimizations to ensure that website visitors convert into actionable leads at the highest possible rate.',
          },
        ]
      )
    },
    {
      id: 'tech-stack',
      title: 'Platforms & Technologies',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4>Client Website Platform</h4>
            <p>WordPress, Divi Builder, Custom Plugins</p>
          </div>
          <div>
            <h4>SEO & Analytics Tools</h4>
            <p>Google Analytics 4, Google Search Console, Google Tag Manager, Ahrefs, SEMrush</p>
          </div>
          <div>
            <h4>Custom Development</h4>
            <p>For bespoke projects, we utilize modern stacks including React, Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
          <div>
            <h4>Infrastructure</h4>
            <p>Vercel, Cloudflare, Managed WordPress Hosting, AWS S3</p>
          </div>
        </div>
      )
    },
    {
      id: 'agency-impact',
      title: 'Our Proven Impact',
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4>Exponential Growth within 3 Months</h4>
            <p>
              Our core promise is rapid results. Clients consistently see a significant, measurable increase in lead flow and market visibility within the first quarter of partnership.
            </p>
          </div>
          <div>
            <h4>Dominant Local Search Rankings</h4>
            <p>
              Through our expert SEO practices, we position our clients as the top solar providers in their target service areas, ensuring they are found by customers ready to buy.
            </p>
          </div>
          <div>
            <h4>5-Star Client Satisfaction</h4>
            <p>
              We pride ourselves on building strong partnerships, reflected in our excellent client feedback and the tangible ROI we deliver.
            </p>
          </div>
        </div>
      )
    },
  ]
};