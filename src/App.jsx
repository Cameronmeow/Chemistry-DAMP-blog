import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Team from "./Pages/team";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./components/BlogDetails/BlogDetail";
import blogs from "./Pages/blogData";
import FAQ from "./Pages/FAQ";
import Gallery from "./Pages/Gallery";
import QueryForm from "./Pages/Query";
import testimonialsData from "./components/SemexBlogs/testimonialsData";
import MiscBlogs from "./Pages/MiscBlogs";
import Resources from "./Pages/Resources";
import Opportunities from "./components/Opportunities/Opportunities";
import TestimonialDetails from "./components/SemexBlogs/TestimonialDetails";
import LoginSignupForm from "./components/LoginSignUP/LoginSignupForm";
import Testimonials from "./components/SemexBlogs/Testimonials";
import Intern from "./components/Intern Blogs/intern";
import CourseReviews from "./Admin/CourseReviews/CourseReviews";
import PHD from "./components/Opportunities/phdChem";
import ESHU from "./components/Opportunities/Eshu";
import CourseTracks from "./Pages/CourseTracks";
import Vaibhavi from "./components/Intern Blogs/Vaibhavi/Vaibhavi";
import Priyaank from "./components/Intern Blogs/Priyaank/Priyaank";
import Shounak from "./components/Intern Blogs/Shounak/Shounak";
// import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  const [blogList] = useState(blogs);
  const [testimonialList] = useState(testimonialsData)
  return (
    <>
    {/* <h1>Hello</h1> */}
     <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/*" element={<FAQ/>}/> */}
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} /> 
          <Route path="/tracks" element={<CourseTracks />} /> 
          <Route path="/opportunities" element={<Opportunities />} /> 
          <Route path="/opportunities/phd" element={<PHD />} /> 
          <Route path="/opportunities/eshu" element={<ESHU />} /> 
          <Route path="/courses" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/admin" element={<CourseReviews/>}/>
           <Route path="/blog/:id" element={<BlogDetail blogs={blogList} />} />
           <Route path="/semex/:id" element={<TestimonialDetails />} />
          <Route path="/contact" element={<QueryForm/>}/>
          <Route path="/misc" element={<MiscBlogs/>}/>
          <Route path="/semex" element={<Testimonials/>}/>
          <Route path="/intern" element={<Intern/>}/>
          <Route path="/intern/1" element={<Priyaank/>}/>
          <Route path="/intern/2" element={<Shounak/>}/>
          <Route path="/intern/3" element={<Vaibhavi/>}/>
          {/* <Route path="/login" element={<LoginSignupForm/>}/> */}

          {/* <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
