import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold">Nest<span className="text-purple-600">.ai</span></h1>
          <p className="text-sm text-gray-600 mb-4 max-w-xs">
            AI tools to write, design, and build faster.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-800 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-800 transition">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links: Product */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Product</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition">AI Writer</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Image Tools</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Resume Builder</a></li>
          </ul>
        </div>

        {/* Links: Company */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
          </ul>
        </div>

        {/* Links: Support */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nest.ai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
