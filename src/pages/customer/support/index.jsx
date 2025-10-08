import React, { useEffect, useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import {
  PageContainer,
  Header,
  Section,
  FAQBox,
  Footer,
} from "./style";
import { useCustomer } from "../useHooks";


const SupportScreen = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const {getCmsSectionDetail,getFaqSection} = useCustomer();
   const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [cmsContent, setCmsContent] = useState({
    about: null,
    privacy: null,
    terms: null,
  });

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // const faqs = [
  //   {
  //     question: "How do I place an order?",
  //     answer:
  //       "Simply browse our medicines and healthcare products, add them to your cart, and proceed to checkout. You will receive confirmation on your email/SMS.",
  //   },
  //   {
  //     question: "Do you deliver nationwide?",
  //     answer:
  //       "Yes, <b>Healify</b> delivers across Pakistan through reliable shipping partners. Delivery times may vary depending on your location.",
  //   },
  //   {
  //     question: "Can I return a product?",
  //     answer:
  //       "Products can be returned if they are damaged, incorrect, or expired upon delivery. Please contact our support team within 48 hours.",
  //   },
  //   {
  //     question: "Is my data safe with Healify?",
  //     answer:
  //       "Yes, we value your privacy. All personal data is encrypted and used strictly for order processing and service improvement.",
  //   },
  // ];

  useEffect(() => {
  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [about, privacy, terms, faqsData] = await Promise.all([
        getCmsSectionDetail("about-us"),
        getCmsSectionDetail("privacy-policy"),
        getCmsSectionDetail("terms-and-conditions"),
        getFaqSection(),
      ]);

      setCmsContent({
        about: about?.content || "About section not found.",
        privacy: privacy?.content || "Privacy section not found.",
        terms: terms?.content || "Terms section not found.",
      });
      setFaqs(faqsData || []);
    } catch (error) {
      console.error("Error fetching support data:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchAllData();
}, []);

  return (
    <PageContainer>
      <Header>
        <h1><b>Healify</b></h1>
        <h2>Support Center</h2>
      </Header>

      {/* About Section */}
      <Section>
        <h3>About Us</h3>
        <p dangerouslySetInnerHTML={{ __html: cmsContent.about }} />
      </Section>

      {/* Privacy Policy */}
      <Section>
        <h3>Privacy Policy</h3>
        <p dangerouslySetInnerHTML={{ __html: cmsContent.privacy }} />
      </Section>

      {/* Terms & Conditions */}
      <Section>
        <h3>Terms & Conditions</h3>
        <p dangerouslySetInnerHTML={{ __html: cmsContent.terms }} />
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
              <div
                className="faq-answer"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
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
