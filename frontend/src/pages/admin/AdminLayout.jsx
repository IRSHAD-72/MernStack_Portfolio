import { Outlet, Link, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

      {/* Sidebar */}
      <aside className="w-64 bg-black dark:bg-gray-800 text-white p-6 flex flex-col shadow-lg">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Admin Panel ⚙️
        </h2>

        <nav className="flex-1 space-y-3">
          <Link
            to="/admin"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/projects"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Manage Projects
          </Link>

          <Link
            to="/admin/skills"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Manage Skills
          </Link>
        </nav>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-6 bg-red-600 hover:bg-red-700 py-2 rounded font-semibold transition"
        >
          Logout
        </button>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-10 bg-gray-100 dark:bg-gray-900">
        <Outlet />
      </main>

    </div>
  );
}
