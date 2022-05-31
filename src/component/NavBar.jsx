import React from "react"
import {
    Link 
  } from "react-router-dom";

  
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">React App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ToDo">ToDo </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/GitHubUserInfo">GitHubUserInfo </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Register">Register </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Main">Main </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ComParent">ComParent </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/IncreamentDecrementExample">IncreamentDecrementExample </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/use-ref">UseRefHook </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
        
)

}