
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Grid } from '@splidejs/splide-extension-grid';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/react-splide/css';



function Carousel() {

    // const options = {
    //     type: 'loop',
    //     height: '90vh',
    //     perPage: 2,
    //     perMove: 1,
    //     grid: {
    //         dimensions: [[1, 1], [2, 2], [2, 1], [1, 2], [2, 2], [3, 2]],
    //         gap: {
    //             row: '6px',
    //             col: '6px',
    //         },
    //     },
    //     breakpoints: {
    //         640: {
    //             height: '8rem',
    //             perPage: 1,
    //             grid: {
    //                 dimensions: [[2, 2], [1, 1], [2, 1], [1, 2], [2, 2]],
    //             },
    //         },
    //     },
    // };

    const options = {
        type: 'loop',
        height: '50vh',
        autoWidth: true,
        gap: '1rem',
        drag: 'free',
        arrows: false,
        pagination: false,
        autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 2,
        }
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
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a4d49d136683071.61fda5668697b.png" alt="1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e13eeb136683071.61fda566861ff.png" alt="2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f2aa0136683071.61fda5685c26d.png" alt="3" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/872378136681405.61fd9c93856c7.png" alt="4" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bc13d5157456733.63792f8a385be.jpg" alt="5" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://www.manasjha.me/images/projects/enstruments.png" alt="6" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://www.manasjha.me/images/projects/pixelcode.png" alt="7" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/92ebe2136681405.61fd9c8cac548.png" alt="9" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c05f3136684341.61fdacd5071d5.jpg" alt="10" />
                        </SplideSlide>
                    </SplideTrack>
                </div>
            </Splide>
        </section >
    )
}

export default Carousel