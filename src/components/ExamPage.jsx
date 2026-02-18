import { useState, useCallback, useMemo } from 'react';
import examQuestions from '../data/examQuestions';
import repository from '../data/repository';
import concurrencyLessons from '../data/concurrencyMasterclass';
import topics from '../data/topics';
import { getTopicIcon } from '../utils/iconMap';
import {
    FileQuestion, Search, X, BarChart2, Shuffle, CheckCircle,
    Target, RefreshCw, Trophy, Star, ThumbsUp, BookOpen, Activity,
    ChevronDown, ChevronUp, AlertCircle, Code, Image as ImageIcon,
    Eye, EyeOff, RotateCcw
} from 'lucide-react';

function ExamPage() {
    // מצב כללי
    const [mode, setMode] = useState(null); // null | 'exam' | 'practice'
    const [selectedTopic, setSelectedTopic] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // מצב מבחן / תרגול
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    // פלאשקארדס
    const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);

    // תרגול — מעקב
    const [practiceScore, setPracticeScore] = useState(0);
    const [practiceTotal, setPracticeTotal] = useState(0);

    // Masterclass State
    const [selectedLessonId, setSelectedLessonId] = useState(null);

    const startMasterclass = () => {
        setMode('masterclass');
        setSelectedLessonId(concurrencyLessons[0].id); // Default to first lesson
    };

    // סינון שאלות לפי נושא + חיפוש
    const filteredQuestions = useMemo(() => {
        let qs = selectedTopic === 'all'
            ? examQuestions
            : examQuestions.filter(q => q.topic === selectedTopic);

        if (searchQuery.trim()) {
            const query = searchQuery.trim().toLowerCase();
            qs = qs.filter(q =>
                q.question.toLowerCase().includes(query) ||
                q.options.some(o => o.toLowerCase().includes(query)) ||
                q.explanation.toLowerCase().includes(query) ||
                q.topicName.toLowerCase().includes(query)
            );
        }
        return qs;
    }, [selectedTopic, searchQuery]);

    // הגרלת שאלות
    const shuffleArray = useCallback((arr) => {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }, []);

    const startExam = () => {
        const shuffled = shuffleArray(filteredQuestions);
        setShuffledQuestions(shuffled);
        setCurrentIndex(0);
        setAnswers({});
        setShowResults(false);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setMode('exam');
    };

    const startPractice = () => {
        const shuffled = shuffleArray(filteredQuestions);
        setShuffledQuestions(shuffled);
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setPracticeScore(0);
        setPracticeTotal(0);
        setMode('practice');
    };

    const startFlashcards = () => {
        // סינון מתוך המאגר המאוחד
        let repoQs = selectedTopic === 'all'
            ? repository
            : repository.filter(q => q.topic === selectedTopic);

        const shuffled = shuffleArray(repoQs);
        setShuffledQuestions(shuffled);
        setCurrentIndex(0);
        setShowFlashcardAnswer(false);
        setMode('flashcards');
    };

    const handleAnswer = (optionIndex) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(optionIndex);
        setShowExplanation(true);

        if (mode === 'exam') {
            setAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }));
        } else {
            setPracticeTotal(prev => prev + 1);
            const q = shuffledQuestions[currentIndex];
            if (optionIndex === q.correct) {
                setPracticeScore(prev => prev + 1);
            }
        }
    };

    const nextQuestion = () => {
        if (mode === 'exam') {
            if (currentIndex < shuffledQuestions.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setSelectedAnswer(null);
                setShowExplanation(false);
            } else {
                setShowResults(true);
            }
        } else if (mode === 'practice') {
            // תרגול — אינסוף, חוזר מההתחלה אם נגמר
            let nextIdx = currentIndex + 1;
            if (nextIdx >= shuffledQuestions.length) {
                // הגרלה מחדש
                const reshuffled = shuffleArray(filteredQuestions);
                setShuffledQuestions(reshuffled);
                nextIdx = 0;
            }
            setCurrentIndex(nextIdx);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else if (mode === 'flashcards') {
            let nextIdx = currentIndex + 1;
            if (nextIdx >= shuffledQuestions.length) {
                const reshuffled = shuffleArray(shuffledQuestions); // Reshuffle existing set
                setShuffledQuestions(reshuffled);
                nextIdx = 0;
            }
            setCurrentIndex(nextIdx);
            setShowFlashcardAnswer(false);
        }
    };

    const exitToMenu = () => {
        setMode(null);
        setShowResults(false);
        setSelectedAnswer(null);
        setShowExplanation(false);
    };

    const calcScore = () => {
        let correct = 0;
        Object.entries(answers).forEach(([idx, answer]) => {
            if (shuffledQuestions[parseInt(idx)]?.correct === answer) correct++;
        });
        return correct;
    };

    const getGrade = () => {
        const score = calcScore();
        const total = shuffledQuestions.length;
        const pct = Math.round((score / total) * 100);
        return { score, total, pct };
    };

    const getGradeEmoji = (pct) => {
        if (pct >= 90) return <Trophy size={64} color="#f59e0b" />;
        if (pct >= 80) return <Star size={64} color="#eab308" />;
        if (pct >= 70) return <ThumbsUp size={64} color="#3b82f6" />;
        if (pct >= 60) return <BookOpen size={64} color="#6366f1" />;
        return <Activity size={64} color="#ef4444" />;
    };

    // ═══════════════════════════════════
    // מסך פתיחה — בחירת מוד
    // ═══════════════════════════════════
    if (!mode) {
        return (
            <div className="exam-page">
                <div className="exam-start">
                    <div className="exam-start-icon"><FileQuestion size={48} /></div>
                    <h1>תרגול ומבחנים</h1>
                    <p>בחרו נושא, חפשו שאלות, ובחרו את המוד שלכם</p>

                    {/* שורת חיפוש */}
                    <div className="exam-search">
                        <span className="search-icon"><Search size={20} /></span>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="חיפוש שאלות..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button className="search-clear" onClick={() => setSearchQuery('')}><X size={16} /></button>
                        )}
                    </div>

                    {/* סינון נושאים */}
                    <div className="exam-topic-filter">
                        <button
                            className={`filter-btn ${selectedTopic === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedTopic('all')}
                        >
                            <BookOpen size={16} /> כל הנושאים ({examQuestions.length})
                        </button>
                        {topics.filter(t => examQuestions.some(q => q.topic === t.id)).map(t => {
                            const count = examQuestions.filter(q => q.topic === t.id).length;
                            return (
                                <button
                                    key={t.id}
                                    className={`filter-btn ${selectedTopic === t.id ? 'active' : ''}`}
                                    style={{ '--accent': t.color }}
                                    onClick={() => setSelectedTopic(t.id)}
                                >
                                    {getTopicIcon(t.id)} {t.title} ({count})
                                </button>
                            );
                        })}
                    </div>

                    <div className="exam-info">
                        <span><BarChart2 size={16} /> {filteredQuestions.length} שאלות</span>
                        <span><Shuffle size={16} /> סדר מוגרל</span>
                        <span><CheckCircle size={16} /> ציון מיידי</span>
                    </div>

                    {/* כפתורי מוד */}
                    <div className="mode-buttons">
                        <button className="start-exam-btn" onClick={startExam} disabled={filteredQuestions.length === 0}>
                            <Target size={24} /> מבחן מוגרל
                            <span className="mode-desc">כל השאלות → ציון סופי</span>
                        </button>
                        <button className="start-exam-btn practice" onClick={startPractice} disabled={filteredQuestions.length === 0}>
                            <RefreshCw size={24} /> תרגול אמריקאי
                            <span className="mode-desc">שאלות ברצף + הסברים</span>
                        </button>
                        <button className="start-exam-btn flashcards" onClick={startFlashcards} disabled={repository.length === 0}>
                            <RotateCcw size={24} /> כרטיסיות
                            <span className="mode-desc">שינון: קוד, תרשימים ומושגים</span>
                        </button>

                    </div>

                    {/* תצוגת שאלות (תוצאות חיפוש) */}
                    {searchQuery.trim() && filteredQuestions.length > 0 && (
                        <div className="search-results">
                            <h3 className="search-results-title">תוצאות חיפוש ({filteredQuestions.length})</h3>
                            {filteredQuestions.map((q, i) => (
                                <SearchQuestionCard key={q.id} question={q} index={i} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // ═══════════════════════════════════
    // מסך תוצאות (מבחן בלבד)
    // ═══════════════════════════════════
    if (showResults && mode === 'exam') {
        const { score, total, pct } = getGrade();
        return (
            <div className="exam-page">
                <div className="exam-results">
                    <div className="results-emoji">{getGradeEmoji(pct)}</div>
                    <h1>תוצאות המבחן</h1>
                    <div className="results-score">
                        <span className="results-pct">{pct}%</span>
                        <span className="results-fraction">{score} מתוך {total}</span>
                    </div>
                    <div className="results-bar">
                        <div className="results-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="results-message">
                        {pct >= 90 ? 'מצוין! שליטה מלאה בחומר!' :
                            pct >= 70 ? 'כל הכבוד! יש שליטה טובה בחומר.' :
                                pct >= 55 ? 'לא רע! כדאי לחזור על כמה נושאים.' :
                                    'כדאי לחזור על החומר ולנסות שוב.'}
                    </p>

                    <div className="results-summary">
                        {shuffledQuestions.map((q, i) => {
                            const userAnswer = answers[i];
                            const isCorrect = userAnswer === q.correct;
                            return (
                                <div key={i} className={`result-item ${isCorrect ? 'correct' : 'wrong'}`}>
                                    <span className="result-icon">{isCorrect ? <CheckCircle size={20} /> : <X size={20} />}</span>
                                    <span className="result-q">{q.question.substring(0, 60)}...</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="results-actions">
                        <button className="start-exam-btn" onClick={startExam}><RefreshCw size={20} /> נסה שוב</button>
                        <button className="start-exam-btn secondary" onClick={exitToMenu}>חזרה לתפריט</button>
                    </div>
                </div>
            </div>
        );
    }

    // ═══════════════════════════════════
    // מסך כרטיסיות (Flashcards)
    // ═══════════════════════════════════
    if (mode === 'flashcards') {
        const card = shuffledQuestions[currentIndex];
        if (!card) return null;

        const getCardTypeIcon = (type) => {
            if (type === 'code') return <Code size={20} />;
            if (type === 'image') return <ImageIcon size={20} />;
            return <FileQuestion size={20} />;
        };

        return (
            <div className="exam-page">
                <div className="exam-question-container flashcard-container">
                    <div className="exam-top-bar">
                        <button className="exit-btn" onClick={exitToMenu}><X size={16} /> יציאה</button>
                        <span className="mode-badge"><RotateCcw size={16} /> כרטיסיות</span>
                        <div className="exam-progress">
                            <span className="exam-progress-text">כרטיס #{currentIndex + 1}</span>
                        </div>
                    </div>

                    <div className="exam-topic-badge">
                        {getCardTypeIcon(card.type)} {card.topicName}
                    </div>

                    <div className="flashcard-content">
                        <h2 className="exam-question-text">{card.question}</h2>

                        {/* הצגת תוכן עשיר (קוד/תמונה) */}
                        {card.type === 'composite' ? (
                            <div className="flashcard-composite-content">
                                {card.content.map((item, idx) => (
                                    <div key={idx} className="composite-item">
                                        {item.type === 'text' && <p className="composite-text">{item.text}</p>}
                                        {item.type === 'code' && (
                                            <div className="flashcard-code-block" dir="ltr">
                                                <div className="code-header">{item.language}</div>
                                                <pre><code>{item.code}</code></pre>
                                            </div>
                                        )}
                                        {item.type === 'image' && (
                                            <div className="flashcard-image-wrapper">
                                                <img src={item.image || item.src} alt={item.alt || 'diagram'} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                {card.type === 'code' && (
                                    <div className="flashcard-code-block" dir="ltr">
                                        <div className="code-header">{card.language}</div>
                                        <pre><code>{card.code}</code></pre>
                                    </div>
                                )}

                                {card.type === 'image' && (
                                    <div className="flashcard-image-wrapper">
                                        <img src={card.image} alt="diagram" />
                                    </div>
                                )}
                            </>
                        )}

                        {/* תשובה */}
                        {showFlashcardAnswer ? (
                            <div className="flashcard-answer-box">
                                <h3>תשובה:</h3>
                                <div className="flashcard-answer-text">{card.answer}</div>
                                {card.detailedAnswer && (
                                    <div className="flashcard-detail-text">
                                        <strong>הרחבה:</strong> {card.detailedAnswer}
                                    </div>
                                )}
                                {card.why && (
                                    <div className="flashcard-why-text">
                                        <strong>הסבר נוסף:</strong> {card.why}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flashcard-placeholder" onClick={() => setShowFlashcardAnswer(true)}>
                                <Eye size={32} />
                                <span>לחץ להצגת התשובה</span>
                            </div>
                        )}
                    </div>

                    <div className="question-actions">
                        <button
                            className="next-question-btn"
                            onClick={showFlashcardAnswer ? nextQuestion : () => setShowFlashcardAnswer(true)}
                        >
                            {showFlashcardAnswer ? 'כרטיס הבא ←' : 'הצג תשובה'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ═══════════════════════════════════
    // מסך Masterclass (Concurrency)
    // ═══════════════════════════════════
    if (mode === 'masterclass') {
        const activeLesson = concurrencyLessons.find(l => l.id === selectedLessonId) || concurrencyLessons[0];

        return (
            <div className="exam-page masterclass-page">
                <div className="exam-top-bar">
                    <button className="exit-btn" onClick={exitToMenu}><X size={16} /> יציאה</button>
                    <span className="mode-badge"><Activity size={16} /> Python Concurrency Masterclass</span>
                </div>

                <div className="masterclass-layout">
                    {/* Sidebar / Navigation */}
                    <div className="masterclass-sidebar">
                        <h3>שיעורים</h3>
                        <div className="lesson-list">
                            {concurrencyLessons.map(lesson => (
                                <button
                                    key={lesson.id}
                                    className={`lesson-btn ${lesson.id === selectedLessonId ? 'active' : ''}`}
                                    onClick={() => setSelectedLessonId(lesson.id)}
                                >
                                    <span className="lesson-level">{lesson.level}</span>
                                    {lesson.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="masterclass-content">
                        <h1 className="lesson-title">{activeLesson.title}</h1>

                        <div className="lesson-split">
                            {/* Text Explanation */}
                            <div className="lesson-text">
                                <div dangerouslySetInnerHTML={{ __html: activeLesson.content.replace(/\n/g, '<br/>') }} />
                            </div>

                            {/* Code Example */}
                            <div className="lesson-code">
                                <div className="code-header">
                                    {activeLesson.code.title}
                                    <span className="lang-tag">{activeLesson.code.language}</span>
                                </div>
                                <pre dir="ltr"><code>{activeLesson.code.content}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ═══════════════════════════════════
    // מסך שאלה (מבחן + תרגול)
    // ═══════════════════════════════════
    const question = shuffledQuestions[currentIndex];
    if (!question) return null;

    return (
        <div className="exam-page">
            <div className="exam-question-container">
                {/* כותרת עליונה */}
                <div className="exam-top-bar">
                    <button className="exit-btn" onClick={exitToMenu}><X size={16} /> יציאה</button>
                    <span className="mode-badge">{mode === 'exam' ? <><Target size={16} /> מבחן</> : <><RefreshCw size={16} /> תרגול</>}</span>
                    {mode === 'practice' && (
                        <span className="practice-score-badge">
                            <CheckCircle size={16} /> {practiceScore}/{practiceTotal}
                        </span>
                    )}
                </div>

                {/* פס התקדמות (רק במבחן) */}
                {mode === 'exam' && (
                    <div className="exam-progress">
                        <div className="exam-progress-bar">
                            <div className="exam-progress-fill" style={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }} />
                        </div>
                        <span className="exam-progress-text">{currentIndex + 1} / {shuffledQuestions.length}</span>
                    </div>
                )}

                {/* מספר שאלה בתרגול */}
                {mode === 'practice' && (
                    <div className="exam-progress">
                        <span className="exam-progress-text">שאלה #{practiceTotal + 1}</span>
                    </div>
                )}

                {/* נושא */}
                <div className="exam-topic-badge">{question.topicName}</div>

                {/* שאלה */}
                <h2 className="exam-question-text">{question.question}</h2>

                {/* אפשרויות */}
                <div className="exam-options">
                    {question.options.map((opt, i) => {
                        let className = 'exam-option';
                        if (selectedAnswer !== null) {
                            if (i === question.correct) className += ' correct';
                            else if (i === selectedAnswer) className += ' wrong';
                            else className += ' disabled';
                        }
                        return (
                            <button key={i} className={className} onClick={() => handleAnswer(i)} disabled={selectedAnswer !== null}>
                                <span className="option-letter">{['א', 'ב', 'ג', 'ד'][i]}</span>
                                <span className="option-text">{opt}</span>
                            </button>
                        );
                    })}
                </div>

                {/* הסבר */}
                {showExplanation && (
                    <div className={`exam-explanation ${selectedAnswer === question.correct ? 'correct' : 'wrong'}`}>
                        <div className="explanation-header">
                            {selectedAnswer === question.correct ? <><CheckCircle size={20} /> נכון!</> : <><AlertCircle size={20} /> לא נכון</>}
                        </div>
                        <p>{question.explanation}</p>
                    </div>
                )}

                {/* כפתורים */}
                {selectedAnswer !== null && (
                    <div className="question-actions">
                        <button className="next-question-btn" onClick={nextQuestion}>
                            {mode === 'exam'
                                ? (currentIndex < shuffledQuestions.length - 1 ? 'שאלה הבאה ←' : 'סיים מבחן ←')
                                : 'שאלה הבאה ←'
                            }
                        </button>
                        {mode === 'practice' && (
                            <button className="exit-practice-btn" onClick={exitToMenu}>
                                סיים תרגול ({practiceScore}/{practiceTotal})
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

// ═══════════════════════════════════
// כרטיס שאלה בתוצאות חיפוש
// ═══════════════════════════════════
function SearchQuestionCard({ question }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="search-q-card">
            <div className="search-q-header" onClick={() => setOpen(!open)}>
                <span className="search-q-topic">{question.topicName}</span>
                <span className="search-q-text">{question.question}</span>
                <span className="search-q-toggle">{open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
            </div>
            {open && (
                <div className="search-q-body">
                    <div className="search-q-options">
                        {question.options.map((opt, i) => (
                            <div key={i} className={`search-q-opt ${i === question.correct ? 'correct' : ''}`}>
                                <span className="option-letter">{['א', 'ב', 'ג', 'ד'][i]}</span>
                                {opt}
                            </div>
                        ))}
                    </div>
                    <div className="search-q-explanation">
                        <strong>הסבר:</strong> {question.explanation}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExamPage;
