


const Trailer = ({video}) => {

    const {key,} = video

    return (
        <div style={{marginTop:'10px'}}>{

            <iframe width="600" height="360" src={`https://www.youtube.com/embed/${key}`} frameBorder="0"></iframe>
        }


        </div>
    );
};

export {Trailer};