import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Team from "./Pages/team";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./components/BlogDetails/BlogDetail";
import blogs from "./Pages/blogData";
import FAQ from "./Pages/FAQ";
import QueryForm from "./Pages/Query";

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
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail blogs={blogList} />} />
          <Route path="/query" element={<QueryForm/>}/>
          {/* <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
