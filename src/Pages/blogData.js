// blogData.js

import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";


const blogs = [
    {
      id: 1,
      photo: pic1,
      title: 'Understanding React Hooks',
      excerpt: 'An introduction to React Hooks and how to use them.',
      content: 'In this blog, we will dive deep into React Hooks...',
    },
    {
      id: 2,
      photo: pic2,
      title: 'Advanced CSS Techniques',
      excerpt: 'Learn some advanced CSS techniques for responsive design.',
      content: 'Responsive design is crucial in modern web development...',
    },
    {
      id: 3,
      photo: pic3,
      title: 'JavaScript ES6 Features',
      excerpt: 'Explore the new features introduced in ES6.',
      courseContent: 'Course content involves Basics of Aerodynamics using simple equations and a lot of illustrations, Different types of aircraft and other aerodynamic machines, their basic structure and working and their current real-world scenario, case studies related to aircraft accidents, aircraft Operations and their working atmosphere, and many more interesting topics, covering some of their basic knowledge.',
      difficulty: 4,
      Department: "chemesitry",
      Instructor: 'Prof. Chirag Sharma',
      Semester: "Autumn 19",
      TeachingStyle: "Teaching style of the professor is very good. The class usually runs in Inverse Classroom mode, in which students are provided with the class content before the class, they have to study that content, and there are video representations and fruitful discussions in the class hours.",
      content: 'Course content involves Basics of Aerodynamics using simple equations and a lot of illustrations, Different types of aircraft and other aerodynamic machines, their basic structure and working and their current real-world scenario, case studies related to aircraft accidents, aircraft Operations and their working atmosphere, and many more interesting topics, covering some of their basic knowledge.'
    },
    // Add more blogs as needed
    {
      "id": 4,
      photo: pic1,
      "title": "Linear Algebra: A Foundation for Machine Learning",
      "excerpt": "An overview of linear algebra concepts and their applications in machine learning.",
      "content": "Linear algebra is a critical subject in the field of machine learning. In this blog, we will explore key concepts like vectors, matrices, and eigenvalues, and their applications in algorithms and data analysis..."
    },
    {
      "id": 5,
      photo: pic2,
      "title": "Data Structures and Algorithms: The Building Blocks of Programming",
      "excerpt": "Understanding data structures and algorithms and their importance in computer science.",
      "content": "Data structures and algorithms are fundamental concepts in computer science that help in organizing and manipulating data efficiently. This blog will cover topics like arrays, linked lists, trees, and sorting algorithms..."
    },
    {
      "id": 6,
      photo: pic3,
      "title": "Control Systems: From Theory to Practical Applications",
      "excerpt": "A deep dive into the world of control systems and their real-world applications.",
      "content": "Control systems are essential in various engineering disciplines. This blog will discuss the basics of control theory, types of control systems, and practical applications in industries like aerospace, robotics, and manufacturing..."
    },
    {
      "id": 7,
      photo: pic1,
      "title": "Introduction to Quantum Mechanics",
      "excerpt": "Exploring the principles of quantum mechanics and their implications.",
      "content": "Quantum mechanics is a fascinating and complex field of physics that deals with the behavior of particles at the quantum level. In this blog, we will explore the key principles, such as wave-particle duality and uncertainty principle, and their impact on modern technology..."
    },
    {
      "id": 8,
      photo: pic2,
      "title": "Microelectronics: The Heart of Modern Technology",
      "excerpt": "An insight into microelectronics and its role in modern devices.",
      "content": "Microelectronics is a branch of electronics that deals with the study and manufacture of small electronic components. This blog will cover the basics of semiconductor devices, integrated circuits, and their applications in devices like smartphones, computers, and sensors..."
    },
    {
      "id": 9,
      photo: pic3,
      "title": "Microelectronics: The Heart of Modern Technology",
      "excerpt": "An insight into microelectronics and its role in modern devices.",
      "content": "Microelectronics is a branch of electronics that deals with the study and manufacture of small electronic components. This blog will cover the basics of semiconductor devices, integrated circuits, and their applications in devices like smartphones, computers, and sensors..."
    }
  ];
  
  export default blogs;
  