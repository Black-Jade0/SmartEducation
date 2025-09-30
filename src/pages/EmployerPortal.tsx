// src/components/EmployerDashboard.tsx
import React, { useState } from 'react';
import {
    Shapes,
    Search,
    Bell,
    ChevronLeft,
    ChevronRight,
    ShieldCheck,
    ShieldX,
    Icon,
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface DashboardSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}
interface Verification {
    name: string;
    status: 'Verified' | 'Not Verified';
    imageUrl: string;
}

// --- MOCK DATA ---
const candidates = [
    { role: 'Software Engineer', details: 'Candidate 1: 5 years experience, Python, Java' },
    { role: 'Data Scientist', details: 'Candidate 2: 3 years experience, Machine Learning' },
    { role: 'Product Manager', details: 'Candidate 3: 7 years experience, Agile, Scrum' },
];

const verifications: Verification[] = [
    { name: 'Candidate 1', status: 'Verified', imageUrl: 'https://i.pravatar.cc/150?u=candidate1' },
    { name: 'Candidate 2', status: 'Not Verified', imageUrl: 'https://i.pravatar.cc/150?u=candidate2' },
    { name: 'Candidate 3', status: 'Verified', imageUrl: 'https://i.pravatar.cc/150?u=candidate3' },
];

const calendarDays = [
    ...Array(3).fill(null), // Offset for Wednesday start
    ...Array.from({ length: 30 }, (_, i) => i + 1),
];


// --- REUSABLE SUB-COMPONENTS ---

const DashboardSection = ({ title, children, className = '' }: DashboardSectionProps) => (
    <section className={`bg-white border border-gray-200 rounded-lg shadow-sm p-6 ${className}`}>
        <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
        {children}
    </section>
);

const VerificationRow = ({ name, status, imageUrl }: Verification) => (
    <div className="flex items-center gap-4">
        <img src={imageUrl} alt={name} className="size-10 rounded-full" />
        <div className="flex-1">
            <p className="font-medium text-sm text-gray-900">{name}</p>
            <p className="text-xs text-gray-600">{status === 'Verified' ? 'Certificate Verified' : 'Not Verified'}</p>
        </div>
        {status === 'Verified'
            ? <ShieldCheck className="text-green-500" />
            : <ShieldX className="text-red-500" />
        }
    </div>
);


// --- MAIN COMPONENT ---
const EmployerDashboard = () => {
    const [activeTab, setActiveTab] = useState('Jobs');
    
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 bg-white shadow-sm px-6 sm:px-10 py-4">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Shapes className="size-8 text-blue-600" />
                        <h2 className="text-xl font-bold text-gray-900">Talent Hub</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        {['Home', 'Jobs', 'Candidates', 'Blockchain'].map(item => (
                            <a key={item} href="#" className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeTab === item ? 'text-blue-600' : 'text-gray-600'}`}>
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative hidden sm:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-48 rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <Bell className="text-gray-600" />
                    </button>
                    <img src="https://i.pravatar.cc/150?u=employer" alt="Employer" className="size-10 rounded-full" />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold mb-8">Employer Dashboard</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <DashboardSection title="Post a New Role">
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="job-title" className="block text-sm font-medium mb-1 text-gray-700">Job Title</label>
                                        <input type="text" id="job-title" placeholder="e.g., Software Engineer" className="w-full rounded border border-gray-300 bg-white p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label htmlFor="department" className="block text-sm font-medium mb-1 text-gray-700">Department</label>
                                        <select id="department" className="w-full rounded border border-gray-300 bg-white p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option>Engineering</option>
                                            <option>Design</option>
                                            <option>Marketing</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium mb-1 text-gray-700">Location</label>
                                    <input type="text" id="location" placeholder="e.g., San Francisco, CA" className="w-full rounded border border-gray-300 bg-white p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>
                                <div className="flex justify-end pt-2">
                                    <button type="submit" className="bg-blue-600 text-white font-bold text-sm py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">Post Job</button>
                                </div>
                            </form>
                        </DashboardSection>

                        <DashboardSection title="Candidate Pool">
                             <div className="flex gap-2 mb-4">
                                <button className="bg-blue-100 text-blue-600 font-medium text-sm py-1.5 px-4 rounded-full">Skills</button>
                                <button className="bg-gray-100 text-gray-700 font-medium text-sm py-1.5 px-4 rounded-full hover:bg-gray-200">Experience</button>
                                <button className="bg-gray-100 text-gray-700 font-medium text-sm py-1.5 px-4 rounded-full hover:bg-gray-200">Location</button>
                            </div>
                            <div className="space-y-4">
                                {candidates.map(candidate => (
                                    <div key={candidate.role} className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <div className="flex-1">
                                            <p className="font-bold text-gray-900">{candidate.role}</p>
                                            <p className="text-sm text-gray-600">{candidate.details}</p>
                                        </div>
                                        <button className="bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-blue-700">View</button>
                                    </div>
                                ))}
                            </div>
                        </DashboardSection>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <DashboardSection title="Schedule Interviews">
                             <div className="flex items-center justify-between mb-2">
                                <button className="p-2 rounded-full hover:bg-gray-100"><ChevronLeft className="size-5 text-gray-600"/></button>
                                <p className="font-bold text-sm text-gray-900">September 2025</p>
                                <button className="p-2 rounded-full hover:bg-gray-100"><ChevronRight className="size-5 text-gray-600"/></button>
                            </div>
                            <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-600">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <span key={day} className="py-2">{day}</span>)}
                            </div>
                            <div className="grid grid-cols-7 text-center text-sm">
                               {calendarDays.map((day, index) => (
                                    <div key={index} className="py-1">
                                        {day && (
                                            <button className={`size-8 flex items-center justify-center rounded-full mx-auto ${day === 30 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                                                {day}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </DashboardSection>
                        <DashboardSection title="Blockchain Verification">
                             <div className="space-y-3">
                                {verifications.map(v => <VerificationRow key={v.name} {...v} />)}
                            </div>
                        </DashboardSection>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EmployerDashboard;