import React, { useState } from 'react';
import { Briefcase, Users, Calendar, Shield, Menu, X, Mail, Lock, Eye, EyeOff, Building2, Phone, MapPin, ArrowRight, CheckCircle, Zap, Target, TrendingUp, Star } from 'lucide-react';

export default function EmployerLoginPortal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    companyName: '',
    contactPerson: '',
    phone: '',
    location: ''
  });

  const features = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Post Verified Roles",
      description: "Create opportunities with detailed skill requirements and competency tags"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Smart Matching",
      description: "Access anonymized candidates filtered by skills and departments"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Interview Scheduling",
      description: "Seamless calendar integration with automated notifications"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Blockchain Verification",
      description: "Verify certificates and credentials through secure ledger"
    }
  ];

  const stats = [
    { icon: <Zap className="w-8 h-8" />, value: "70%", label: "Faster Hiring" },
    { icon: <Target className="w-8 h-8" />, value: "95%", label: "Match Accuracy" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "10K+", label: "Verified Students" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CampusConnect
                </h1>
                <p className="text-xs text-gray-600">Employer Portal</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3 animate-fade-in">
              <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Features</a>
              <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Employer Portal</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Connect with skilled talent from premier technical institutions
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Login/Signup Section */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-8 border border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 rounded-full p-1 inline-flex">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-medium ${
                    isLogin ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-medium ${
                    !isLogin ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Register
                </button>
              </div>
            </div>

            <div className="space-y-4 md:space-y-5">
              {!isLogin && (
                <>
                  <div className="transform transition-all duration-300">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div className="transform transition-all duration-300">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                        placeholder="HR Manager Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="transform transition-all duration-300">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>

                    <div className="transform transition-all duration-300">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                          placeholder="City"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="transform transition-all duration-300">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="employer@company.com"
                  />
                </div>
              </div>

              <div className="transform transition-all duration-300">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm space-y-2 sm:space-y-0">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 bg-white text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Forgot password?</a>
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {!isLogin && (
                <p className="text-xs text-gray-600 text-center">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>
              )}
            </div>
          </div>

          {/* Features Overview */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 text-blue-600 mr-2" />
                Platform Features
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2 cursor-pointer group border border-transparent hover:border-blue-200"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl text-white group-hover:shadow-lg transition-shadow flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Why Partner With Us?</h3>
              <div className="space-y-3">
                {[
                  "Access pre-screened qualified candidates",
                  "Real-time tracking and analytics",
                  "Automated interview coordination",
                  "Secure document verification",
                  "Zero-cost educational partnerships",
                  "Direct placement cell communication"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-50">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Features Section */}
        <div id="features" className="mt-12 md:mt-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
            Comprehensive Employer Dashboard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Post Verified Roles",
                points: [
                  "Detailed job descriptions",
                  "Tag competencies",
                  "Set skill requirements",
                  "Define stipend ranges"
                ]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Candidate Access",
                points: [
                  "View anonymized profiles",
                  "Filter by competencies",
                  "Department-wise search",
                  "Real-time availability"
                ]
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Interview Scheduling",
                points: [
                  "Integrated calendar",
                  "Academic timetable sync",
                  "Automated notifications",
                  "Reschedule management"
                ]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Blockchain Verification",
                points: [
                  "Verify certificates instantly",
                  "Check employability records",
                  "Immutable credential history",
                  "Fraud prevention"
                ]
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group border border-gray-200 hover:border-blue-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-12 md:mt-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-xl p-6 md:p-12 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Join hundreds of employers who have streamlined their campus recruitment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <Mail className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm text-blue-100">partners@campusconnect.edu</p>
              </div>
              <div>
                <Phone className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm text-blue-100">+91 1800-123-4567</p>
              </div>
              <div>
                <MapPin className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm text-blue-100">Support: 24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}