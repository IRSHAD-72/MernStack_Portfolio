import { useEffect, useState } from "react";
import api from "../../api/axios";
import AdminSkillCard from "../../component/AdminSkillCard";

export default function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  const token = localStorage.getItem("token");

  // FETCH SKILLS
  const fetchSkills = async () => {
    try {
      const res = await api.get("/skills");
      setSkills(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to load skills");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // ADD SKILL
  const addSkill = async () => {
    if (!name || !level) {
      alert("❌ All fields required");
      return;
    }

    try {
      await api.post(
        "/skills",
        { name, level },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName("");
      setLevel("");
      fetchSkills();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add skill");
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Manage Skills ⚙️
      </h1>

      {/* ADD SKILL */}
      <div className="max-w-lg mx-auto mb-14 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Skill
        </h2>

        <input
          type="text"
          placeholder="Skill name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
        />

        <input
          type="text"
          placeholder="Level (Beginner / Intermediate / Expert)"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full p-3 mb-6 rounded border dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
        />

        <button
          onClick={addSkill}
          className="w-full bg-black dark:bg-blue-600 text-white py-3 rounded font-semibold hover:opacity-90"
        >
          Add Skill
        </button>
      </div>

      {/* SKILL LIST */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
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
