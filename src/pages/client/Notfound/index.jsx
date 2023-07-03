import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

const NotFound = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>NotFound</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
    </>
  );
};

export default NotFound;
