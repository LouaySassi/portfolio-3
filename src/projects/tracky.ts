import { ProjectData } from './types';

export const tracky: ProjectData = {
  title: 'Tracky',
  company: 'Personal Project',
  year: '2024',
  description: 'A local-first personal finance tracker that runs entirely on your computer with no internet required.',
  image: '/tracky.png',
  website: 'https://trackytn.netlify.app',
  logo: '/tracky-logo.png',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-base text-[#f2f2f2]/70 leading-relaxed">
            Tracky is a privacy-focused personal finance tracker built with a local-first approach. 
            Unlike traditional finance apps that store your data in the cloud, Tracky keeps everything 
            on your computer, ensuring complete privacy and security. The application runs as a desktop 
            app that opens in your browser, combining the convenience of web interfaces with the security 
            of local data storage.
          </p>
          <p className="text-base text-[#f2f2f2]/70 leading-relaxed">
            Built with React, TypeScript, and Express.js, Tracky uses SQLite for local database storage, 
            making it fast, reliable, and completely offline-capable. The clean, calm interface makes 
            financial tracking simple and stress-free.
          </p>
        </div>
      ),
    },
    {
      id: 'key-features',
      title: 'Key Features',
      content: [
        {
          title: '💾 100% Local & Private',
          description: 
            'All data is stored locally on your computer using SQLite. No internet connection required, ' +
            'no cloud services, no tracking. Your financial data never leaves your machine, ensuring ' +
            'complete privacy and security. The app runs entirely offline after initial setup.',
          screenshots: ['/tracky-dashboard.png'],
        },
        {
          title: '📊 Comprehensive Budget Tracking',
          description: 
            'Track monthly bills, expenses, and remaining funds with an intuitive dashboard. Set up ' +
            'recurring expenses, monitor spending patterns, and get real-time insights into your financial ' +
            'health. The budget tracker automatically calculates remaining funds and provides visual ' +
            'indicators for spending trends.',
          screenshots: ['/tracky-analytics.png'],
        },
      ],
    },
    {
      id: 'technical-implementation',
      title: 'Technical Implementation',
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-xl font-medium mb-3" style={{ fontFamily: '"Neue Montreal", sans-serif' }}>
              Architecture
            </h4>
            <p className="text-base text-[#f2f2f2]/70 leading-relaxed mb-4">
              Tracky uses a client-server architecture that runs entirely on the local machine. The Express.js 
              backend serves the React frontend and handles all database operations through SQLite. This 
              architecture provides the benefits of a modern web app while maintaining complete data privacy.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#f2f2f2]/70">
              <li><strong>Frontend:</strong> React 18 with TypeScript, Vite for blazing-fast builds, Tailwind CSS for styling</li>
              <li><strong>Backend:</strong> Express.js server with RESTful API endpoints</li>
              <li><strong>Database:</strong> SQLite3 (better-sqlite3) for fast, local data storage</li>
              <li><strong>Charts:</strong> Recharts for beautiful, responsive data visualizations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-3" style={{ fontFamily: '"Neue Montreal", sans-serif' }}>
              Key Technologies
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-[#f2f2f2]/90 mb-2">Frontend</p>
                <ul className="text-sm text-[#f2f2f2]/70 space-y-1">
                  <li>• React 18 & TypeScript</li>
                  <li>• Vite build tool</li>
                  <li>• Tailwind CSS</li>
                  <li>• Lucide React icons</li>
                  <li>• Recharts</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-[#f2f2f2]/90 mb-2">Backend</p>
                <ul className="text-sm text-[#f2f2f2]/70 space-y-1">
                  <li>• Node.js & Express.js</li>
                  <li>• SQLite3 database</li>
                  <li>• RESTful API design</li>
                  <li>• JSON data storage</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3" style={{ fontFamily: '"Neue Montreal", sans-serif' }}>
              Database Design
            </h4>
            <p className="text-base text-[#f2f2f2]/70 leading-relaxed mb-3">
              The application uses a simple but effective SQLite schema with two main tables: settings for 
              user preferences and monthly_data for storing financial records. All transaction data is stored 
              as JSON in the monthly_data table, providing flexibility while maintaining query performance.
            </p>
            <p className="text-base text-[#f2f2f2]/70 leading-relaxed">
              Data is automatically backed up and can be easily exported or migrated. The database file is 
              stored in the user's AppData folder, making it easy to backup and restore.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'user-experience',
      title: 'User Experience',
      content: (
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-xl font-medium mb-3" style={{ fontFamily: '"Neue Montreal", sans-serif' }}>
              Simple Setup Process
            </h4>
            <p className="text-base text-[#f2f2f2]/70 leading-relaxed mb-3">
              Tracky is designed to be incredibly easy to set up and use. After a simple npm install and 
              build process, users can create a desktop shortcut that launches the app with a single click. 
              The launcher script automatically starts the server and opens the dashboard in the default browser.
            </p>
            <p className="text-base text-[#f2f2f2]/70 leading-relaxed">
              No configuration files, no environment variables, no complex setup - just install, build, and run.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3" style={{ fontFamily: '"Neue Montreal", sans-serif' }}>
              Clean, Intuitive Interface
            </h4>
            <p className="text-base text-[#f2f2f2]/70 leading-relaxed mb-3">
              The UI features a calm, light-mode design that makes financial tracking feel less stressful. 
              The dashboard provides an at-a-glance view of your financial status, while the analytics page 
              offers deeper insights into spending patterns and trends.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#f2f2f2]/70">
              <li>Dashboard with monthly overview and quick stats</li>
              <li>Budget tracking with visual indicators</li>
              <li>Goals and savings tracker</li>
              <li>Analytics page with spending trends and charts</li>
              <li>Responsive design that works on any screen size</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3" style={{ fontFamily: '"Neue Montreal", sans-serif' }}>
              Privacy by Design
            </h4>
            <p className="text-base text-[#f2f2f2]/70 leading-relaxed">
              Privacy isn't an afterthought - it's the core principle. No internet connection required, 
              no data sent to any server, no tracking or analytics, no account registration. Your financial 
              data stays on your computer, period. The app is fully open source, so you can audit the code 
              yourself and verify that your data is truly private.
            </p>
          </div>
        </div>
      ),
    },
  ],
};