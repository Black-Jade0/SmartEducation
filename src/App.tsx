import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import AdminFaculty from "./pages/AdminFaculty";
import EmployerLogin from "./pages/EmployerLogin";
import { MainLayout } from "./pages/studentPortal/MainLayout";
import StudentDashboard from "./pages/studentPortal/StudentDashboard";
import ApplicationsPage from "./pages/studentPortal/ApplicationTracker";
import OpportunitiesPage from "./pages/studentPortal/RecommendedOpportunities";
import CertificatesPage from "./pages/studentPortal/DigitalCertificate";
import ProfilePage from "./pages/studentPortal/StudentProfile";

// Student Portal Container Component
const StudentPortal = () => {
    const [activePage, setActivePage] = useState('Dashboard');

    const renderPage = () => {
        switch (activePage) {
            case 'Dashboard':
                return <StudentDashboard />;
            case 'Jobs':
                return <OpportunitiesPage />;
            case 'Applications':
                return <ApplicationsPage />;
            case 'Certificates':
                return <CertificatesPage />;
            case 'Profile':
                return <ProfilePage />;
            default:
                return <StudentDashboard />;
        }
    };

    return (
        <MainLayout activePage={activePage} onPageChange={setActivePage}>
            {renderPage()}
        </MainLayout>
    );
};

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminfaculty" element={<AdminFaculty />} />
                    <Route path="/employerlogin" element={<EmployerLogin />} />
                    <Route path="/studentdashboard" element={<StudentPortal />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
