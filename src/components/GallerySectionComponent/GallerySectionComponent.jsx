import { useState } from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import GalleryComponent from "../GalleryComponent/GalleryComponent";
import "./GallerySectionComponent.css";

const GallerySectionComponent = ({
  flagData,
  headingData,
  descData,
  GalleryDataList,
}) => {
  const [activeTab, setActiveTab] = useState("ALL");

  return (
    <section className="px-168 mb-200">
      <TitleComponent flag={flagData} heading={headingData} desc={descData} />
      <div className="gallery-cards">
        <div className="gallery-filters">
          <button
            onClick={() => setActiveTab("ALL")}
            className={`fs-20 border-grey-2 ${
              activeTab == "ALL" ? "active" : ""
            } `}
          >
            ALL
          </button>
          {GalleryDataList.map((field, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(field.title)}
              className={`fs-20 border-grey-2 ${
                activeTab == field.title ? "active" : ""
              } `}
            >
              {field.title}
            </button>
          ))}
        </div>
        {GalleryDataList.map((field, index) => {
          if (activeTab == "ALL" || activeTab == field.title) {
            return (
              <GalleryComponent
                delay={index}
                images={field.images}
                title={field.title}
                desc={field.desc}
                key={index}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default GallerySectionComponent;
