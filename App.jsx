import { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import TopicPage from './components/TopicPage';
import ExamPage from './components/ExamPage';
import PrintExtendedPage from './components/PrintExtendedPage';
import { useTextToSpeech, SpeechIndicator } from './components/TextToSpeech';
import ChatBot from './components/ChatBot';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { speak, stop, speaking } = useTextToSpeech();



  return (
    <div className="app-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content">
        <div className="mobile-header">
          <button className="hamburger" onClick={() => setSidebarOpen(true)}>☰</button>
          <span className="mobile-title">ארכיטקטורת מערכות תוכנה</span>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/exam" element={<ExamPage />} />
          <Route path="/print" element={<PrintExtendedPage />} />
          <Route path="/print-extended" element={<PrintExtendedPage />} />
        </Routes>
      </div>

      <SpeechIndicator speaking={speaking} onStop={stop} />
      <ChatBot />
    </div>
  );
}

export default App;
