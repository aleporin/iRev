import React from 'react'

const Ingredient = ({
  handleRecipeSubmit,
  recipeForm,
  handleRecipeChange,
  handleIngredientAdd,
  handleIngredientChange,
  ingredient
}) => {
  return (
    <div>
      <label htmlFor="ingredient">Ingredient</label>
      <input
        onChange={handleIngredientChange}
        value={ingredient}
        name="ingredient"
        type="text"
        placeholder="Post a link to your recipe!"
      />
      <button onClick={handleIngredientAdd}> + </button>

      <div>
        {recipeForm.ingredients.map((ingredient) => (
          <div key={ingredient.id}>{ingredient}</div>
        ))}
      </div>
    </div>
  )
}

export default Ingredient
