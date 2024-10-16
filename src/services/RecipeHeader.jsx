import React, {useState} from "react";
import Header from "../components/Header.jsx";
import IconButton from "../components/IconButton.jsx";

const Logo = () => {
    return (
        <div className='flex justify-start'>
            <h1>Logo</h1>
        </div>
    );
};

const RecipeName = () => {
    return (
        <div className='flex justify-center'>
            <h1>갈비찜</h1>
        </div>

    );
};

const ShareIcon = () => {
    return (
        <i className="fa-solid fa-share"></i>
    );
}

const BookMarkIcon = (isMarked) => {
    return (
        <>
            {isMarked ? <i className="fa-solid fa-bookmark"></i>:<i className="fa-regular fa-bookmark"></i>}
        </>
    );
}

const FuncButtons = () => {
    // 현재 레시피의 북마크 여부
    const [isMarked, setMarked] = useState(false);

    const share = () => {
        console.log('share success!');
    }

    const bookMark = () => {
        console.log('bookMark success!');
        if (isMarked) {
            setMarked(false);
        } else {
            setMarked(true);
        }
    }

    return (
        <div className='grid grid-cols-4 justify-end'>
            <div></div>
            <div></div>
            <IconButton icon={ShareIcon} onClick={share} label='share-btn'/>
            <IconButton icon={BookMarkIcon(isMarked)} onClick={bookMark} label='bookmart-btn'/>
        </div>
    );
}

const RecipeHeader = () => {
    return (
        <Header first={Logo} second={RecipeName} third={FuncButtons} />
    );
}

export default RecipeHeader;