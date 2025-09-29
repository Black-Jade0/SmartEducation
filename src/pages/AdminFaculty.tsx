import React, { useState } from "react";
import {
    Home,
    Users,
    Briefcase,
    FileText,
    TrendingUp,
    Settings,
    Bell,
    Search,
    Calendar,
    CheckCircle,
    XCircle,
    Clock,
    Download,
    Filter,
    MoreVertical,
    Eye,
    Edit,
    Trash2,
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
interface SidebarProps {
    role: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ role, activeTab, setActiveTab }) => {
    const adminMenuItems = [
        { id: "dashboard", label: "Dashboard", icon: Home },
        { id: "students", label: "Students", icon: GraduationCap },
        { id: "jobs", label: "Job Postings", icon: Briefcase },
        { id: "recruiters", label: "Recruiters", icon: Building2 },
        { id: "reports", label: "Reports", icon: FileText },
        { id: "analytics", label: "Analytics", icon: BarChart3 },
        { id: "settings", label: "Settings", icon: Settings },
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
        <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white h-screen fixed left-0 top-0 flex flex-col">
            <div className="p-6">
                <h1 className="text-2xl font-bold">eProduct</h1>
                <p className="text-blue-200 text-sm mt-1">
                    {role === "admin" ? "Admin Portal" : "Faculty Portal"}
                </p>
            </div>

            <nav className="flex-1 px-3">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                                activeTab === item.id
                                    ? "bg-white text-blue-600 shadow-lg"
                                    : "text-blue-100 hover:bg-blue-500/30"
                            }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-blue-500">
                <div className="flex gap-3 text-blue-200 text-sm">
                    <a href="#" className="hover:text-white">
                        Facebook
                    </a>
                    <a href="#" className="hover:text-white">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-white">
                        Google+
                    </a>
                </div>
            </div>
        </div>
    );
};

