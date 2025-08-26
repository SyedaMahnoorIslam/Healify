import React from "react";
import Teampic from '../../../assets/images/OurTeam.jpeg' ;
import{
 Container,Header,Content,Section,Team
} from './style'
const AboutUs = () => {
  return (
    <Container>
      <Header>
        <h1>About Us</h1>
      </Header>
      <Content>
        <Section>
          <h2>Our Mission</h2>
          <p>
            At Healify, our mission is to provide the best healthcare products and services online, 
            ensuring quality, affordability, and convenience for everyone.
          </p>
        </Section>

        <Section>
          <h2>Our Vision</h2>
          <p>
            We aim to become the most trusted and reliable online pharmacy in Pakistan, 
            delivering wellness to your doorstep.
          </p>
        </Section>

        <Section>
          <h2>Our Team</h2>
          <Team>
            <img src={Teampic} alt="Our Team" />
            <p>
              Our dedicated team consists of experienced pharmacists, tech experts, 
              and customer service professionals working together to provide a seamless experience.
            </p>
          </Team>
        </Section>
      </Content>
    </Container>
  );
};

export default AboutUs;
