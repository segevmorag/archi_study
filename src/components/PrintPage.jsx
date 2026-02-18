import { Link } from 'react-router-dom';
import topics from '../data/topics';
import { Printer, ArrowRight } from 'lucide-react';

function PrintPage() {
    const handlePrint = () => window.print();

    // Helper: split text on \n into paragraphs
    const renderText = (text) => {
        if (!text) return null;
        return text.split('\\n').map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            // Bullet points
            if (trimmed.startsWith('•') || trimmed.startsWith('❌') || trimmed.startsWith('✅') || trimmed.startsWith('→') || trimmed.startsWith('←')) {
                return <li key={i} className="print-bullet">{trimmed.replace(/^[•❌✅→←]\s*/, '')}{trimmed.startsWith('❌') ? ' ❌' : trimmed.startsWith('✅') ? ' ✅' : ''}</li>;
            }
            // Numbered items
            if (/^\d+\./.test(trimmed)) {
                return <li key={i} className="print-numbered">{trimmed}</li>;
            }
            return <p key={i} className="print-para">{trimmed}</p>;
        });
    };

    const getAllImages = (concept) => {
        if (concept.images && concept.images.length > 0) return concept.images;
        if (concept.image) return [concept.image];
        return [];
    };

    return (
        <div className="print-page">
            {/* Print controls — hidden during print */}
            <div className="print-controls no-print">
                <Link to="/" className="print-back-btn">
                    <ArrowRight size={18} />
                    חזרה לאתר
                </Link>
                <h1 className="print-controls-title">דף נוסחאות - ארכיטקטורת מערכות תוכנה</h1>
                <button className="print-btn" onClick={handlePrint}>
                    <Printer size={18} />
                    הדפסה
                </button>
            </div>

            {/* Page header — appears in print */}
            <header className="print-header">
                <h1>ארכיטקטורת מערכות תוכנה — דף סיכום מלא</h1>
                <p>מכללת בראודה • כל הנושאים, הרחבות, דוגמאות וטיפים למבחן</p>
            </header>

            {/* Table of Contents */}
            <nav className="print-toc">
                <h2>תוכן עניינים</h2>
                <ol className="print-toc-list">
                    {topics.map((topic, idx) => (
                        <li key={topic.id}>
                            <a href={`#topic-${topic.id}`}>
                                <span className="print-toc-num">{idx + 1}.</span>
                                <span>{topic.title}</span>
                                <span className="print-toc-lecture">הרצאה {topic.lecture}</span>
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Topics */}
            {topics.map((topic, topicIdx) => (
                <section key={topic.id} id={`topic-${topic.id}`} className="print-topic">
                    <div className="print-topic-header" style={{ borderColor: topic.color }}>
                        <span className="print-topic-num">{topicIdx + 1}</span>
                        <div>
                            <h2 className="print-topic-title">{topic.title}</h2>
                            <span className="print-topic-lecture">הרצאה {topic.lecture}</span>
                        </div>
                    </div>

                    {/* Key Concepts */}
                    {topic.keyConcepts.map((concept, cIdx) => (
                        <div key={cIdx} className="print-concept">
                            <h3 className="print-concept-title">
                                <span className="print-concept-num">{topicIdx + 1}.{cIdx + 1}</span>
                                {concept.title}
                            </h3>

                            {/* Summary */}
                            <div className="print-summary-box">
                                <h4>תקציר</h4>
                                <div>{renderText(concept.content)}</div>
                            </div>

                            {/* Images */}
                            {getAllImages(concept).length > 0 && (
                                <div className="print-images">
                                    {getAllImages(concept).map((img, imgIdx) => (
                                        <figure key={imgIdx} className="print-figure">
                                            <img src={img} alt={`${concept.title} - תרשים ${imgIdx + 1}`} />
                                            <figcaption>תרשים {topicIdx + 1}.{cIdx + 1}{getAllImages(concept).length > 1 ? `.${imgIdx + 1}` : ''} — {concept.title}</figcaption>
                                        </figure>
                                    ))}
                                </div>
                            )}

                            {/* Detailed Content */}
                            {concept.detailedContent && (
                                <div className="print-detail-box">
                                    <h4>הרחבה</h4>
                                    <div className="print-detail-content">
                                        {renderText(concept.detailedContent)}
                                    </div>
                                </div>
                            )}

                            {/* Exam Tip */}
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
                                    <tr>
                                        <th>מונח</th>
                                        <th>הגדרה</th>
                                    </tr>
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
                </section>
            ))}

            {/* Footer */}
            <footer className="print-footer">
                <p>דף סיכום — ארכיטקטורת מערכות תוכנה • מכללת בראודה</p>
            </footer>
        </div>
    );
}

export default PrintPage;
