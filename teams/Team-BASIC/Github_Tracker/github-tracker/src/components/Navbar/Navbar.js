import React from "react";
import { Link } from "react-router-dom"
import "./nav.css"
import { AiOutlineGitlab } from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";

const Navbar= () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
            <div class="container-fluid">
                <Link class="navbar-brand justify-content-center" to="/dashboard">
                    <AiOutlineGitlab size={55}/>
                    Git-Tracker
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav" id="navitems">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/dashboard">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/add">Add User</Link>
                    </li>
                </ul>
                <div class="position-absolute top-0 end-0">
                    <Link class="navbar-brand justify-content-center" to="/">
                        <BiLogOut size={40}/>
                    </Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;