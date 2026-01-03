import { useEffect, useState } from "react";
import api from "../../api/axios";
import AdminSkillCard from "../../component/AdminSkillCard";

export default function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  const token = localStorage.getItem("token");

  const fetchSkills = async () => {
    const res = await api.get("/skills");
    setSkills(res.data);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const addSkill = async () => {
    if (!name || !level) return alert("All fields required");

    await api.post(
      "/skills",
      { name, level },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    setName("");
    setLevel("");
    fetchSkills();
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Admin Skills ⚙️
      </h1>

      {/* CREATE */}
      <div className="max-w-md mx-auto mb-12 bg-gray-100 p-6 rounded">
        <input
          placeholder="Skill name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2"
        />

        <input
          placeholder="Level (Beginner / Intermediate / Expert)"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full p-2 mb-4"
        />

        <button
          onClick={addSkill}
          className="w-full bg-black text-white py-2"
        >
          Add Skill
        </button>
      </div>

      {/* READ + UPDATE + DELETE */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map(skill => (
          <AdminSkillCard
            key={skill._id}
            skill={skill}
            refresh={fetchSkills}
          />
        ))}
      </div>
    </div>
  );
}
