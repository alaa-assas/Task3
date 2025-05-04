import'./LearnCard.css'

const LearnCard = ({image, title, desc,delay}) => {
  return (
    <div className='learn-Card border-grey-2 box-shadow-black' data-aos="flip-right" data-aos-duration="1500" data-aos-delay={delay * 300}>
      <img src={image} alt="img" />
      <div className="learn-card-title">
        <h3 className='fs-28'>{title}</h3>
        <p className='fs-20'>{desc}</p>
      </div>

        <div className='AA-line border-grey-2'></div>
    </div>
  )
}

export default LearnCard