import StarRatings from 'react-star-ratings'




function Stars({rating}) {


    return (
        <div className="App">
            <div className="Wrapper">
                <StarRatings
                    rating={rating}
                    starRatedColor="#FFD700"
                    starEmptyColor="#999999"
                    starHoverColor="#FFD700"
                    starSpacing="5px"
                    starDimension="20px"
                    numberOfStars={10}
                    changeRating={null}
                    name='rating'
                />

            </div>
        </div>
    );
}

export {Stars};