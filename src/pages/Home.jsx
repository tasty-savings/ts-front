import React from 'react';
import SearchBar from "../components/SearchBar.jsx";
import TitleWithItems from "../components/TitleWithItems.jsx";
import MenuSearchForm from "../services/MenuSearchForm.jsx";
import IngredientList from "../services/IngredientList.jsx";

const Home = () => {
    return (
        <div className="Home-page w-screen">
            <h1>Home</h1>
            <MenuSearchForm />
            <IngredientList />
        </div>
    );
};

export default Home;