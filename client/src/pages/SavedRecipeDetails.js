import { useState, useEffect } from 'react'
import { UnBookmark } from '../components/UnBookmark'

const SavedRecipeDetails = ({ checkBookmark, savedRecipe }) => {
  const [active, setActive] = useState('details')
  return (
    // <div className="recipe-detail">
    <div className="recipe-wrap">
      <div className="title-image">
        <h3>{savedRecipe.title}</h3>
        <img src={savedRecipe.image} />
        <UnBookmark savedRecipe={savedRecipe} />
      </div>

      <div className="button-wrap">
        <button
          className={active === 'details' ? 'active' : ''}
          id="details-button"
          onClick={() => setActive('details')}
        >
          Details
        </button>
        <button
          id="details-button"
          className={active === 'ingredients' ? 'active' : ''}
          onClick={() => setActive('ingredients')}
        >
          Ingredients
        </button>
        <button
          id="details-button"
          className={!active === 'recipe' ? 'active' : ''}
          onClick={() => setActive('recipe')}
        >
          Recipe
        </button>
      </div>
      {active === 'details' && (
        <div className="summary-wrap">
          <p dangerouslySetInnerHTML={{ __html: savedRecipe.summary }}></p>
        </div>
      )}
      {/* {active === 'ingredients' && (
        <ul>
          {recipe.extendedIngredients.map((ingrendient) => (
            <li>{ingrendient.original}</li>
          ))}
        </ul>
      )} */}
      {active === 'recipe' && (
        <p dangerouslySetInnerHTML={{ __html: savedRecipe.instructions }}></p>
        // <ol>
        //   {recipe.analyzedInstructions[0].steps.map((instruction) => (
        //     <li>{instruction.step}</li>
        //   ))}
        // </ol>
      )}
    </div>
  )
}

export default SavedRecipeDetails
