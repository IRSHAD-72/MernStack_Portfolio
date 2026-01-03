import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded ${
      pathname === path
        ? "bg-black text-white"
        : "hover:bg-gray-200 dark:hover:bg-gray-700"
    }`;

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-3">
        <Link className={linkClass("/admin")} to="/admin">
          Dashboard
        </Link>

        <Link className={linkClass("/admin/skills")} to="/admin/skills">
          Skills
        </Link>

        <Link className={linkClass("/admin/projects")} to="/admin/projects">
          Projects
        </Link>

        <Link className={linkClass("/admin/messages")} to="/admin/messages">
          Messages
        </Link>
      </nav>
    </aside>
  );
}
