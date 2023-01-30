import { useState, useEffect } from "react"
import { useFetchGifs } from "../hooks/useFetchGif"
import GifItem from "./GifItem"


const GifGrid = ({ category }) => {
    
    const {images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid