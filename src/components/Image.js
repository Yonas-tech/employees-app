import React from 'react'

export default function Image({imageName}) {
    const url = `../Images/${imageName}.png`;
  return (
    <>
        <img src={url} alt="" />
    </>
  )
}