// Top Navbar
interface TopNavbarProps {
    role: string;
}
const TopNavbar: React.FC<TopNavbarProps> = ({ role }) => {
    return (
        <div className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <div className="relative flex-1">
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                    <input
                        type="text"
                        placeholder="Search students, jobs, companies..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                    <Bell size={20} className="text-gray-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Settings size={20} className="text-gray-600" />
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="text-sm">
                        <p className="font-semibold text-gray-800">
                            {role === "admin" ? "Admin User" : "Dr. Faculty"}
                        </p>
                        <p className="text-gray-500">
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
interface StatsCardProps {
    title: string;
    value: string | number;
    change?: number;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon: Icon, color }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-600 text-sm font-medium">{title}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2">
                        {value}
                    </h3>
                    {change !== undefined && (
                        <p
                            className={`text-sm mt-2 ${
                                change > 0 ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {change > 0 ? "↑" : "↓"} {Math.abs(change)}% from
                            last month
                        </p>
                    )}
                </div>
                <div className={`p-4 rounded-full ${color}`}>
                    <Icon size={24} className="text-white" />
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
                <h2 className="text-2xl font-bold text-gray-900">
                    Dashboard Overview
                </h2>
                <p className="text-gray-600 mt-1">
                    Welcome back! Here's what's happening with placements today.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Students"
                    value="1,248"
                    change={12}
                    icon={GraduationCap}
                    color="bg-blue-500"
                />
                <StatsCard
                    title="Active Jobs"
                    value="42"
                    change={8}
                    icon={Briefcase}
                    color="bg-green-500"
                />
                <StatsCard
                    title="Placed Students"
                    value="386"
                    change={15}
                    icon={Award}
                    color="bg-purple-500"
                />
                <StatsCard
                    title="Companies"
                    value="28"
                    change={-3}
                    icon={Building2}
                    color="bg-orange-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Recent Job Postings
                        </h3>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View All
                        </button>
                    </div>
                    <div className="space-y-3">
                        {mockJobs.slice(0, 4).map((job) => (
                            <div
                                key={job.id}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900">
                                        {job.position}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {job.company}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-blue-600">
                                        {job.stipend}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {job.applications} applied
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Placement Statistics
                        </h3>
                        <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                            <option>This Month</option>
                            <option>Last 3 Months</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">
                                    Computer Science
                                </span>
                                <span className="font-semibold">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: "85%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">
                                    Information Tech
                                </span>
                                <span className="font-semibold">72%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-green-600 h-2 rounded-full"
                                    style={{ width: "72%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">
                                    Electronics
                                </span>
                                <span className="font-semibold">68%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-purple-600 h-2 rounded-full"
                                    style={{ width: "68%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">
                                    Mechanical
                                </span>
                                <span className="font-semibold">54%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-orange-600 h-2 rounded-full"
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
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Students Management
                    </h2>
                    <p className="text-gray-600 mt-1">
                        {mockStudents.length} students registered
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Filter size={18} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Download size={18} />
                        Export
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    ID
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Name
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Department
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Applications
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Interviews
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Offers
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    CGPA
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {mockStudents.map((student, index) => (
                                <tr
                                    key={student.id}
                                    className={
                                        index % 2 === 1
                                            ? "bg-blue-50/30"
                                            : "bg-white"
                                    }
                                >
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        #{student.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                                                alt={student.name}
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <span className="font-medium text-gray-900">
                                                {student.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {student.dept}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                        {student.applications}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                        {student.interviews}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                        {student.offers}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                                        {student.cgpa}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                                                student.status === "Placed"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-blue-100 text-blue-700"
                                            }`}
                                        >
                                            {student.status === "Placed" ? (
                                                <CheckCircle size={12} />
                                            ) : (
                                                <Clock size={12} />
                                            )}
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <Eye
                                                    size={16}
                                                    className="text-gray-600"
                                                />
                                            </button>
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <Edit
                                                    size={16}
                                                    className="text-gray-600"
                                                />
                                            </button>
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <MoreVertical
                                                    size={16}
                                                    className="text-gray-600"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                        Showing 1-5 of {mockStudents.length}
                    </p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                            Previous
                        </button>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded">
                            1
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                            2
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                            3
                        </button>
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
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
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Job Postings
                    </h2>
                    <p className="text-gray-600 mt-1">
                        Manage all job and internship opportunities
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={18} />
                    Add New Job
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {mockJobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4 flex-1">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                                    {job.company.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {job.position}
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        {job.company}
                                    </p>
                                    <div className="flex items-center gap-4 mt-3 text-sm">
                                        <span className="flex items-center gap-1 text-gray-600">
                                            <Briefcase size={14} />
                                            {job.dept}
                                        </span>
                                        <span className="flex items-center gap-1 text-gray-600">
                                            <Calendar size={14} />
                                            Posted: {job.posted}
                                        </span>
                                        <span className="font-semibold text-blue-600">
                                            {job.stipend}/month
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-gray-900">
                                        {job.applications}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Applications
                                    </p>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        job.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {job.status}
                                </span>
                                <button className="p-2 hover:bg-gray-100 rounded">
                                    <MoreVertical
                                        size={18}
                                        className="text-gray-600"
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
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Recruiters & Companies
                    </h2>
                    <p className="text-gray-600 mt-1">
                        Manage employer partnerships
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={18} />
                    Add Recruiter
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                ID
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Company
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Contact
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Active Jobs
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Joined
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Status
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {mockRecruiters.map((recruiter) => (
                            <tr key={recruiter.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                    #{recruiter.id}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                                            {recruiter.company.charAt(0)}
                                        </div>
                                        <span className="font-medium text-gray-900">
                                            {recruiter.company}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {recruiter.contact}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                    {recruiter.jobs}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {recruiter.joined}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                                            recruiter.status === "Verified"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}
                                    >
                                        {recruiter.status === "Verified" ? (
                                            <CheckCircle size={12} />
                                        ) : (
                                            <Clock size={12} />
                                        )}
                                        {recruiter.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-1 hover:bg-gray-100 rounded">
                                            <Eye
                                                size={16}
                                                className="text-gray-600"
                                            />
                                        </button>
                                        <button className="p-1 hover:bg-gray-100 rounded">
                                            <Edit
                                                size={16}
                                                className="text-gray-600"
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
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Pending Approvals
                </h2>
                <p className="text-gray-600 mt-1">
                    {mockApprovals.filter((a) => a.status === "Pending").length}{" "}
                    items require your attention
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {mockApprovals.map((approval) => (
                    <div
                        key={approval.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                                <img
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${approval.student}`}
                                    alt={approval.student}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900">
                                        {approval.student}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {approval.type}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Requested on {approval.date}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        approval.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-green-100 text-green-700"
                                    }`}
                                >
                                    {approval.status}
                                </span>
                                {approval.status === "Pending" && (
                                    <div className="flex gap-2">
                                        <button className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                                            <CheckCircle size={16} />
                                            Approve
                                        </button>
                                        <button className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                                            <XCircle size={16} />
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
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Student Progress Tracking
                </h2>
                <p className="text-gray-600 mt-1">
                    Monitor your mentees' placement journey
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <StatsCard
                    title="My Students"
                    value="24"
                    icon={Users}
                    color="bg-blue-500"
                />
                <StatsCard
                    title="Active Applications"
                    value="156"
                    icon={FileText}
                    color="bg-green-500"
                />
                <StatsCard
                    title="Placed"
                    value="8"
                    icon={Award}
                    color="bg-purple-500"
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Student
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Applications
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Interviews
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Last Activity
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {mockStudents.slice(0, 5).map((student) => (
                                <tr
                                    key={student.id}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                                                alt={student.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {student.name}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {student.id}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{
                                                        width: `${
                                                            (student.applications /
                                                                15) *
                                                            100
                                                        }%`,
                                                    }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-900">
                                                {student.applications}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {student.interviews}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                                                student.status === "Placed"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-blue-100 text-blue-700"
                                            }`}
                                        >
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        2 hours ago
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                                            <Eye size={14} />
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Faculty Feedback Component
const FacultyFeedback = () => {
    const [feedbackText, setFeedbackText] = useState("");
    const [selectedStudent, setSelectedStudent] = useState("");

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Student Feedback
                </h2>
                <p className="text-gray-600 mt-1">
                    Provide guidance and mentorship to your students
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Add New Feedback
                </h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Student
                        </label>
                        <select
                            value={selectedStudent}
                            onChange={(e) => setSelectedStudent(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Feedback
                        </label>
                        <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            rows={4}
                            placeholder="Enter your feedback, suggestions, or recommendations..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Submit Feedback
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Recent Feedback
                </h3>
                {mockStudents.slice(0, 3).map((student) => (
                    <div
                        key={student.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                    >
                        <div className="flex items-start gap-4">
                            <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`}
                                alt={student.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-gray-900">
                                        {student.name}
                                    </h4>
                                    <span className="text-sm text-gray-500">
                                        2 days ago
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">
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
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Reports & Analytics
                </h2>
                <p className="text-gray-600 mt-1">
                    Generate reports for DTE and authorities
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <FileText size={24} className="text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Placement Report
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Monthly summary
                            </p>
                        </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        <Download size={16} />
                        Download PDF
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <TrendingUp size={24} className="text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Department Wise
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Placement statistics
                            </p>
                        </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        <Download size={16} />
                        Download Excel
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                            <Building2 size={24} className="text-purple-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Company Report
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Recruiter analytics
                            </p>
                        </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        <Download size={16} />
                        Download PDF
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-100 rounded-lg">
                            <GraduationCap
                                size={24}
                                className="text-orange-600"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Student Database
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Complete records
                            </p>
                        </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                        <Download size={16} />
                        Download Excel
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-100 rounded-lg">
                            <Award size={24} className="text-red-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                DTE Report
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Official submission
                            </p>
                        </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                        <Download size={16} />
                        Download PDF
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-100 rounded-lg">
                            <BarChart3 size={24} className="text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">
                                Custom Report
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Generate custom
                            </p>
                        </div>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        <Plus size={16} />
                        Create Report
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Stats for Reports
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">
                            1,248
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            Total Students
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-600">386</p>
                        <p className="text-sm text-gray-600 mt-1">Placed</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-purple-600">
                            30.9%
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            Placement Rate
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-orange-600">28</p>
                        <p className="text-sm text-gray-600 mt-1">Companies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main App Component
const AdminFaculty = () => {
    const [role, setRole] = useState("admin"); // 'admin' or 'faculty'
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
        <div className="min-h-screen bg-gray-50">
            {/* Role Switcher - For demo purposes */}
            <div className="fixed top-4 right-4 z-50">
                <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
                    <button
                        onClick={() => {
                            setRole("admin");
                            setActiveTab("dashboard");
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            role === "admin"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        Admin View
                    </button>
                    <button
                        onClick={() => {
                            setRole("faculty");
                            setActiveTab("dashboard");
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            role === "faculty"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        Faculty View
                    </button>
                </div>
            </div>

            <Sidebar
                role={role}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <TopNavbar   role={role} />

            <main className="ml-64 pt-16">
                <div className="p-8">{renderContent()}</div>
            </main>
        </div>
    );
};

export default AdminFaculty;


