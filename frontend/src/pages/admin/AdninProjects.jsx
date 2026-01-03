import { useEffect, useState } from "react";
import api from "../../api/axios";
import AdminProjectCard from "../../component/AdminProjectCard";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      alert("❌ Login first");
      return;
    }
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  const addProject = async () => {
    if (!title || !description) {
      alert("❌ Title & description required");
      return;
    }

    await api.post(
      "/projects",
      {
        title,
        description,
        techStack: techStack
          ? techStack.split(",").map(t => t.trim())
          : [],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTitle("");
    setDescription("");
    setTechStack("");
    fetchProjects();
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 text-center">
        Manage Projects 🚀
      </h1>

      {/* ADD PROJECT */}
      <div className="max-w-xl mx-auto mb-12 bg-white p-6 rounded shadow">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border"
        />

        <input
          placeholder="Tech (React,Node,MongoDB)"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          className="w-full p-2 mb-4 border"
        />

        <button
          onClick={addProject}
          className="w-full bg-black text-white py-2"
        >
          Add Project
        </button>
      </div>

      {/* PROJECT LIST */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <AdminProjectCard
            key={p._id}
            project={p}
            refresh={fetchProjects}
          />
        ))}
      </div>
    </div>
  );
}
