import React from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from './react.svg';
import './Home.css';

const universities = [
  { name: 'American University Of Beirut' },
  { name: 'Lebanese American University' },
  { name: 'Lebanese University' },
];

const categories = [
  { title: 'Engineering', subjects: 'EECE, CHEN, MECH,...' },
  { title: 'STEM', subjects: 'MATH, PHYS, BIO,...' },
  { title: 'Social Sciences', subjects: 'ECON, SOAN, ...' },
  { title: 'Business', subjects: 'ACCT' },
  { title: 'Political Science', subjects: 'PSPA' },
  { title: 'Marketing', subjects: 'MNKTG' }
];

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contacttitle">Contact</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>hello@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3>Social</h3>
            <div className="social-icons">
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook"/></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter"/></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram"/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-logo">
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-mba-illustration-illustration_23-2149331623.jpg?ga=GA1.1.2128789847.1721228171&semt=ais_user" alt="Logo" />
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  const handleAddCourseClick = () => {
    navigate('/AddCourse');
  };
  const handleSearchPageClick = () => {
    navigate('/SearchPage');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">
          <img src={reactLogo} alt="Logo" />
        </div>
      </header>
      <main className="home-main">
        <h1>Find My Tutor</h1>
        <div className="title">Explore Tutors in one simple click</div>
        <div className="content-row">
            <div className="Section1">
              <div className="button-group">
                <button className="btn" onClick={handleSearchPageClick}>I'm Looking For a Tutor</button>
                <button className="btn" onClick={handleAddCourseClick}>I'm Looking To Tutor</button>
              </div>
              <br></br>
              <button className="btn" onClick={handleSignUpClick}>Don’t have an account?   Sign up!</button>
            </div>
            <div className="image-container">
              <img src="https://img.freepik.com/premium-photo/navigating-unwritten-rules-industry-etiette-generative-ai_1169639-107261.jpg?ga=GA1.1.2128789847.1721228171&semt=ais_user_ai_gen" alt="Tutors" />
            </div>
        </div>
      </main>
      <div className="secondpage">
        <p className="title2">Say Hello to FindMyTutor</p>
        <div className="presentation">
        <p className="paragraph1">
          Here at FindMyTutor, life will become easier.
          Having trouble finding a tutor that suits your needs? We have the solution right here.
          You can search within 200+ courses from any University in Lebanon to help you ace your courses.
        </p>
      </div>
      <img className="image2" src="https://img.freepik.com/free-photo/parents-with-baby-looking-laptop-screen_23-2148101381.jpg?ga=GA1.1.2128789847.1721228171&semt=ais_user" alt="picture" />
        </div>
       
      <div className="explore-courses-container">
        <header className="explore-courses-header">
          <h1>Explore Courses Here</h1>
        </header>
        <div className="courses-list">
          {universities.map((university, index) => (
            <div key={index} className="course-card">
              <div className="circle-icon"></div>
              <p>{university.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h2>{category.title}</h2>
            <p>{category.subjects}</p>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default Home;
