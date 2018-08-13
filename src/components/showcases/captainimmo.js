import React from 'react';
import Img from 'gatsby-image';

import { ShowcaseCaption, ShowcaseEmbed, ShowcaseImage, ShowcaseVideo } from '../showcase';
import Tag from '../buttons/tag';

const CaptainImmo = ({ image }) => {
  return (
    <div>
      <h5>/SHOWCASE/005</h5>
      <ShowcaseImage>
        <Img
          title="Captain Immo Screenshot"
          alt="Laptop displaying a web page"
          sizes={image.sizes}
        />
      </ShowcaseImage>
      <ShowcaseCaption>
        <h2>Captain Immo</h2>
        <Tag color='#fa8c16'>iOS</Tag>
        <Tag color='#fa8c16'>UI</Tag>
        <Tag color='#fa8c16'>UX</Tag>
        <Tag color='#fa8c16'>Code</Tag>
      </ShowcaseCaption>
    </div>
  );
};

export default CaptainImmo;