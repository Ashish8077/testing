import {
  HeroSlider,
  AboutHighlightSection,
  PortfolioShowcaseSection,
  ReadyToGrowthSection,
  GrowthBannerSection,
  LatestInsightsSection,
  WhyChooseUsSection,
  TestimonialsSection,
} from "../components";
import WhatWeProvideSection from "../components/WhatWeProvideSection/WhatWeProvideSection";

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <AboutHighlightSection />
      <WhatWeProvideSection />
      <PortfolioShowcaseSection />
      {/* <ReadyToGrowthSection /> */}
      <GrowthBannerSection />
      <LatestInsightsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
