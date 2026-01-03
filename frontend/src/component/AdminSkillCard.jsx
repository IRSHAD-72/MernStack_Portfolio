import { useState } from "react";
import api from "../api/axios";

export default function AdminSkillCard({ skill, refresh }) {
  const [name, setName] = useState(skill.name);
  const [level, setLevel] = useState(skill.level);

  const token = localStorage.getItem("token");

  const updateSkill = async () => {
    await api.put(
      `/skills/${skill._id}`,
      { name, level },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    refresh();
  };

  const deleteSkill = async () => {
    if (!confirm("Delete skill?")) return;

    await api.delete(`/skills/${skill._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    refresh();
  };

  return (
    <div className="perspective">
      <div className="card-3d bg-white dark:bg-gray-900 border rounded-xl p-5">
        
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 mb-2"
        />

        <input
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full border p-2 mb-4"
        />

        <div className="flex gap-2">
          <button
            onClick={updateSkill}
            className="flex-1 bg-black text-white py-1 rounded"
          >
            Update
          </button>

          <button
            onClick={deleteSkill}
            className="flex-1 bg-red-600 text-white py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
