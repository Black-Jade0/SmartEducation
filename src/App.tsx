import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminFaculty from "./pages/AdminFaculty";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminfaculty" element={<AdminFaculty />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
