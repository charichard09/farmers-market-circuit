import React from "react";
import Days from "./Days";


const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
   {  
     day: "Friday",
     location: "Nowhere",
     hours: "Closed",
     booth: "--"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dayCounter: 0,
    }
  };

  render() {
    let currentDay = null;
    let subtractDayIncrement = null;
    let addDayIncrement = null;
    currentDay = <Days day={marketSchedule[this.state.dayCounter].day} location={marketSchedule[this.state.dayCounter].location} hours={marketSchedule[this.state.dayCounter].hours} booth={marketSchedule[this.state.dayCounter].booth} />

    if (this.state.dayCounter > 0) {
      subtractDayIncrement = <button onClick={() => this.setState({ dayCounter: this.state.dayCounter - 1 })}>Previous Day</button>

    }
    if (this.state.dayCounter < 6) {
      addDayIncrement = <button onClick={() => this.setState({ dayCounter: this.state.dayCounter + 1 })}>Next Day</button>

    }
    return (
      <React.Fragment>
        {currentDay}
        {subtractDayIncrement}
        {addDayIncrement}
      </React.Fragment>
    )
  }
}

export default MarketControl;


// handleClick = () => {
//   this.setState(prevState => ({
//     formVisibleOnPage: !prevState.formVisibleOnPage
//   }));
// }