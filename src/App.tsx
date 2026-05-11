/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load pages for performance optimization
const Home = React.lazy(() => import('./pages/Home'));
const Games = React.lazy(() => import('./pages/Games'));
const GameDetail = React.lazy(() => import('./pages/GameDetail'));
const Protagonists = React.lazy(() => import('./pages/Protagonists'));
const Maps = React.lazy(() => import('./pages/Maps'));
const Radio = React.lazy(() => import('./pages/Radio'));
const GTAVI = React.lazy(() => import('./pages/GTAVI'));
const Quiz = React.lazy(() => import('./pages/Quiz'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center flex-col gap-4">
    <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-white/50 font-mono text-sm tracking-widest uppercase animate-pulse">Carregando Módulo...</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-black text-white relative">
        {/* Global ambient background overlay */}
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-[#0a0508] to-black opacity-80" />
        
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/games/:id" element={<GameDetail />} />
              <Route path="/protagonists" element={<Protagonists />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/radio" element={<Radio />} />
              <Route path="/gta6" element={<GTAVI />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
