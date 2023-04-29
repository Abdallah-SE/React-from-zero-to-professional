import react , {Component} from 'react';
import {BrowserRouter, Route, NavLink , Routes,Navigate  } from 'react-router-dom';
import UsersComponent from './Pages/UsersComponent.js';
import UserComponent from './Pages/UserComponent.js';
import EditUserComponent from './Pages/EditUserComponent.js';
import CreateUserPage from './Pages/CreateUserPage.js';
import NotFoundPage from './Pages/NotFoundPage.js';
import './App.css';
const  HomePageComponent = () =>  <div>Home</div>;
const  AboutPageComponent = () =>  <div>About</div>;
 
const NavBar = () => {
  return (
    <nav><NavLink
        to="/users/create"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Create new 
      </NavLink>{" | "}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Home
      </NavLink>{" | "}
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        About
      </NavLink>{" | "}
      <NavLink
        to="/users"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Users
      </NavLink>{" | "}
      
      
    </nav>
  );
};

function App() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
   const CustomNav = (props) => <NavLink  style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}  {...props} >{props.children}</NavLink>;
  return (
    <BrowserRouter>
        <div className="App">
             
            <NavBar />
            <Routes>
           
                <Route path="/"  element={<HomePageComponent/>} />
                <Route path="/users" element={<UsersComponent />} />
                <Route path="/users/view/:id"  element={<UserComponent />} />
                <Route path="/users/edit/:id"  element={<EditUserComponent />} />
                <Route path="/users/create"  element={<CreateUserPage />} />
                <Route path="/about" element={<AboutPageComponent />} />
          <Route   element={<NotFoundPage />} />
               <Route path="*" element={<NotFoundPage />}/>

            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
