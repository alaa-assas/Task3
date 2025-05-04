import FAQsComponent from "./../components/FAQsComponent/FAQsComponent";
import NavigatePagesComponent from "./../components/NavigatePagesComponent/NavigatePagesComponent";
import TestimonialsComponent from "./../components/TestimonialsComponent/TestimonialsComponent";
import SharedCardSection from "./../components/SharedCardSection/SharedCardSection";
import HeroComponent from "./../components/HeroComponent/HeroComponent";
import { HeroTextData, statistics } from "./../data/HeroData";
import { BenefitsData } from "./../data/BenefitsData";
import { TestimonialsData } from "./../data/TestimonialsData";
import { FAQData } from "./../data/FAQData";
import { NavigatePagesData } from "./../data/NavigatePagesData";

const Home = () => {
  return (
    <>
      <HeroComponent
        image={"/Task3/images/Hero/Image.png"}
        data={HeroTextData}
        statistics={statistics}
      />
      <SharedCardSection
        flag={"Children Deserve Bright Future"}
        heading={"Our Benefits"}
        desc={
          "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
        }
        dataCards={BenefitsData}
      />

      <TestimonialsComponent 
        flagData={"Their Happy Words 😃"}
        headingData={"Our Testimonials"}
        descData={
          "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
        }
        TestimonialsDataList={TestimonialsData}
      />
      <FAQsComponent 
        flagData={"Solutions For The Doubts"}
        headingData={"Frequently Asked Questions"}
        descData={
          "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        }
        FAQData={FAQData}
      />
      <NavigatePagesComponent 
         flag={"Explore More"}
         heading={"Navigate through our Pages"}
         desc={
           "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
         }
         NavigatePagesData={NavigatePagesData}
      />
    </>
  );
};

export default Home;
