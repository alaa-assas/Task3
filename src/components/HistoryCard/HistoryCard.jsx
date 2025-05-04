import './HistoryCard.css';

const HistoryCard = ({year,title,desc,delay}) => {
  return (
    <div className="history-card" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={delay * 300}>
      
      <div className='card-year-col'>
        <div className='horizontal-line'></div>
        <div className='card-year box-shadow-black border-grey-2'>
          <img src={"/Task3/images/History/img.svg"} alt={"img"} />
          <h4 className='fs-68'>{year}</h4>
        </div>
      </div>
      
      <div className='card-details'>
        <p className='fs-28 card-details-title'>{title}</p>
        <p className='fs-20 card-details-desc'>{desc}</p>
      </div>
    </div>
  )
}

export default HistoryCard