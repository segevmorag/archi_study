import {
    Building2, FileCode, Globe, Server, Network, Cloud,
    Boxes, Webhook, Database, ShieldCheck, TestTube, Layers,
    GraduationCap, BookOpen, Code, Terminal, ClipboardList,
    Workflow, BarChart3, Cpu, Eye, Settings
} from 'lucide-react';

export const getTopicIcon = (id) => {
    const iconMap = {
        'intro': <Building2 size={24} />,
        'code-conventions': <FileCode size={24} />,
        'requirements': <ClipboardList size={24} />,
        'web-dev': <Globe size={24} />,
        'opm': <Workflow size={24} />,
        'pipes-filters': <Settings size={24} />,
        'software-metrics': <BarChart3 size={24} />,
        'n-tier': <Layers size={24} />,
        'distributed-saas-soa': <Cloud size={24} />,
        'oop': <Boxes size={24} />,
        'design-patterns': <Layers size={24} />,
        'concurrency': <Cpu size={24} />,
        'fidelity': <Eye size={24} />,
        'client-server': <Server size={24} />,
        'networking': <Network size={24} />,
        'cloud': <Cloud size={24} />,
        'microservices': <Boxes size={24} />,
        'api': <Webhook size={24} />,
        'db': <Database size={24} />,
        'security': <ShieldCheck size={24} />,
        'testing': <TestTube size={24} />,
        'exam': <GraduationCap size={24} />
    };

    return iconMap[id] || <BookOpen size={24} />;
};

export const getHeroIcon = () => <Terminal size={48} color="#6366f1" />;

