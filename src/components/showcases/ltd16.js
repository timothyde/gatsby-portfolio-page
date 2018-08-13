import React from 'react';

import { ShowcaseCaption, ShowcaseEmbed, ShowcaseImage, ShowcaseVideo } from '../showcase';
import Tag from '../buttons/tag';

const LTD16 = () => {
  return (
    <div>
      <h5>/SHOWCASE/003</h5>
      <ShowcaseVideo>
        <ShowcaseEmbed>
          <iframe src='https://player.vimeo.com/video/159364112' allowFullScreen></iframe>
        </ShowcaseEmbed>
      </ShowcaseVideo>
      <ShowcaseCaption>
        <h2>Liquid Force LTD 2016</h2>
        <Tag color='#fa8c16'>Storyboard</Tag>
        <Tag color='#fa8c16'>Modeling</Tag>
        <Tag color='#fa8c16'>Animation</Tag>
        <Tag color='#fa8c16'>Rendering</Tag>
      </ShowcaseCaption>
    </div>
  );
};

export default LTD16;