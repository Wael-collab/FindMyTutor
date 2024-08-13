import React, { useState } from 'react';
import './SearchPage.css'; 

function SearchPage () {
  const [universityName, setUniversityName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState('');
  const [tutors, setTutors] = useState([
    {
      name: 'John Smith',
      rating: 4,
      details: [
        '4th Year student in CCE',
        'Private/Group Sessions',
        'A+ in MATH 201',
        'Drive with recordings available',
        'Price: 15$/session',
         'Email JohnSMith@gmail.com'
      ],
    },    {
      name: 'John Smith',
      rating: 4,
      details: [
        '4th Year student in CCE',
        'Private/Group Sessions',
        'A+ in MATH 201',
        'Drive with recordings available',
        'Price: 15$/session',
        'Email JohnSMith@gmail.com'
      ],
    },
     {
    name: 'John Smith',
    rating: 4,
    details: [
      '4th Year student in CCE',
      'Private/Group Sessions',
      'A+ in MATH 201',
      'Drive with recordings available',
      'Price: 15$/session',
      'Email JohnSMith@gmail.com'
    ],
  } ,
     {
    name: 'John Smith',
    rating: 4,
    details: [
      '4th Year student in CCE',
      'Private/Group Sessions',
      'A+ in MATH 201',
      'Drive with recordings available',
      'Price: 15$/session',
      'Email JohnSMith@gmail.com'
    ],
  }  ,  {
    name: 'John Smith',
    rating: 4,
    details: [
      '4th Year student in CCE',
      'Private/Group Sessions',
      'A+ in MATH 201',
      'Drive with recordings available',
      'Price: 15$/session',
      'Email JohnSMith@gmail.com'
    ],
  },   {
  name: 'John Smith',
  rating: 4,
  details: [
    '4th Year student in CCE',
    'Private/Group Sessions',
    'A+ in MATH 201',
    'Drive with recordings available',
    'Price: 15$/session',
    'Email JohnSMith@gmail.com'
  ],
} ,   {
  name: 'John Smith',
  rating: 4,
  details: [
    'Graduate',
    'Group Sessions',
    'A+ in MATH 201',
    'Drive with recordings available',
    'Price: 15$/session',
    'Email JohnSMith@gmail.com'
  ],
}  ,
  {
  name: 'John Smith',
  rating: 4,
  details: [
    '4th Year student in CCE',
    'Private/Group Sessions',
    'A+ in MATH 201',
    'Drive with recordings available',
    'Price: 15$/session',
    'Email JohnSMith@gmail.com'
  ],
},   {
  name: 'John Smith',
  rating: 4,
  details: [
    '4th Year student in CCE',
    'Private/Group Sessions',
    'A+ in MATH 201',
    'Drive with recordings available',
    'Price: 15$/session',
    'Email JohnSMith@gmail.com'
  ],
}
    
  ]);
  const [filters, setFilters] = useState({
    ratings: false,
    privateSession: false,
    graduate: false,
    groupSession: false,
    location: false,
    
  });

  const handleFilterChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  const filteredTutors = tutors.filter((tutor) => {
    // Filter by ratings
    if (filters.ratings && tutor.rating < 4) {
      return false;
    }
    // Filter by private/group session
    if (filters.privateSession && !tutor.details.includes('Private/Group Sessions')) {
      return false;
    }
    // Filter by graduate
    if (filters.graduate && !tutor.details.includes('Graduate')) {
      return false;
    }
    // Filter by group session
    if (filters.groupSession && !tutor.details.includes('Group Sessions')) {
      return false;
    }
    // Filter by location
    if (filters.location && !tutor.details.includes('Location')) {
      return false;
    }
    return true;
  });

  return (
    <div className="App">
      <header className="header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="filters">
                <div className="filter-item">
                  <input
                    type="checkbox"
                    checked={filters.privateSession}
                    onChange={() => handleFilterChange('privateSession')}
                  />
                  <label className="tag1" htmlFor="privateSession">Private Session</label>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    checked={filters.graduate}
                    onChange={() => handleFilterChange('graduate')}
                  />
                  <label className="tag2" htmlFor="graduate">Graduate</label>
                </div>
                <div className="filter-item">
                  <input
                    type="checkbox"
                    checked={filters.groupSession}
                    onChange={() => handleFilterChange('groupSession')}
                  />
              <label className="tag3" htmlFor="groupSession">Group Session</label>
              <button className="search-button">SEARCH</button>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="results">
          <div className="tutors-list">
            {filteredTutors.map((tutor) => (
              <div className="tutor-card" key={tutor.name}>
                <div className="tutor-info">
                  <h3>{tutor.name}</h3>
                  <div className="tutor-rating">
                    {[...Array(tutor.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
                <div className="tutor-details">
                  <ul>
                    {tutor.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Find My Tutor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SearchPage;