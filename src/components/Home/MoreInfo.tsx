import React from 'react';
import MoreInfoTab from './MoreInfoTab';
import globe from '../../assets/globe.png';
import quality from '../../assets/quality.png';
import tag from '../../assets/tag.png';
import lock from '../../assets/lock.png';

function MoreInfo() {
  return (
    <div className="more-info-container">
      <MoreInfoTab
        moreInfoTabImage={globe}
        moreInfoTabHeaderText={'Worldwide Shipping'}
      />
      <MoreInfoTab
        moreInfoTabImage={quality}
        moreInfoTabHeaderText={'Best Quality'}
      />
      <MoreInfoTab
        moreInfoTabImage={tag}
        moreInfoTabHeaderText={'Best Offers'}
      />
      <MoreInfoTab
        moreInfoTabImage={lock}
        moreInfoTabHeaderText={'Secure Payments'}
      />
    </div>
  );
}

export default MoreInfo;
