// data.js

const trackData = [
    {
      id: 1,
      title: 'Inorganic Chemistry',
      headers: ['Semester', 'Course Code', 'Course Name', 'Advanced Electives'],
      rows: [
        ['1', 'CH105', 'Organic and Inorganic Chemistry', 'CH521, CH578, CH806, CH815,CH820'],
        ['3', 'CH202', 'Transition Metal Chemistry', 'CH405, CH547'],
        ['5', 'CH301', 'Coordination Chemistry and Magnetic Properties', 'CH410, CH521, CH824'],
        ['6', 'CH302', 'Chemistry of Main Group Elements', 'CH438, CH547'],
      ],
    },
    {
      id: 2,
      title: 'Organic Chemistry',
      headers: ['Semester', 'Course Code', 'Course Name', 'Advanced Electives'],
      rows: [
        ['1', 'CH105', 'Organic and Inorganic Chemistry', 'CH401, CH404, CH805, CH839'],
        ['3', 'CH209', 'Basic Organic Chemistry', 'CH401, CH406, CH588, CH845'],
        ['5', 'CH305', 'Chemistry of Functional Groups', 'CH410, CH521, CH824'],
        ['6', 'CH304', 'Chemistry of Biomolecules', 'CH584, CH540, CH819'],
      ],
    },
    {
        id: 3,
        title: 'Physical Chemistry',
        headers: ['Semester', 'Course Code', 'Course Name', 'Advanced Electives'],
        rows: [
          ['1', 'CH107', 'Physical Chemistry', 'CH560, CH425'],
          ['4', 'CH227', 'Thermo-dynamics and Chemical Kinetics', 'CH408, Biothermo-dynamics'],
          ['5', 'CH309', 'Introduction to Electro-chemistry', 'CH403'],
          ['6', 'CH311', 'Solid State Chemistry', 'CH552, CH518'],
          ['6', 'CH306', 'Group Theory and Spectro-scopy', 'Advanced Molecular Spectroscopy, Biophysical Chemistry'],
        ],
      },
      {
        id: 4,
        title: 'Focus Area: Spectroscopy',
        headers: ['Course Code', 'Course Name'],
        rows: [
          ['CH442',' Molecular Spectroscopy'],
          ['CH425',' Chemical Bond and Molecular Geometry'],
          ['CH521','Interpretative Molecular Spectroscopy'],
          ['CH604',' Introduction to NMR Spectroscopy'],
          ['CH808',' Ultrafast Processes in Chemistry'],
          ['CH818',' Single Molecule Fluorescence Spectroscopy' ],
        ],
      },
      {
        id: 5,
        title: 'Focus Area: Synthesis',
        headers: ['Course Code', 'Course Name'],
        rows: [
          ["CH401", "Organic Reactions"],
          ["CH404, CH406", "Physical Organic Chemistry + Thermal and Photochemical Reactions"],
          ["CH521", "Interpretative Molecular Spectroscopy"],
          ["CH547", "Organometallic Chemistry"],
          ["CH833", "Chemistry of Heterocycles and Natural Products"],
        ],
      },
      {
        "id": 6,
        "title": "Focus Area: Materials",
        "headers": ["Course Code", "Course Name"],
        "rows": [
            ["CH586", "Structure and Properties of Materials"],
            ["CH438", "Chemistry of Main Group Elements"],
            ["CH521", "Interpretative Molecular Spectroscopy"],
            ["CH547", "Organometallic Chemistry"],
            ["CH442", "Molecular Spectroscopy"],
            ["CH403", "Electrochemistry of Solutions and Interfaces"],
            ["CH806", "Molecular Photochemistry"],
            ["CHE603", "Li-ion Batteries and Beyond"]
        ],
    },
    {
      "id": 6,
      "title": "Focus Area: Theory and Computation",
      "headers": ["Course Code", "Course Name"],
      "rows": [
          ["CH425", "Chemical Bond and Molecular Geometry"],
          ["CH560", "Quantum Chemistry"],
          ["CH504", "Computational Chemistry"],
          ["CH801", "Symmetry in Chemistry"],
          ["CH605", "Chemical Dynamics: Quantum, Classical, and Semiclassical Methods"],
          ["CH576", "Statistical Mechanics"],
          ["CH607", "Machine Learning in Chemistry"]
      ],
  },
  {
    "id": 7,
    "title": "Focus Area: Inorganic Chemistry and Catalysis",
    "headers": ["Course Code", "Course Name"],
    "rows": [
        ["CH405", "Advanced Transition Metal Chemistry"],
        ["CH438", "Chemistry of Main Group Elements"],
        ["CH547", "Organometallic Chemistry"],
        ["CH824", "Organotransition Metal and Acceptor Ligand Complex"],
        ["CH521", "Interpretative Molecular Spectroscopy"],
        ["CH410", "Bio-Inorganic Chemistry"]
    ],
},
{
  "id": 7,
  "title": "Focus Area: Biological Chemistry",
  "headers": ["Course Code", "Course Name"],
  "rows": [
      ["CH546", "Introduction to Biomolecules"],
      ["CH410", "Bio-Inorganic Chemistry"],
      ["CH584", "Biophysical Chemistry"],
      ["CH864", "Biopolymers"],
      ["CH521", "Biochemistry and Bioenergetics"],
  ],
},
{
  "id": 8,
  "title": "Focus Area: Analytical Chemistry",
  "headers": ["Course Code", "Course Name"],
  "rows": [
      ["CH442", "Molecular Spectroscopy"],
      ["CH820", "Structure Analysis by Diffraction Methods"],
      ["CH521", "Interpretative Molecular Spectroscopy"],
      ["CH604", "Introduction to NMR Spectroscopy"],
      ["CH815", "Inorganic Electrochemistry"],
      ["CH831", "Advanced Laboratory Techniques"]
  ],
},
{
  "id": 9,
  "title": "Focus Area: Chemistry & Science Policy",
  "headers": ["Course Code", "Course Name"],
  "rows": [
      ["CL 678", "Techno-Commercial Aspects of Fine Chemicals"],
      ["EN 610", "Hydrogen Energy"],
      ["CH514", "Applied and Industrial Chemistry"],
      ["CHE603", "Li-ion Batteries and Beyond"],
      ["CH540", "Drugs and Biologically Active Compounds"]
  ],
},

    // More tables can be added here...
  ];
  
  export default trackData;
  