import React from 'react'
import logo from '../../assets/images/logo-image.png'
import {
  Foooter, Logo, First, Second, Detail, Line, TopDiv, LText, LastDiv
} from './style'

const healify = ["Medicines", "Health Care", "Wellness", "Supplements", "Personal Care", "Baby Care", "Lifestyle & Fitness", "Organic"];
const category = ["Supplements", "Personal Care", "Baby Care", "Lifestyle & Fitness", "Organic"];
const contact = ["+102 111 345 689" ,"healify@gmail.com","200-A, SMCHS, Karachi Sindh"];

const Footer = () => {
  return (
    <>
      <Foooter>
        <TopDiv>


          <div>
            <Second>
              <ul className='ul'>
                <h3>Healify</h3>
                {healify.map((opt) => (
                  <li key={opt}>{opt}</li>
                ))}
              </ul>
              <ul className='ul'>
                <h3>Popular Category</h3>
                {category.map((opt) => (
                  <li key={opt}>{opt}</li>
                ))}
              </ul>
              <ul className='ul'>
                <h3>Contact</h3>
                {contact.map((opt) => (
                  <li key={opt}>{opt}</li>
                ))}
                </ul>
            </Second>
          </div>
          <First>
            <img src={logo} alt='' />
            <h3>Happy Shopping!</h3>
          </First>
        </TopDiv>
        <LastDiv>
          <Line>
          </Line>
          <LText>
            ©2023 CharterCar. All rights reserved
          </LText>
        </LastDiv>
      </Foooter>
    </>
  )
}

export default Footer
