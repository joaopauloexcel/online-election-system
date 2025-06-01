import MuiGlobalStyles from '@mui/material/GlobalStyles'

// eslint-disable-next-line react-refresh/only-export-components
export const baseFontFamily = ['Red Hat Display', 'sans-serif'].join(',')

export const GlobalStyles: React.FC = () => {
  return (
    <MuiGlobalStyles
      styles={{
        '*': {
          fontFamily: baseFontFamily
        }
      }}
    />
  )
}
