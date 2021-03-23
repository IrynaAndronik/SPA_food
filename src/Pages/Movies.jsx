import { useParams, useHistory, useLocation, useRouteMatch } from 'react-router-dom'

function Movies() {
    const { title } = useParams();
    const { goBack } = useHistory();
    const value = useLocation();
    const value2 = useRouteMatch()
        console.log(value);
    console.log(value2);


    return(
        <>
            <h1>Some movie {title}</h1>
            <button className='btn' onClick={goBack}>Go back</button>
        </>

    )
}

export { Movies }
