import { useState } from 'react';

function CodeBlock({ title, language, code }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="code-block">
            <div className="code-header">
                <span className="code-lang">{language}</span>
                <span className="code-title">{title}</span>
                <button className="code-copy" onClick={handleCopy}>
                    {copied ? '✓ הועתק' : '📋 העתק'}
                </button>
            </div>
            <pre className="code-content">
                <code>{code}</code>
            </pre>
        </div>
    );
}

export default CodeBlock;
