import css from './BadgeStyle.module.css'


const GenreBadge = ({ genre, genre_id }) => {
    const { id, name } = genre;


    return (

        <>

        {genre_id.map(genre=>genre===id && <div key={genre} className={css.genre1}>{name}</div>)}

        </>


    )

};

export { GenreBadge };