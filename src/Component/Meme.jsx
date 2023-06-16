import React from 'react'
import memes from '../Data/aalu.json'
import SingleMeme from './SingleMeme';

const Meme = () => {

  return (
    memes.map((meme,i)=>{
        return <SingleMeme meme={meme} key={i}/>
    })
  )
}

export default Meme