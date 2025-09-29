// src/components/ProfilePage.tsx

import {
  UploadCloud,
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}
interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: string[];
}

// --- MOCK DATA & CONFIG ---
const universityOptions = ["Select University", "University of Technology", "State University"];
const majorOptions = ["Select Major", "Computer Science", "Mechanical Engineering", "Data Science"];

// --- REUSABLE SUB-COMPONENTS (within the same file) ---

const FormSectionHeader = ({ title }: { title: string }) => (
  <h2 className="col-span-1 md:col-span-2 text-2xl font-bold text-text-primary pb-4 border-b border-border">
    {title}
  </h2>
);

const FormInput = ({ label, id, ...props }: FormInputProps) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-2">
      {label}
    </label>
    <input
      id={id}
      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-text-primary
                 focus:ring-2 focus:ring-accent focus:border-accent transition-all"
      {...props}
    />
  </div>
);

const FormSelect = ({ label, id, options, ...props }: FormSelectProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-2">
            {label}
        </label>
        <select
            id={id}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-text-primary
                       focus:ring-2 focus:ring-accent focus:border-accent transition-all appearance-none"
            {...props}
        >
            {options.map(option => <option key={option}>{option}</option>)}
        </select>
    </div>
);


// --- MAIN PROFILE PAGE COMPONENT ---

const ProfilePage = () => {
  const profileCompletion = 60;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-text-primary mb-8">Your Profile</h1>

      {/* Profile Completion Widget */}
      <div className="mb-10 p-6 bg-card rounded-xl border border-border">
        <div className="flex justify-between items-center mb-2">
          <p className="text-base font-medium text-text-primary">Profile Completion</p>
          <p className="text-sm font-bold text-accent">{profileCompletion}%</p>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div className="bg-accent h-2 rounded-full" style={{ width: `${profileCompletion}%` }}></div>
        </div>
      </div>

      {/* Profile Form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <FormSectionHeader title="Personal Information" />
          <FormInput label="Full Name" id="fullName" type="text" placeholder="Ava Harper" />
          <FormInput label="Email" id="email" type="email" placeholder="ava.harper@example.com" />
          <FormInput label="Phone Number" id="phone" type="tel" placeholder="+1 (555) 123-4567" />

          <FormSectionHeader title="Academic Details" />
          <FormSelect label="University" id="university" options={universityOptions} />
          <FormSelect label="Major" id="major" options={majorOptions} />
          <FormInput label="GPA" id="gpa" type="text" placeholder="3.8 / 4.0" />

          <FormSectionHeader title="Skills" />
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="skills" className="block text-sm font-medium text-text-secondary mb-2">Skills</label>
            <textarea id="skills" placeholder="e.g., Python, React, Project Management" rows={4}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-text-primary
                                 focus:ring-2 focus:ring-accent focus:border-accent transition-all"></textarea>
          </div>

          <FormSectionHeader title="Resume" />
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-card/50 rounded-xl border-2 border-dashed border-border cursor-pointer hover:bg-card hover:border-accent transition-all">
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <UploadCloud className="w-8 h-8 mb-4 text-text-secondary" />
                <p className="mb-2 text-sm text-text-secondary"><span className="font-semibold text-accent">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-text-secondary">PDF, DOC, DOCX (MAX. 5MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <button type="submit" className="px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent/90 focus:outline-none 
                                           focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent 
                                           transition-all duration-300 ease-in-out transform hover:scale-105">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;