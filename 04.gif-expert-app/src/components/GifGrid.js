import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs();
  }, [])

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Zenki&limit=10&api_key=HzxBZCiQ5aCXqExRcZqWwugixpckjNZy`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    setImages(gifs);
  }

  return (
    <>
      <h3>{category}</h3>

      {
        images.map(img => (
          <GifGridItem
            key={img.id}
            img={img}
            {...img}
          />
        ))
      }

    </>
  )
}
