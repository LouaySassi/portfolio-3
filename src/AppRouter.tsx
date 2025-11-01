import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Projects } from './pages/Projects';
import { AboutMe } from './pages/AboutMe';
import { ProjectDetail } from './pages/ProjectDetail';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Projects />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="project/:projectId" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}