import React from 'react'

import {
  ShowcaseCaption,
  ShowcaseEmbed,
  ShowcaseImage,
  ShowcaseVideo,
} from '../showcase'
import Tag from '../buttons/tag'

const LF4D = () => {
  return (
    <div>
      <h5>/SHOWCASE/006</h5>
      <ShowcaseVideo>
        <ShowcaseEmbed>
          <iframe
            src="https://player.vimeo.com/video/193990616"
            allowFullScreen
          />
        </ShowcaseEmbed>
      </ShowcaseVideo>
      <ShowcaseCaption>
        <h1>Liquid Force 4D Bindings</h1>
        <Tag color="#fa8c16">Storyboard</Tag>
        <Tag color="#fa8c16">Modeling</Tag>
        <Tag color="#fa8c16">Animation</Tag>
        <Tag color="#fa8c16">Rendering</Tag>
        <Tag color="#fa8c16">Sound Design</Tag>
      </ShowcaseCaption>
    </div>
  )
}

export default LF4D
