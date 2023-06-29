import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

const NotFound = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="notfound-back">
      <CSSTransition in={inProp} timeout={500} classNames="fade">
        <h1 className="notfound">Oops!</h1>
      </CSSTransition>
      <div className="div-notfound">
        <CSSTransition in={inProp} timeout={500} classNames="fade" unmountOnExit>
          <p className="p-notfound">404</p>
        </CSSTransition>
        <CSSTransition in={inProp} timeout={500} classNames="fade" unmountOnExit>
          <p className="page-p">Page Not Found</p>
        </CSSTransition>
      </div>
    </div>
  );
};

export default NotFound;
