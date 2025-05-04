import SharedCardSection from "../components/SharedCardSection/SharedCardSection";
import SubHeroComponent from "../components/SubHeroComponent/SubHeroComponent";
import GallerySectionComponent from "../components/GallerySectionComponent/GallerySectionComponent";
import Learn from "../components/Learn/Learn";
import { SubHeroTextData } from "./../data/SubHeroData";
import { FeaturesData } from "./../data/FeaturesData";
import { WhatsLearnData } from "./../data/WhatsLearnData";
import { GalleryData } from "./../data/GalleryData";

const Academics = () => {
  return (
    <>
      <SubHeroComponent
        title={SubHeroTextData.academics.title}
        subTitle={SubHeroTextData.academics.subTitle}
        desc={SubHeroTextData.academics.desc}
      />
      <SharedCardSection
        flag={"Our Features"}
        heading={"Our Features"}
        desc={
          "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        }
        dataCards={FeaturesData}
      />
      <Learn
        flagData={"Our Features"}
        headingData={"What Students Learn"}
        descData={"At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"}
        WhatsLearnDataList={WhatsLearnData}
      />
      <GallerySectionComponent 
        flagData={"Our Gallery"}
        headingData={"Our Rooms Gallery"}
        descData={
          "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
        }
        GalleryDataList={GalleryData}
      />
    </>
  );
};

export default Academics;
