import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {getFilteredCategory} from '../api';
import {Loading} from '../components/Preloader'
import {MealList} from "../components/MealList";

function Category() {
    const { name } = useParams();
    const [ meals, setMeals ] = useState([]);
    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    },[name]);

    return <>
        <button className='btn' onClick={goBack}>Go Back</button>
        {!meals.length ? <Loading /> : <MealList meals={meals} />}

    </>
}

export {Category}
