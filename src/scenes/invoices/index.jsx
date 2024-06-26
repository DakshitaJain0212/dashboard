import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const CustomHeader = ({ field, headerName, secondaryHeader }) => (
    <div style={{display: "flex",  flexDirection: "column", alignItems: "center"}}>
      <span >{headerName}</span>
      <span style={{ fontSize: '20px', color: 'gray' }}>{secondaryHeader}</span>
    </div>
  );
  
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Page",
      headerName: "Page",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Pageviews",
      headerName: `pageview`,
      flex: 1,
    },
    {
      field: "UniquePageviews",
      headerName: "Unique Pageviews" ,
      flex: 1,
    },
    {
      field: "Avg",
      headerName: "Avg. time on page",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.Avg}
        </Typography>
      ),
    },
    {
      field: "Extrances",
      headerName: "Extrances",
      flex: 1,
    },
    {
      field: "Exit",
      headerName: "%Exit",
      flex: 1,
    },
    {
      field: "PageValue",
      headerName: "Page Value",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
