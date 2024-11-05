import React from 'react'
import arrow_icon from "../assets/img/arrow-icon.svg"
import { Link, useNavigate } from 'react-router-dom';
const RedirectButton = ({text,link}) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(link); // Redirect to the About page
  };
  return (
    <>
      <div className="redirect-btn">
        {/* <Link to={link}> */}
          <p>{text}</p>
          <button onClick={handleRedirect}>
            <img src={arrow_icon} alt="arrow-icon" />
          </button>
        {/* </Link> */}
      </div>
      {/* <div className="contentBx">
        <div className="btn-demande" onClick={onClick}>
          <p>{text}</p>
          <button className="file-button">
            <img src={arrow_icon} alt="arrow_icon" />
          </button>
        </div>
      </div> */}
    </>
  );
}

export default RedirectButton
