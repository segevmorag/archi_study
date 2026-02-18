import { useState, useRef } from 'react';
import { Bot, X, Send } from 'lucide-react';
import topics from '../data/topics';
import { useNavigate } from 'react-router-dom';

export default function ChatBot() {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const chatEndRef = useRef(null);
    const navigate = useNavigate();

    /* ─── AI Knowledge Search ─── */
    const askQuestion = (question) => {
        if (!question.trim()) return;
        const q = question.trim().toLowerCase();
        setChatMessages(prev => [...prev, { role: 'user', text: question.trim() }]);
        setChatInput('');

        // Search through all topics data
        const results = [];
        topics.forEach(topic => {
            // Search key concepts
            topic.keyConcepts?.forEach(concept => {
                const searchFields = [
                    concept.title, concept.content, concept.detailedContent, concept.examTip
                ].filter(Boolean).join(' ').toLowerCase();
                if (q.split(/\s+/).some(word => word.length > 2 && searchFields.includes(word))) {
                    results.push({
                        topicId: topic.id,
                        topicTitle: topic.title,
                        lecture: topic.lecture,
                        color: topic.color,
                        title: concept.title,
                        summary: concept.content,
                        detail: concept.detailedContent,
                        tip: concept.examTip,
                        type: 'concept'
                    });
                }
            });
            // Search key terms
            topic.keyTerms?.forEach(term => {
                const termText = `${term.term} ${term.definition}`.toLowerCase();
                if (q.split(/\s+/).some(word => word.length > 2 && termText.includes(word))) {
                    results.push({
                        topicId: topic.id,
                        topicTitle: topic.title,
                        lecture: topic.lecture,
                        color: topic.color,
                        title: term.term,
                        summary: term.definition,
                        type: 'term'
                    });
                }
            });
        });

        if (results.length === 0) {
            setChatMessages(prev => [...prev, {
                role: 'bot',
                type: 'text',
                text: 'לא מצאתי תוצאות מתאימות בחומר 🤔\nנסה מילות מפתח כמו: OPM, SaaS, CSS, In-Zoom, localStorage, SOA...'
            }]);
        } else {
            // Deduplicate and take top results
            const seen = new Set();
            const unique = results.filter(r => {
                const key = r.title + r.topicId;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            }).slice(0, 5);

            setChatMessages(prev => [...prev, {
                role: 'bot',
                type: 'results',
                text: `מצאתי ${unique.length} תוצאות:`,
                results: unique
            }]);
        }
        setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    };

    const showExplanation = (result) => {
        let explanation = `✨ ${result.title}\n`;
        explanation += `📚 מתוך: ${result.topicTitle} (הרצאה ${result.lecture})\n\n`;

        // Summary
        explanation += `📌 בקצרה:\n${result.summary}\n`;

        // Detailed with examples
        if (result.detail) {
            const detailLines = result.detail.split('\\n').filter(l => l.trim());
            explanation += `\n📖 הסבר מפורט:\n`;
            detailLines.forEach(line => {
                explanation += `${line.trim()}\n`;
            });
        }

        // Exam tip
        if (result.tip) {
            explanation += `\n💡 טיפ למבחן:\n${result.tip.replace(/\\n/g, '\n')}`;
        }

        setChatMessages(prev => [...prev, {
            role: 'bot',
            type: 'text',
            text: explanation
        }]);
        setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    };

    const scrollToTopic = (topicId) => {
        // Navigate to topic page if not already there, or scroll if on print page
        // Since this is global, we should navigate to the topic page
        navigate(`/topic/${topicId}`);
        // Scrolling specific logic might be tricky across pages, but navigating to the topic is a good start.
        // If we really want to scroll to specific element in TopicPage, we might need hash navigation or state.
        // For now, robust navigation is better.
    };

    /* ─── Render chat message ─── */
    const renderChatMessage = (msg, i) => {
        if (msg.role === 'user') {
            return (
                <div key={i} className="ai-chat-msg ai-chat-msg-user">
                    <div className="ai-chat-msg-text">{msg.text}</div>
                </div>
            );
        }
        if (msg.type === 'results') {
            return (
                <div key={i} className="ai-chat-msg ai-chat-msg-bot">
                    <Bot size={16} className="ai-chat-bot-icon" />
                    <div className="ai-chat-msg-text">
                        <span className="ai-results-intro">{msg.text}</span>
                        <div className="ai-result-cards">
                            {msg.results.map((r, j) => (
                                <div key={j} className="ai-result-card" style={{ borderRightColor: r.color }}>
                                    <div className="ai-result-card-title">{r.title}</div>
                                    <div className="ai-result-card-topic">{r.topicTitle} • הרצאה {r.lecture}</div>
                                    <div className="ai-result-card-actions">
                                        <button className="ai-result-btn ai-result-btn-show" onClick={() => scrollToTopic(r.topicId)}>
                                            📄 הצג בחומר
                                        </button>
                                        {r.detail && (
                                            <button className="ai-result-btn ai-result-btn-explain" onClick={() => showExplanation(r)}>
                                                🧠 הסבר לי
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        // type === 'text' (explanation or fallback)
        return (
            <div key={i} className="ai-chat-msg ai-chat-msg-bot">
                <Bot size={16} className="ai-chat-bot-icon" />
                <div className="ai-chat-msg-text">{msg.text.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}</div>
            </div>
        );
    };

    return (
        <>
            {/* ─── AI Chat Floating Button ─── */}
            <div className="ai-chat-fab no-print" onClick={() => setChatOpen(!chatOpen)}>
                {chatOpen ? <X size={24} /> : <Bot size={24} />}
            </div>

            {/* ─── AI Chat Panel ─── */}
            {chatOpen && (
                <div className="ai-chat-panel no-print">
                    <div className="ai-chat-header">
                        <Bot size={20} />
                        <span>שאל אותי על החומר</span>
                        <button className="ai-chat-close" onClick={() => setChatOpen(false)}><X size={16} /></button>
                    </div>
                    <div className="ai-chat-messages">
                        {chatMessages.length === 0 && (
                            <div className="ai-chat-welcome">
                                <Bot size={32} />
                                <p>היי! 👋 שאל אותי כל שאלה על החומר.</p>
                                <p style={{ fontSize: '12px', color: '#8a8ab0' }}>אקבל לך תוצאות ותוכל לבחור: לראות בחומר או לקבל הסבר מפורט</p>
                                <div className="ai-chat-suggestions">
                                    {['מה זה OPM?', 'יתרונות SaaS', 'Box Model ב-CSS', 'In-Zoom vs Unfold'].map((s, i) => (
                                        <button key={i} className="ai-chat-suggestion" onClick={() => { setChatInput(s); askQuestion(s); }}>{s}</button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {chatMessages.map((msg, i) => renderChatMessage(msg, i))}
                        <div ref={chatEndRef} />
                    </div>
                    <div className="ai-chat-input-row">
                        <input
                            className="ai-chat-input"
                            type="text"
                            placeholder="שאל שאלה על החומר..."
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && askQuestion(chatInput)}
                            dir="rtl"
                        />
                        <button className="ai-chat-send" onClick={() => askQuestion(chatInput)}><Send size={18} /></button>
                    </div>
                </div>
            )}
        </>
    );
}
