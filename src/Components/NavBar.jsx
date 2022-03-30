import React,{ Component } from "react";

class NavBar extends Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/Home">Yoga Essentials</a>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav">
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/Home">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/AllProducts">Products</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;