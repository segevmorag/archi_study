import { NavLink } from 'react-router-dom';
import topics from '../data/topics';
import { getTopicIcon } from '../utils/iconMap';
import { Home, GraduationCap } from 'lucide-react';

function Sidebar({ isOpen, onClose }) {
    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo"></div>
                    <h2 className="sidebar-title">ארכיטקטורת תוכנה</h2>
                    <p className="sidebar-subtitle">© שגב מורג</p>
                </div>

                <nav className="sidebar-nav">
                    <NavLink to="/" className={({ isActive }) => `nav-item home-link ${isActive ? 'active' : ''}`} end onClick={onClose}>
                        <span className="nav-icon"><Home size={20} /></span>
                        <span>עמוד ראשי</span>
                    </NavLink>

                    <div className="nav-divider">נושאי הקורס</div>

                    {topics.map(topic => (
                        <NavLink
                            key={topic.id}
                            to={`/topic/${topic.id}`}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                            onClick={onClose}
                        >
                            <span className="nav-icon">{getTopicIcon(topic.id)}</span>
                            <span>{topic.title}</span>
                            {topic.lecture && <span className="nav-lecture">הרצאה {topic.lecture}</span>}
                        </NavLink>
                    ))}

                    <div className="nav-divider">תרגול</div>

                    <NavLink to="/exam" className={({ isActive }) => `nav-item exam-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                        <span className="nav-icon"><GraduationCap size={20} /></span>
                        <span>מבחן מוגרל</span>
                    </NavLink>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;
