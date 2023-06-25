import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
export default function Navbar(props) {
    // const changeBackground=(event)=>{
    //    // props.setMode(event.target.value)
    //      props.toggleMode(event.target.value);
    //     // console.log(event.target.value)
    // }
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>


                    </ul>
                    {/* Change Background Color 
                    <div className="form-check form-check-inline" >
  <input  className="form-check-input bg-success" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="brown" onChange={changeBackground}/>
  <label className="form-check-label" htmlFor="inlineRadio1">Brown</label>
</div>
<div className="form-check form-check-inline">
  <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="green" onChange={changeBackground}/>
  <label className="form-check-label" htmlFor="inlineRadio2">Green</label>
</div>
<div className="form-check form-check-inline">
  <input  className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="red" onChange={changeBackground}/>
  <label className="form-check-label" htmlFor="inlineRadio3">Red</label>
</div> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired }
// Navbar.defaultProps = { title: 'Set Title Here', aboutText: 'About Text Here' }
