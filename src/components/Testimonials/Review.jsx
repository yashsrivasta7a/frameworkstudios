function Review({ stars, review, img, author }) {
    return (
        <div className="review">
            <p>{stars}</p>
            <h1>{review}</h1>
            <span>
                <img src={img} alt="profile pic" />
                <h2>{author}</h2>
            </span>

        </div>
    )
}

export default Review