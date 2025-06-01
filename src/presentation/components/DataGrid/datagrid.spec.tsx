import { cleanup, render } from '@testing-library/react'
import { GridColDef } from '@mui/x-data-grid'

import { DataGrid } from './'

type RowCollapseProps = { id: number; name: string; dias?: { dia: string; status: string }[] }

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 }
]

describe('CustomDataGrid Component', () => {
  afterEach(() => {
    cleanup()
    vi.resetAllMocks()
  })

  it('should render DataGrid with default properties', () => {
    const { getByTestId } = render(<DataGrid paperWidth="100%" paperHeight="44rem" columns={columns} />)

    const paperElement = getByTestId('data-grid-paper')
    expect(paperElement).toBeInTheDocument()
    expect(paperElement).toHaveStyle({
      height: '44rem',
      width: '100%'
    })

    const dataGridElement = getByTestId('custom-data-grid')
    expect(dataGridElement).toBeInTheDocument()
  })

  it('should render DataGrid with custom properties', () => {
    const customProps = {
      pageSizeOptions: [10, 20],
      localeText: { noRowsLabel: 'No items found' }
    }

    const { getByTestId } = render(<DataGrid paperWidth="80%" paperHeight="50rem" columns={columns} {...customProps} />)

    const paperElement = getByTestId('data-grid-paper')
    expect(paperElement).toBeInTheDocument()
    expect(paperElement).toHaveStyle({
      height: '50rem',
      width: '80%'
    })

    const dataGridElement = getByTestId('custom-data-grid')
    expect(dataGridElement).toBeInTheDocument()
  })

  it('should not render expand icon for rows without expandable content', () => {
    const rows: RowCollapseProps[] = [
      { id: 1, name: 'João' },
      { id: 2, name: 'Maria', dias: [{ dia: '01', status: 'ok' }] }
    ]

    const getExpandableContent = (row: RowCollapseProps) => row.dias ?? []

    const { queryAllByRole } = render(<DataGrid columns={columns} rows={rows} expandable getExpandableContent={getExpandableContent} />)

    const buttons = queryAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('should render cell value along with icon in first column', () => {
    const rows: RowCollapseProps[] = [{ id: 1, name: 'João', dias: [{ dia: '01', status: 'ok' }] }]
    const getExpandableContent = (row: RowCollapseProps) => row.dias ?? []

    const { getByText } = render(<DataGrid columns={columns} rows={rows} expandable getExpandableContent={getExpandableContent} />)

    expect(getByText('João')).toBeInTheDocument()
  })
})
