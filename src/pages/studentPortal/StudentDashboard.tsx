import { useState } from 'react';
import {
  X,
  MapPin,
  Clock,
  Users,
  Star,
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface Opportunity {
  id: string;
  title: string;
  company: string;
  imageUrl: string;
  companyLogo: string;
  stipend: string;
  matchPercentage: number;
  location: string;
  duration: string;
  teamSize: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isBestMatch?: boolean;
}

// --- MOCK DATA ---
const opportunities: Opportunity[] = [
  { 
    id: '1',
    title: 'Software Engineer Intern', 
    company: 'Tech Innovators Inc.', 
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=center',
    stipend: '₹25,000/month',
    matchPercentage: 95,
    location: 'Bangalore, India',
    duration: '6 months',
    teamSize: '15-20 developers',
    description: 'Join our dynamic team to work on cutting-edge web applications using React, Node.js, and cloud technologies. You\'ll collaborate with senior developers and contribute to real-world projects.',
    requirements: ['React.js proficiency', 'JavaScript/TypeScript', 'Git version control', 'Problem-solving skills'],
    benefits: ['Mentorship program', 'Flexible working hours', 'Learning stipend', 'Pre-placement offer opportunity'],
    isBestMatch: true
  },
  { 
    id: '2',
    title: 'Data Science Intern', 
    company: 'Data Insights Co.', 
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop&crop=center',
    stipend: '₹22,000/month',
    matchPercentage: 87,
    location: 'Mumbai, India',
    duration: '4 months',
    teamSize: '8-12 data scientists',
    description: 'Work with large datasets to derive actionable insights using Python, SQL, and machine learning algorithms. Perfect for students passionate about data-driven decision making.',
    requirements: ['Python programming', 'Statistics knowledge', 'SQL proficiency', 'Machine learning basics'],
    benefits: ['Industry datasets access', 'ML certification', 'Conference attendance', 'Full-time conversion'],
    isBestMatch: false
  },
  { 
    id: '3',
    title: 'Product Management Intern', 
    company: 'Product Pioneers Ltd.', 
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
    stipend: '₹20,000/month',
    matchPercentage: 73,
    location: 'Delhi, India',
    duration: '5 months',
    teamSize: '5-8 product managers',
    description: 'Learn product strategy, user research, and feature development. Work closely with engineering and design teams to deliver user-centric products.',
    requirements: ['Analytical thinking', 'Communication skills', 'Basic design sense', 'Market research skills'],
    benefits: ['Product management course', 'Startup experience', 'Cross-functional exposure', 'Portfolio projects'],
    isBestMatch: false
  },
];

const applications = [
  { company: 'Tech Innovators Inc.', role: 'Software Engineer Intern', status: 'Applied', nextSteps: 'Interview Scheduled' },
  { company: 'Data Insights Co.', role: 'Data Science Intern', status: 'In Review', nextSteps: 'Awaiting Response' },
  { company: 'Product Pioneers Ltd.', role: 'Product Management Intern', status: 'Rejected', nextSteps: 'N/A' },
];

const certificates = [
  { title: 'Certified Python Developer', imageUrl: 'https://dridhon.com/wp-content/uploads/2022/10/Python-Certification-1024x724.jpg' },
  { title: 'Data Analysis Professional', imageUrl: 'https://campus.w3schools.com/cdn/shop/files/Frame_1351879279_1500x1003.png?v=1721214257' },
  { title: 'Project Management Fundamentals', imageUrl: 'https://cdn-ilbfgjf.nitrocdn.com/nzIgKXIgteHtWUHyirsKlqGuYxUDSdsu/assets/images/optimized/rev-5c51e54/www.etrainindia.com/wp-content/uploads/2024/05/PMI-Certificate-Standard-Sample-1.png' },
];

// --- HELPER COMPONENTS (within the same file) ---

const StatusBadge = ({ status }: { status: string }) => {
  const baseClasses = "px-2.5 py-1 text-xs font-semibold rounded-full";
  const statusClasses: { [key: string]: string } = {
    Applied: "bg-blue-500/20 text-blue-400",
    "In Review": "bg-yellow-500/20 text-yellow-400",
    Rejected: "bg-red-500/20 text-red-400",
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

const OpportunityModal = ({ opportunity, isOpen, onClose }: { 
  opportunity: Opportunity | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!isOpen || !opportunity) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 ${
        opportunity.isBestMatch 
          ? 'border-accent shadow-glow-accent animate-pulse' 
          : 'border-border'
      }`}>
        {/* Modal Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={opportunity.companyLogo} 
              alt={`${opportunity.company} logo`}
              className="w-12 h-12 rounded-lg object-cover border border-border"
            />
            <div>
              <h3 className="text-xl font-bold text-text-primary">{opportunity.title}</h3>
              <p className="text-text-secondary">{opportunity.company}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-border/50 transition-colors"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Best Match Badge */}
          {opportunity.isBestMatch && (
            <div className="mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold text-sm">Best Match</span>
            </div>
          )}

          {/* Key Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">💰</span>
                <span className="text-text-secondary text-sm">Stipend</span>
              </div>
              <p className="font-semibold text-text-primary">{opportunity.stipend}</p>
            </div>
            
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-accent" />
                <span className="text-text-secondary text-sm">AI Match</span>
              </div>
              <p className="font-semibold text-accent">{opportunity.matchPercentage}%</p>
            </div>
            
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-text-secondary" />
                <span className="text-text-secondary text-sm">Location</span>
              </div>
              <p className="font-semibold text-text-primary">{opportunity.location}</p>
            </div>
            
            <div className="bg-background/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-text-secondary" />
                <span className="text-text-secondary text-sm">Duration</span>
              </div>
              <p className="font-semibold text-text-primary">{opportunity.duration}</p>
            </div>
          </div>

          {/* Team Size */}
          <div className="bg-background/50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-text-secondary" />
              <span className="text-text-secondary text-sm">Team Size</span>
            </div>
            <p className="font-semibold text-text-primary">{opportunity.teamSize}</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="font-semibold text-text-primary mb-3">About this role</h4>
            <p className="text-text-secondary leading-relaxed">{opportunity.description}</p>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h4 className="font-semibold text-text-primary mb-3">Requirements</h4>
            <ul className="space-y-2">
              {opportunity.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2 text-text-secondary">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="font-semibold text-text-primary mb-3">Benefits</h4>
            <ul className="space-y-2">
              {opportunity.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-text-secondary">
                  <div className="w-1.5 h-1.5 bg-purple rounded-full flex-shrink-0"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <button className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const StudentDashboard = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpportunityClick = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOpportunity(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-text-primary">
          Dashboard
        </h1>
      </header>

      {/* Profile Overview Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-text-primary mb-4">Profile Overview</h2>
        <div className="bg-card p-6 rounded-lg flex items-center gap-6 border border-border">
          <img
            src="https://i.pravatar.cc/150?u=ava"
            alt="Ava Harper"
            className="size-24 rounded-full border-4 border-accent/50"
          />
          <div>
            <h3 className="text-2xl font-bold text-text-primary">Samar Joshi</h3>
            <p className="text-text-secondary">Computer Science, Senior Year</p>
          </div>
        </div>
      </section>

      {/* AI-Recommended Opportunities Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-text-primary mb-4">AI-Recommended Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((op) => (
            <div 
              key={op.id} 
              onClick={() => handleOpportunityClick(op)}
              className={`bg-card rounded-lg overflow-hidden border group cursor-pointer
                        transform hover:-translate-y-1 transition-all duration-300 ease-in-out 
                        hover:shadow-lg hover:shadow-accent/30 hover:border-accent ${
                          op.isBestMatch 
                            ? 'border-accent shadow-glow-accent' 
                            : 'border-border'
                        }`}
            >
              {/* Best Match Badge */}
              {op.isBestMatch && (
                <div className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 z-10">
                  <Star className="w-3 h-3" />
                  Best Match
                </div>
              )}
              
              <div className="relative">
                <div className="w-full h-40 bg-cover bg-center" style={{ backgroundImage: `url(${op.imageUrl})` }}></div>
                {/* Company Logo Overlay */}
                <div className="absolute bottom-3 left-3">
                  <img 
                    src={op.companyLogo} 
                    alt={`${op.company} logo`}
                    className="w-8 h-8 rounded-md object-cover border border-white/20"
                  />
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary">{op.title}</h4>
                    <p className="text-sm text-text-secondary">{op.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-accent">{op.matchPercentage}%</p>
                    <p className="text-xs text-text-secondary">AI Match</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <div className="flex items-center gap-1 text-text-secondary text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{op.location.split(',')[0]}</span>
                  </div>
                  <div className="text-sm font-semibold text-text-primary">
                    {op.stipend}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Tracker Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-text-primary mb-4">Application Tracker</h2>
        <div className="overflow-hidden border border-border rounded-lg bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-border/30 text-xs text-text-secondary uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">Company</th>
                  <th scope="col" className="px-6 py-4 font-medium">Role</th>
                  <th scope="col" className="px-6 py-4 font-medium">Status</th>
                  <th scope="col" className="px-6 py-4 font-medium">Next Steps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {applications.map((app) => (
                  <tr key={app.company} className="hover:bg-border/20 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-text-primary whitespace-nowrap">{app.company}</td>
                    <td className="px-6 py-4 text-text-secondary">{app.role}</td>
                    <td className="px-6 py-4"><StatusBadge status={app.status} /></td>
                    <td className="px-6 py-4 text-text-secondary">{app.nextSteps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Digital Certificates Section */}
      <section>
        <h2 className="text-xl font-bold text-text-primary mb-4">Digital Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.title} className="group transition-all duration-300 ease-in-out">
              <div className="aspect-[4/5] bg-card p-3 rounded-lg border border-border group-hover:border-purple-500/80 group-hover:shadow-lg group-hover:shadow-purple-500/20 transform hover:-translate-y-1 transition-all duration-300">
                <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-contain rounded-md" />
              </div>
              <h4 className="mt-3 font-medium text-sm text-center text-text-secondary group-hover:text-purple-400 transition-colors duration-300">
                {cert.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunity Details Modal */}
      <OpportunityModal 
        opportunity={selectedOpportunity}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default StudentDashboard;