import './list.scss';
import Datatable from './datatable/Datatable';
import { Helmet } from 'react-helmet';
import React from 'react';

const TransferList = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="" content="cabinet transfer report uzspay" />
        <title>Cabinet | Transfer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Datatable />
    </>
  );
};

export default TransferList;