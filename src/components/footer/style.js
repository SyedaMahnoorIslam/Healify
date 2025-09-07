
import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--color-primary);
    color: var(--color-text-light);
    padding: 3rem 2rem;
    font-family: 'Poppins', sans-serif;
`;

export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #fff;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    img {
        width: 150px;
        height: auto;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.5;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SocialLinkItem = styled.a`
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    
    &:hover {
        color: var(--color-secondary);
    }
`;

export const FooterTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #fff;
`;

export const FooterLink = styled.a`
    font-size: 0.9rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: var(--color-secondary);
    }
`;

export const NewsletterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #fff;

    p {
        font-size: 0.9rem;
        line-height: 1.5;
    }
`;

export const NewsletterForm = styled.form`
    display: flex;
    width: 100%;
    
`;

export const NewsletterInput = styled.input`
    flex-grow: 1;
    padding: 0.75rem;
    border: none;
    border-radius: 5px 0 0 5px;
    font-size: 1rem;
    outline: none;
`;

export const NewsletterButton = styled.button`
    background-color: var(--color-secondary);
    color: #fff;
   background-color: #000;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #000;
    }
`;

export const CopyrightSection = styled.div`
    text-align: center;
    font-size: 0.8rem;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
`;