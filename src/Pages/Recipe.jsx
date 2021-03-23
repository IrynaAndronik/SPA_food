import { getMealById } from '../api'
import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Loading} from "../components/Preloader";
import {RecipeView} from "../components/RecipeView";
import {Meal} from "../components/Meal";

function Recipe( props ) {
    const {idMeal ,strCategory} = useParams();
    const {goBack} = useHistory();
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        getMealById(idMeal).then(data => setRecipe(data.meals[0]));
    },[idMeal]);

    return <>
        <button className='btn' onClick={goBack}>Go Back</button>
        {!recipe.idMeal ? <Loading /> : (
            <div className="recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h1>{recipe.strMeal}</h1>
                <h6>{strCategory}</h6>
                {recipe.strArea ? <h6>{recipe.strArea}</h6> : null }
                <p>{recipe.strInstructions}</p>
                <table className="centered">
                    <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        Object.keys(recipe).map(key => {
                            if(key.includes('Ingredient') && recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>
                                            {recipe[`strMeasure${key.slice(13)}`]}
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
                    </tbody>
                </table>

                {recipe.strYoutube ? (
                    <div className="row">
                        <h5 style={{margin: '2rem 0 1.5 rem'}}>Video</h5>
                    <iframe
                        title={idMeal}
                        src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                            -11
                        )}`}
                        allowFullScreen
                        />
                    </div>
                ) : null }
            </div>
        )


        }
    </>

}

export {Recipe}
