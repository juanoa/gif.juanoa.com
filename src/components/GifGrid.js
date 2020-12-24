import React from 'react'
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {data:gifs, loading} = useFetchGifs(category);

    return (
        <>
            <h3><span className="badge rounded-pill bg-primary animate__animated animate__fadeIn mt-5 mb-3">{category}</span></h3>
            { loading && <p className="animate__animated animate__flash">Cargando</p>}
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {
                    gifs.map( (img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}

