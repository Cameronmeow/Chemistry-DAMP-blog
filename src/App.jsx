import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Team from "./Pages/team";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./components/BlogDetails/BlogDetail";
import blogs from "./Pages/blogData";
import FAQ from "./Pages/FAQ";
import QueryForm from "./Pages/Query";
import MiscBlogs from "./Pages/MiscBlogs";
import Resources from "./Pages/Resources";
import Testimonials from "./components/SemexBlogs/Testimonials";
import Intern from "./components/Intern Blogs/intern";
// import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  const [blogList] = useState(blogs);

  return (
    <>
    {/* <h1>Hello</h1> */}
     <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} /> 
          <Route path="/courses" element={<Blogs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog/:id" element={<BlogDetail blogs={blogList} />} />
          <Route path="/contact" element={<QueryForm/>}/>
          <Route path="/misc" element={<MiscBlogs/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/intern" element={<Intern/>}/>

          {/* <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
