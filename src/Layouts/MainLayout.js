import {Header} from "../Components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>

          <Header/>

            <Outlet/>



        </>
    );
};

export {MainLayout};