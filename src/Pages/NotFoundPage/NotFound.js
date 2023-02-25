
import nfp from './404page.png'


const NotFound = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', height:'92.5vh'}}>
            <img src={nfp} alt=""/>
        </div>
    );
};

export {NotFound};