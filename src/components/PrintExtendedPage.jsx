
import { Link } from 'react-router-dom';
import topics from '../data/topics';
import { Printer, ArrowRight, Send, Bot, X } from 'lucide-react';

/*
 * Curated exam exercises per topic.
 * Each exercise: question, answer, why (brief).
 * Selected for being tricky, calculation-based, or commonly misunderstood.
 */
import { topicExercises } from '../data/repository';

// Helper: Render text with line breaks
const renderText = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => (
        <p key={i} className="print-text-line">{line}</p>
    ));
};

// Helper: Get all images from a concept (supports single image or array)
const getAllImages = (concept) => {
    if (!concept) return [];
    return (concept.images || [concept.image]).filter(Boolean);
};

function PrintExtendedPage() {
    const handlePrint = () => window.print();
    return (
        <div className="print-page">
            {/* Print controls */}
            <div className="print-controls no-print">
                <Link to="/" className="print-back-btn">
                    <ArrowRight size={18} />
                    חזרה לאתר
                </Link>
                <h1 className="print-controls-title">דף נוסחאות מורחב + תרגילים</h1>
                <button className="print-btn" onClick={handlePrint}>
                    <Printer size={18} />
                    הדפסה
                </button>
            </div>

            {/* Page header */}
            <header className="print-header">
                <h1>ארכיטקטורת מערכות תוכנה — דף סיכום מורחב עם תרגילים</h1>
            </header>

            {/* Table of Contents */}
            <nav className="print-toc">
                <h2>תוכן עניינים</h2>
                <ol className="print-toc-list">
                    {topics.map((topic, idx) => (
                        <li key={topic.id}>
                            <a href={`#ext-topic-${topic.id}`}>
                                <span className="print-toc-num">{idx + 1}.</span>
                                <span>{topic.title}</span>
                                <span className="print-toc-lecture">הרצאה {topic.lecture}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Topics + Exercises */}
            {
                topics.map((topic, topicIdx) => (
                    <section key={topic.id} id={`ext-topic-${topic.id}`} className="print-topic">
                        <div className="print-topic-header" style={{ borderColor: topic.color }}>
                            <span className="print-topic-num">{topicIdx + 1}</span>
                            <div className="print-topic-header-text">
                                <h2 className="print-topic-title">{topic.title}</h2>
                            </div>
                            <span className="print-topic-lecture-badge" style={{ background: `linear-gradient(135deg, ${topic.color}, ${topic.color}99)` }}>
                                <span className="lecture-badge-num">{topic.lecture}</span>
                                <span className="lecture-badge-label">הרצאה</span>
                            </span>
                        </div>

                        {/* Key Concepts */}
                        {topic.keyConcepts.map((concept, cIdx) => (
                            <div key={cIdx} className="print-concept">
                                <h3 className="print-concept-title">
                                    <span className="print-concept-num">{topicIdx + 1}.{cIdx + 1}</span>
                                    {concept.title}
                                </h3>

                                <div className="print-summary-box">
                                    <h4>תקציר</h4>
                                    <div>{renderText(concept.content)}</div>
                                </div>

                                {getAllImages(concept, topic.id).length > 0 && (
                                    <div className="print-images">
                                        {getAllImages(concept, topic.id).map((img, imgIdx) => (
                                            <figure key={imgIdx} className="print-figure">
                                                <img
                                                    src={img}
                                                    alt={`${concept.title} - תרשים ${imgIdx + 1}`}
                                                    onError={(e) => e.target.style.display = 'none'}
                                                />
                                                <figcaption>תרשים {topicIdx + 1}.{cIdx + 1}{getAllImages(concept, topic.id).length > 1 ? `.${imgIdx + 1}` : ''} — {concept.title}</figcaption>
                                            </figure>
                                        ))}
                                    </div>
                                )}

                                {concept.detailedContent && (
                                    <div className="print-detail-box">
                                        <h4>הרחבה</h4>
                                        <div className="print-detail-content">
                                            {renderText(concept.detailedContent)}
                                        </div>
                                    </div>
                                )}

                                {concept.examTip && (
                                    <div className="print-exam-tip">
                                        <h4>💡 טיפ למבחן</h4>
                                        <div>{renderText(concept.examTip)}</div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Code Examples */}
                        {topic.codeExamples && topic.codeExamples.length > 0 && (
                            <div className="print-code-section">
                                <h3 className="print-section-subheading">דוגמאות קוד</h3>
                                {topic.codeExamples.map((ex, i) => (
                                    <div key={i} className="print-code-block">
                                        <div className="print-code-header">
                                            <span className="print-code-lang">{ex.language}</span>
                                            <span className="print-code-title">{ex.title}</span>
                                        </div>
                                        <pre className="print-code-pre"><code>{ex.code}</code></pre>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Key Terms */}
                        {topic.keyTerms && topic.keyTerms.length > 0 && (
                            <div className="print-terms-section">
                                <h3 className="print-section-subheading">מונחים חשובים</h3>
                                <table className="print-terms-table">
                                    <thead>
                                        <tr><th>מונח</th><th>הגדרה</th></tr>
                                    </thead>
                                    <tbody>
                                        {topic.keyTerms.map((item, i) => (
                                            <tr key={i}>
                                                <td className="print-term-name">{item.term}</td>
                                                <td>{item.definition}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* ═══════ EXERCISES ═══════ */}
                        {topicExercises[topic.id] && topicExercises[topic.id].length > 0 && (
                            <div className="print-exercises-section">
                                <h3 className="print-exercises-heading">📝 תרגילים נבחרים — {topic.title}</h3>
                                {topicExercises[topic.id].map((ex, i) => (
                                    <div key={i} className="print-exercise">
                                        <div className="print-exercise-q">
                                            <span className="print-exercise-num">שאלה {i + 1}:</span>
                                            {ex.q}
                                        </div>
                                        <div className="print-exercise-a">
                                            <strong>תשובה:</strong> {ex.a}
                                        </div>
                                        <div className="print-exercise-why">
                                            <strong>למה?</strong> {ex.why}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                ))
            }

            <footer className="print-footer">
                <p>דף סיכום מורחב + תרגילים — ארכיטקטורת מערכות תוכנה</p>
                <p className="print-footer-copyright">© כל הזכויות שמורות לשגב מורג</p>
            </footer>
        </div >
    );
}

export default PrintExtendedPage;
