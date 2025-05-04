import TitleComponent from "../TitleComponent/TitleComponent";
import NavigatePageCardComponent from "../NavigatePageCardComponent/NavigatePageCardComponent";
import "./NavigatePagesComponent.css";

const NavigatePagesComponent = ({ flag, heading, desc, NavigatePagesData }) => {
  return (
    <section className="px-168 mb-200">
      <TitleComponent flag={flag} heading={heading} desc={desc} />
      <div className="navigate-cards">
        {NavigatePagesData.map((field, index) => (
          <NavigatePageCardComponent
            key={index}
            title={field.pageName}
            desc={field.description}
            linkUrl={"#"}
            linkName={"Learn More"}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
};

export default NavigatePagesComponent;
