import './TeamCard.css';

const TeamCard = ({empName,empImage,qualification,desc,delay,alt}) => {
  return (
    <div className="team-card box-shadow-black border-grey-2" data-aos="flip-left" data-aos-duration="1500" data-aos-delay={delay * 300}>
      <div className='card-row'>
        <div className='heading-image'>
          <img src={empImage} alt={alt} />
          <h4 className='fs-30'>{empName}</h4>
        </div>
        <div class="icon border-grey-2">
          <a href='#'>
            <img src={"/Task3/images/Team/Icon.svg"} alt={alt} />
          </a>
        </div>
      </div>
      <div className='card-body border-grey-2'>
        <p className='fs-24 team-qualification'>{qualification}</p>
        <p className='fs-20 team-desc'>{desc}</p>
      </div>
    </div>
  )
}

export default TeamCard