import './MissionAndVissionCard.css';

const MissionAndVissionCard = ({icon,alt,title,desc,delay}) => {
  return (
    <div className="mission-vission-card box-shadow-black border-grey-2" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={delay * 300}>
      <div className='heading-image'>
        <h4 className='fs-48'>{title}</h4>
        <img className="icon" src={icon} alt={alt} />
      </div>
      <p className='fs-20'>{desc}</p>
    </div>
  )
}

export default MissionAndVissionCard