import TitleComponent from "../TitleComponent/TitleComponent";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./TestimonialsComponent.css";
import useResponsiveSlides from "./../../commons/useResponsiveSlides";
import useSliderLogic from "./../../commons/useSliderLogic";
import BtnSlider from "../BtnSlider/BtnSlider";

const TestimonialsComponent = ({
  flagData,
  headingData,
  descData,
  TestimonialsDataList,
}) => {
  const slidesToShow = useResponsiveSlides({
    breakpoints: { small: 1, medium: 2, large: 3 },
  });
  const { currentIndex, nextSlide, prevSlide } = useSliderLogic(
    TestimonialsDataList.length,
    slidesToShow
  );

  return (
    <section className="px-168 mb-200">
      <TitleComponent flag={flagData} heading={headingData} desc={descData} />
      <div className="AA-slider">
        <BtnSlider
          img={"/Task3/images/Testimonials/prev.svg"}
          classExtra="bg-size"
          eventClick={prevSlide}
        />

        <div className="testimonial-cards">
          {TestimonialsDataList.slice(
            currentIndex,
            currentIndex + slidesToShow
          ).map((field, index) => (
            <TestimonialCard
              key={index}
              opinion={field.opinion}
              userImage={field.userImage}
              userName={field.userName}
            />
          ))}
        </div>

        <BtnSlider
          img={"/Task3/images/Testimonials/next.svg"}
          classExtra="bg-size"
          eventClick={nextSlide}
        />

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

export default TestimonialsComponent;
