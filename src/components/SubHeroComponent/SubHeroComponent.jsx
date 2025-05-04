import TitleComponent from '../TitleComponent/TitleComponent'
import './SubHeroComponent.css'

const SubHeroComponent = ({subTitle,title,desc}) => {
  return (
    <section className="sub-hero px-50 mb-200" data-aos="zoom-in">
      <div className='container box-shadow-black border-grey-2'>
        <img src="/Task3/images/SubHero/img.svg" alt="img" className='img-design'/>
        <div  className='left-side'>
          <TitleComponent flag={subTitle} heading={title} />
        </div>
        <div className='right-side'>
          <p className='fs-20'>{desc}</p>
        </div>
      </div>
    </section>
  )
}

export default SubHeroComponent