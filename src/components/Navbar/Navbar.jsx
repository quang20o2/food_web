import { useContext, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginSharp from '@mui/icons-material/LoginSharp'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const activeMenuStyle = {
  pb: '2px',
  borderBottom: '2px solid #49557e'
}

function Navbar({ setShowLogin }) {
  const [activeMenu, setActiveMenu] = useState('Home')
  const { getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate()

  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isMediumDevice = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const isLargeDevice = useMediaQuery((theme) => theme.breakpoints.down('lg'))

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName)
  }

  const handleLogoClick = () => {
    setActiveMenu('Home')
    // Chuyển hướng đến trang Home
    navigate('/')
  }

  const handleCartClick = () => {
    navigate('/cart')
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2.5}
    >
      {/* Logo */}
      <Box
        component="img"
        src={assets.logo}
        alt="Logo"
        width={
          isSmallDevice
            ? '100px'
            : isMediumDevice
              ? '110px'
              : isLargeDevice
                ? '130px'
                : '150px'
        }
        onClick={handleLogoClick}
        sx={{ cursor: 'pointer' }}
      />

      {/* Navigation Links */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
          gap: { md: 2.5, lg: 3.8, xl: 6.25 },
          justifyContent: 'space-between',
          alignItems: 'center',
          // color: '#49557e',
          cursor: 'pointer'
        }}
      >
        {['Home', 'Menu', 'Mobile App', 'Contact Us'].map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()} // Sử dụng tên thẻ Box dưới dạng id
            smooth={true} // Scroll mượt mà
            duration={500} // Thời gian scroll (500ms)
            spy={true} // Theo dõi vị trí scroll
            activeClass="active-menu" // Class được thêm khi section trở thành active
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: isMediumDevice
                  ? '15px'
                  : isLargeDevice
                    ? '18px'
                    : '22px',
                color: '#49557e',
                textDecoration: 'none',
                ...(activeMenu === item ? activeMenuStyle : {})
              }}
              onClick={(e) => {
                if (item === 'Home') {
                  // Quay về trang chủ khi click vào "Home"
                  handleLogoClick(e)
                } else {
                  handleMenuClick(item)
                }
              }}
            >
              {item}
            </Typography>
          </Link>
        ))}
      </Box>

      {/* Action Items */}
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap={2.5}
      >
        <Tooltip title="Search">
          <SearchIcon
            sx={{ color: '#49557e' }}
            fontSize={
              isSmallDevice ? 'small' : isLargeDevice ? 'medium' : 'large'
            }
          />
        </Tooltip>

        <Tooltip title="Cart">
          <Badge
            color="warning"
            variant="dot"
            sx={{ cursor: 'pointer', position: 'relative', zIndex: 0 }}
            onClick={handleCartClick}
            invisible={getTotalCartAmount() === 0}
          >
            <ShoppingCartIcon
              sx={{ color: '#49557e' }}
              fontSize={
                isSmallDevice ? 'small' : isLargeDevice ? 'medium' : 'large'
              }
            />
          </Badge>
        </Tooltip>

        <Button
          sx={{
            fontSize: isSmallDevice ? '9px' : '14px',
            color: '#49557e',
            background: 'transparent',
            py: isSmallDevice ? '3px' : '8px',
            px: isSmallDevice ? '5px' : '16px',
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
          endIcon={<LoginSharp fontSize={isSmallDevice ? 'small' : 'medium'} />}
          onClick={() => setShowLogin(true)}
        >
          Sign in
        </Button>
      </Box>
    </Box>
  )
}

export default Navbar
