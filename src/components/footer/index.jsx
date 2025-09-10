import React from 'react';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope
} from "react-icons/fa";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  SocialLinks,
  SocialLinkItem,
  NewsletterSection,
  NewsletterForm,
  NewsletterInput,
  NewsletterButton,
  CopyrightSection,
  LogoContainer
} from './style';
import logo from '../../assets/images/logo-image.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* About & Logo */}
        <FooterSection>
          <LogoContainer>
            <img src={logo} alt="Healify Logo" />
            <p>Your trusted partner for health and wellness.</p>
          </LogoContainer>
          <SocialLinks>
            <SocialLinkItem style={{color:"blue"}} href="#"><FaFacebookF /></SocialLinkItem>
            <SocialLinkItem style={{color:"red"}} href="#"><FaInstagram /></SocialLinkItem>
            <SocialLinkItem style={{color:"black"}} href="#"><FaTwitter /></SocialLinkItem>
            <SocialLinkItem  style={{color:"darkblue"}} href="#"><FaLinkedin /></SocialLinkItem>
          </SocialLinks>
        </FooterSection>

        {/* Quick Links */}
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterSection>

        {/*  Shop Categories */}
        <FooterSection>
          <FooterTitle>Shop Categories</FooterTitle>
          <FooterLink href="#">Medicines</FooterLink>
          <FooterLink href="#">Health Care</FooterLink>
          <FooterLink href="#">Supplements</FooterLink>
          <FooterLink href="#">Personal Care</FooterLink>
          <FooterLink href="#">Baby Care</FooterLink>
        </FooterSection>

        {/* Section 4: Newsletter */}
        <NewsletterSection>
          <FooterTitle>Stay Updated!</FooterTitle>
          <p>Subscribe to our newsletter for the latest updates and promotions!</p>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Enter your email" />
            <NewsletterButton type="submit"><FaEnvelope /></NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>
      </FooterContent>

      <CopyrightSection>
        &copy; {new Date().getFullYear()} Healify. All Rights Reserved.
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;