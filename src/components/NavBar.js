import React from "react";

export default function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="/">
        {props.text}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              Disabled
            </a>
          </li>
        </ul>
        <div>
          <button type="button" className="btn btn-primary mx-2" style={{height:"2rem", width:"2rem"}} onClick={()=>props.setMode("blue")}></button>
          <button type="button" className="btn btn-success mx-2" style={{height:"2rem", width:"2rem"}} onClick={()=>props.setMode("green")}></button>
          <button type="button" className="btn btn-danger mx-2" style={{height:"2rem", width:"2rem"}} onClick={()=>props.setMode("red")}></button>

          <button type="button" className="btn btn-dark mx-4" style={{height:"2rem", width:"2rem"}} onClick={()=>props.setMode("dark")}></button>
        </div>
      </div>
    </nav>
  );
}

// NavBar.ReactPropTypes = {
//     text: ReactPropTypes.string
// };
