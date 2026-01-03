export default function SkillCard({ skill }) {
  return (
    <div className="perspective">
      <div className="card-3d bg-white dark:bg-gray-900 border rounded-xl p-5 text-center">
        <h2 className="text-xl font-bold mb-1">
          {skill.name}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {skill.level}
        </p>
      </div>
    </div>
  );
}
