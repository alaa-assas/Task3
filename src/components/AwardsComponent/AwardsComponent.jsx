import useSliderLogic from "./../../commons/useSliderLogic";
import useResponsiveSlides from "./../../commons/useResponsiveSlides";
import TitleComponent from "../TitleComponent/TitleComponent";
import GeneralCardComponent from "../GeneralCardComponent/GeneralCardComponent";
import "./AwardsComponent.css";
import BtnSlider from "../BtnSlider/BtnSlider";

const AwardsComponent = ({
  flagData,
  headingData,
  descData,
  AwardsDataList,
}) => {
  const slidesToShow = useResponsiveSlides({
    breakpoints: { small: 1, medium: 3, large: 3 },
  });

  const { currentIndex, nextSlide, prevSlide } = useSliderLogic(
    AwardsDataList.length,
    slidesToShow
  );

  return (
    <section className="px-168 mb-200">
      <TitleComponent flag={flagData} heading={headingData} desc={descData} />
      <div className="awards-cards">
        {AwardsDataList.slice(currentIndex, currentIndex + slidesToShow).map(
          (field, index) => (
            <GeneralCardComponent
              key={index}
              title={field.title}
              desc={field.desc}
              icon={field.icon}
              alt={field.alt}
              delay={index}
            />
          )
        )}
      </div>
      <div className="awards-tabs">
        <span className="fs-22">
          {AwardsDataList.length - slidesToShow} More Awards
        </span>
        <div className="btn-nav-row">
          <BtnSlider
            img={"/Task3/images/Testimonials/prev.svg"}
            eventClick={prevSlide}
          />
          <BtnSlider
            img={"/Task3/images/Testimonials/next.svg"}
            eventClick={nextSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsComponent;
