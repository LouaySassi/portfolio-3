import React from 'react';
import { ProjectData } from './types';
export const clientPlatforms: ProjectData = {
  title: 'Client Platforms',
  company: 'BestWay IT Tunisia',
  year: '2023-2024',
  description: 'E-commerce and travel booking systems with optimized performance and scalability.',
  image: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/648415f4acafd703035dd314_rbc-tb.png',
  sections: [{
    id: 'overview',
    title: 'Overview',
    content: <div className="flex flex-col gap-4">
          <p className="text-[#f2f2f2]/70 leading-relaxed">
            Led development of multiple client platforms including e-commerce
            systems and travel booking applications, focusing on performance
            optimization and scalability.
          </p>
          <p className="text-[#f2f2f2]/70 leading-relaxed">
            These platforms handle thousands of daily transactions and provide
            seamless user experiences across web and mobile devices.
          </p>
        </div>
  }, {
    id: 'features',
    title: 'Key Features',
    content: <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">
              Multi-vendor E-commerce
            </h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Complete marketplace solution with vendor management, inventory
              tracking, and payment processing.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">
              Travel Booking Engine
            </h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Integrated booking system for flights, hotels, and packages with
              real-time availability.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">Advanced Analytics</h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Comprehensive dashboards for tracking sales, user behavior, and
              business metrics.
            </p>
          </div>
        </div>
  }, {
    id: 'tech-stack',
    title: 'Tech Stack',
    content: <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">Frontend</h4>
            <p className="text-[#f2f2f2]/70">
              React, TypeScript, Material-UI, Redux
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">Backend</h4>
            <p className="text-[#f2f2f2]/70">
              Node.js, Express, PostgreSQL, Redis, Elasticsearch
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">Payment Processing</h4>
            <p className="text-[#f2f2f2]/70">
              Stripe, PayPal, Custom Payment Gateway Integration
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">Infrastructure</h4>
            <p className="text-[#f2f2f2]/70">
              AWS, Docker, Kubernetes, Nginx, CloudFront
            </p>
          </div>
        </div>
  }, {
    id: 'challenges',
    title: 'Challenges & Solutions',
    content: <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">
              Challenge: High Traffic Scalability
            </h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Implemented microservices architecture with load balancing and
              caching to handle 10,000+ concurrent users.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">
              Challenge: Payment Security
            </h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Achieved PCI DSS compliance with end-to-end encryption and secure
              payment tokenization.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">
              Challenge: Search Performance
            </h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Integrated Elasticsearch for lightning-fast product and travel
              search with advanced filtering.
            </p>
          </div>
        </div>
  }, {
    id: 'results',
    title: 'Results & Impact',
    content: <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">99.9% Uptime</h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Maintained exceptional reliability across all platforms with
              robust monitoring and failover systems.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">
              50% Performance Improvement
            </h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Optimizations resulted in faster page loads and improved user
              experience metrics.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#f2f2f2] font-medium">
              $2M+ Transaction Volume
            </h4>
            <p className="text-[#f2f2f2]/70 leading-relaxed">
              Platforms successfully processed over $2 million in transactions
              within the first year.
            </p>
          </div>
        </div>
  }]
};