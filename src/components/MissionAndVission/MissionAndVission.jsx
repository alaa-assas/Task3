import TitleComponent from "../TitleComponent/TitleComponent";
import MissionAndVissionCard from "../MissionAndVissionCard/MissionAndVissionCard";
import './MissionAndVission.css';

const MissionAndVission = ({flagData,headingData,descData,MissionAndVissionDataList}) => {
  return (
    <section className="px-168 mb-200">
    <TitleComponent
      flag={flagData}
      heading={headingData}
      desc={descData}
    />
    <div className="mission-vission-cards" >
        {MissionAndVissionDataList.map((field, index) => (
          <MissionAndVissionCard key={index} title={field.title} desc={field.desc} icon={field.icon} alt={field.alt} delay={index}/>
        ))}
    </div>
  </section>
  )
}

export default MissionAndVission