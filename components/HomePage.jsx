import { Link } from 'react-router-dom';
import topics from '../data/topics';
import { getTopicIcon, getHeroIcon } from '../utils/iconMap';
import { Play, BookOpen, Code, GraduationCap, Printer } from 'lucide-react';

function HomePage() {
    return (
        <div className="home-page">
            <header className="hero">
                <div className="hero-bg" />
                <div className="hero-content">
                    <h1 className="hero-title">
                        ארכיטקטורת מערכות תוכנה
                    </h1>
                </div>
            </header>

            <section className="topics-grid">
                <h2 className="section-title">נושאי הקורס</h2>
                <div className="grid">
                    {topics.map((topic, i) => (
                        <Link to={`/topic/${topic.id}`} key={topic.id} className="topic-card-link" style={{ '--delay': `${i * 0.05}s` }}>
                            <div className="topic-card-home">
                                <div className="topic-card-icon">{getTopicIcon(topic.id)}</div>
                                <h3 className="topic-card-title">{topic.title}</h3>
                                <div className="topic-card-meta">
                                    <span><BookOpen size={14} /> הרצאה {topic.lecture}</span>
                                    <span><Code size={14} /> {topic.codeExamples?.length || 0} דוגמאות</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <Link to="/exam" className="cta-button">
                    <GraduationCap size={20} style={{ marginLeft: 8 }} />
                    התחל מבחן מוגרל
                </Link>
                <Link to="/print-extended" className="cta-button cta-secondary">
                    <Printer size={20} style={{ marginLeft: 8 }} />
                    דף נוסחאות
                </Link>
            </section>
        </div>
    );
}

export default HomePage;
