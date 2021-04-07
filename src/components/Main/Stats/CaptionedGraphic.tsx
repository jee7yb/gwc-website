import React from 'react';

interface Props {
  img: string;
  alt: string;
  caption: string;
}

function CaptionedGraphic(props: Props) {
  return (
    <div>
      <img src={props.img} alt={props.alt} />
      <p>{props.caption}</p>
    </div>
  );
}

export default CaptionedGraphic;