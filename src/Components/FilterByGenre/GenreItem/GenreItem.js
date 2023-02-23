import {useNavigate} from "react-router-dom";

const GenreItem = ({genre}) => {

    const { id, name } = genre

    const navigate = useNavigate()

    return (
        <div>

            <div  style={{color:'white', borderBottom:'1px solid blue'}}>{name}
                <button onClick={()=>navigate(id.toString(), {state:genre})}>Клик</button>
            </div>


        </div>
    );
};

export {GenreItem};