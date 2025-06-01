import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Box, IconButton } from '@mui/material'
import { Close, Edit } from '@mui/icons-material'

export const getColumns = (
  actionsFlex: number,
  actionHandler: (params: GridRenderCellParams | null, type: 'edit' | 'delete') => void
): GridColDef[] => [
    { field: 'nomeCandidato', headerName: 'Nome do candidato', align: 'left', flex: 1, width: 117 },
    {
      field: 'actions',
      headerName: 'Ações',
      flex: actionsFlex,
      width: 110,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton
            onClick={() => {
              actionHandler(params, 'edit')
            }}
            size="small"
          >
            <Edit />
          </IconButton>
          <IconButton
            onClick={() => {
              actionHandler(params, 'delete')
            }}
            size="small"
          >
            <Close />
          </IconButton>
        </Box>
      )
    }
  ]
