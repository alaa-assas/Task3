import "./GalleryComponent.css";
import useSliderLogic from './../../commons/useSliderLogic';
import useResponsiveSlides from './../../commons/useResponsiveSlides';
import BtnSlider from "../BtnSlider/BtnSlider";

const GalleryComponent = ({ images, title, desc ,delay }) => {
  const slidesToShow = useResponsiveSlides({breakpoints : { small: 1, medium: 4, large: 4 }});

  const { currentIndex, nextSlide, prevSlide } = useSliderLogic(
    images.length,
    slidesToShow
  );

  return (
    <div className="gallery" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={delay * 300}>
      <div className="gallery-desc box-shadow-black border-grey-2">
        <div className="gallery-images">
          {images.slice(
            currentIndex,
            currentIndex + slidesToShow
          ).map((field, index) => (
            <img src={field} alt="img" key={index} className="border-grey-2" />
          ))}
        </div>
        <div className="gallery-title-btn-row">
          <h4 className="fs-40">{title}</h4>
          <div className="btn-nav-row">
            <BtnSlider img={"/Task3/images/Testimonials/prev.svg"} eventClick={prevSlide} />
            <BtnSlider img={"/Task3/images/Testimonials/next.svg"} eventClick={nextSlide} />
          </div>
        </div>
        <p className="fs-22">{desc}</p>
      </div>
    </div>
  );
};

export default GalleryComponent;
