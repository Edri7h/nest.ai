import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Layout from "./pages/Layout"
import Article from "./pages/Article"
import Blogs from "./pages/Blogs"
import GenImages from "./pages/GenImages"
import RemoveBackground from "./pages/RemoveBackground"
import RemoveObject from "./pages/RemoveObject"
import Resume from "./pages/Resume"
import Community from "./pages/Community"
import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"


function App() {
  // const [count, setCount] = useState(0)
   const {getToken}=useAuth();

    useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      console.log("Token:", token);
    };

    fetchToken();
  }, [getToken]);

  return (
   
    
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ai" element={<Layout/>}>
          <Route index  element={<Dashboard/>}/>
          <Route path="write-article" element={<Article/>}/>
          <Route path="write-blogs" element={<Blogs/>}/>
          <Route path="generate-images" element={<GenImages/>}/>
          <Route path="remove-background" element={<RemoveBackground/>}/>
          <Route path="remove-object" element={<RemoveObject/>}/>
          <Route path="resume" element={<Resume/>}/>
          <Route path="community" element={<Community/>}/>
      
      </Route>
      </Routes>
    </>
  )
}

export default App
