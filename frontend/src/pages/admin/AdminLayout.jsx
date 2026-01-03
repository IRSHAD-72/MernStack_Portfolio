import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <nav className="space-y-4">
          <Link to="/admin" className="block hover:text-gray-300">
            Dashboard
          </Link>

          <Link to="/admin/projects" className="block hover:text-gray-300">
            Manage Projects
          </Link>

          <Link to="/admin/skills" className="block hover:text-gray-300">
            Manage Skills
          </Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-10 bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
}
