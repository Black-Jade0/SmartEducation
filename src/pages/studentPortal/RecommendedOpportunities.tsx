// src/components/OpportunitiesPage.tsx
import { useState } from 'react';
import { Search, CheckCircle, X } from 'lucide-react';

// --- MOCK DATA ---
const jobData = [
  { title: 'Software Engineer Intern', company: 'Tech Solutions Inc.', location: 'Remote', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJME0w_ytz1V2yLg2hiLBP3dP0TGcVAcLZQ&s' },
  { title: 'Data Analyst Intern', company: 'Data Driven Corp.', location: 'New York, NY', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
  { title: 'UX/UI Designer Intern', company: 'Design Innovators LLC', location: 'San Francisco, CA', imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80' },
  { title: 'Marketing Intern', company: 'Global Marketing Group', location: 'Chicago, IL', imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80' },
  { title: 'Financial Analyst Intern', company: 'Finance Experts Ltd.', location: 'Boston, MA', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c1e91b389c172623e535af4/3533e2bf-504c-4f19-bae7-60253b364f9d/How+to+Negotiate+a+Financial+Analyst+Salary.jpg' },
  { title: 'Cloud DevOps Intern', company: 'InfraCloud Solutions', location: 'Austin, TX', imageUrl: 'https://k21academy.com/wp-content/uploads/2025/06/devops-engineer.webp' },
];

const filterOptions = ["Job Type", "Industry", "Location", "Experience Level", "Skills"];


// --- REUSABLE SUB-COMPONENTS ---

const SuccessDialog = ({ isOpen, onClose, jobTitle, company }: { 
  isOpen: boolean; 
  onClose: () => void; 
  jobTitle: string;
  company: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl max-w-md w-full p-6 border border-border shadow-2xl">
        {/* Header with close button */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Application Submitted!</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-border/50 transition-colors"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Success message */}
        <div className="text-center mb-6">
          <p className="text-text-primary mb-2">
            Your job application has been successfully submitted using the latest version of your resume.
          </p>
          <div className="bg-background/50 p-3 rounded-lg mt-4">
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">{jobTitle}</span> at{' '}
              <span className="font-semibold text-accent">{company}</span>
            </p>
          </div>
        </div>

        {/* Action button */}
        <button 
          onClick={onClose}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Continue Browsing
        </button>
      </div>
    </div>
  );
};

const FilterSelect = ({ label }: { label: string }) => (
    <select className="w-full rounded-lg border-border bg-card p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent appearance-none">
        <option>{label}</option>
    </select>
);

const JobCard = ({ job, onApply }: { job: typeof jobData[0]; onApply: (job: typeof jobData[0]) => void }) => (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:border-accent hover:-translate-y-1">
        <div className="flex flex-col gap-4">
            <div className="flex-1">
                <p className="text-xl font-bold text-text-primary">{job.title}</p>
                <p className="text-text-secondary">{job.company} | {job.location}</p>
            </div>
            <div className="h-40 w-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url("${job.imageUrl}")` }}></div>
            <button 
                onClick={() => onApply(job)}
                className="w-full rounded-lg bg-accent py-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent-hover"
            >
                1-Click Apply
            </button>
        </div>
    </div>
);

// --- MAIN OPPORTUNITIES PAGE COMPONENT ---
const OpportunitiesPage = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<typeof jobData[0] | null>(null);

    const handleApply = (job: typeof jobData[0]) => {
        setSelectedJob(job);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedJob(null);
    };

    return (
        <div className="flex gap-8 h-full">

            {/* Filters Sidebar */}
            <aside className="w-80 flex-shrink-0 flex flex-col gap-8">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                    <input
                        type="text"
                        placeholder="Search by title or company"
                        className="w-full rounded-lg border-border bg-card py-3 pl-10 pr-4 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-text-primary mb-4">Filters</h3>
                    <div className="space-y-4">
                        {filterOptions.map(option => <FilterSelect key={option} label={option} />)}
                    </div>
                </div>
                <button className="w-full rounded-lg bg-accent py-3 text-white font-bold hover:bg-accent/90 transition-colors duration-300">
                    Apply Filters
                </button>
            </aside>

            {/* Job Listings */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold text-text-primary mb-8">Recommended Opportunities</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {jobData.map(job => <JobCard key={job.title} job={job} onApply={handleApply} />)}
                </div>
            </div>

            {/* Success Dialog */}
            <SuccessDialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                jobTitle={selectedJob?.title || ''}
                company={selectedJob?.company || ''}
            />
        </div>
    );
};

export default OpportunitiesPage;