import { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "../component/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/projects")
      .then((res) => setProjects(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading projects...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        My Projects 🚀
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
