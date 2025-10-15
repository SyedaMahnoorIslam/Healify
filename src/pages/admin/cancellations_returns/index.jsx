import React from 'react';
import { FaTools, FaRedo, FaUndo } from 'react-icons/fa';

// Styled Components ko style file se import karein
import { 
    PageWrapper, 
    ContentContainer, 
    Title, 
    PolicySection, 
    SectionTitle, 
    PolicyText, 
    MaintenanceBanner 
} from './style'; 

// --- REACT COMPONENT ---

const CancellationReturns = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <Title>Cancellation & Returns Policy</Title>

        <PolicySection>
          <SectionTitle>
            <FaUndo /> 
            Order Cancellation
          </SectionTitle>
          <PolicyText>
            **This page is a placeholder for demonstration purposes.** <br/>
            Orders can typically be cancelled within **2 hours** of placement, provided the order has not yet been processed for shipping. For any cancellation requests, please contact our support team immediately. Prescribed medicines follow stricter cancellation rules due to regulatory guidelines.
          </PolicyText>
          <PolicyText>
            *Note: Full cancellation details and a dedicated request form will be available soon.*
          </PolicyText>
        </PolicySection>

        <PolicySection>
          <SectionTitle>
            <FaRedo /> 
            Returns and Refunds
          </SectionTitle>
          <PolicyText>
            Our e-pharmacy aims for 100% satisfaction. Returns are generally accepted for non-prescription items within **7 days** of delivery, provided the products are unused and in their original sealed packaging.
          </PolicyText>
          <PolicyText>
            **Pharmaceutical Returns:** Due to safety and hygiene concerns, we cannot accept returns for opened or used medicines, or any items requiring refrigeration. In case of receiving a damaged or incorrect product, please send an image and batch number to our customer service for immediate assistance.
          </PolicyText>
        </PolicySection>
        
        {/* Dummy content with accentPink prop for style variation */}
        <PolicySection accentPink>
             <SectionTitle>
                Eligibility and Documentation
             </SectionTitle>
             <PolicyText>
                All returns must include the original receipt or proof of purchase. Refunds will be processed back to the original payment method within 5-7 business days after the returned item has been inspected and approved.
             </PolicyText>
        </PolicySection>

      </ContentContainer>
      
      {/* Maintenance Banner */}
      <MaintenanceBanner>
        <h3>
          <FaTools /> 
          PAGE UNDER MAINTENANCE - Full Policy Flow Coming Soon
        </h3>
      </MaintenanceBanner>
    </PageWrapper>
  );
};

export default CancellationReturns;