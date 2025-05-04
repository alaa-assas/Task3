import TitleComponent from "../TitleComponent/TitleComponent";
import FAQCardComponent from "../FAQCardComponent/FAQCardComponent";
import { groupData } from "./../../commons/groupData";
import "./FAQsComponent.css";

const FAQsComponent = ({ flagData, headingData, descData, FAQData }) => {
  return (
    <section className="px-168 mb-200">
      <TitleComponent flag={flagData} heading={headingData} desc={descData} />
      <div className="faq-cards">
        {groupData(FAQData).map((group, groupKey) => (
          <div
            key={groupKey}
            className="AA-FAQ-group"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay={groupKey * 400}
          >
            {group.map((item, itemKey) => (
              <FAQCardComponent
                question={item.question}
                answer={item.answer}
                key={itemKey}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsComponent;
