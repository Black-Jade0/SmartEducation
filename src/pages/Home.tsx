import {
    ArrowRight,
    CheckCircle,
    Zap,
    Shield,
    TrendingUp,
    Users,
    Briefcase,
    Award,
    Globe,
    Clock,
    BarChart3,
    Lock,
} from "lucide-react";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">Placify</div>
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#problem"
                            className="text-slate-300 hover:text-white font-medium transition-colors"
                        >
                            Problem
                        </a>
                        <a
                            href="#solution"
                            className="text-slate-300 hover:text-white font-medium transition-colors"
                        >
                            Solution
                        </a>
                        <a
                            href="#tech"
                            className="text-slate-300 hover:text-white font-medium transition-colors"
                        >
                            Technology
                        </a>
                        <a
                            href="#impact"
                            className="text-slate-300 hover:text-white font-medium transition-colors"
                        >
                            Impact
                        </a>
                    </div>
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 hover:shadow-lg transition-all">
                        Get Started
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                        Transform Campus Placements
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
                        An AI-powered, blockchain-verified platform that brings
                        transparency, automation, and trust to the entire
                        placement ecosystem
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 hover:shadow-xl transition-all flex items-center justify-center gap-2">
                            Explore Platform <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-slate-700 border-2 border-slate-600 text-white rounded-lg font-semibold text-lg hover:bg-slate-600 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section id="problem" className="bg-slate-100 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
                        The Placement Chaos
                    </h2>
                    <p className="text-center text-slate-600 text-lg mb-16">
                        The current campus hiring process is fragmented, manual,
                        and inefficient
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "📱",
                                title: "Lost in WhatsApp",
                                desc: "Opportunities buried in chat groups, students miss critical deadlines",
                            },
                            {
                                icon: "📧",
                                title: "Email Overload",
                                desc: "Resumes scattered across inboxes, no centralized tracking",
                            },
                            {
                                icon: "⏰",
                                title: "Delayed Approvals",
                                desc: "Mentor approvals take days, opportunities slip away",
                            },
                            {
                                icon: "📊",
                                title: "Spreadsheet Hell",
                                desc: "Placement cells manually stitch data instead of strategic work",
                            },
                            {
                                icon: "🔍",
                                title: "Zero Visibility",
                                desc: "No real-time insights into student progress or outcomes",
                            },
                            {
                                icon: "❌",
                                title: "Fake Certificates",
                                desc: "Recruiters can't verify credentials, trust issues persist",
                            },
                        ].map((problem, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl hover:shadow-2xl hover:scale-105 transition-all border border-slate-200"
                            >
                                <div className="text-5xl mb-4">
                                    {problem.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    {problem.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {problem.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="solution" className="bg-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
                        Our Solution: A Unified Digital Platform
                    </h2>
                    <p className="text-center text-slate-600 text-lg mb-16">
                        Streamlining every step from application to placement
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: (
                                    <Users className="text-white" size={28} />
                                ),
                                title: "For Students",
                                desc: "Unified digital profile with resume, skills & certificates. AI-powered role recommendations, one-click applications, real-time tracking of interviews and offers, blockchain-verified certificates.",
                                color: "bg-slate-700",
                            },
                            {
                                icon: (
                                    <Briefcase
                                        className="text-white"
                                        size={28}
                                    />
                                ),
                                title: "For Employers",
                                desc: "Post openings with skill filters, access curated candidate pools, verify certificates instantly via blockchain, manage interviews through integrated calendars.",
                                color: "bg-emerald-600",
                            },
                            {
                                icon: (
                                    <Award className="text-white" size={28} />
                                ),
                                title: "For Faculty",
                                desc: "Automated approval workflows, monitor student progress in real-time, provide structured feedback, save time on administrative tasks.",
                                color: "bg-violet-600",
                            },
                            {
                                icon: (
                                    <BarChart3
                                        className="text-white"
                                        size={28}
                                    />
                                ),
                                title: "For Placement Cell",
                                desc: "Post verified job openings, manage recruiter onboarding, access real-time dashboards, generate DTE reports with one click, track unplaced students automatically.",
                                color: "bg-orange-600",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all border border-slate-200"
                            >
                                <div
                                    className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section id="tech" className="bg-slate-100 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
                        Powered by Advanced Technology
                    </h2>
                    <p className="text-center text-slate-600 text-lg mb-16">
                        Innovation at every layer of the stack
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Zap size={24} />,
                                title: "AI/ML Engine",
                                desc: "Smart role recommendations based on skills",
                                color: "from-slate-700 to-slate-900",
                            },
                            {
                                icon: <Globe size={24} />,
                                title: "Multi-Agent System",
                                desc: "Orchestrates scraping, approvals, and matching",
                                color: "from-emerald-600 to-emerald-700",
                            },
                            {
                                icon: <Lock size={24} />,
                                title: "Blockchain",
                                desc: "Tamper-proof certificates and credentials",
                                color: "from-violet-600 to-violet-700",
                            },
                            {
                                icon: <Clock size={24} />,
                                title: "Smart Scheduling",
                                desc: "Timetable-aware interview booking",
                                color: "from-orange-600 to-orange-700",
                            },
                            {
                                icon: <TrendingUp size={24} />,
                                title: "Real-time Analytics",
                                desc: "Live dashboards with predictive insights",
                                color: "from-blue-600 to-blue-700",
                            },
                            {
                                icon: <Shield size={24} />,
                                title: "On-premise Ready",
                                desc: "Low-cost deployment for institutions",
                                color: "from-purple-600 to-purple-700",
                            },
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${tech.color} p-6 rounded-xl text-white hover:scale-105 transition-all shadow-lg`}
                            >
                                <div className="mb-4">{tech.icon}</div>
                                <h4 className="text-xl font-semibold mb-2">
                                    {tech.title}
                                </h4>
                                <p className="text-white/90 text-sm">
                                    {tech.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section id="impact" className="bg-slate-800 py-20 px-4 text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Measurable Impact
                    </h2>
                    <p className="text-center text-slate-300 text-lg mb-16">
                        Transforming the placement ecosystem
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            {
                                number: "80%",
                                label: "Faster Approvals",
                                color: "from-slate-700 to-slate-600",
                            },
                            {
                                number: "95%",
                                label: "Reduced Manual Work",
                                color: "from-emerald-600 to-emerald-500",
                            },
                            {
                                number: "100%",
                                label: "Certificate Verification",
                                color: "from-violet-600 to-violet-500",
                            },
                            {
                                number: "3x",
                                label: "Placement Efficiency",
                                color: "from-orange-600 to-orange-500",
                            },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${stat.color} p-8 rounded-xl text-center hover:scale-105 transition-all shadow-xl`}
                            >
                                <div className="text-5xl font-bold mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-lg opacity-90">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-8">
                            Key Benefits
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Students",
                                    benefit:
                                        "Higher conversion rates, instant tracking, clear career pathways",
                                },
                                {
                                    title: "Faculty",
                                    benefit:
                                        "Automated workflows, real-time monitoring, more time for mentorship",
                                },
                                {
                                    title: "Placement Cell",
                                    benefit:
                                        "Live dashboards, simplified reporting, predictive analytics",
                                },
                                {
                                    title: "Institutions",
                                    benefit:
                                        "Cost-efficient, scalable, government-ready solution",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-700/50 backdrop-blur-lg p-6 rounded-xl border border-slate-600"
                                >
                                    <div className="flex items-start gap-3">
                                        <CheckCircle
                                            size={24}
                                            className="flex-shrink-0 mt-1 text-emerald-400"
                                        />
                                        <div>
                                            <strong className="block mb-1">
                                                {item.title}:
                                            </strong>
                                            <span className="text-slate-300">
                                                {item.benefit}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-slate-100 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Ready to Transform Your Campus Placements?
                    </h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Join the future of transparent, automated, and
                        trust-driven placement management
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 hover:shadow-xl transition-all">
                            Request Demo
                        </button>
                        <button className="px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold text-lg hover:bg-slate-600 transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-16 px-4 border-t border-slate-700">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Placify</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Transforming campus placements through AI,
                                blockchain, and automation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Quick Links
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="#problem"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    The Problem
                                </a>
                                <a
                                    href="#solution"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Our Solution
                                </a>
                                <a
                                    href="#tech"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Technology
                                </a>
                                <a
                                    href="#impact"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Impact
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Platform
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="#"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Student Portal
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Faculty Dashboard
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Admin Panel
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Employer Access
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">
                                Contact
                            </h3>
                            <div className="space-y-2">
                                <a
                                    href="mailto:hello@placify.edu"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    hello@placify.edu
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Documentation
                                </a>
                                <a
                                    href="#"
                                    className="block text-slate-400 hover:text-white transition-colors"
                                >
                                    Support
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                        <p>
                            &copy; 2025 Placify. Built with purpose for
                            educational institutions.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
