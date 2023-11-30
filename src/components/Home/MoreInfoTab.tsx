import React from 'react';

type moreInfoTabInterface = {
  moreInfoTabImage: any;
  moreInfoTabHeaderText: String;
};

function MoreInfoTab({
  moreInfoTabImage,
  moreInfoTabHeaderText,
}: moreInfoTabInterface) {
  return (
    <div className="more-info-tab-container">
      <img
        className="more-info-tab-image"
        src={moreInfoTabImage}
        alt="more-info"
        loading="lazy"
      />
      <div className="more-info-tab-header">{moreInfoTabHeaderText}</div>
      <div className="more-info-tab-text">
        It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </div>
    </div>
  );
}

export default MoreInfoTab;
