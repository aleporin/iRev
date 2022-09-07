import { useState } from 'react'

const CreateRecipe = ({
  handleRecipeSubmit,
  recipeForm,
  handleRecipeChange
}) => {
  return (
    <div>
      <form className="recipe-form">
        <label>Recipe Name</label>
        <input
          onChange={handleRecipeChange}
          value={recipeForm.recipe_name}
          name="recipe_name"
          type="text"
          placeholder="Give your recipe a meaningful name..."
        />
        <label>Description</label>
        <input
          onChange={handleRecipeChange}
          value={recipeForm.desc}
          name="desc"
          type="text"
          placeholder="Describe your recipe"
        />
        <label>Process</label>
        <input
          onChange={handleRecipeChange}
          value={recipeForm.process}
          name="process"
          type="text"
          placeholder="Describe your the process to make your recipe... The more detail the better"
        />
        <label>Process</label>
        <input
          onChange={handleRecipeChange}
          value={recipeForm.process}
          name="process"
          type="text"
          placeholder="Describe your the process to make your recipe... The more detail the better"
        />
        <label>Image</label>
        <input
          onChange={handleRecipeChange}
          value={recipeForm.image}
          name="image"
          type="text"
          placeholder="Post a link to your recipe!"
        />
        <label htmlFor="category">Category:</label>
        <select
          onChange={handleRecipeChange}
          value={recipeForm.category}
          name="category"
        >
          <option type="option" value="" disabled hidden></option>
          <option type="snack" value="snack">
            Snack
          </option>
          <option type="appetizer">Appetizer</option>
          <option type="entree">Entree</option>
          <option type="dessert">Dessert</option>
          <option type="cocktail">Cocktail</option>
        </select>
      </form>
    </div>
  )
}

export default CreateRecipe
