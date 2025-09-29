import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminFaculty from "./pages/AdminFaculty";
import  EmployerLogin  from "./pages/EmployerLogin";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminfaculty" element={<AdminFaculty />} />
                    <Route path="/employerlogin" element={<EmployerLogin />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
