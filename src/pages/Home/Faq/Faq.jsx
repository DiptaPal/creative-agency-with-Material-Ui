import { Box } from "@mui/material";
import SectionTitle from "../../../components/sectionTItle/sectionTItle";
import CreativeAccordion from "../../../components/CreativeAccordion/CreativeAccordion";

const Faq = () => {
  return (
    <Box sx={{
        mb: '100px',
    }}>
      <Box
        sx={{
          py: "100px",
        }}
      >
        <SectionTitle title="Frequently Asked" colored="Questions" />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        <CreativeAccordion
          title="How do i pay for the Essentials or Premium plan?"
          description="You can pay with a credit card or via net banking(if you're in United States). We will renew your subscription automatically at the end of every billing cycle."
        ></CreativeAccordion>
        <CreativeAccordion
          title="Can i cancel my Essentials or Premium plan subscription at any time?"
          description="You can pay with a credit card or via net banking(if you're in United States). We will renew your subscription automatically at the end of every billing cycle."
        ></CreativeAccordion>
        <CreativeAccordion
          title="We need to add new users to our them. How will that be build?"
          description="You can pay with a credit card or via net banking(if you're in United States). We will renew your subscription automatically at the end of every billing cycle."
        ></CreativeAccordion>
        <CreativeAccordion
          title="My team wants to cancel its subscription. How do we do that? Can we get a refund?"
          description="You can pay with a credit card or via net banking(if you're in United States). We will renew your subscription automatically at the end of every billing cycle."
        ></CreativeAccordion>
        <CreativeAccordion
          title="Do you offer discounts for non-profit organization or educational institutions?"
          description="You can pay with a credit card or via net banking(if you're in United States). We will renew your subscription automatically at the end of every billing cycle."
        ></CreativeAccordion>
      </Box>
    </Box>
  );
};

export default Faq;
