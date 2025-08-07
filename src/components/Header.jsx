import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Karuppusamy</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/skills" className="hover:text-blue-500">Skills</Link>
        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        <Link to="/testimonials" className="hover:text-blue-500">Testimonials</Link>
        <Link to="/resume" className="hover:text-blue-500">Resume</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </nav>
    </header>
  );
}
