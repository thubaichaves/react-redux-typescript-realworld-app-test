import React from 'react';
import areEqual from 'fast-deep-equal';

import { Link } from 'react-router-dom';

interface Props {
  previous?: () => void,
}


const BackLink = React.memo<Props>(({previous}) => {
  return (
    <div>
        <span onClick={previous as ()=>void} className="link">
          {'< Back'}
        </span>  
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/" className="link">
        {'< Home'}
      </Link>
    </div>
  );
}, areEqual);

export default BackLink;
