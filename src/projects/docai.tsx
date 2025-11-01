// src/projects/docai.ts (or wherever your project data is)
import React from 'react';
import { ProjectData } from './types';

export const docai: ProjectData = {
  title: 'DocAI',
  company: 'BestWay IT Tunisia',
  year: '2025',
  description: 'Intelligent patient management platform with AI-powered triage and secure document storage.',
  image: 'https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/643ecb449eefba0f82ecf90f_stadiabt-banner-mobile.png',
  website: 'https://docaitn.netlify.app', // <--- ADDED: Project website link
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="flex flex-col gap-4">
          <p>
            DocAI is an intelligent patient management platform designed to
            streamline healthcare operations through AI-powered triage and
            secure document storage. The platform significantly reduces patient
            wait times and improves overall care quality through automated
            prioritization and efficient data handling.
          </p>
          <p>
            Built for modern healthcare facilities, DocAI integrates seamlessly
            with existing systems while providing a user-friendly interface for
            both medical staff and administrators. It aims to empower healthcare
            providers with advanced tools for better patient outcomes.
          </p>
          <h3>Key Objectives</h3>
          <ul>
            <li>Reduce patient waiting times by leveraging AI.</li>
            <li>Enhance data security and compliance (HIPAA).</li>
            <li>Improve operational efficiency for medical staff.</li>
            <li>Provide real-time insights into facility performance.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Key Features',
      // Content is now an array of feature objects, matching Binomi's structure
      content: (
        [
          {
            title: 'AI-Powered Triage',
            description: 'Intelligent patient prioritization based on real-time symptoms and comprehensive medical history, reducing wait times by up to 40% and ensuring critical cases are addressed promptly.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=DocAI+Triage+Screenshot+1',
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=DocAI+Triage+Screenshot+2',
            ]
          },
          {
            title: 'Secure Document Storage',
            description: 'HIPAA-compliant, end-to-end encrypted storage for all patient records, medical images, and administrative documents, featuring granular role-based access control and comprehensive audit logging.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=DocAI+Storage+Screenshot+1',
            ]
          },
          {
            title: 'Real-time Dashboard',
            description: 'A dynamic, real-time dashboard offering live monitoring of patient flow, staff allocation, resource utilization, and critical facility metrics, enabling proactive decision-making.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=DocAI+Dashboard+Screenshot+1',
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=DocAI+Dashboard+Screenshot+2',
            ]
          },
          {
            title: 'Integrated Communication',
            description: 'Seamless in-platform communication tools allowing secure messaging between medical staff, patients, and administrators, improving coordination and response times.',
            screenshots: [
              'https://via.placeholder.com/800x600/1e1e1e/f2f2f2?text=DocAI+Comms+Screenshot+1',
            ]
          },
        ]
      )
    },
    {
      id: 'tech-stack',
      title: 'Tech Stack',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4>Frontend</h4>
            <p>React, TypeScript, Tailwind CSS, Framer Motion, D3.js (for visualizations)</p>
          </div>
          <div>
            <h4>Backend</h4>
            <p>Node.js, Express, PostgreSQL (with Sequelize ORM), Redis (for caching & pub/sub)</p>
          </div>
          <div>
            <h4>AI/ML</h4>
            <p>OpenAI GPT-4, Custom ML Models (Python/Scikit-learn), TensorFlow.js (for client-side models)</p>
          </div>
          <div>
            <h4>Infrastructure</h4>
            <p>AWS (EC2, S3, RDS, EKS), Docker, Kubernetes, CI/CD with GitHub Actions, Prometheus & Grafana for monitoring</p>
          </div>
        </div>
      )
    },
    {
      id: 'challenges',
      title: 'Challenges & Solutions',
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4>Challenge: Real-time Data Synchronization</h4>
            <p>
              **Solution:** Implemented robust WebSocket connections coupled with Redis pub/sub
              for instant data updates across all connected client interfaces. This eliminated
              the need for constant database polling, ensuring a highly responsive user experience.
            </p>
          </div>
          <div>
            <h4>Challenge: Strict HIPAA Compliance</h4>
            <p>
              **Solution:** Designed and implemented an end-to-end encryption system for all
              sensitive patient data. This included comprehensive audit logging, granular
              role-based access control, and regular third-party security audits to meet
              and exceed all HIPAA regulatory requirements.
            </p>
          </div>
          <div>
            <h4>Challenge: Achieving High AI Model Accuracy</h4>
            <p>
              **Solution:** Conducted extensive fine-tuning of AI models on diverse and large
              medical datasets. We established a continuous feedback loop from clinical staff
              to retrain and improve models, achieving a consistent accuracy rate of over 95%
              for patient triage and diagnosis support.
            </p>
          </div>
          <div>
            <h4>Challenge: Scalability & High Availability</h4>
            <p>
              **Solution:** Deployed the application on AWS using Docker and Kubernetes. This
              containerized microservices architecture provides horizontal scalability,
              self-healing capabilities, and ensures high availability even under extreme load.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'Results & Impact',
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4>40% Reduction in Patient Wait Times</h4>
            <p>
              The AI-powered triage system dramatically reduced average patient wait times
              across all departments, leading to improved patient satisfaction and better
              resource allocation within the facility.
            </p>
          </div>
          <div>
            <h4>95% Staff Satisfaction Rate</h4>
            <p>
              Surveys among medical staff indicated a 95% satisfaction rate, attributing
              improvements to streamlined workflows, reduced administrative burden, and
              the intuitive nature of the DocAI platform.
            </p>
          </div>
          <div>
            <h4>Zero Security Incidents in Production</h4>
            <p>
              Maintained a flawless security record with no reported breaches or incidents
              in production, validated through continuous security monitoring, regular audits,
              and adherence to industry best practices.
            </p>
          </div>
          <div>
            <h4>Increased Operational Efficiency by 25%</h4>
            <p>
              Implementation of DocAI led to a measurable 25% increase in overall
              operational efficiency for the healthcare facility, optimizing patient flow
              and administrative tasks.
            </p>
          </div>
        </div>
      )
    },
  ]
};