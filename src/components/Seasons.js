import React from "react";
import PropTypes from "prop-types";

 export default function seasons(props){

  function handleClickEvent(event) {
    console.log(event.target.getAttribute("value")); 
    event.target.innerText = props.selection;
  }

  return(
    <React.Fragment>
      <div id={props.key} onClick={handleClickEvent} value={props.month}>
      <h3 value={props.month}>{props.month}</h3>
      <h3 hidden>{props.selection}</h3>
      </div>
    </React.Fragment>
  );
 }

 seasons.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
 };