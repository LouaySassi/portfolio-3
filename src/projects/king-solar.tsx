// src/projects/kingSolar.ts
import React from 'react';
import { ProjectData } from './types';

export const kingSolar: ProjectData = {
  title: 'King Solar Agency',
  company: 'Founder',
  year: '2024-2025',
  description: 'Web design & development agency specializing in high-converting lead-generation websites for the U.S. solar market.',
  image: '/king solar.png',
  website: 'https://www.linkedin.com/company/king-solar-agency/', // <--- Changed to LinkedIn
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="flex flex-col gap-4">
          <p>
            King Solar Agency is a specialized web design and development firm
            dedicated to empowering solar installation companies across the
            United States. We craft bespoke, conversion-optimized websites
            that excel at generating high-quality leads, driving sales,
            and establishing a strong online presence for our clients.
          </p>
          <p>
            Our approach blends cutting-edge design, robust technical
            implementation, and strategic SEO to ensure our clients not
            only look professional but also achieve measurable business growth.
          </p>
          <h3>Our Mission</h3>
          <ul>
            <li>To be the leading web partner for the U.S. solar industry.</li>
            <li>To deliver measurable ROI through exceptional web experiences.</li>
            <li>To simplify the digital landscape for solar businesses.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'services', // Renamed from 'features'
      title: 'Services Offered', // Renamed title
      content: (
        [ // Array of service objects
          {
            title: 'Custom Website Design & Development',
            description: 'Creating visually stunning and highly functional websites tailored to the unique branding and lead generation goals of solar companies.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=Web+Design+Example+1',
            ]
          },
          {
            title: 'Conversion Rate Optimization (CRO)',
            description: 'Implementing A/B testing, user flow analysis, and strategic call-to-actions to maximize the percentage of website visitors who convert into qualified leads.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=CRO+Dashboard+Example',
            ]
          },
          {
            title: 'SEO & Local Search Optimization',
            description: 'Ensuring clients rank high in search engine results for relevant keywords and local searches, driving organic traffic and increasing visibility in target markets.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=SEO+Analytics+Example',
            ]
          },
          {
            title: 'Lead Management & CRM Integration',
            description: 'Setting up and integrating CRM systems to help clients efficiently track, manage, and follow up on leads generated through their new websites.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=CRM+Integration+Example',
            ]
          },
        ]
      )
    },
    {
      id: 'case-studies', // New section for case studies
      title: 'Case Studies',
      content: (
        [
          {
            title: 'Client Spotlight: Green Energy Solutions',
            description: 'Green Energy Solutions, a mid-sized solar installer, struggled with an outdated website and low lead volume. We redesigned their site with a focus on local SEO and a dynamic solar calculator. **Result:** 120% increase in qualified leads within 3 months and a 75% boost in local search rankings.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=Green+Energy+Solutions+Screenshot',
            ]
          },
          {
            title: 'Client Spotlight: Sun Power Pros',
            description: 'Sun Power Pros needed to expand their market reach. We developed a scalable, conversion-driven platform with integrated marketing funnels. **Result:** Expanded into 3 new states, achieved a 65% conversion rate on key landing pages, and reduced cost per lead by 30%.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=Sun+Power+Pros+Screenshot',
            ]
          },
        ]
      )
    },
    {
      id: 'tech-stack',
      title: 'Our Preferred Technologies', // Renamed title
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4>Frontend</h4>
            <p>React, Next.js, TypeScript, Tailwind CSS, SASS</p>
          </div>
          <div>
            <h4>Backend & CMS</h4>
            <p>Next.js API Routes, Supabase, PostgreSQL, Headless CMS (e.g., Sanity.io)</p>
          </div>
          <div>
            <h4>Marketing & Analytics</h4>
            <p>Google Analytics 4, Google Tag Manager, HubSpot CRM, Mailchimp</p>
          </div>
          <div>
            <h4>Deployment & Infrastructure</h4>
            <p>Vercel, Cloudflare CDN, AWS S3, GitHub Actions (CI/CD)</p>
          </div>
        </div>
      )
    },
    {
      id: 'agency-challenges', // Renamed from 'challenges'
      title: 'Agency Challenges & Solutions', // Renamed title
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4>Challenge: Consistently Delivering High Conversions</h4>
            <p>
              **Solution:** Established a rigorous, data-driven CRO framework including
              continuous A/B testing, heat mapping, and user session recordings. We iterate
              on designs based on real user behavior to consistently push conversion rates.
            </p>
          </div>
          <div>
            <h4>Challenge: Scalability Across Diverse Client Needs</h4>
            <p>
              **Solution:** Developed a modular component library and a flexible architecture
              using Next.js and Headless CMS. This allows for rapid deployment of custom
              solutions while maintaining brand consistency and efficiency.
            </p>
          </div>
          <div>
            <h4>Challenge: Staying Ahead in a Competitive Market</h4>
            <p>
              **Solution:** Continuous market research, skill development, and adoption of
              emerging web technologies. We regularly analyze competitor strategies and
              attend industry conferences to ensure our offerings remain cutting-edge.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'agency-impact', // Renamed from 'results'
      title: 'Our Impact & Achievements', // Renamed title
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4>15+ Successful Client Engagements</h4>
            <p>
              Built and launched highly effective websites for over 15 solar companies,
              each tailored to their unique market and business objectives.
            </p>
          </div>
          <div>
            <h4>Avg. 60% Lead Conversion Increase</h4>
            <p>
              Clients consistently experience an average of 60% increase in qualified lead
              conversions after partnering with King Solar Agency, demonstrating tangible ROI.
            </p>
          </div>
          <div>
            <h4>5-Star Client Satisfaction</h4>
            <p>
              Consistently receive top ratings and glowing testimonials from clients,
              highlighting our professionalism, results-driven approach, and exceptional
              customer service.
            </p>
          </div>
        </div>
      )
    },
  ]
};