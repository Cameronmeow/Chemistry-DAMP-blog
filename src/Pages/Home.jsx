import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Blog from "../components/blog/blog";
import SideBar from "../components/sidebar/sidebar";
import Announcements from "../components/Annoucements/Announcements";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import "./home.css";

function Home() {
  const [count, setCount] = useState(0);

  const recentUploads = [
    {
      title: "New Movie Trailer",
      image: `${pic1}`,
      description: "Check out the latest trailer for the upcoming movie!",
    },
    {
      title: "Blog Post on React",
      image: `${pic2}`,
      description:
        "Read about the latest tips and tricks in React development.",
    },
    {
      title: "Music Album Release",
      image: `${pic3}`,
      description:
        "Listen to the newly released album by your favorite artist.",
    },
  ];

  const announcements = [
    {
      title: "Updated Curriculum",
      date: "August 5, 2024",
      description:
        "We have released new features in our application. Check them out now!",
    },
    {
      title: "Semex Blogs",
      date: "August 10, 2024",
      description:
        "Scheduled maintenance will occur from 12:00 AM to 4:00 AM. The application may be unavailable during this time.",
    },
    {
      title: "Community Meetup",
      date: "August 15, 2024",
      description:
        "Join us for a community meetup to discuss upcoming events and features.",
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <div className="appContainer">
        <div className="appblogs">
          <div className="approw">
            <Blog
              name="John Doe"
              photo={pic1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa. In consequat metus et tristique finibus. Pellentesque volutpat viverra ligula, "
            />
            <Blog
              name="John Doe"
              photo={pic2}
              description="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit "
            />
            <Blog
              name="John Doe"
              photo={pic3}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa."
            />
          </div>
          <div className="approw">
            <Blog
              name="John Doe"
              photo={pic1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa. In consequat metus et tristique finibus. Pellentesque volutpat viverra ligula, "
            />
            <Blog
              name="John Doe"
              photo={pic2}
              description="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit "
            />
            <Blog
              name="John Doe"
              photo={pic3}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa."
            />
          </div>
          <div className="approw">
            <Blog
              name="John Doe"
              photo={pic1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa. In consequat metus et tristique finibus. Pellentesque volutpat viverra ligula, "
            />
            <Blog
              name="John Doe"
              photo={pic2}
              description="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit "
            />
            <Blog
              name="John Doe"
              photo={pic3}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa."
            />
          </div>
          <div className="approw">
            <Blog
              name="John Doe"
              photo={pic1}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa. In consequat metus et tristique finibus. Pellentesque volutpat viverra ligula, "
            />
            <Blog
              name="John Doe"
              photo={pic2}
              description="orem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit "
            />
            <Blog
              name="John Doe"
              photo={pic3}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque enim. In et cursus enim, hendrerit vestibulum dolor. Vestibulum massa nibh, lacinia at massa a, pulvinar commodo massa."
            />
          </div>
        </div>
        <div className="side">
          <div className="appside">
            
            <SideBar items={recentUploads} />
            <Announcements announcements={announcements} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
