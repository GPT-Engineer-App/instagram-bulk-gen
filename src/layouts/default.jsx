import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link to="/" className="text-2xl font-bold">SharE CarTriP</Link>
        <nav className="space-x-4">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        &copy; 2023 SharE CarTriP. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;