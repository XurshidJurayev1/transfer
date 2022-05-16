import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listTransfer } from '../../../../../action';
import EditIcon from '@mui/icons-material/Edit';
import { Box, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const Datatable = (props) => {
  const [perPage, setPerPage] = useState('');
  const [card, setCard] = useState('');
  const [accaunt, setAccount] = useState('');
  const [cardId, setCardId] = useState('');
  const [pay, setPay] = useState('');
  const [status, setStatus] = useState('');
  const [filtred, setFiltred] = useState('');
  const [filtrFunc, setFiltrFunc] = useState(false);
  const [date1, setDate1] = useState(new Date('mm/dd/yyyy'));
  const [date2, setDate2] = useState(new Date('mm/dd/yyyy'));

  let list = props.list;

  const filtr = (e) => {

    const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
      .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
      .filter(i => status === '' ? i : i.status === status)
      .filter(i => pay === '' ? i : i.turi === pay);
    // .filter(i => date1 || date2 ? new Date(date1) < new Date(i.create_time) < new Date(date2) : i);

    const res = list.filter(i =>
      new Date(i.create_time) > new Date(i.create_time),
    );
    console.log(new Date('07.05.2022 03:54:16'));

    setFiltred(result);
    setFiltrFunc(true);

  };

  console.log(date1);
  console.log(date2);

  const reset = () => {
    setFiltred('');
    setFiltrFunc(false);
  };


  const render = () => {
    props.listTransfer();
    setFiltred(props.list);
  };


  useEffect(() => {
    render();
    setFiltred(props.list);

  }, []);


  const actionColumn = [{
    field: 'code_error', headerName: 'Код ошибки', width: 200, renderCell: (params) => {
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
  }];
  console.log(list);


  return (<div className="datatable">
    <div className="datatableTitle">
      <Box
        className="filter-inputs">
        <Typography component="h1" mb={3} variant="h5"> Выберите метод фильтрации </Typography>

        <Box className="form_input_flex">
          <Box className="form_input_fields">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Выборка дат с"
                  value={date1}
                  onChange={(newValue) => {
                    setDate1(newValue);
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Box>
          <Box className="form_input_fields">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Выборка дат до"
                  value={date2}
                  onChange={(newValue) => {
                    setDate2(newValue);
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Box>
          <Box className="form_input_fields">
            <TextField
              type="number"
              fullWidth
              value={cardId}
              onChange={(e) => setCardId(e.target.value)}
              id="outlined-basic"
              label="Id транзакции"
              variant="outlined" />
          </Box>
          <Box className="form_input_fields">
            <TextField
              type="number"
              fullWidth
              value={card}
              onChange={(e) => setCard(e.target.value)}
              id="outlined-basic"
              label="По карте"
              variant="outlined" />
          </Box>

          <Box className="form_input_fields">
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
              >
                Выберите аккаунт
              </InputLabel>
              <Select
                disabled={true}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={accaunt}
                label="Выберите аккаунт"
                onChange={(e) => setAccount(e.target.value)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="form_input_fields">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Тип оплаты</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pay}
                defaultValue={''}
                label="Тип оплаты"
                onChange={(e) => setPay(e.target.value)}
              >
                <MenuItem value={''} defaultValue={true}>Все</MenuItem>
                <MenuItem value={'1'}>Ввод</MenuItem>
                <MenuItem value={'2'}>Вывод</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="form_input_fields">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Статус транзакции</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Статус транзакции"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={''}>Все</MenuItem>
                <MenuItem value={'1'}>В Обработке</MenuItem>
                <MenuItem value={'2'}>Успешно</MenuItem>
                <MenuItem value={'3'}>Не Успешно</MenuItem>
              </Select>
            </FormControl>
          </Box>

        </Box>
        <Box sx={{
          width: '100%', display: 'flex', flexWrap: 'wrap',

        }}>
          <button style={{ marginRight: '20px' }} type="button" className="btn btn-primary primary_btn"
                  onClick={() => filtr()}> Filtr
          </button>
          <button type="button" className="btn btn-primary primary_btn" onClick={() => reset()}> reset</button>
        </Box>

      </Box>
    </div>
    <DataGrid
      className="datagrid"
      // getRowId={(row) => row.id}
      rows={filtrFunc ? filtred : list}
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
