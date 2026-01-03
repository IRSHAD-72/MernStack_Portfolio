import api from "../api/axios";

export default function AdminProjectCard({ project, refresh }) {
  const token = localStorage.getItem("token");

  const deleteProject = async () => {
    if (!confirm("Delete project?")) return;

    await api.delete(`/projects/${project._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    refresh();
  };

  return (
    <div className="perspective">
      <div className="card-3d bg-white dark:bg-gray-900 border rounded-xl p-5">
        <h2 className="font-bold text-lg mb-2">
          {project.title}
        </h2>

        <p className="text-sm mb-4">
          {project.description}
        </p>

        <button
          onClick={deleteProject}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
