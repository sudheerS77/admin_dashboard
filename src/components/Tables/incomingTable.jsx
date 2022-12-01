import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 130,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'gender', headerName: 'Gender', width: 130 },
    {
        field: 'number',
        headerName: 'Number',
        width: 130,
      }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, gender: 'Male', number: 9865986598 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, gender: 'Male', number: 8865986598 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, gender: 'Male', number: 7865986598 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, gender: 'Female', number: 7765986598 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, gender: 'Male', number: 7885986598 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, gender: 'Male', number: 9867986598 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, gender: 'FeMale', number: 6765986598 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, gender: 'Male', number: 8895986598 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, gender: 'FeMale', number: 6598659865 },
];

const IncomingTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default IncomingTable;