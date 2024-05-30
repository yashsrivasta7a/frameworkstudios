import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/react-splide/css';



function Carousel() {

    const options = {
        pagination: false,
        perPage: 4,
        type: 'loop',
        gap: '0.5rem',
        height: '20rem',
        autoScroll: {
            speed: 2,
        },
        drag: 'free',
    };

    const options2 = {
        pagination: false,
        perPage: 4,
        type: 'loop',
        gap: '0.5rem',
        height: '20rem',
        autoScroll: {
            speed: -2,
        },
        pauseOnHover: false,
        drag: 'free',
    }

    return (
        <section id='carousel'>
            <Splide
                options={options}
                hasTrack={false}
                extensions={{ AutoScroll }}
            >
                <div style={{ position: 'relative' }}>
                    <SplideTrack>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a4d49d136683071.61fda5668697b.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e13eeb136683071.61fda566861ff.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f2aa0136683071.61fda5685c26d.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/872378136681405.61fd9c93856c7.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bc13d5157456733.63792f8a385be.jpg" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/92ebe2136681405.61fd9c8cac548.png" alt="" />
                        </SplideSlide>
                    </SplideTrack>
                </div>
            </Splide>

            <h1 className='carousel-text'>A bunch of Super Humans, turning your brand story into a magical experience.</h1>

            <Splide
                options={options2}
                hasTrack={false}
                extensions={{ AutoScroll }}
            >
                <div style={{ position: 'relative' }}>
                    <SplideTrack>
                        <SplideSlide>
                            <img src="https://www.manasjha.me/images/projects/enstruments.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://www.manasjha.me/images/projects/dopegang.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://www.manasjha.me/images/projects/pixelcode.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://www.manasjha.me/images/projects/tastyburgers.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://www.manasjha.me/images/projects/npes.png" alt="" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://www.manasjha.me/images/projects/portfoliov4.png" alt="" />
                        </SplideSlide>
                    </SplideTrack>
                </div>
            </Splide>
        </section >
    )
}

export default Carousel