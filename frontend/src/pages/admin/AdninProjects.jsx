import { useEffect, useState } from "react";
import api from "../../api/axios";
import AdminProjectCard from "../../component/AdminProjectCard";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const token = localStorage.getItem("token");

  const fetchProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    if (!token) {
      alert("❌ Login first");
      return;
    }
    fetchProjects();
  }, []);

  const addProject = async () => {
    if (!title || !description) {
      alert("❌ Title & description required");
      return;
    }

    try {
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
    } catch (err) {
      alert("❌ Failed to add project");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12 text-center">
        Manage Projects 🚀
      </h1>

      {/* ADD PROJECT */}
      <div className="max-w-2xl mx-auto mb-14 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Project
        </h2>

        <input
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none"
        />

        <textarea
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full p-3 mb-4 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none"
        />

        <input
          placeholder="Tech Stack (React, Node, MongoDB)"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          className="w-full p-3 mb-6 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none"
        />

        <button
          onClick={addProject}
          className="w-full bg-black dark:bg-blue-600 hover:opacity-90 text-white py-3 rounded font-semibold transition"
        >
          Add Project
        </button>
      </div>

      {/* PROJECT LIST */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
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
