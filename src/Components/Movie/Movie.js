import css from './MovieCard.module.css'

const Movie = ({movie}) => {
    const{original_title,vote_average}=movie
    return (
        <div className={css.Card}>
            <h2>{original_title}</h2>
            <p>{vote_average}</p>

        </div>
    );
};

export {Movie};