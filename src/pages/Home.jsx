import React from 'react';
import SearchBar from "../components/SearchBar.jsx";
import TitleWithItems from "../components/TitleWithItems.jsx";
import MenuSearchForm from "../services/MenuSearchForm.jsx";
import IngredientList from "../services/IngredientList.jsx";
import CookingStepList from "../services/CookingStepList.jsx";
import Header from "../components/Header.jsx";

const Home = () => {
    return (
        <div className="Home-page w-full">
            <MenuSearchForm />
        </div>
    );
};

export default Home;