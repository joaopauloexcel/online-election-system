import { Box, styled } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import color from '@/presentation/theme/color'

export const CustomDataGrid = styled(DataGrid)({
  '.MuiDataGrid-iconButtonContainer': {
    visibility: 'visible'
  },
  '.MuiDataGrid-sortIcon': {
    color: color.primary[500]
  },
  '& .MuiDataGrid-columnHeader': {
    padding: '0 0 0 24px'
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    color: color.primary[500],
    fontWeight: 700,
    textAlign: 'left',
    padding: '0',
    whiteSpace: 'normal'
  },
  '& .MuiDataGrid-row:hover': {
    backgroundColor: color.secondary[50]
  },
  '& .MuiDataGrid-cell': {
    weight: 400,
    fontSize: '14px',
    padding: '0 0 0 24px',
    color: color.neutral[500]
  },
  '& .MuiDataGrid-cell:focus': {
    outline: 'none'
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none'
  },
  '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
    outline: 'none'
  },
  '& .MuiTablePagination-displayedRows': {
    color: '#22282D',
    fontWeight: '400',
    fontSize: '12px'
  },
  '& .MuiDataGrid-detailRow:not(first-of-type)': {
    paddingLeft: '0px !important'
  }
})

export const BoxRowGrid = styled(Box)`
  display: flex;
  align-items: center;
`
