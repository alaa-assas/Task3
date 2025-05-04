import TitleComponent from "../TitleComponent/TitleComponent";
import GeneralCardComponent from "../GeneralCardComponent/GeneralCardComponent";
import './SharedCardSection.css';

const SharedCardSection = ({flag,heading,desc,dataCards}) => {
  return (
    <section className="px-168 mb-200">
    <TitleComponent
      flag={flag}
      heading={heading}
      desc={desc}
    />
    <div className="shared-cards" >
        {dataCards.map((field, index) => (
          <GeneralCardComponent key={index} title={field.title} desc={field.desc} icon={field.icon} alt={field.alt} delay={index}/>
        ))}
    </div>
  </section>
  )
}

export default SharedCardSection