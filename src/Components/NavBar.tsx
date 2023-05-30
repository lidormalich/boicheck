import { FunctionComponent } from "react";
import { Link } from "react-router-dom";



interface NavBarProps {
}

const NavBar: FunctionComponent<NavBarProps> = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/"><span className="dispaly-1">מערכת בדיקה
                    <i className="fa-solid fa-person-circle-check"></i></span>



                </Link>
                {/* <Link className="navbar-brand" to="/123">מערכת בדיקה   </Link>
                <Link className="navbar-brand" to="/123">מערכת בדיקה    </Link> */}

            </nav>
        </>);
}

export default NavBar;