'use client'

import React from 'react';
import { useLocation } from 'react-router-dom';
import majors from '@/data/majors'; // Adjust the import path as needed

const MajorDetailPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const majorName = queryParams.get('name');
  
  const major = majors.find(m => m.name === majorName);
  
  if (!major) {
    return <div>Major not found!</div>;
  }

  return (
    <div>
      <h1>{major.name}</h1>
      <img src={major.image_link} alt={major.name} style={{ width: '300px' }} />
      <h2>Description</h2>
      <p>{major.description}</p>
      <h2>Program Highlights</h2>
      <ul>
        {major.program_highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
      <h2>Career Opportunities</h2>
      <ul>
        {major.career_opportunities.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
      <h2>Required Courses</h2>
      <ul>
        {major.required_courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default MajorDetailPage;