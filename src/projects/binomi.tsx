// src/projects/binomi.ts
import React from 'react';
import { ProjectData } from './types';

export const binomi: ProjectData = {
  title: 'Binomi',
  company: 'Personal Project',
  year: '2024',
  description: 'Swipe-based roommate matching platform for university students with lifestyle filtering.',
  image: '/binomi.png', // 
  website: 'https://binomi.netlify.app',
  logo:"/binomi logo.png",
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="flex flex-col gap-4">
          <p>
            Binomi revolutionizes the roommate search experience for university
            students by combining Tinder-style swiping with intelligent
            lifestyle matching algorithms.
          </p>
          <p>
            The platform helps students find compatible roommates based on sleep
            schedules, cleanliness preferences, study habits, and social
            activities.
          </p>
          <h3>Project Goals</h3>
          <ul>
            <li>Reduce time spent finding compatible roommates.</li>
            <li>Increase successful match rates leading to fewer conflicts.</li>
            <li>Provide a secure and verified platform for students.</li>
            <li>Streamline the entire roommate search process.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'features',
      title: 'Key Features',
      content: (
        [ // Array of feature objects
          {
            title: 'Smart Matching Algorithm',
            description: 'Proprietary algorithm matches users based on detailed lifestyle compatibility scores and preferences, leveraging advanced machine learning techniques to refine suggestions and improve accuracy over time.',
            screenshots: [
              '/binomi faces.png', // Placeholder URL
            ]
          },
          {
            title: 'Interactive Profiles',
            description: 'Comprehensive and visually rich profiles featuring photos, personal interests, and in-depth lifestyle preferences, allowing users to gain a holistic understanding of potential roommates.',
            screenshots: [
            ]
          },
          {
            title: 'In-App Messaging',
            description: 'Secure and real-time chat functionality enabling matched users to conveniently discuss living arrangements, ask questions, and build rapport within the application itself.',
            screenshots: [
            ]
          },
          {
            title: 'University Verification',
            description: 'A robust verification system that authenticates all users as currently enrolled university students, significantly enhancing platform safety and fostering a trustworthy community environment.',
            screenshots: [
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
            <p>React, JavaScript, Tailwind CSS, Framer Motion, Axios</p>
          </div>
          <div>
            <h4>Backend</h4>
            <p>Node.js, Express, MongoDB, Mongoose, WebSocket</p>
          </div>
          <div>
            <h4>Authentication</h4>
            <p>JWT (JSON Web Tokens), OAuth 2.0 Integration, University Email Verification</p>
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
            <h4>Challenge: Matching Algorithm Accuracy</h4>
            <p>
              <b>Solution:</b> Developed a sophisticated, weighted scoring system. This algorithm
              dynamically adjusts compatibility predictions based on continuous user feedback
              and the success rate of previous matches. It was refined through A/B testing
              and iterative data analysis to ensure high precision.
            </p>
          </div>
          <div>
            <h4>Challenge: Ensuring User Safety & Verification</h4>
            <p>
              <b>Solution:</b> Implemented a multi-layered verification process including mandatory
              university email validation and a secure photo verification system. This significantly
              enhances the authenticity of student profiles and minimizes fraudulent accounts.
              Robust reporting and moderation tools were also integrated.
            </p>
          </div>
          <div>
            <h4>Challenge: Real-time Chat Performance under Load</h4>
            <p>
              <b>Solution:</b> Optimized WebSocket connections by incorporating connection pooling
              and a message queuing system. This architecture ensures a consistently seamless
              and responsive chat experience, even during peak usage with a high volume of
              concurrent users.
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
            <h4>500+ Active Users</h4>
            <p>
              Achieved significant user adoption among university students within the first
              semester of launch, demonstrating a consistent month-over-month growth rate
              of over 20% fueled by positive word-of-mouth.
            </p>
          </div>
          <div>
            <h4>85% Match Success Rate</h4>
            <p>
              Post-match surveys revealed an impressive 85% success rate where users reported
              high compatibility and satisfaction with their living arrangements, directly
              attributable to the refined matching algorithm.
            </p>
          </div>
          <div>
            <h4>Featured in University News</h4>
            <p>
              Binomi gained recognition and was prominently featured in several university
              publications and student organization newsletters, significantly boosting
              its visibility and driving further adoption across campuses.
            </p>
          </div>
          <div>
            <h4>Strong Positive User Feedback</h4>
            <p>
              Received overwhelmingly positive testimonials and feedback from users,
              highlighting the platform's intuitive ease of use, the effectiveness of its
              matching system, and its valuable contribution to simplifying the roommate search.
            </p>
          </div>
        </div>
      )
    },
  ]
};