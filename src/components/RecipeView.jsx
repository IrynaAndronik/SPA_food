


function RecipeView(props) {
    const {strInstructions, strMealThumb, strYoutube, strIngredient1, strMeasure1, strMeal  } = props;

return  <div className="card">
            <div className="card-image" >
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
                <p>{strInstructions}</p>
                <p>{strIngredient1}</p>
            </div>
        </div>
}
export {RecipeView}
