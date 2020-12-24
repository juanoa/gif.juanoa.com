import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    // const handleApp = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <>
            <h1 className={'text-center mb-3'}>Buscador de GIFs</h1>
            <AddCategory setCategories={setCategories} />


            <div>
                {
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </div>
        </>
    )
}