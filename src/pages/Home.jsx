import React from 'react';
import SearchBar from "../components/SearchBar.jsx";
import TitleWithItems from "../components/TitleWithItems.jsx";
import MenuSearchForm from "../services/MenuSearchForm.jsx";
import IngredientList from "../services/IngredientList.jsx";
import CookingStepList from "../services/CookingStepList.jsx";

const Home = () => {
    return (
        <div className="Home-page w-full">
            <h1>Home</h1>
            <MenuSearchForm />
            {/*<TitleWithItems title='Empty' items={[()=><></>]} className='mb-3'></TitleWithItems>*/}
            <IngredientList className='mb-3' />
            <CookingStepList />
        </div>
    );
};

export default Home;