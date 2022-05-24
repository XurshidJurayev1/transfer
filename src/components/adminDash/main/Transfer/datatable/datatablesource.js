import { GridValueGetterParams } from '@mui/x-data-grid';
import { GridValueFormatterParams } from '@mui/x-data-grid';

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 130 },

  {
    field: 'turi',
    headerName: 'Тип оплаты',
    width: 230,
    renderCell: (params) => {
      let qwe = '';
      switch (params.row.turi) {
        case '1':
          return qwe = 'Ввод';
        case '2' :
          return qwe = 'Вывод';
        default:
          return qwe;
      }
      return (
        <div>
          <p>{qwe}</p>
        </div>
      );
    },
  },
  {
    field: 'kom',
    headerName: 'Комиссия',
    width: 230,
  },
  // {
  //   field: 'card',
  //   headerName: 'Отправитель',
  //   width: 230,
  // },
  {
    field: 'card',
    headerName: 'Отправитель-ID',
    width: 230,
  },
  // {
  //   field: 'card00',
  //   headerName: 'Получатель',
  //   width: 230,
  // },
  {
    flex: 1,
    field: 'create_time',
    headerName: 'Начало заявки',
    width: 230,
    renderCell: params => {
      return (
        <div className="important_rows_table">
          <p>{params.row.create_time}</p>
        </div>
      );
    },
//     type: 'date',
//     valueFormatter: (params: GridValueFormatterParams) => {
//       // first converts to JS Date, then to locale option through date-fns
//       return formatDate(params.value);
//     },
// // valueGetter for filtering
//     valueGetter: (params: GridValueGetterParams) => {
//       return formatDate(params.value);
//     },
  },
  // {
  //   field: 'create_time',
  //   headerName: 'Начало заявки',
  //   width: 230,
  // },
  {
    field: 'amount',
    headerName: 'Сумма',
    width: 130,
  },
  {
    field: 'final_time',
    headerName: 'Окончание заявки',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Статус',
    width: 100,
    renderCell: (params) => {
      let qwe = '';

      switch (params.row.status) {
        case '1' :
          return qwe = 'В обработке';
        case '2':
          return qwe = 'Успешно';
        case '3' :
          return qwe = 'Не успешно';
        default :
          return qwe;
      }


      return (
        <div className={`cellWithStatus `}>
          <p>{qwe}</p>
        </div>
      );
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
