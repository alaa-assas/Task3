import './GeneralCardComponent.css';

const GeneralCardComponent = ({icon,alt,title,desc,delay}) => {
  return (
    <div className="general-card box-shadow-black border-grey-2" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={delay * 300}>
      <img className="icon" src={icon} alt={alt} />
      <h4 className='fs-28'>{title}</h4>
      <p className='fs-20'>{desc}</p>
    </div>
  )
}

export default GeneralCardComponent