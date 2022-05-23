import React from 'react';
import './info.scss';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import DataTable from 'react-data-table-component';
import { columns, customStyles, data } from './Data';

const PageInfo = (props) => {


  const user = props.user.user;

  Number.prototype.toDivide = function () {
    var int = String(this);
    if (int.length <= 3) return int;
    var space = 0;
    var number = '';

    for (var i = int.length - 1; i >= 0; i--) {
      if (space == 3) {
        number = ' ' + number;
        space = 0;
      }
      number = int.charAt(i) + number;
      space++;
    }

    return number;
  };


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="" content="cabinet info uzspay" />
        <title>Cabinet | Info</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="col-md-12">
        <h1 className="aler alert-warning text-warning text-center">info</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <DataTable customStyles={customStyles} columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(PageInfo);
