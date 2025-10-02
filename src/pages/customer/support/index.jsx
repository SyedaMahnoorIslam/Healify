import React, { useEffect, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import {
  PageContainer,
  Header,
  Section,
  FAQBox,
  Footer,
} from "./style";

const SupportScreen = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Simply browse our medicines and healthcare products, add them to your cart, and proceed to checkout. You will receive confirmation on your email/SMS.",
    },
    {
      question: "Do you deliver nationwide?",
      answer:
        "Yes, <b>Healify</b> delivers across Pakistan through reliable shipping partners. Delivery times may vary depending on your location.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Products can be returned if they are damaged, incorrect, or expired upon delivery. Please contact our support team within 48 hours.",
    },
    {
      question: "Is my data safe with Healify?",
      answer:
        "Yes, we value your privacy. All personal data is encrypted and used strictly for order processing and service improvement.",
    },
  ];

  return (
    <PageContainer>
      <Header>
        <h1><b>Healify</b></h1>
        <h2>Support Center</h2>
      </Header>

      {/* About Section */}
      <Section>
        <h3>About Us</h3>
        <p>
          <b>Healify</b> is your trusted ePharmacy platform that makes healthcare
          simple, safe, and accessible. From prescription medicines to wellness
          products, we deliver everything you need at your doorstep. Our mission
          is to make healthcare convenient for everyone in Pakistan.
        </p>
        <p>
          With a dedicated team and licensed pharmacists, <b>Healify</b> ensures
          authenticity, affordability, and quality in every order you place.
        </p>
      </Section>

      {/* Privacy Policy */}
      <Section>
        <h3>Privacy Policy</h3>
        <p>
          At <b>Healify</b>, your privacy is our top priority. We only collect data
          necessary to process your orders and enhance your experience. We never
          share your personal data with unauthorized third parties.
        </p>
        <p>
          Your transactions are processed through secure payment gateways. By
          using <b>Healify</b>, you agree to our privacy practices mentioned here.
        </p>
      </Section>

      {/* Terms & Conditions */}
      <Section>
        <h3>Terms & Conditions</h3>
        <p>
          By using <b>Healify</b> services, you agree to abide by the following terms:
        </p>
        <ul>
          <li>Users must be 18+ years of age to place orders.</li>
          <li>
            All orders are subject to availability and verification by our
            pharmacists.
          </li>
          <li>
            Payments must be made through authorized methods provided on our
            platform.
          </li>
          <li>
            <b>Healify</b> is not a replacement for professional medical advice; always
            consult a doctor.
          </li>
        </ul>
      </Section>

      {/* FAQs */}
      <Section>
        <h3>FAQs</h3>
        {faqs.map((faq, index) => (
          <FAQBox key={index} onClick={() => toggleFAQ(index)}>
            <div className="faq-header">
              <h4>{faq.question}</h4>
              <span className="faq-icon">
                {openFAQ === index ? <FiX /> : <FiPlus />}
              </span>
            </div>
            {openFAQ === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </FAQBox>
        ))}
      </Section>

      <Footer>
        <p>© {new Date().getFullYear()} <b>Healify</b>. All Rights Reserved.</p>
      </Footer>
    </PageContainer>
  );
};

export default SupportScreen;
