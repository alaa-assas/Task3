import TitleComponent from "../TitleComponent/TitleComponent";
import TeamCard from "../TeamCard/TeamCard";
import './TeamsComponent.css';

const TeamsComponent = ({flagData,headingData,descData,TeamDataList}) => {
  return (
    <section className="px-168 mb-200">
    <TitleComponent
      flag={flagData}
      heading={headingData}
      desc={descData}
    />
    <div className="team-cards" >
        {TeamDataList.map((field, index) => (
          <TeamCard empName={field.empName} qualification={field.qualification} desc={field.desc} empImage={field.empImage} alt={field.alt} delay={index}/>
        ))}
    </div>
  </section>
  )
}

export default TeamsComponent