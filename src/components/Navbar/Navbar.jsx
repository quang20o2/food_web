import { useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import SearchIcon from '@mui/icons-material/Search'
import { assets } from '../../assets/assets'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginIcon from '@mui/icons-material/Login'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'

const active = {
  pb: '2px',
  borderBottom: '2px solid #49557e'
}
function Navbar() {
  const [menu, setMenu] = useState('Home')
  const handleMenuClick = (name) => {
    setMenu(name)
  }
  return (
    <Box
      sx={{
        p: '20px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          width: '150px'
        }}
        component="img"
        alt="Logo"
        src={assets.logo}
      />
      <Box>
        <List
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            color: '#49557e',
            fontSize: '18px'
          }}
        >
          <ListItem
            sx={menu === 'Home' ? active : {}}
            onClick={() => handleMenuClick('Home')}
          >
            Home
          </ListItem>
          <ListItem
            sx={menu === 'Menu' ? active : {}}
            onClick={() => handleMenuClick('Menu')}
          >
            Menu
          </ListItem>
          <ListItem
            sx={menu === 'Mobile App' ? active : {}}
            onClick={() => handleMenuClick('Mobile App')}
          >
            Mobile App
          </ListItem>
          <ListItem
            sx={menu === 'Contact Us' ? active : {}}
            onClick={() => handleMenuClick('Contact Us')}
          >
            Contact Us
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }}
      >
        <Tooltip title="Search">
          <SearchIcon sx={{ color: '#49557e' }} fontSize="large" />
        </Tooltip>
        <Tooltip title="Cart">
          <Badge
            color="warning"
            variant="dot"
            sx={{ cursor: 'pointer', position: 'relative' }}
          >
            <ShoppingCartIcon sx={{ color: '#49557e' }} fontSize="large" />
          </Badge>
        </Tooltip>

        <Button
          sx={{
            fontSize: '16px',
            color: '#49557e',
            background: 'transparent',
            p: '10px 30px',
            border: '1px solid tomato',
            borderRadius: '50px',
            transition: '0.3s',
            '&:hover': {
              backgroundColor: '#fff4f2',
              borderColor: 'tomato'
            }
          }}
          disableRipple
          variant="outlined"
          endIcon={<LoginIcon fontSize="large" />}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  )
}

export default Navbar
