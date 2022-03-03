import {Link, useNavigate} from "react-router-dom";

const Home = (props) => {


    return(
        <div>
            <h1>Welcome!</h1>
            <Link to={'/hello'}>Hello</Link>
            <br></br>
            <Link to={'/contact'}>Contact</Link>
        </div>

    )
}

export default Home;