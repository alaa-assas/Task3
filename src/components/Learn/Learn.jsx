import LearnCard from "../LearnCard/LearnCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./Learn.css";

const Learn = ({ flagData, headingData, descData, WhatsLearnDataList }) => {
  return (
    <div className="px-168 mb-200">
      <TitleComponent flag={flagData} heading={headingData} desc={descData} />

      <div className="learn-cards">
        {WhatsLearnDataList.map((data, index) => (
          <LearnCard
            key={index}
            image={data.img}
            title={data.title}
            desc={data.desc}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Learn;
