import {Link, UNSAFE_NavigationContext, useNavigate, useParams} from "react-router-dom";

const Word = (props) => {
    const navigate = useNavigate();

    const { param, color1, color2 } = useParams();

    const goHome = () => {
        navigate('/home');
    }

    return(
        <div>
            <button onClick={goHome}>Home</button>
            {
                isNaN(param)?
                <h1 style={{color: color1, backgroundColor: color2}}>The Word is: {param}</h1>
                : <h1 style={{color: color1, backgroundColor: color2}}>The Number is: {param}</h1>

            }
            <button><Link to={'/hello/red/blue'}>Color it?</Link></button>
        </div>

    )
}

export default Word;