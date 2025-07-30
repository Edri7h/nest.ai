import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PenLine,
  ImagePlus,
  Eraser,
  Scissors,
  FileText,
  Users,
  LogOut,
  Hash,
} from "lucide-react";
import { useUser, useClerk, Protect } from "@clerk/clerk-react";
// import { useEffect } from "react";

const navItems = [
  { label: "Dashboard", icon: <LayoutDashboard />, to: "/ai"  },
  { label: "Write Article", icon: <PenLine />, to: "write-article" },
  { label: "Blog Titles", icon: <Hash />, to: "write-blogs" },
  { label: "Generate Images", icon: <ImagePlus />, to: "generate-images" },
  { label: "Remove Background", icon: <Eraser />, to: "remove-background" },
  { label: "Remove Object", icon: <Scissors />, to: "remove-object" },
  { label: "Review Resume", icon: <FileText />, to: "resume" },
  { label: "Community", icon: <Users />, to: "community" },
];

const Sidebar = () => {

  const { user } = useUser();
  const { signOut,openUserProfile, } = useClerk();
   

  // if(!user) return (<openUserProfile/>)
  return (
    <aside className="h-screen w-64 border-r border-gray-200 flex flex-col justify-between bg-white">
      <div className="p-6">
        {/* User Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={user?.imageUrl}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mb-2"
          />
          <span className="font-semibold text-center">{user?.fullName}</span>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end ={item.to === "/ai"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="w-5 h-5">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div onClick={()=>openUserProfile()} className="flex items-center gap-2 cursor-pointer">
            <img
              src={user?.imageUrl}
              
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium">{user?.fullName}</p>
              <p className="text-gray-500 text-xs"><Protect plan='premium' fallback='free'>Premium</Protect></p>

            </div>
          </div>
          <button 
            onClick={() => signOut()}
            className="p-1 cursor-pointer text-gray-500 hover:text-black transition"
            aria-label="Sign Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
