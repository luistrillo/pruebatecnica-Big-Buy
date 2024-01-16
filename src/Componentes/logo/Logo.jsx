import React from 'react'

export default function Logo({UrlBigBuy, ImgBigBuy, clase}) {
  return (
    <a href={UrlBigBuy}>
        <img src={ImgBigBuy} class={clase}></img>
    </a>
  )
}
