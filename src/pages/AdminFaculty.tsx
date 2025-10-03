import React, { useState } from "react";
import {
    Home,
    Users,
    Briefcase,
    FileText,
    TrendingUp,
    Calendar,
    CheckCircle,
    XCircle,
    Download,
    Filter,
    MoreVertical,
    Eye,
    Edit,
    Plus,
    Award,
    Building2,
    GraduationCap,
    BarChart3,
} from "lucide-react";

// Mock Data
const mockStudents = [
    {
        id: "S2632",
        name: "Brooklyn Zoe",
        dept: "Computer Science",
        applications: 12,
        interviews: 5,
        offers: 2,
        status: "Active",
        cgpa: 8.5,
    },
    {
        id: "S2633",
        name: "John McCormick",
        dept: "Information Tech",
        applications: 8,
        interviews: 3,
        offers: 1,
        status: "Active",
        cgpa: 7.9,
    },
    {
        id: "S2634",
        name: "Sandra Pugh",
        dept: "Electronics",
        applications: 15,
        interviews: 7,
        offers: 3,
        status: "Placed",
        cgpa: 9.1,
    },
    {
        id: "S2635",
        name: "Vernie Hort",
        dept: "Computer Science",
        applications: 6,
        interviews: 2,
        offers: 0,
        status: "Active",
        cgpa: 7.2,
    },
    {
        id: "S2636",
        name: "Mark Clark",
        dept: "Mechanical",
        applications: 10,
        interviews: 4,
        offers: 1,
        status: "Active",
        cgpa: 8.3,
    },
];

const mockJobs = [
    {
        id: "J001",
        company: "TechCorp India",
        position: "Software Engineer",
        stipend: "₹50,000",
        dept: "CS/IT",
        applications: 45,
        status: "Active",
        posted: "2025-09-15",
    },
    {
        id: "J002",
        company: "DataSystems Ltd",
        position: "Data Analyst",
        stipend: "₹35,000",
        dept: "CS/IT",
        applications: 32,
        status: "Active",
        posted: "2025-09-20",
    },
    {
        id: "J003",
        company: "AutoTech Solutions",
        position: "Mechanical Engineer",
        stipend: "₹40,000",
        dept: "Mechanical",
        applications: 28,
        status: "Closed",
        posted: "2025-09-10",
    },
    {
        id: "J004",
        company: "Circuit Innovations",
        position: "Electronics Intern",
        stipend: "₹30,000",
        dept: "Electronics",
        applications: 19,
        status: "Active",
        posted: "2025-09-22",
    },
];

const mockApprovals = [
    {
        id: "A001",
        student: "Emma Watson",
        type: "Certificate Request",
        date: "2025-09-28",
        status: "Pending",
    },
    {
        id: "A002",
        student: "Liam Johnson",
        type: "Profile Update",
        date: "2025-09-27",
        status: "Pending",
    },
    {
        id: "A003",
        student: "Olivia Brown",
        type: "Application Approval",
        date: "2025-09-28",
        status: "Pending",
    },
    {
        id: "A004",
        student: "Noah Davis",
        type: "Certificate Request",
        date: "2025-09-26",
        status: "Approved",
    },
];

const mockRecruiters = [
    {
        id: "R001",
        company: "TechCorp India",
        contact: "hr@techcorp.in",
        jobs: 3,
        status: "Verified",
        joined: "2025-08-15",
    },
    {
        id: "R002",
        company: "DataSystems Ltd",
        contact: "recruit@datasys.com",
        jobs: 2,
        status: "Verified",
        joined: "2025-09-01",
    },
    {
        id: "R003",
        company: "StartupHub",
        contact: "jobs@startuphub.io",
        jobs: 1,
        status: "Pending",
        joined: "2025-09-25",
    },
];

