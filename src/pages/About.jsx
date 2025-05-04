import MissionAndVission from "../components/MissionAndVission/MissionAndVission";
import SubHeroComponent from "../components/SubHeroComponent/SubHeroComponent";
import AwardsComponent from "../components/AwardsComponent/AwardsComponent";
import { SubHeroTextData } from "./../data/SubHeroData";
import TeamsComponent from "../components/TeamsComponent/TeamsComponent";
import HistoryComponent from "../components/HistoryComponent/HistoryComponent";
import { MissionAndVissionData } from "./../data/MissionAndVissionData";
import { AwardsData } from "./../data/AwardsData";
import { HistoryData } from "./../data/HistoryData";
import { TeamData } from "./../data/TeamData";

const About = () => {
  return (
    <>
      <SubHeroComponent
        title={SubHeroTextData.about.title}
        subTitle={SubHeroTextData.about.subTitle}
        desc={SubHeroTextData.about.desc}
      />

      <MissionAndVission
        flagData={"Mission & Visions"}
        headingData={"Our Mission & Visions"}
        descData={
          "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
        }
        MissionAndVissionDataList={MissionAndVissionData}
      />
      <AwardsComponent
        flagData={"Our Achievements"}
        headingData={"Our Awards and Recognitions"}
        descData={
          "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        }
        AwardsDataList={AwardsData}
      />
      <HistoryComponent
        flagData={"Our Progressive Journey"}
        headingData={"Our History"}
        descData={
          "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        }
        HistoryDataList={HistoryData}
      />
      <TeamsComponent
        flagData={"Our Teachers With Experties"}
        headingData={"Our Team Members"}
        descData={
          "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        }
        TeamDataList={TeamData}
      />
    </>
  );
};

export default About;
