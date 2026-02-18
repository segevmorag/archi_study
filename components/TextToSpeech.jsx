import { useState, useEffect, useCallback, useRef } from 'react';

// בדיקת שפה — עברית או אנגלית
function detectLanguage(text) {
    const hebrewRegex = /[\u0590-\u05FF]/;
    return hebrewRegex.test(text) ? 'he-IL' : 'en-US';
}

export function useTextToSpeech() {
    const [speaking, setSpeaking] = useState(false);
    const [speakingText, setSpeakingText] = useState('');
    const utteranceRef = useRef(null);

    const stop = useCallback(() => {
        window.speechSynthesis.cancel();
        setSpeaking(false);
        setSpeakingText('');
    }, []);

    const speak = useCallback((text) => {
        if (!text || !text.trim()) return;
        if (!window.speechSynthesis) return;

        // אם כבר מקריא את אותו טקסט — עצור
        if (speaking && speakingText === text) {
            stop();
            return;
        }

        // עצור הקראה קודמת
        stop();

        const lang = detectLanguage(text);
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.95;
        utterance.pitch = 1;

        // נסה למצוא קול מתאים
        const voices = window.speechSynthesis.getVoices();
        const matchingVoice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
        if (matchingVoice) {
            utterance.voice = matchingVoice;
        }

        utterance.onstart = () => {
            setSpeaking(true);
            setSpeakingText(text);
        };

        utterance.onend = () => {
            setSpeaking(false);
            setSpeakingText('');
        };

        utterance.onerror = () => {
            setSpeaking(false);
            setSpeakingText('');
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    }, [speaking, speakingText, stop]);

    // נקה בעת unmount
    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    // טען את הקולות (חלק מהדפדפנים טוענים אותם באופן אסינכרוני)
    useEffect(() => {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }, []);

    return { speak, stop, speaking };
}

// כפתור צף להפסקת הקראה
export function SpeechIndicator({ speaking, onStop }) {
    if (!speaking) return null;

    return (
        <button className="speech-indicator" onClick={onStop} title="לחץ להפסקה">
            <span className="speech-wave">
                <span></span><span></span><span></span><span></span>
            </span>
            <span className="speech-label">מקריא...</span>
        </button>
    );
}
