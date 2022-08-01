import { GridValueGetterParams } from '@mui/x-data-grid';
import { GridValueFormatterParams } from '@mui/x-data-grid';
import { format } from 'date-fns';
import Moment from 'react-moment';

function convertDate(inputFormat) {
  function pad(s) {
    return (s < 10) ? '0' + s : s;
  }

  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}

export const userColumns = [{ field: 'id', headerName: 'ID', width: 130 },

  {
    field: 'type', headerName: 'Тип оплаты', width: 230, renderCell: (params) => {
      let qwe = '';
      switch (params.row.type) {
        case 1:
          return qwe = 'Ввод';
        case -1 :
          return qwe = 'Вывод';
        default:
          return qwe;
      }
      return (<div>
        <p>{qwe}</p>
      </div>);
    },
  }, {
    field: 'commission', headerName: 'Комиссия', width: 230,
  }, {
    field: 'sender_pan', headerName: 'Карта Отправителя', width: 230,
  },
  {
    field: 'receiver_pan', headerName: 'Карта Получателя', width: 230,
  }, {
    flex: 1, field: 'created_at', headerName: 'Начало заявки', width: 230, renderCell: params => {
      return (<div className="important_rows_table">
        {/*<p>{convertDate(params.row.create_time)}</p>*/}
        <Moment format="D MMM YYYY - HH:mm:ss" withTitle>{params.row.created_at}</Moment>
        <time></time>

        {/*<p>{format(new Date(params.row.create_time), 'dd/MM/Y - HH:mm:ss')}</p>*/}
      </div>);
    }, //     type: 'date',
//     valueFormatter: (params: GridValueFormatterParams) => {
//       // first converts to JS Date, then to locale option through date-fns
//       return formatDate(params.value);
//     },
// // valueGetter for filtering
//     valueGetter: (params: GridValueGetterParams) => {
//       return formatDate(params.value);
//     },
  }, // {
  //   field: 'create_time',
  //   headerName: 'Начало заявки',
  //   width: 230,
  // },
  {
    field: 'amount', headerName: 'Сумма', width: 130,
  }, {
    field: 'updated_at', headerName: 'Окончание заявки', width: 200, renderCell: params => {
      return (<div className="important_rows_table">
        {/*<p>{convertDate(params.row.create_time)}</p>*/}
        <Moment format="D MMM YYYY - HH:mm:ss" withTitle>{params.row.updated_at}</Moment>
        <time></time>

        {/*<p>{format(new Date(params.row.create_time), 'dd/MM/Y - HH:mm:ss')}</p>*/}
      </div>);
    },
  }, {
    field: 'status', headerName: 'Статус', width: 100, renderCell: (params) => {
      let qwe = ``;
      switch (params.row.status) {
        case 0 :
          return qwe = 'В обработке';
        case 1:
          return qwe = 'Успешно';
        case -1 :
          return qwe = 'Не успешно';
        default :
          return qwe;
      }


      return <div className={`cellWithStatus `}>
        <p>{qwe}</p>
      </div>;
    },
  },

  // {
  //   field: 'image_path',
  //   headerName: 'image',
  //   width: 230,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImgNews" src={`http://localhost:5000/${params.row.image_path}`} alt="avatar" />
  //         {/*{params.row.username}*/}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
