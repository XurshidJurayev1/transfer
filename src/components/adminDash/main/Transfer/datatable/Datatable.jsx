import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listTransfer } from '../../../../../action';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';

const Datatable = (props) => {
const [perPage, setPerPage] = useState('')

  const render = () => {
    props.listTransfer();
  };
  console.log(props);

  useEffect(() => {
    render();
  }, []);


  const actionColumn = [
    {
      field: 'code_error',
      headerName: 'Код ошибки',
      width: 200,
      renderCell: (params) => {
        return (<div className="cellAction" style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'rgb(112 112 112)',
        }}>

          <EditIcon className="icon" />


        </div>);
      },
    },
  ];


  return (<div className="datatable">
    <div className="datatableTitle">
      {/*Add New Course*/}
      {/*<Link to="/admin/courses/new" className="link">*/}
      {/*  Add*/}
      {/*</Link>*/}
    </div>
    <DataGrid
      className="datagrid"
      // getRowId={(row) => row.id}
      rows={props.list}
      loading={props.list.length === 0}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
    />
  </div>);
};

const mapStateToProps = (state) => {
  return {
    list: state.listTransfer,
  };
};

export default connect(mapStateToProps, { listTransfer })(Datatable);
