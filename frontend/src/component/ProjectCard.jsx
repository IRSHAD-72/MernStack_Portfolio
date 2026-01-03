export default function ProjectCard({ project }) {
  return (
    <div className="perspective">
      <div className="card-3d bg-white dark:bg-gray-900 border rounded-xl p-5">
        <h2 className="text-xl font-bold mb-2">
          {project.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {project.description}
        </p>

        {project.techStack?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-sm text-blue-500 underline"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}
