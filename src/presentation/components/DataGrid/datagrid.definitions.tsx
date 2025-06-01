import { GridColDef, GridRenderCellParams, GridValidRowModel } from '@mui/x-data-grid'
import { IconButton } from '@mui/material'
import { ControlPoint, RemoveCircleOutline } from '@mui/icons-material'

import { BoxRowGrid } from './dataGrid.styles'

export const getExtendedColumns = <T extends GridValidRowModel>(
  columns: GridColDef[],
  expandedRow: string | number | null,
  handleToggleRow: (id: string | number) => void,
  getRowId: (row: T) => string | number,
  getExpandableContent?: (row: T) => GridValidRowModel[],
  expandIcon?: React.ReactNode,
  collapseIcon?: React.ReactNode
): GridColDef[] => {
  const extendedColumns = [...columns]
  if (!getExpandableContent) return extendedColumns
  extendedColumns[0] = {
    ...columns[0],
    renderCell: (params: GridRenderCellParams) => {
      const isDetail = params.row.isDetail
      const isExpanded = expandedRow === getRowId(params.row)
      const IconToRender = isExpanded ? collapseIcon || <RemoveCircleOutline /> : expandIcon || <ControlPoint />
      const expandable = getExpandableContent?.(params.row)
      return (
        <BoxRowGrid>
          {isDetail || !expandable || expandable.length === 0 ? (
            <IconButton size="small" sx={{ marginRight: 1, visibility: 'hidden' }}>
              <ControlPoint />
            </IconButton>
          ) : (
            <IconButton
              data-testid="button-icon-collapse"
              size="small"
              onClick={(e) => {
                e.stopPropagation()
                handleToggleRow(getRowId(params.row))
              }}
              sx={{ marginRight: 1 }}
            >
              {IconToRender}
            </IconButton>
          )}
          {params.value}
        </BoxRowGrid>
      )
    }
  }

  return extendedColumns
}

export const getProcessedRows = <T extends GridValidRowModel>(
  rows: T[],
  expandedRow: string | number | null,
  getRowId: (row: T) => string | number,
  getExpandableContent?: (row: T) => GridValidRowModel[]
): GridValidRowModel[] => {
  return rows.flatMap((row: T) => {
    const id = getRowId(row)
    const isExpanded = expandedRow === id
    const baseRow = [{ ...row, id }]

    if (isExpanded && getExpandableContent) {
      const children = getExpandableContent(row).map((child, index) => ({
        ...child,
        id: `${id}-child-${index}`,
        parentId: id,
        isDetail: true
      }))
      console.log({ children })
      return [...baseRow, ...children]
    }

    return baseRow
  })
}
