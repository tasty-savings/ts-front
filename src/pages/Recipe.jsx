import React from "react";
import RecipeHeader from "../services/RecipeHeader.jsx";
import IngredientList from "../services/IngredientList.jsx";
import CookingStepList from "../services/CookingStepList.jsx";

const Recipe = () => {
    return (
        <div className="recipe-page w-full">
            <RecipeHeader />
            <IngredientList />
            <CookingStepList />
        </div>
    );
}

export default Recipe;