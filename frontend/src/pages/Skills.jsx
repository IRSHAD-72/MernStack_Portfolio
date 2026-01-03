import { useEffect, useState } from "react";
import api from "../api/axios";
import SkillCard from "../component/SkillCard";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/skills")
      .then(res => setSkills(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading skills...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        My Skills 🧠
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map(skill => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
