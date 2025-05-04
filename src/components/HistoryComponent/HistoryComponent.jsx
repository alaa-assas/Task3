import TitleComponent from "../TitleComponent/TitleComponent";
import HistoryCard from "../HistoryCard/HistoryCard";
import './HistoryComponent.css';

const HistoryComponent = ({flagData,headingData,descData,HistoryDataList}) => {
  return (
    <section className="history-section px-168 mb-200">
      <TitleComponent
        flag={flagData}
        heading={headingData}
        desc={descData}
      />
      <div className="history-cards box-shadow-black border-grey-2">
        {HistoryDataList.map((field, index) => (
          <HistoryCard  delay={index} year={field.year} title={field.title} desc={field.desc} />
        ))}
      </div>
  </section>
  )
}

export default HistoryComponent