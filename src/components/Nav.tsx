
import {  NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location=useLocation()
  return (
    <nav className="bg-white shadow-md mb-5">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 text-blue-400 bg-clip-text text-transparent">Assignment</NavLink>
        <div className="flex gap-6">
          <NavLink
            to="/task1"
            className={({ isActive }) =>
              (isActive || location.pathname === "/")
                ? "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent"
                : "text-gray-700"
            }
          >Task1</NavLink>
          <NavLink to="/task2" className={({ isActive }) => isActive ? "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent" : "text-gray-700"}>Task2</NavLink>
          <NavLink to="/task3" className={({ isActive }) => isActive ? "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent" : "text-gray-700"}>Task3</NavLink>
          <NavLink to="/task4" className={({ isActive }) => isActive ? "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent" : "text-gray-700"}>Task4</NavLink>
          <NavLink to="/task5" className={({ isActive }) => isActive ? "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent" : "text-gray-700"}>Task5</NavLink>
          <NavLink to="/task6" className={({ isActive }) => isActive ? "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent" : "text-gray-700"}>Task6</NavLink>
          <NavLink to="/task7" className={({ isActive }) => isActive ? "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent" : "text-gray-700"}>Task7</NavLink>
          <NavLink to="/task8" className={({ isActive }) => isActive ? "bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent" : "text-gray-700"}>Task8</NavLink>
         
        </div>
      </div>

      
    </nav>
  );
};

export default Nav;
