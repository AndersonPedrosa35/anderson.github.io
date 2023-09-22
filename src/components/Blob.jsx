import React from 'react';
import '../styles/Global.css';

function Blob({ foto1 }) {
  return (
    <div className="home__img">
      <svg className="home__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha">
        <circle cx="100" cy="100" r="95" fill="#54f396" />
        </mask>
        <g mask="url(#mask0)">
        <circle cx="100" cy="100" r="95" fill="#54f396" />
          <image className="home__blob-img" x="3" y="-17" xlinkHref={ foto1 } />
        </g>  
      </svg>
    </div>
  );
}

export default Blob;
