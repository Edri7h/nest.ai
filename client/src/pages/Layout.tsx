// import React from 'react'

// import { Sidebar } from "lucide-react"
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom"
import { SignIn,useUser} from "@clerk/clerk-react"


const Layout = () => {

  const {user}=useUser();
   return user ? (
    <div className="flex">
    <Sidebar/>
      <main className="flex-1 p-6 bg-gray-50">
        {/* Your routed pages */}
        <Outlet/>
      </main>
    </div>
  ):(<div className="flex p-10 justify-center items-center">
  <SignIn/>
  </div>);
}

export default Layout