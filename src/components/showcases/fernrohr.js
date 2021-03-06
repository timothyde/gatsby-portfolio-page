import React from 'react'
import Img from 'gatsby-image'

import {
  ShowcaseCaption,
  ShowcaseEmbed,
  ShowcaseImage,
  ShowcaseVideo,
} from '../showcase'
import Tag from '../buttons/tag'

const Fernrohr = ({ image }) => {
  return (
    <div>
      <h5>/SHOWCASE/002</h5>
      <ShowcaseImage>
        <Img
          title="Fernrohr Screenshot"
          alt="Laptop displaying a web app"
          sizes={image.sizes}
        />
      </ShowcaseImage>
      <ShowcaseCaption>
        <h1>Fernrohr</h1>
        <Tag color="#fa8c16">Web</Tag>
        <Tag color="#fa8c16">UI</Tag>
        <Tag color="#fa8c16">UX</Tag>
        <Tag color="#fa8c16">Code</Tag>
      </ShowcaseCaption>
    </div>
  )
}

export default Fernrohr
