import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import topics from '../data/topics';
import CodeBlock from './CodeBlock';
import { useTextToSpeech } from './TextToSpeech';
import { getTopicIcon } from '../utils/iconMap';
import { Play, Square, X, ChevronDown, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

function TopicPage() {
    const { topicId } = useParams();
    const topic = topics.find(t => t.id === topicId);
    const [selectedConcept, setSelectedConcept] = useState(null);
    const [lightboxImage, setLightboxImage] = useState(null);
    const { speak, stop, speaking } = useTextToSpeech();

    if (!topic) {
        return (
            <div className="not-found">
                <h2>הנושא לא נמצא</h2>
                <Link to="/">חזרה לעמוד הראשי</Link>
            </div>
        );
    }

    const currentIndex = topics.indexOf(topic);
    const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
    const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

    const handleSpeak = (concept) => {
        const text = `${concept.title}. ${concept.content}. ${concept.detailedContent || ''}. ${concept.examTip || ''}`;
        speak(text);
    };

    return (
        <div className="topic-page">
            <header className="topic-header" style={{ '--accent': topic.color }}>
                <div className="topic-header-icon">{getTopicIcon(topic.id)}</div>
                <div>
                    <h1 className="topic-header-title">{topic.title}</h1>
                    <p className="topic-header-lecture">הרצאה {topic.lecture}</p>
                </div>
            </header>

            {/* מושגים מרכזיים */}
            <section className="topic-section">
                <h2 className="section-heading">מושגים מרכזיים</h2>
                <p className="section-subtitle">לחץ על כרטיסייה להרחבה</p>
                <div className="concepts-grid">
                    {topic.keyConcepts.map((concept, i) => (
                        <div
                            key={i}
                            className="concept-card"
                            style={{ '--delay': `${i * 0.08}s`, '--accent': topic.color }}
                            onClick={() => setSelectedConcept(concept)}
                        >
                            <div className="concept-header">
                                <h3 className="concept-title">{concept.title}</h3>
                            </div>
                            {topic.id === 'opm' && concept.image && (
                                <div className="concept-image-preview">
                                    <img
                                        src={concept.image}
                                        alt={concept.title}
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            )}
                            <p className="concept-content">{concept.content}</p>
                            <button className="concept-expand-btn">
                                <ChevronDown size={16} />
                                הרחבה
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* דוגמאות קוד */}
            {topic.codeExamples.length > 0 && (
                <section className="topic-section">
                    <h2 className="section-heading">דוגמאות קוד</h2>
                    <div className="code-examples">
                        {topic.codeExamples.map((ex, i) => (
                            <CodeBlock key={i} title={ex.title} language={ex.language} code={ex.code} />
                        ))}
                    </div>
                </section>
            )}

            {/* מונחים */}
            {topic.keyTerms.length > 0 && (
                <section className="topic-section">
                    <h2 className="section-heading">מונחים חשובים</h2>
                    <div className="terms-grid">
                        {topic.keyTerms.map((item, i) => (
                            <div key={i} className="term-card">
                                <span className="term-name">{item.term}</span>
                                <span className="term-def">{item.definition}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ניווט בין נושאים */}
            <nav className="topic-nav">
                {prevTopic ? (
                    <Link to={`/topic/${prevTopic.id}`} className="topic-nav-btn prev">
                        <span className="topic-nav-arrow"><ChevronRight size={20} /></span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            {getTopicIcon(prevTopic.id)}
                            {prevTopic.title}
                        </span>
                    </Link>
                ) : <div />}
                {nextTopic ? (
                    <Link to={`/topic/${nextTopic.id}`} className="topic-nav-btn next">
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            {nextTopic.title}
                            {getTopicIcon(nextTopic.id)}
                        </span>
                        <span className="topic-nav-arrow"><ChevronLeft size={20} /></span>
                    </Link>
                ) : (
                    <Link to="/exam" className="topic-nav-btn next exam">
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            מבחן מוגרל
                            <GraduationCap size={20} />
                        </span>
                        <span className="topic-nav-arrow"><ChevronLeft size={20} /></span>
                    </Link>
                )}
            </nav>

            {/* Concept Detail Modal */}
            {selectedConcept && (
                <div className="concept-modal-overlay" onClick={() => setSelectedConcept(null)}>
                    <div className="concept-modal" onClick={e => e.stopPropagation()} style={{ '--accent': topic.color }}>
                        <button className="close-modal-btn" onClick={() => { stop(); setSelectedConcept(null); }}>
                            <X size={24} />
                        </button>

                        <div className="modal-header">
                            <h2 className="modal-title">{selectedConcept.title}</h2>
                            <button
                                className={`modal-play-btn ${speaking ? 'speaking' : ''}`}
                                onClick={() => speaking ? stop() : handleSpeak(selectedConcept)}
                            >
                                {speaking ? <><Square size={16} fill="currentColor" /> עצור השמעה</> : <><Play size={16} fill="currentColor" /> השמע הכל</>}
                            </button>
                        </div>

                        <div className="modal-body">
                            {/* Support for multiple images (array) or single image (string) */}
                            {selectedConcept.images && selectedConcept.images.length > 0 ? (
                                <div className="modal-images-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                                    {selectedConcept.images.map((img, idx) => (
                                        <div key={idx} className="modal-image-wrapper" onClick={() => setLightboxImage(img)} style={{ cursor: 'zoom-in' }}>
                                            <img src={img} alt={`${selectedConcept.title} ${idx + 1}`} className="modal-image" />
                                        </div>
                                    ))}
                                </div>
                            ) : selectedConcept.image && (
                                <div className="modal-image-wrapper" onClick={() => setLightboxImage(selectedConcept.image)} style={{ cursor: 'zoom-in' }}>
                                    <img src={selectedConcept.image} alt={selectedConcept.title} className="modal-image" />
                                </div>
                            )}
                            <div className="modal-section original">
                                <h3>תקציר</h3>
                                <p>{selectedConcept.content}</p>
                            </div>

                            {selectedConcept.detailedContent && (
                                <div className="modal-section detailed">
                                    <h3>הרחבה</h3>
                                    <p>{selectedConcept.detailedContent}</p>
                                </div>
                            )}

                            {selectedConcept.examTip && (
                                <div className="modal-section exam-tip">
                                    <h3>טיפ למבחן</h3>
                                    <p>{selectedConcept.examTip}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {/* Lightbox */}
            {lightboxImage && (
                <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
                            <X size={24} /> סגור
                        </button>
                        <img src={lightboxImage} alt="Full Screen" className="lightbox-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default TopicPage;
