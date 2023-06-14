import { useState } from "react";
import RecipeCard from "../../elements/RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";
import "./SearchInput.css";

const SearchInput = ({ recipes }) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <section className="recipe-section">
      <h2>Search a recipe!</h2>
      <span className="search-bar">
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input type="text" value="" placeholder="Search for a Recipe" />
      </span>
      <div className="recipe-container">
        {recipeDisplay ? recipeDisplay : <h2>No Recipes :</h2>}
      </div>
    </section>
  );
};

export default SearchInput;
