// src/components/ApplicationsPage.tsx

// --- TYPE DEFINITIONS ---
type ApplicationStatus = "Applied" | "Interview" | "Assessment" | "Rejected" | "Accepted";

interface Application {
    company: string;
    role: string;
    status: ApplicationStatus;
    date: string;
    progress: number;
}

// --- MOCK DATA ---
const activeApplications: Application[] = [
    { company: "Tech Innovators Inc.", role: "Software Engineer Intern", status: "Applied", date: "2025-10-15", progress: 50 },
    { company: "Global Solutions Ltd.", role: "Data Analyst Intern", status: "Interview", date: "2025-10-20", progress: 75 },
    { company: "Future Dynamics Corp.", role: "Product Manager Intern", status: "Assessment", date: "2025-10-25", progress: 25 },
];

const completedApplications: Application[] = [
    { company: "Innovative Systems Co.", role: "UX Designer Intern", status: "Rejected", date: "2025-09-30", progress: 100 },
    { company: "Pioneer Technologies", role: "Marketing Intern", status: "Accepted", date: "2025-09-15", progress: 100 },
];


// --- REUSABLE SUB-COMPONENTS ---

const StatusBadge = ({ status }: { status: ApplicationStatus }) => {
    const baseClasses = "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold";
    const statusClasses: Record<ApplicationStatus, string> = {
        "Applied": "bg-blue-500/20 text-blue-400",
        "Interview": "bg-yellow-500/20 text-yellow-400",
        "Assessment": "bg-purple-500/20 text-purple-400",
        "Rejected": "bg-red-500/20 text-red-400",
        "Accepted": "bg-green-500/20 text-green-400",
    };
    return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

const ApplicationTable = ({ title, applications, dateColumnTitle = "Deadline" }: { title: string; applications: Application[], dateColumnTitle?: string }) => (
    <div>
        <h2 className="text-xl font-bold text-text-primary mb-4">{title}</h2>
        <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
            <table className="min-w-full divide-y divide-border">
                <thead className="bg-border/30">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">Company</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">Role</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">{dateColumnTitle}</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">Progress</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border">
                    {applications.map((app) => (
                        <tr key={app.company} className="hover:bg-border/20 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{app.company}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{app.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm"><StatusBadge status={app.status} /></td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{app.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="w-24 bg-border rounded-full h-1.5">
                                        <div className="bg-accent h-1.5 rounded-full" style={{ width: `${app.progress}%` }}></div>
                                    </div>
                                    <span className="text-sm font-medium text-text-secondary">{app.progress}%</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


// --- MAIN APPLICATIONS PAGE COMPONENT ---

const ApplicationsPage = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary">My Applications</h1>
                <p className="text-text-secondary mt-1">Track your applications and upcoming deadlines.</p>
            </div>
            <div className="space-y-12">
                <ApplicationTable title="Active Applications" applications={activeApplications} />
                <ApplicationTable title="Completed Applications" applications={completedApplications} dateColumnTitle="Date Completed" />
            </div>
        </div>
    );
};

export default ApplicationsPage;