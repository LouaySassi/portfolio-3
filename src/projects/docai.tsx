// src/projects/docai.ts
import React from 'react';
import { ProjectData } from './types';

export const docai: ProjectData = {
  title: 'DocAI',
  company: 'BestwayIT',
  year: '2025',
  description: 'An intelligent, integrated platform designed to streamline the healthcare experience for patients, doctors, and clinics through AI-powered assistance and unified service management.',
  image: '/docai.png',
  website: 'https://docaitn.netlify.app', // Replace with your actual project link (e.g., GitHub, live demo)
  sections: [
    {
      id: 'overview',
      title: 'Project Overview',
      content: (
        <div className="flex flex-col gap-4">
          <p>
            DocAI addresses the fragmentation and inefficiency in current healthcare systems by providing a unified digital platform. It connects patients, doctors, and clinic administrators, creating a more accessible, efficient, and cohesive healthcare journey for all users.
          </p>
          <p>
            The core objective is to reduce administrative burdens, shorten treatment delays, and enhance the overall patient experience by leveraging an AI-focused approach for guidance, booking, and data management.
          </p>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Key Features',
      content: (
        [
          {
            title: 'For Patients: AI Health Assistant & Health Hub',
            description: 'Patients are guided by an AI-powered chatbot for symptom assessment, which can differentiate between normal and urgent cases. The AI assists in finding and booking appointments with the right specialists at nearby clinics. The "Health Hub" serves as a personal dashboard to view upcoming appointments, manage medical records, and securely upload/view documents.',
            screenshots: [
              '/docai chat.png',
              '/docai patient dashboard.png',
            ]
          },
          {
            title: 'For Doctors: Unified Workspace & Consultation Management',
            description: 'Doctors receive a dedicated workspace to manage their daily schedules and view assigned appointments, with urgent cases clearly highlighted. A comprehensive consultation interface allows them to document diagnoses, write notes, issue prescriptions, and access a patient\'s medical history and documents in real-time, streamlining the clinical workflow.',
            screenshots: [
              '/docai doctor dashboard.png',
              '/doctor consultation.png',
            ]
          },
          {
            title: 'For Clinics: Centralized Administration Dashboard',
            description: 'Clinic administrators get a powerful dashboard for a complete operational overview. Key functionalities include managing the entire clinic\'s appointment schedule, manually assigning appointments to doctors, and overseeing the doctor roster. This includes a complete workflow for reviewing and approving/rejecting applications from new doctors wishing to join the clinic.',
            screenshots: [
              '/docai clinic dashboard.png',
            ]
          },
          {
            title: 'Secure Document Management with IBM FileNet',
            description: 'A core pillar of the platform is its robust security. The system integrates with IBM FileNet Content Engine for the secure storage and retrieval of all patient medical documents. This ensures sensitive data is managed with enterprise-grade security and confidentiality, while metadata is handled by the core application for efficient access.',
            screenshots: [
              '/docai storage 1.png',
              '/docai storage 2.png',
            ]
          },
        ]
      )
    },
    {
      id: 'architecture',
      title: 'Architectural Approach',
      content: (
        <div className="flex flex-col gap-4">
          <p>
            DocAI is built on a <strong>Microservices Architecture</strong> to ensure scalability and maintainability. The logical components are decoupled, allowing for independent development, deployment, and scaling of services.
          </p>
          <p>
            The architecture consists of a React frontend, a Spring Boot backend for REST APIs, a PostgreSQL database for structured data, the IBM FileNet instance for document storage, and a Python (Flask) proxy to communicate with the external Gemini AI model. This separation of concerns creates a robust and flexible system.
          </p>
        </div>
      )
    },
    {
      id: 'tech-stack',
      title: 'Technology Stack',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4>Frontend</h4>
            <p>React, JavaScript, Tailwind CSS</p>
          </div>
          <div>
            <h4>Backend</h4>
            <p>Spring Boot (Java), REST APIs</p>
          </div>
          <div>
            <h4>Database</h4>
            <p>PostgreSQL</p>
          </div>
          <div>
            <h4>AI & Document Storage</h4>
            <p>Google Gemini (via Flask proxy), IBM FileNet Content Engine</p>
          </div>
          <div>
            <h4>Security</h4>
            <p>JWT (JSON Web Tokens), Spring Security, BCrypt Hashing</p>
          </div>
          <div>
            <h4>DevOps & Tools</h4>
            <p>Git, GitLab, Docker, Postman, StarUML</p>
          </div>
        </div>
      )
    },
    {
      id: 'conclusion',
      title: 'Conclusion & Impact',
      content: (
        <div className="flex flex-col gap-4">
          <p>
            The DocAI platform marks a significant step towards a more efficient, user-friendly, and integrated healthcare management system. By successfully developing distinct, feature-rich modules for patients, doctors, and clinics, the project provides a solid foundation for improving coordination and access to medical services.
          </p>
          <p>
            Developed using the Scrum methodology, the project demonstrates a modern, agile approach to building complex software, resulting in a practical solution that enhances the efficiency of healthcare tasks and ensures secure, accessible medical information management.
          </p>
        </div>
      )
    },
  ]
};