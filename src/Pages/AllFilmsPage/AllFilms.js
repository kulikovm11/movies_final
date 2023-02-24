import {Movies} from "../../Components";

const AllFilms = ({isLight}) => {
    return (
        <div>
            <Movies isLight={isLight}/>
        </div>
    );
};

export {AllFilms};