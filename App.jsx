import { useState } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddCourse from './components/AddCourse';
import SearchPage from './components/SearchPage';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route index element={<Navigate to="/Home" replace />} />
    <Route path="/SearchPage" element={<SearchPage/>}/>
    <Route path="/Home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/AddCourse" element={<AddCourse/>}/>
    <Route path="*" element={<Navigate to="/" replace />} />
  </>
));

const App = () => {
  return (
    <RouterProvider router={router} className="router" />
  );
};

export default App;
