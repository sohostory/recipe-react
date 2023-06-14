import React from "react";
import { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import SearchInput from "./SearchInput";
import axios from "axios";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <SearchInput recipes={recipes} />
    </div>
  );
};

export default HomeScreen;
