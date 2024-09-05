import React from 'react';
import './Resources.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const resources = [
  { id: 1, title: 'Resources', link: 'https://drive.google.com/drive/u/1/folders/1aMSDmSByLFckzIVRcm-pwtoReCvSLWaj' },
  { id: 2, title: 'Semester 1 Resources', link: 'https://drive.google.com/drive/u/1/folders/0B_vNHDTaTyFcdzlVakFhWGlDSnM?resourcekey=0-HmNqwFqnqDaUrqZB3kPCgw' },
  { id: 3, title: 'Semester 2 Resources', link: 'https://drive.google.com/drive/folders/0B_vNHDTaTyFcSFRSN0lsN3dZR0k?resourcekey=0-YmHX9ix9CEtAt4NLAu5riA&usp=drive_link' },
  { id: 4, title: 'Semester 3 Resources', link: 'https://drive.google.com/drive/folders/1ncpYr2ngd_lAz0BrY27Evwt_OWEsuvl_?usp=drive_link' },
  { id: 5, title: 'Semester 4 Resources', link: 'https://drive.google.com/drive/folders/1nKrwRRJ9yxE2t0Zt9UoYZk6czCEci9pl?usp=drive_link' },
  { id: 6, title: 'Semester 5 Resources', link: 'https://drive.google.com/drive/folders/19_uLrvQGz57Uthzj0w8zQEyH9AajOGwL?usp=drive_link' },
  { id: 7, title: 'Semester 6 Resources', link: 'https://drive.google.com/drive/folders/1bkhgTB1ns1Z7Ky70vLXBQIlCKpRkP6Cn?usp=drive_link' },
  { id: 8, title: 'Semester 7 Resources', link: 'https://drive.google.com/drive/folders/1pufyoo4zCJqiZbeKfA--CwPYmL1JeaBa?usp=drive_link' },
  { id: 9, title: 'Semester 8 Resources', link: 'https://drive.google.com/drive/folders/16pashYRz6gr-V1do3bYHY2Im0ryIAM12?usp=drive_link' },
  { id: 10, title: 'Electives 2020-21', link: 'https://drive.google.com/drive/folders/1ahCb_6jBOTAyHyr9a7TnphOzkuTHGRbY?usp=drive_link' },
  { id: 11, title: 'Projects', link: '/resources/projects' },
  { id: 12, title: 'Career Guidance', link: '/resources/careers' },
];

const Resources = () => {
  return (
    <>
    <Navbar/>
    <div className="resources-container">
      <h1 className="resources-title">Explore Resources</h1>
      <div className="resources-grid">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            className="resource-card"
          >
            <div className="resource-content">
              <h2 className="resource-title">{resource.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Resources;
