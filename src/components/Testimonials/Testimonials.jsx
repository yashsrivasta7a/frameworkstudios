import Review from "./Review"

function Testimonials() {
    return (
        <section id='testimonials'>
            <div className='reviews'>
                <Review
                    stars='⭐⭐⭐⭐⭐'
                    review='Work so good, made me come back for more !'
                    img='https://mir-s3-cdn-cf.behance.net/project_modules/disp/a4d49d136683071.61fda5668697b.png'
                    author='John Doe'
                />

                <Review
                    stars='⭐⭐⭐⭐⭐'
                    review='Best service I have ever received !'
                    img='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e13eeb136683071.61fda566861ff.png'
                    author='Jane Doe'
                />

                <Review
                    stars='⭐⭐⭐⭐⭐'
                    review='I have never been more satisfied with a service !'
                    img='https://mir-s3-cdn-cf.behance.net/project_modules/fs/9f2aa0136683071.61fda5685c26d.png'
                    author='John Smith'
                />

                <Review
                    stars='⭐⭐⭐⭐⭐'
                    review='I would recommend this service to anyone!'
                    img='https://mir-s3-cdn-cf.behance.net/project_modules/disp/872378136681405.61fd9c93856c7.png'
                    author='Jane Smith'
                />

            </div>
        </section>
    )
}

export default Testimonials