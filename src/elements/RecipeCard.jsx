import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };
  return (
    <div className="recipe-card">
      <div>
        <div className="recipe-img-container">
          <img src={recipe.image_url} alt="food image" />
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;
