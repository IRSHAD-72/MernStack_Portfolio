import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminProjects from "./pages/admin/AdninProjects";
import AdminSkills from "./pages/admin/AdminSkill";

import AdminRoute from "./routes/AdminRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<h2>Welcome Admin 👋</h2>} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="skills" element={<AdminSkills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
