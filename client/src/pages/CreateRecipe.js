import { useState } from 'react'
import { useNavigate } from 'react-router'
import { CreateNewRecipe } from '../services/RecipeServices'

const CreateRecipe = () => {
  let navigate = useNavigate()
  const handleChange = (error) => {
    setFormData({ ...formData, [error.target.name]: error.target.value })
  }

  const [formData, setFormData] = useState({
    recipe_name: '',
    desc: '',
    ingredients: '',
    category: '',
    cook_time: '',
    process: '',
    image: ''
  })

  const handleSubmit = async (error) => {
    error.preventDefault()
    await CreateNewRecipe({
      recipe_name: formData.recipe_name,
      desc: formData.desc,
      ingredients: formData.ingredients,
      category: formData.category,
      cook_time: formData.cook_time,
      process: formData.process,
      image: formData.image
    })
    setFormData({
      recipe_name: '',
      desc: '',
      ingredients: '',
      category: '',
      cook_time: '',
      process: '',
      image: ''
    })
    navigate('/login')
  }
  return <div>CreateRecipe</div>
}

export default CreateRecipe
