import { DataGridProps, GridValidRowModel } from '@mui/x-data-grid'

export interface CustomDataGridProps extends DataGridProps {
  paperWidth?: string
  paperHeight?: string
}

export type ExpandableGridProps<T extends GridValidRowModel> = {
  expandable?: boolean
  getExpandableContent?: (row: T) => GridValidRowModel[]
  getRowId?: (row: T) => string | number
  expandIcon?: React.ReactNode
  collapseIcon?: React.ReactNode
}
