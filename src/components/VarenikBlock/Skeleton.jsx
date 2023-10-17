import React from 'react';
import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={300}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="98" height="81" />
      <rect x="0" y="103" rx="0" ry="0" width="108" height="15" />
      <rect x="1" y="127" rx="0" ry="0" width="108" height="15" />
      <rect x="24" y="151" rx="0" ry="0" width="63" height="9" />
      <rect x="22" y="170" rx="0" ry="0" width="63" height="9" />
    </ContentLoader>
  );
}

export default Skeleton;
