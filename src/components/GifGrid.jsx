import { useState, useEffect } from "react"
import GifItem from "./GifItem"
import { getGifs } from "../helpers/getGifs"


const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages(newImages)
    }

    useEffect( () => {
        getImages()
    }, [])    

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