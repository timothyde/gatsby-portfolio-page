import React from 'react';
import Img from 'gatsby-image';

import { ShowcaseCaption, ShowcaseEmbed, ShowcaseImage, ShowcaseVideo } from '../showcase';
import Tag from '../buttons/tag';

const AboAdieu = ({ image }) => {
  return (
    <div>
      <h5>/SHOWCASE/001</h5>
      <ShowcaseImage>
        <Img
          title="Abo Adieu Screenshot"
          alt="iPhone displaying a native app"
          sizes={image.sizes}
        />
      </ShowcaseImage>
      <ShowcaseCaption>
        <h2>Abo Adieu</h2>
        <Tag color='#fa8c16'>iOS</Tag>
        <Tag color='#fa8c16'>UI</Tag>
        <Tag color='#fa8c16'>UX</Tag>
        <Tag color='#fa8c16'>Code</Tag>
      </ShowcaseCaption>
    </div>
  );
};

export default AboAdieu;