import { Download, Award, Trophy, BarChart, type LucideIcon } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface Certificate {
    title: string;
    issuer: string;
    imageUrl: string;
}

interface Achievement {
    icon: LucideIcon;
    title: string;
    description: string;
}

// --- MOCK DATA ---
const certificatesData: Certificate[] = [
    { title: "Certificate of Completion: Advanced Data Analysis", issuer: "DataSkills Academy", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
    { title: "Certificate of Achievement: Project Management", issuer: "ProjectPro Institute", imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&q=80" },
    { title: "Certificate of Excellence: Software Development", issuer: "CodeCrafters Inc.", imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&q=80" },
];

const achievementsData: Achievement[] = [
    { icon: Award, title: "Community Service Award", description: "Completed 50+ hours of volunteer work at a local charity." },
    { icon: Trophy, title: "National Coding Champion", description: "Achieved a perfect score in the national coding competition." },
    { icon: BarChart, title: "Innovation Project Leader", description: "Led a team to develop a successful mobile application." },
];


// --- REUSABLE SUB-COMPONENTS ---

const CertificateCard = ({ title, issuer, imageUrl }: Certificate) => (
    <div className="bg-card backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group border border-border">
        <div className="flex flex-col md:flex-row items-stretch">
            <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                    <p className="text-lg font-bold text-text-primary">{title}</p>
                    <p className="text-sm text-text-secondary mt-1">{issuer}</p>
                </div>
                <button className="mt-6 flex items-center justify-center gap-2 w-fit rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105">
                    <Download className="size-4" />
                    <span>Download</span>
                </button>
            </div>
            <div className="md:w-1/3 md:min-h-full min-h-48">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
            </div>
        </div>
    </div>
);

const AchievementCard = ({ icon: Icon, title, description }: Achievement) => (
    <div className="flex items-center gap-4 rounded-lg bg-card p-4 transition-all duration-300 hover:bg-border/20 border border-border">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon className="size-6" />
        </div>
        <div className="flex-grow">
            <p className="font-medium text-text-primary">{title}</p>
            <p className="text-sm text-text-secondary">{description}</p>
        </div>
    </div>
);


// --- MAIN CERTIFICATES PAGE COMPONENT ---

const CertificatesPage = () => {
    return (
        <div className="mx-auto max-w-5xl">
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-text-primary">
                    My Certificates & Achievements
                </h1>
                <p className="mt-2 text-lg text-text-secondary">
                    View, download, and manage your digital credentials.
                </p>
            </div>
            <div className="space-y-12">
                <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-6">Certificates</h3>
                    <div className="grid grid-cols-1 gap-8">
                        {certificatesData.map(cert => <CertificateCard key={cert.title} {...cert} />)}
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-6">Achievements</h3>
                    <div className="space-y-4">
                        {achievementsData.map(ach => <AchievementCard key={ach.title} {...ach} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificatesPage;