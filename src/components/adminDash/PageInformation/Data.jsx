export const customStyles = {
    rows: {
        style: {

        },
    },
    headCells: {
        style: {
            border: '1px solid #d0d0d0',
            fontWeight: "700",
            fontSize: "18px",
        },
    },
    cells: {
        style: {
            border: '1px solid #d0d0d0',

        },
    },
};
export const columns = [
    {
        name: 'ACC ID:',
        selector: row => row.accID,
    },
    {
        name: 'ACC BALANCE:',
        selector: row => row.accbal,
    },
    {
        name: 'ACC IP:',
        selector: row => row.accip,
    },
    {
        name: 'API KEY:',
        selector: row => row.apkey,
    },
];
export const data = [
    {
        id: 1,
        accID: '7855',
        accbal: '150 000 000 uzs',
        accip: '81.44.55.78',
        apkey: '95fd464f8cf4d975d6154a22ed840413',
    },
]