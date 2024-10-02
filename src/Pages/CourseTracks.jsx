import React, { useState } from 'react';
import trackData from './tracks.js'; // Import the table data from the external file
import './CourseTracks.css'; // Import CSS file for styling
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const CourseTracks = () => {
  // State to track the open table index
  const [openTable, setOpenTable] = useState(null);

  // Toggle the dropdown table
  const toggleTable = (index) => {
    setOpenTable(openTable === index ? null : index);
  };

  return (
    <>
    <Navbar/>
    <div className="dropdown-tables-container">
    <h1 className='dropdown-tables-heading'>Course Tracks</h1>
      {trackData.map((table, index) => (
        <div key={table.id} className="dropdown-section">
          {/* Dropdown Button */}
          <a
            className="dropdown-btn"
            onClick={() => toggleTable(index)}
          >
            <span>{openTable === index ? `Hide ${table.title}` : `${table.title}`}</span>
          </a>

          {/* Table with Animation */}
          <div className={`dropdown-table ${openTable === index ? 'open' : ''}`}>
            <table>
              <thead>
                <tr>
                  {table.headers.map((header, headerIndex) => (
                    <th key={headerIndex}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default CourseTracks;
