import './Services.css'
import img1 from '../../assets/services/1.svg'
import img2 from '../../assets/services/2.svg'
import img3 from '../../assets/services/3.svg'
import img4 from '../../assets/services/4.svg'
import rectangleleft from '../../assets/services/rectangle-left.png'
import dots from '../../assets/services/Dot.svg'
import rectangleright from '../../assets/services/rectangle-right.png'
import circle from '../../assets/services/circle-down.svg'

function Services() {
    return (
        <section id='services'>

            <img src={dots} alt="dots1" className="dots1" />
            <img src={dots} alt="dots2" className="dots2" />
            <img src={rectangleright} alt="rectangle" className='rectangle-right' />
            <img src={circle} alt="circle" className='circle' />

            <div className='services-text'>
                <img src={rectangleleft} alt="" />
                <h1>How can we help your Business ?</h1>
                <p>We design and build from your imagination and our creativity.</p>
            </div>
            <div className='services-types'>
                <div className='service down'>
                    <img src={img1} alt="website development" />
                    <h3>Website Development</h3>
                    <p>From designing to building full stack web applications</p>
                </div>
                <div className='service up'>
                    <img src={img2} alt="App development" />
                    <h3>App Development</h3>
                    <p>Apps that help your businesses grow to the top</p>
                </div>
                <div className='service down'>
                    <img src={img3} alt="Graphic Designing" />
                    <h3>Graphic Designing</h3>
                    <p>From poster to logos to everything graphic</p>
                </div>
                <div className='service up'>
                    <img src={img4} alt="Web/app designing" />
                    <h3>Web/App Designing</h3>
                    <p>Designing figma files for your apps and websites</p>
                </div>
            </div>
        </section>
    )
}

export default Services