// Sidebar Component
type SidebarProps = {
    role: string;
    setRole: (role: string) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ role, setRole, activeTab, setActiveTab }) => {
    const adminMenuItems = [
        { id: "dashboard", label: "Dashboard", icon: Home },
        { id: "students", label: "Students", icon: GraduationCap },
        { id: "jobs", label: "Job Postings", icon: Briefcase },
        { id: "recruiters", label: "Recruiters", icon: Building2 },
        { id: "reports", label: "Reports", icon: FileText },
        // { id: "analytics", label: "Analytics", icon: BarChart3 },
        // { id: "settings", label: "Settings", icon: Settings },
    ];

    const facultyMenuItems = [
        { id: "dashboard", label: "Dashboard", icon: Home },
        { id: "students", label: "My Students", icon: Users },
        { id: "approvals", label: "Approvals", icon: CheckCircle },
        { id: "progress", label: "Progress", icon: TrendingUp },
        { id: "feedback", label: "Feedback", icon: FileText },
    ];

    const menuItems = role === "admin" ? adminMenuItems : facultyMenuItems;

    return (
        <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col">
            <div className="p-6 border-b border-slate-700">
                <h1 className="text-xl font-bold">Placify</h1>
                <p className="text-slate-400 text-sm mt-1">
                    {role === "admin" ? "Admin Dashboard" : "Faculty Dashboard"}
                </p>
            </div>

            {/* Role Switcher */}
            <div className="px-4 py-3 border-b border-slate-700">
                <div className="flex gap-2 bg-slate-800 rounded-lg p-1">
                    <button
                        onClick={() => {
                            setRole("admin");
                            setActiveTab("dashboard");
                        }}
                        className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                            role === "admin"
                                ? "bg-slate-700 text-white"
                                : "text-slate-400 hover:text-white"
                        }`}
                    >
                        Admin
                    </button>
                    <button
                        onClick={() => {
                            setRole("faculty");
                            setActiveTab("dashboard");
                        }}
                        className={`flex-1 px-3 py-2 rounded-md text-xs font-medium transition-all ${
                            role === "faculty"
                                ? "bg-slate-700 text-white"
                                : "text-slate-400 hover:text-white"
                        }`}
                    >
                        Faculty
                    </button>
                </div>
            </div>

            <nav className="flex-1 px-3 py-4 overflow-y-auto">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                                activeTab === item.id
                                    ? "bg-slate-700 text-white"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`}
                        >
                            <Icon size={18} />
                            <span className="text-sm font-medium">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-700">
                <div className="flex items-center gap-3">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="text-sm">
                        <p className="font-semibold text-white">
                            {role === "admin" ? "Admin User" : "Dr. Faculty"}
                        </p>
                        <p className="text-slate-400 text-xs">
                            {role === "admin"
                                ? "Placement Cell"
                                : "CS Department"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Stats Card Component
type StatsCardProps = {
    title: string;
    value: string | number;
    change?: number;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon: Icon, color }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-5 border border-slate-200">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-slate-600 text-xs font-medium uppercase tracking-wide">
                        {title}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">
                        {value}
                    </h3>
                    {change && (
                        <p
                            className={`text-xs mt-2 font-medium ${
                                change > 0 ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {change > 0 ? "↑" : "↓"} {Math.abs(change)}% from
                            last month
                        </p>
                    )}
                </div>
                <div className={`p-3 rounded-lg ${color}`}>
                    <Icon size={20} className="text-white" />
                </div>
            </div>
        </div>
    );
};

// Admin Dashboard
const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">
                    Dashboard Overview
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                    Track placement activities and student progress
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                    title="Total Students"
                    value="1,248"
                    change={12}
                    icon={GraduationCap}
                    color="bg-slate-700"
                />
                <StatsCard
                    title="Active Jobs"
                    value="42"
                    change={8}
                    icon={Briefcase}
                    color="bg-emerald-600"
                />
                <StatsCard
                    title="Placed Students"
                    value="386"
                    change={15}
                    icon={Award}
                    color="bg-violet-600"
                />
                <StatsCard
                    title="Companies"
                    value="28"
                    change={-3}
                    icon={Building2}
                    color="bg-amber-600"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-semibold text-slate-900">
                            Recent Job Postings
                        </h3>
                        <button className="text-slate-600 hover:text-slate-900 text-xs font-medium">
                            View All →
                        </button>
                    </div>
                    <div className="space-y-2">
                        {mockJobs.slice(0, 4).map((job) => (
                            <div
                                key={job.id}
                                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                            >
                                <div className="flex-1">
                                    <p className="font-medium text-slate-900 text-sm">
                                        {job.position}
                                    </p>
                                    <p className="text-xs text-slate-600">
                                        {job.company}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-slate-900 text-sm">
                                        {job.stipend}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {job.applications} applied
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base font-semibold text-slate-900">
                            Department Placement Rate
                        </h3>
                        <select className="text-xs border border-slate-300 rounded px-2 py-1">
                            <option>This Month</option>
                            <option>Last 3 Months</option>
                        </select>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-slate-700 font-medium">
                                    Computer Science
                                </span>
                                <span className="font-semibold text-slate-900">
                                    85%
                                </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5">
                                <div
                                    className="bg-slate-700 h-1.5 rounded-full"
                                    style={{ width: "85%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-slate-700 font-medium">
                                    Information Tech
                                </span>
                                <span className="font-semibold text-slate-900">
                                    72%
                                </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5">
                                <div
                                    className="bg-emerald-600 h-1.5 rounded-full"
                                    style={{ width: "72%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-slate-700 font-medium">
                                    Electronics
                                </span>
                                <span className="font-semibold text-slate-900">
                                    68%
                                </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5">
                                <div
                                    className="bg-violet-600 h-1.5 rounded-full"
                                    style={{ width: "68%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-slate-700 font-medium">
                                    Mechanical
                                </span>
                                <span className="font-semibold text-slate-900">
                                    54%
                                </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-1.5">
                                <div
                                    className="bg-amber-600 h-1.5 rounded-full"
                                    style={{ width: "54%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Students Table Component
const StudentsTable = () => {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Students Management
                    </h2>
                    <p className="text-slate-600 mt-1 text-sm">
                        {mockStudents.length} students registered
                    </p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-sm">
                        <Filter size={16} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-sm">
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                ID
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Name
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Department
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Applications
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Interviews
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Offers
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                CGPA
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Status
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {mockStudents.map((student) => (
                            <tr key={student.id} className="hover:bg-slate-50">
                                <td className="px-4 py-3 text-sm font-medium text-slate-900">
                                    #{student.id}
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                                            alt={student.name}
                                            className="w-7 h-7 rounded-full"
                                        />
                                        <span className="font-medium text-slate-900 text-sm">
                                            {student.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600">
                                    {student.dept}
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-900 font-medium">
                                    {student.applications}
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-900 font-medium">
                                    {student.interviews}
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-900 font-medium">
                                    {student.offers}
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-900 font-semibold">
                                    {student.cgpa}
                                </td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                            student.status === "Placed"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-slate-100 text-slate-700"
                                        }`}
                                    >
                                        {student.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-1">
                                        <button className="p-1 hover:bg-slate-100 rounded">
                                            <Eye
                                                size={14}
                                                className="text-slate-600"
                                            />
                                        </button>
                                        <button className="p-1 hover:bg-slate-100 rounded">
                                            <Edit
                                                size={14}
                                                className="text-slate-600"
                                            />
                                        </button>
                                        <button className="p-1 hover:bg-slate-100 rounded">
                                            <MoreVertical
                                                size={14}
                                                className="text-slate-600"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="px-4 py-3 border-t border-slate-200 flex items-center justify-between">
                    <p className="text-xs text-slate-600">
                        Showing 1-5 of {mockStudents.length}
                    </p>
                    <div className="flex gap-1">
                        <button className="px-2 py-1 border border-slate-300 rounded text-xs hover:bg-slate-50">
                            Prev
                        </button>
                        <button className="px-2 py-1 bg-slate-700 text-white rounded text-xs">
                            1
                        </button>
                        <button className="px-2 py-1 border border-slate-300 rounded text-xs hover:bg-slate-50">
                            2
                        </button>
                        <button className="px-2 py-1 border border-slate-300 rounded text-xs hover:bg-slate-50">
                            3
                        </button>
                        <button className="px-2 py-1 border border-slate-300 rounded text-xs hover:bg-slate-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Jobs Management Component
const JobsManagement = () => {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Job Postings
                    </h2>
                    <p className="text-slate-600 mt-1 text-sm">
                        Manage all job and internship opportunities
                    </p>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 text-sm">
                    <Plus size={16} />
                    Add New Job
                </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {mockJobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white rounded-lg shadow-sm border border-slate-200 p-4"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex gap-3 flex-1">
                                <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                    {job.company.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold text-slate-900">
                                        {job.position}
                                    </h3>
                                    <p className="text-slate-600 mt-1 text-sm">
                                        {job.company}
                                    </p>
                                    <div className="flex items-center gap-3 mt-2 text-xs">
                                        <span className="flex items-center gap-1 text-slate-600">
                                            <Briefcase size={12} />
                                            {job.dept}
                                        </span>
                                        <span className="flex items-center gap-1 text-slate-600">
                                            <Calendar size={12} />
                                            {job.posted}
                                        </span>
                                        <span className="font-semibold text-slate-900">
                                            {job.stipend}/mo
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="text-right">
                                    <p className="text-xl font-bold text-slate-900">
                                        {job.applications}
                                    </p>
                                    <p className="text-xs text-slate-600">
                                        Applications
                                    </p>
                                </div>
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        job.status === "Active"
                                            ? "bg-emerald-100 text-emerald-700"
                                            : "bg-slate-100 text-slate-700"
                                    }`}
                                >
                                    {job.status}
                                </span>
                                <button className="p-1 hover:bg-slate-100 rounded">
                                    <MoreVertical
                                        size={16}
                                        className="text-slate-600"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Recruiters Management
const RecruitersManagement = () => {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Recruiters & Companies
                    </h2>
                    <p className="text-slate-600 mt-1 text-sm">
                        Manage employer partnerships
                    </p>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 text-sm">
                    <Plus size={16} />
                    Add Recruiter
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                ID
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Company
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Contact
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Active Jobs
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Joined
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Status
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {mockRecruiters.map((recruiter) => (
                            <tr
                                key={recruiter.id}
                                className="hover:bg-slate-50"
                            >
                                <td className="px-4 py-3 text-sm font-medium text-slate-900">
                                    #{recruiter.id}
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                                            {recruiter.company.charAt(0)}
                                        </div>
                                        <span className="font-medium text-slate-900 text-sm">
                                            {recruiter.company}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600">
                                    {recruiter.contact}
                                </td>
                                <td className="px-4 py-3 text-sm font-medium text-slate-900">
                                    {recruiter.jobs}
                                </td>
                                <td className="px-4 py-3 text-sm text-slate-600">
                                    {recruiter.joined}
                                </td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                            recruiter.status === "Verified"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-amber-100 text-amber-700"
                                        }`}
                                    >
                                        {recruiter.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-1">
                                        <button className="p-1 hover:bg-slate-100 rounded">
                                            <Eye
                                                size={14}
                                                className="text-slate-600"
                                            />
                                        </button>
                                        <button className="p-1 hover:bg-slate-100 rounded">
                                            <Edit
                                                size={14}
                                                className="text-slate-600"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Faculty Approvals Component
const FacultyApprovals = () => {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">
                    Pending Approvals
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                    {mockApprovals.filter((a) => a.status === "Pending").length}{" "}
                    items require your attention
                </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
                {mockApprovals.map((approval) => (
                    <div
                        key={approval.id}
                        className="bg-white rounded-lg shadow-sm border border-slate-200 p-4"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 flex-1">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${approval.student}`}
                                    alt={approval.student}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-slate-900 text-sm">
                                        {approval.student}
                                    </h3>
                                    <p className="text-xs text-slate-600 mt-0.5">
                                        {approval.type}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-0.5">
                                        Requested on {approval.date}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        approval.status === "Pending"
                                            ? "bg-amber-100 text-amber-700"
                                            : "bg-emerald-100 text-emerald-700"
                                    }`}
                                >
                                    {approval.status}
                                </span>
                                {approval.status === "Pending" && (
                                    <div className="flex gap-2">
                                        <button className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-xs">
                                            <CheckCircle size={14} />
                                            Approve
                                        </button>
                                        <button className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 text-xs">
                                            <XCircle size={14} />
                                            Reject
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Faculty Students Progress
const FacultyProgress = () => {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">
                    Student Progress Tracking
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                    Monitor your mentees' placement journey
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <StatsCard
                    title="My Students"
                    value="24"
                    icon={Users}
                    color="bg-slate-700"
                />
                <StatsCard
                    title="Active Applications"
                    value="156"
                    icon={FileText}
                    color="bg-emerald-600"
                />
                <StatsCard
                    title="Placed"
                    value="8"
                    icon={Award}
                    color="bg-violet-600"
                />
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
                <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Student
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Applications
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Interviews
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Status
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Last Activity
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {mockStudents.slice(0, 5).map((student) => (
                            <tr key={student.id} className="hover:bg-slate-50">
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                                            alt={student.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <div>
                                            <p className="font-medium text-slate-900 text-sm">
                                                {student.name}
                                            </p>
                                            <p className="text-xs text-slate-600">
                                                {student.id}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-full bg-slate-200 rounded-full h-1.5 max-w-[80px]">
                                            <div
                                                className="bg-slate-700 h-1.5 rounded-full"
                                                style={{
                                                    width: `${
                                                        (student.applications /
                                                            15) *
                                                        100
                                                    }%`,
                                                }}
                                            ></div>
                                        </div>
                                        <span className="text-xs font-medium text-slate-900">
                                            {student.applications}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-medium text-slate-900">
                                    {student.interviews}
                                </td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                            student.status === "Placed"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-slate-100 text-slate-700"
                                        }`}
                                    >
                                        {student.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-xs text-slate-600">
                                    2 hours ago
                                </td>
                                <td className="px-4 py-3">
                                    <button className="flex items-center gap-1 px-2 py-1 text-xs text-slate-600 hover:bg-slate-100 rounded-lg">
                                        <Eye size={12} />
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Faculty Feedback Component
const FacultyFeedback = () => {
    const [feedbackText, setFeedbackText] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");

    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">
                    Student Feedback
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                    Provide guidance and mentorship to your students
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                <h3 className="text-base font-semibold text-slate-900 mb-4">
                    Add New Feedback
                </h3>
                <div className="space-y-3">
                    <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Select Student
                        </label>
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-sm"
                        >
                            <option value="">Choose a student...</option>
                            {mockStudents.map((student) => (
                                <option key={student.id} value={student.id}>
                                    {student.name} - {student.id}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Feedback
                        </label>
                        <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            rows={3}
                            placeholder="Enter your feedback, suggestions, or recommendations..."
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 text-sm">
                        Submit Feedback
                    </button>
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="text-base font-semibold text-slate-900">
                    Recent Feedback
                </h3>
                {mockStudents.slice(0, 3).map((student) => (
                    <div
                        key={student.id}
                        className="bg-white rounded-lg shadow-sm border border-slate-200 p-4"
                    >
                        <div className="flex items-start gap-3">
                            <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                                alt={student.name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-semibold text-slate-900 text-sm">
                                        {student.name}
                                    </h4>
                                    <span className="text-xs text-slate-500">
                                        2 days ago
                                    </span>
                                </div>
                                <p className="text-slate-600 text-xs leading-relaxed">
                                    Great progress on technical skills.
                                    Recommend focusing on communication skills
                                    for upcoming interviews. Consider practicing
                                    mock interviews with the placement cell
                                    team.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Reports Component
const ReportsComponent = () => {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">
                    Reports & Analytics
                </h2>
                <p className="text-slate-600 mt-1 text-sm">
                    Generate reports for DTE and authorities
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-slate-100 rounded-lg">
                            <FileText size={20} className="text-slate-700" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">
                                Placement Report
                            </h3>
                            <p className="text-xs text-slate-600 mt-0.5">
                                Monthly summary
                            </p>
                        </div>
                    </div>
                    <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 text-xs">
                        <Download size={14} />
                        Download PDF
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-emerald-100 rounded-lg">
                            <TrendingUp
                                size={20}
                                className="text-emerald-700"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">
                                Department Wise
                            </h3>
                            <p className="text-xs text-slate-600 mt-0.5">
                                Placement statistics
                            </p>
                        </div>
                    </div>
                    <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-xs">
                        <Download size={14} />
                        Download Excel
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-violet-100 rounded-lg">
                            <Building2 size={20} className="text-violet-700" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">
                                Company Report
                            </h3>
                            <p className="text-xs text-slate-600 mt-0.5">
                                Recruiter analytics
                            </p>
                        </div>
                    </div>
                    <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 text-xs">
                        <Download size={14} />
                        Download PDF
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-amber-100 rounded-lg">
                            <GraduationCap
                                size={20}
                                className="text-amber-700"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">
                                Student Database
                            </h3>
                            <p className="text-xs text-slate-600 mt-0.5">
                                Complete records
                            </p>
                        </div>
                    </div>
                    <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 text-xs">
                        <Download size={14} />
                        Download Excel
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-red-100 rounded-lg">
                            <Award size={20} className="text-red-700" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">
                                DTE Report
                            </h3>
                            <p className="text-xs text-slate-600 mt-0.5">
                                Official submission
                            </p>
                        </div>
                    </div>
                    <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-xs">
                        <Download size={14} />
                        Download PDF
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-indigo-100 rounded-lg">
                            <BarChart3 size={20} className="text-indigo-700" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 text-sm">
                                Custom Report
                            </h3>
                            <p className="text-xs text-slate-600 mt-0.5">
                                Generate custom
                            </p>
                        </div>
                    </div>
                    <button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-xs">
                        <Plus size={14} />
                        Create Report
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5">
                <h3 className="text-base font-semibold text-slate-900 mb-4">
                    Quick Stats for Reports
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-slate-700">
                            1,248
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                            Total Students
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-emerald-600">
                            386
                        </p>
                        <p className="text-xs text-slate-600 mt-1">Placed</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-violet-600">
                            30.9%
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                            Placement Rate
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-amber-600">28</p>
                        <p className="text-xs text-slate-600 mt-1">Companies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App Component
const App = () => {
    const [role, setRole] = useState("admin");
    const [activeTab, setActiveTab] = useState("dashboard");

    const renderContent = () => {
        if (role === "admin") {
            switch (activeTab) {
                case "dashboard":
                    return <AdminDashboard />;
                case "students":
                    return <StudentsTable />;
                case "jobs":
                    return <JobsManagement />;
                case "recruiters":
                    return <RecruitersManagement />;
                case "reports":
                    return <ReportsComponent />;
                default:
                    return <AdminDashboard />;
            }
        } else {
            switch (activeTab) {
                case "dashboard":
                    return <FacultyProgress />;
                case "students":
                    return <StudentsTable />;
                case "approvals":
                    return <FacultyApprovals />;
                case "progress":
                    return <FacultyProgress />;
                case "feedback":
                    return <FacultyFeedback />;
                default:
                    return <FacultyProgress />;
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 overflow-hidden">
            <Sidebar
                role={role}
                setRole={setRole}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <main className="ml-64 h-screen overflow-y-auto">
                <div className="p-6">{renderContent()}</div>
            </main>
        </div>
    );
};

export default App;
