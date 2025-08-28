import React, { useState, useEffect } from "react";
import {
 Container,DateText,TimeText
} from './style';

export default function DateComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60); 

    return () => clearInterval(interval);
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
    <Container>
    <DateText>
      {days[currentDate.getDay()]}, {currentDate.getDate()}{" "}
      {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </DateText>
      <TimeText>
        {currentDate.toLocaleTimeString()}
      </TimeText>
     </Container>
      
  );
}

