// import React from "react";

import {UserButton,useClerk,useUser} from "@clerk/clerk-react"
import { Button } from "./ui/button";



const Home = () => {

    const {user}=useUser();
    const {openSignIn}=useClerk();
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Nest<span className="text-purple-600">.ai</span></h1>
       {
        user? <div className="scale-100">
  <UserButton />
</div>:(
            
         <Button onClick={()=>openSignIn()}>Get started</Button>
        
        )
       }
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Create amazing content <br />
            with <span className="text-purple-600">AI tools</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Transform your content creation with our suite of premium AI tools.
            Write articles, generate images, and enhance your workflow.
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition">
              Start creating now
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Watch demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border border-white" src="https://i.pravatar.cc/100?img=1" />
              <img className="w-8 h-8 rounded-full border border-white" src="https://i.pravatar.cc/100?img=2" />
              <img className="w-8 h-8 rounded-full border border-white" src="https://i.pravatar.cc/100?img=3" />
              <img className="w-8 h-8 rounded-full border border-white" src="https://i.pravatar.cc/100?img=4" />
            </div>
            <span>Trusted by 10k+ people</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
