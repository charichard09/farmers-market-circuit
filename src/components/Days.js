import React from "react";
import PropTypes from "prop-types";

 export default function days(props){
  return(
    <React.Fragment>
      <h3>{props.day}</h3>
      <h3>{props.location}</h3>
      <h3>{props.hours}</h3>
      <h3>{props.booth}</h3>
    </React.Fragment>
  );
 }

 days.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
 };