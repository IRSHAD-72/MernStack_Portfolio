import { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "../component/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => setProjects(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <p className="text-xl">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* Page Heading */}
      <section className="text-center mb-12 space-y-3">
        <h1 className="text-5xl font-bold">My Projects 🚀</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          A collection of real-world projects built using MERN stack, Java, and modern web technologies.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto">
        {projects.length === 0 ? (
          <p className="text-center text-gray-500">
            No projects available
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p._id} project={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
