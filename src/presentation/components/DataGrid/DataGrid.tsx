import { useState } from 'react'
import Paper from '@mui/material/Paper'
import { GridValidRowModel } from '@mui/x-data-grid'

import { CustomDataGrid } from './dataGrid.styles'
import { CustomDataGridProps, ExpandableGridProps } from './datagrid.types'
import { getExtendedColumns, getProcessedRows } from './datagrid.definitions'

const DataGrid = <T extends GridValidRowModel>({
  paperWidth,
  paperHeight,
  rows = [],
  columns = [],
  expandable = false,
  getExpandableContent,
  getRowId = (row: T) => row.id,
  ...props
}: CustomDataGridProps & ExpandableGridProps<T>) => {
  const [expandedRow, setExpandedRow] = useState<string | number | null>(null)

  const handleToggleRow = (id: string | number) => {
    setExpandedRow((prev) => (prev === id ? null : id))
  }

  const extendedColumns = expandable
    ? getExtendedColumns(columns.slice(), expandedRow, handleToggleRow, getRowId, getExpandableContent, props.expandIcon, props.collapseIcon)
    : columns.slice()
  const processedRows = getProcessedRows(rows.slice(), expandedRow, getRowId, getExpandableContent)

  return (
    <Paper sx={{ height: paperHeight || '44rem', width: paperWidth || '100%' }} data-testid="data-grid-paper">
      <CustomDataGrid
        rows={processedRows}
        columns={extendedColumns}
        pageSizeOptions={[10, 20]}
        disableColumnSelector
        disableColumnMenu
        disableColumnResize
        disableRowSelectionOnClick
        columnVisibilityModel={{
          id: false
        }}
        localeText={{
          noRowsLabel: 'Nenhum item encontrado',
          MuiTablePagination: {
            labelRowsPerPage: 'Itens por página',
            labelDisplayedRows: ({ from, to, count }) => `${from}-${to} de ${count !== -1 ? count : `mais de ${to}`}`
          }
        }}
        rowHeight={56}
        getRowClassName={(params) => (params.row.isDetail ? 'MuiDataGrid-detailRow' : '')}
        getRowHeight={(params) => (params.model.isDetail ? 46 : 56)}
        sx={{
          border: 0,
          marginTop: '2.5rem',
          '& .MuiDataGrid-detailRow': {
            backgroundColor: '#f9f9f9',
            pl: 4
          }
        }}
        data-testid="custom-data-grid"
        {...props}
      />
    </Paper>
  )
}

export default DataGrid
