import React from 'react';
import './AddCourse.css';
import logo from './react.svg'; // 

const AddCourse = () => {
  return (
    <div className="Addcourse-container">
      <header className="Addcourse-header">
        <img src={logo} alt="Find My Tutor Logo" className="Addcourse-logo" />
      </header>
      <main className="Addcourse-main">
        <h1>Sign up as a tutor</h1>
        <form className="Addcourse-form">
            <div className="topthree">
                <div className="form-group">
                    <label htmlFor="university">Enter the university name</label>
                    <br></br>
                    <input type="text" id="university" placeholder="e.g. AUB" />
                </div>
                <div className="form-group">
                    <label htmlFor="degree">Enter your Degree (if any)</label>
                    <br></br>
                    <input type="text" id="degree" placeholder="e.g. BE in Mechanical Engineering" />
                </div>
                <div className="form-group">
                    <label htmlFor="courses">Enter the course(s) you will tutor</label>
                    <br></br>
                    <input type="text" id="courses" placeholder="e.g. MATH 201" />
                </div>
            </div>
            <div className="middlethree">
                <div className="form-group">
                    <label htmlFor="price">Enter your price</label>
                    <br></br>
                    <input type="text" id="price" placeholder="e.g. 10$/private session" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Enter your Location</label>
                    <br></br>
                    <input type="text" id="location" placeholder="e.g. stories coffee shop" />
                </div>
                <div className="form-group">
                    <label htmlFor="grade">Enter your grade (if available)</label>
                    <br></br>
                    <input type="text" id="grade" placeholder="e.g. A+" />
                </div>
            </div>
            <div className="bottomthree">
                <div className="form-group">
                    <label htmlFor="date">Enter the date and time</label>
                    <br></br>
                    <input type="text" id="date" placeholder="e.g. everyday from 4-6pm" />
                </div>
                <div className="form-group">
                    <label htmlFor="tutoring">Enter your preferred way of tutoring</label>
                    <br></br>
                    <input type="text" id="tutoring" placeholder="e.g. Group session / 1 on 1" />
                </div>
                <button type="submit" className="Addcourse-button">+ Add Course</button>
            </div>
        </form>
      </main>
    </div>
  );
};

export default AddCourse;
