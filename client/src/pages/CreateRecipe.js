import { useState } from 'react'

const CreateRecipe = ({
  handleRecipeSubmit,
  recipeForm,
  handleRecipeChange
}) => {
  return (
    <div>
      <form>
        <label>Recipe Name</label>
        <input
          onChange={handleRecipeChange}
          name="recipe_name"
          type="text"
          placeholder="Give your recipe a meaningful name..."
        />
      </form>
    </div>
  )
}

export default CreateRecipe
