import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MenuItem, TextField } from '@mui/material'

import VerifiedIcon from '@mui/icons-material/Verified';
import TimerIcon from '@mui/icons-material/Timer';
import BeenhereIcon from '@mui/icons-material/Beenhere';

interface FilterDropdownInterface {
  className?: string
}

const FilterDropdown = (props: FilterDropdownInterface) => {
  const {className} = props;

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#656D79',
                borderRadius: '18px'
              },
            },
            '& label': {
              color: '#ABADB0'
            },
            '& .MuiSelect-select, .MuiSvgIcon-root': {
              color: 'white',
              fill: 'white',
              alignItems: 'center',
              display: 'flex', 
              gap: '12px',
              '& .MuiSvgIcon-root': {
                fill: "rgb(56, 189, 248)"
              }
            }
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          root: {
            "& .MuiPaper-root": {
              backgroundColor: "#4F5866",
            },
            "&.Mui-selected": {
              backgroundColor: "rgba(14, 165, 233, 0.24)",
            }
          }
        }
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField
        variant='outlined'
        className={className}
        select
        label="Sort By"
        defaultValue="verified"
        size='medium'
      >
        <MenuItem sx={{color: 'white', display: 'flex', gap: '12px', alignItems: 'center'}} value="verified">
          <VerifiedIcon sx={{color: "rgb(56, 189, 248)"}} fontSize='small'/>
          Verified
        </MenuItem>

        <MenuItem sx={{color: 'white', display: 'flex', gap: '12px', alignItems: 'center'}} value="new">
          <TimerIcon sx={{color: "rgb(56, 189, 248)"}} fontSize='small'/>
          New
        </MenuItem>

        <MenuItem sx={{color: 'white', display: 'flex', gap: '12px', alignItems: 'center'}} value="popular">
          <BeenhereIcon sx={{color: "rgb(56, 189, 248)"}} fontSize='small'/>
          Popular
        </MenuItem>
      </TextField>
    </ThemeProvider>
  )
}

export default FilterDropdown;