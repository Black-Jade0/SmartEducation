
// import React, { useState } from 'react';
// import { Briefcase, Users, Calendar, Shield, Menu, X, Mail, Lock, Eye, EyeOff, Building2, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

// export default function EmployerLoginPortal() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     companyName: '',
//     contactPerson: '',
//     phone: '',
//     location: ''
//   });

//   const features = [
//     {
//       icon: <Briefcase className="w-6 h-6" />,
//       title: "Post Verified Roles",
//       description: "Create internship and placement opportunities with detailed skill requirements and competency tags"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Smart Candidate Matching",
//       description: "Access anonymized candidate pool filtered by competencies, skills, and department preferences"
//     },
//     {
//       icon: <Calendar className="w-6 h-6" />,
//       title: "Integrated Scheduling",
//       description: "Schedule and manage interviews seamlessly with calendar integration and automated notifications"
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Blockchain Verification",
//       description: "Verify student certificates and employability records through secure blockchain ledger"
//     }
//   ];

//   const benefits = [
//     "Access to pre-screened, qualified candidates",
//     "Real-time application tracking and analytics",
//     "Automated interview coordination",
//     "Secure document verification",
//     "Zero-cost posting for educational partnerships",
//     "Direct communication with placement cell"
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
//       {/* Navigation Bar */}
//       <nav className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-lg bg-opacity-95">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-3">
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
//                 <Briefcase className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                   CampusConnect
//                 </h1>
//                 <p className="text-xs text-gray-500">Employer Portal</p>
//               </div>
//             </div>

//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
//               <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Benefits</a>
//               <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
//                 Partner With Us
//               </button>
//             </div>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="md:hidden py-4 space-y-3 animate-fade-in">
//               <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Features</a>
//               <a href="#benefits" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Benefits</a>
//               <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">Contact</a>
//               <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg">
//                 Partner With Us
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-12 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Welcome to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Employer Portal</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Connect with skilled talent from premier technical institutions. Post opportunities, verify credentials, and build your future workforce.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 items-start">
//           {/* Login/Signup Section */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl">
//             <div className="flex justify-center mb-6">
//               <div className="bg-gray-100 rounded-full p-1 inline-flex">
//                 <button
//                   onClick={() => setIsLogin(true)}
//                   className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                     isLogin ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-gray-600'
//                   }`}
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => setIsLogin(false)}
//                   className={`px-6 py-2 rounded-full transition-all duration-300 ${
//                     !isLogin ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-gray-600'
//                   }`}
//                 >
//                   Register
//                 </button>
//               </div>
//             </div>

//             <div className="space-y-5">
//               {!isLogin && (
//                 <>
//                   <div className="transform transition-all duration-300">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
//                     <div className="relative">
//                       <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <input
//                         type="text"
//                         value={formData.companyName}
//                         onChange={(e) => setFormData({...formData, companyName: e.target.value})}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                         placeholder="Your Company Name"
//                       />
//                     </div>
//                   </div>

//                   <div className="transform transition-all duration-300">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
//                     <div className="relative">
//                       <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <input
//                         type="text"
//                         value={formData.contactPerson}
//                         onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                         placeholder="HR Manager Name"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="transform transition-all duration-300">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                       <div

//                       className="relative">
//                         <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                         <input
//                           type="tel"
//                           value={formData.phone}
//                           onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                           placeholder="+91 1234567890"
//                         />
//                       </div>
//                     </div>

//                     <div className="transform transition-all duration-300">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//                       <div className="relative">
//                         <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                         <input
//                           type="text"
//                           value={formData.location}
//                           onChange={(e) => setFormData({...formData, location: e.target.value})}
//                           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                           placeholder="City"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}

//               <div className="transform transition-all duration-300">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="employer@company.com"
//                   />
//                 </div>
//               </div>

//               <div className="transform transition-all duration-300">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={(e) => setFormData({...formData, password: e.target.value})}
//                     className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//               </div>

//               {isLogin && (
//                 <div className="flex items-center justify-between text-sm">
//                   <label className="flex items-center">
//                     <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                     <span className="ml-2 text-gray-600">Remember me</span>
//                   </label>
//                   <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Forgot password?</a>
//                 </div>
//               )}

//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group"
//               >
//                 {isLogin ? 'Sign In' : 'Create Account'}
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>

