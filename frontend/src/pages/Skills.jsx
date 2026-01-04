import { useEffect, useState } from "react";
import api from "../api/axios";
import SkillCard from "../component/SkillCard";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/skills")
      .then((res) => setSkills(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <p className="text-xl">Loading skills...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* Page Heading */}
      <section className="text-center mb-12 space-y-3">
        <h1 className="text-5xl font-bold">My Skills 🧠</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Technologies and tools I use to build scalable, high-quality applications.
        </p>
      </section>

      {/* Skills Grid */}
      <section className="max-w-7xl mx-auto">
        {skills.length === 0 ? (
          <p className="text-center text-gray-500">
            No skills available
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
