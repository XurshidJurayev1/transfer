import './datatable.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { userColumns, userRows } from './datatablesource';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { listTransfer } from '../../../../../action';
import EditIcon from '@mui/icons-material/Edit';
import { Box, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

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
  const [summaStatus, setSummaStatus] = useState(false);
  const [summa, setSumma] = useState(0);

  let list = props.list;

  // const dateFilter = () => {
  //   const data = [{ id: 1, receive_date: '07.03.2022 05:13:03', remarks: '11' }, {
  //     id: 2, receive_date: '07.05.2022 05:13:03', remarks: '14',
  //   }, { id: 3, receive_date: '07.05.2022 05:13:03', remarks: '11' }, {
  //     id: 3, receive_date: '07.03.2022 05:13:03', remarks: '11',
  //   }, { id: 3, receive_date: '07.05.2022 05:13:03', remarks: '11' }, {
  //     id: 3, receive_date: '07.03.2022 05:13:03', remarks: '11',
  //   }, { id: 3, receive_date: '07.05.2022 05:13:03', remarks: '11' }, {
  //     id: 3, receive_date: '07.03.2022 05:13:03', remarks: '11',
  //   }, { id: 3, receive_date: '07.05.2022 05:13:03', remarks: '11' }, {
  //     id: 3, receive_date: '07.03.2022 05:13:03', remarks: '11',
  //   }, { id: 4, receive_date: '07.05.2022 05:13:03', remarks: '15' }];
  //
  //   const input1 = 'May 1, 2021';
  //   const input2 = 'March 25, 2021';
  //   const inputTS = new Date(input1).getTime();
  //   const inputTS2 = new Date(input2).getTime();
  //
  //   console.log(inputTS);
  //
  //   console.log(Date.parse(data[0].receive_date) > inputTS ? 'true' : 'false');
  //
  //   const result1 = data.filter(d => inputTS <= Date.parse(d.receive_date));
  //   const result2 = result1.filter(d => Date.parse(d.receive_date) <= inputTS2);
  //
  //   console.log('result1', result1);
  //   console.log(result2);
  //   return result2;
  // };
  //
  // console.log(dateFilter());

  const filtr = (e) => {
    const getDate1 = new Date(date1);
    const getDate2 = new Date(date2);

    if (isNaN(getDate1) && isNaN(getDate2)) {
      const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
        .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
        .filter(i => status === '' ? i : i.status === status)
        .filter(i => pay === '' ? i : i.turi === pay);
      // .filter(i => new Date(i.create_time) < getDate2)
      // .filter(i => new Date(i.create_time) > getDate1);

      setFiltred(result);
      setFiltrFunc(true);
    }

    if (!isNaN(getDate2) && isNaN(getDate1)) {

      const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
        .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
        .filter(i => status === '' ? i : i.status === status)
        .filter(i => pay === '' ? i : i.turi === pay)
        .filter(i => new Date(i.create_time) < getDate2);


      setFiltred(result);
      setFiltrFunc(true);
    }
    if (isNaN(getDate2) && !isNaN(getDate1)) {

      const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
        .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
        .filter(i => status === '' ? i : i.status === status)
        .filter(i => pay === '' ? i : i.turi === pay)
        .filter(i => new Date(i.create_time) > getDate1);


      setFiltred(result);
      setFiltrFunc(true);
    }
    if (!isNaN(getDate1) && !isNaN(getDate2)) {
      const result = list.filter(item => cardId === '' ? item : item.id.toString().includes(cardId.toString()))
        .filter(i => card === '' ? i : i.card.toString().includes(card.toString()))
        .filter(i => status === '' ? i : i.status === status)
        .filter(i => pay === '' ? i : i.turi === pay)
        .filter(i => new Date(i.create_time) < getDate2)
        .filter(i => new Date(i.create_time) > getDate1);

      setFiltred(result);
      setFiltrFunc(true);
    }


  };

  console.log(props);

  const reset = () => {
    setFiltred('');
    setSumma('');
    setAccount('');
    setCardId('');
    setCard('');
    setDate1('mm/dd/yyyy');
    setDate2('mm/dd/yyyy');
    setSummaStatus('');
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
    field: 'code_error', headerName: '?????? ????????????', width: 130, renderCell: (params) => {
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


  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {

    const ws = XLSX.utils.json_to_sheet(csvData);

    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(data, fileName + fileExtension);

  };

  const fileData = filtrFunc ? filtred : list;


  const fileName = 'MySheets';


  const allSumma = () => {
    setSummaStatus(true);
    if (filtrFunc) {
      const totalCount = filtred.reduce((total, item) => {
        return total + Number(item.amount);
      }, 0);
      setSumma(totalCount);

    } else {
      const totalCount = list.reduce((total, item) => {
        return total + Number(item.amount);
      }, 0);
      setSumma(totalCount);
    }
  };

  function convertDate(inputFormat) {
    function pad(s) {
      return (s < 10) ? '0' + s : s;
    }

    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
  }

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


  // function filterTimes(arr, min, max) {
  //   min = new Date('01-01-2017 ' + min).valueOf();
  //   max = new Date('01-01-2017 ' + max).valueOf();
  //   console.log(min);
  //   return arr.filter(function (a) {
  //     var d = new Date('01-01-2017 ' + a.create_time).valueOf();
  //     if (d > min && d < max) return a;
  //   });
  // }
  //
  // console.log(filterTimes(list, date1, date2));


  return (<div className="datatable">
    <div className="datatableTitle">
      <Box
        className="filter-inputs">
        <Typography component="h1" mb={3} variant="h5"> ???????????????? ?????????? ???????????????????? </Typography>
        <Box className="form_input_flex">
          <Box className="form_input_fields">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker

                  renderInput={(props) => <TextField {...props} />}
                  label="?????????????? ?????? ??"
                  value={date1}
                  inputFormat="dd.MM.yyyy - HH:mm"
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
                  label="?????????????? ?????? ????"
                  value={date2}
                  inputFormat="dd.MM.yyyy - HH:mm"
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
              label="Id ????????????????????"
              variant="outlined" />
          </Box>
          <Box className="form_input_fields">
            <TextField
              type="number"
              fullWidth
              value={card}
              onChange={(e) => setCard(e.target.value)}
              id="outlined-basic"
              label="???? ??????????"
              variant="outlined" />
          </Box>

          <Box className="form_input_fields">
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
              >
                ???????????????? ??????????????
              </InputLabel>
              <Select
                disabled={true}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={accaunt}
                label="???????????????? ??????????????"
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
              <InputLabel id="demo-simple-select-label">?????? ????????????</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pay}
                defaultValue={''}
                label="?????? ????????????"
                onChange={(e) => setPay(e.target.value)}
              >
                <MenuItem value={''} defaultValue={true}>??????</MenuItem>
                <MenuItem value={'1'}>????????</MenuItem>
                <MenuItem value={'2'}>??????????</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="form_input_fields">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">???????????? ????????????????????</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="???????????? ????????????????????"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value={''}>??????</MenuItem>
                <MenuItem value={'1'}>?? ??????????????????</MenuItem>
                <MenuItem value={'2'}>??????????????</MenuItem>
                <MenuItem value={'3'}>???? ??????????????</MenuItem>
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
          <button type="button" style={{ marginRight: '20px' }} className="btn btn-primary primary_btn"
                  onClick={() => reset()}> reset
          </button>
          <button type="button" className="btn btn-success primary_btn" style={{ marginRight: '20px' }}
                  onClick={() => exportToCSV(fileData, fileName)}>
            Export
          </button>
          <button type="button" className="btn btn-info primary_btn" style={{ marginRight: '20px' }} onClick={allSumma}>
            ??????????
          </button>
          {summaStatus && <p> ?????????? ??????????: {summa.toDivide()} </p>}
        </Box>

      </Box>
    </div>
    <DataGrid
      className="datagrid"
      // getRowId={(row) => row.id}
      rows={filtrFunc ? filtred : list}
      loading={props.list.length === 0}
      columns={userColumns.concat(actionColumn)}
      pageSize={10}
      rowsPerPageOptions={[10]}
      // checkboxSelection
      components={{ Toolbar: GridToolbar }}
      getGridDateOperators={true}
    />
  </div>);
};

const mapStateToProps = (state) => {
  return {
    list: state.listTransfer,
  };
};

export default connect(mapStateToProps, { listTransfer })(Datatable);
