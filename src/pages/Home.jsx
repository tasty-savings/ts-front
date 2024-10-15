import React from 'react';
import SearchBar from "../components/SearchBar.jsx";
import TitleWithItems from "../components/TitleWithItems.jsx";
import MenuSearchForm from "../services/MenuSearchForm.jsx";

const Home = () => {
    return (
        <div className="Home-page w-screen">
            <h1>Home</h1>
            <MenuSearchForm />

            <TitleWithItems title='TitleX' items={[
                () => <span className='break-words'>hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1hello1</span>,
                () => <span>hello2</span>,
                () => <span>hello3</span>
            ]}/>
        </div>
    );
};

export default Home;