//               {!isLogin && (
//                 <p className="text-xs text-gray-500 text-center">
//                   By registering, you agree to our Terms of Service and Privacy Policy
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Features Overview */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h3>
//               <div className="space-y-4">
//                 {features.map((feature, index) => (
//                   <div
//                     key={index}
//                     className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2 cursor-pointer group"
//                   >
//                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg text-white group-hover:shadow-lg transition-shadow">
//                       {feature.icon}
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
//                       <p className="text-sm text-gray-600">{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white transform transition-all duration-500 hover:shadow-2xl">
//               <h3 className="text-2xl font-bold mb-4">Why Partner With Us?</h3>
//               <div className="space-y-3">
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
//                     <CheckCircle className="w-5 h-5 flex-shrink-0" />
//                     <span className="text-blue-50">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Detailed Features Section */}
//         <div id="features" className="mt-20">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
//             Comprehensive Employer Dashboard
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Briefcase className="w-8 h-8" />,
//                 title: "Post Verified Roles",
//                 points: [
//                   "Create detailed job descriptions",
//                   "Tag required competencies",
//                   "Set skill requirements",
//                   "Define stipend ranges",
//                   "Specify placement conversion potential"
//                 ]
//               },
//               {
//                 icon: <Users className="w-8 h-8" />,
//                 title: "Candidate Pool Access",
//                 points: [
//                   "View anonymized profiles",
//                   "Filter by competencies",
//                   "Department-wise filtering",
//                   "Skill-based search",
//                   "Real-time availability status"
//                 ]
//               },
//               {
//                 icon: <Calendar className="w-8 h-8" />,
//                 title: "Interview Scheduling",
//                 points: [
//                   "Integrated calendar system",
//                   "Academic timetable sync",
//                   "Automated notifications",
//                   "Multiple interview rounds",
//                   "Reschedule management"
//                 ]
//               },
//               {
//                 icon: <Shield className="w-8 h-8" />,
//                 title: "Blockchain Verification",
//                 points: [
//                   "Verify certificates instantly",
//                   "Check employability records",
//                   "Immutable credential history",
//                   "Secure document access",
//                   "Fraud prevention system"
//                 ]
//               }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
//               >
//                 <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
//                 <ul className="space-y-2">
//                   {feature.points.map((point, idx) => (
//                     <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
//                       <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div id="benefits" className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Streamlined Hiring Process
//               </h2>
//               <p className="text-lg text-gray-600 mb-8">
//                 Our platform eliminates the complexity of campus recruitment, providing you with a single, efficient interface to connect with top technical talent.
//               </p>
//               <div className="space-y-4">
//                 {[
//                   { label: "Time Saved", value: "70%", desc: "Faster hiring process" },
//                   { label: "Quality Matches", value: "95%", desc: "Skill-fit accuracy" },
//                   { label: "Cost Reduction", value: "50%", desc: "Lower recruitment costs" },
//                   { label: "Candidate Pool", value: "10K+", desc: "Verified students" }
//                 ].map((stat, index) => (
//                   <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-blue-50 transform transition-all duration-300 hover:bg-blue-100">
//                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-2xl w-20 h-20 rounded-xl flex items-center justify-center">
//                       {stat.value}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">{stat.label}</h4>
//                       <p className="text-sm text-gray-600">{stat.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-6">
//               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Real-Time Analytics</h3>
//                 <ul className="space-y-3">
//                   {[
//                     "Application tracking dashboard",
//                     "Interview completion rates",
//                     "Candidate engagement metrics",
//                     "Hiring funnel visualization",
//                     "Placement conversion analytics"
//                   ].map((item, idx) => (
//                     <li key={idx} className="flex items-center space-x-3 text-gray-700">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Compliant</h3>
//                 <ul className="space-y-3">
//                   {[
//                     "Role-based access control",
//                     "GDPR compliant data handling",
//                     "Encrypted communications",
//                     "Blockchain credential verification",
//                     "Audit trail maintenance"
//                   ].map((item, idx) => (
//                     <li key={idx} className="flex items-center space-x-3 text-gray-700">
//                       <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div id="contact" className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
//             <p className="text-xl text-blue-100 mb-8">
//               Join hundreds of employers who have streamlined their campus recruitment process
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
//                 Schedule a Demo
//               </button>
//               <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
//                 Contact Sales
//               </button>
//             </div>
//             <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
//               <div>
//                 <Mail className="w-6 h-6 mx-auto mb-2" />
//                 <p className="text-sm text-blue-100">partners@campusconnect.edu</p>
//               </div>
//               <div>
//                 <Phone className="w-6 h-6 mx-auto mb-2" />
//                 <p className="text-sm text-blue-100">+91 1800-123-4567</p>
//               </div>
//               <div>
//                 <MapPin className="w-6 h-6 mx-auto mb-2" />
//                 <p className="text-sm text-blue-100">Support: Mon-Fri 9AM-6PM</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 mt-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
//                   <Briefcase className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-white font-bold text-lg">CampusConnect</h3>
//                   <p className="text-xs text-gray-400">Employer Portal</p>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-400 mb-4">
//                 Connecting premier technical institutions with industry leaders for seamless internship and placement management.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
//                 <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
//                 <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Benefits</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
//                 <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">For Employers</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Post Opportunities</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Browse Candidates</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Schedule Interviews</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Verify Credentials</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Analytics Dashboard</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Resources</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">API Reference</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
//             <p className="text-sm text-gray-400">
//               © 2025 CampusConnect. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 sm:mt-0">
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }









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