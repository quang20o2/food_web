import { useContext } from 'react'
import {
  Box,
  IconButton,
  Rating,
  Typography,
  useMediaQuery
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
// import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down('sm')) // > 600px
  const isMediumDevice = useMediaQuery((theme) => theme.breakpoints.down('md')) // > 900px
  const isLargeDevice = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  return (
    <Box
      sx={{
        width: '100%',
        m: 'auto',
        borderRadius: '15px',
        boxShadow: '0px 0px 10px #00000015',
        transition: '0.3s',
        animation: 'fadeIn 1s'
      }}
    >
      <Box
        sx={{
          position: 'relative'
        }}
      >
        <Box
          component="img"
          src={image}
          alt=""
          sx={{
            width: '100%',
            borderRadius: '15px 15px 0px 0px'
          }}
        />
        {!cartItems[id] ? (
          <IconButton
            sx={{
              width: '35px',
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              p: '6px',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'white' // Giữ nguyên màu nền khi hover
              }
            }}
            aria-label="AddToCart"
            onClick={() => addToCart(id)}
          >
            <AddShoppingCartIcon sx={{ fill: 'black' }} />
          </IconButton>
        ) : (
          <Box
            sx={{
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              p: '6px',
              borderRadius: '50px',
              backgroundColor: '#ffffff',
              '&:hover': {
                backgroundColor: '#ffffff' // Giữ nguyên màu nền khi hover
              }
            }}
          >
            <IconButton
              sx={{
                color: '#e53935',
                width: '30px',
                height: '30px',
                backgroundColor: '#ffcdd2',
                '&:hover': {
                  backgroundColor: '#ffcdd2' // Giữ nguyên màu nền khi hover
                }
              }}
              aria-label="Remove"
              onClick={() => removeFromCart(id)}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{cartItems[id]}</Typography>
            <IconButton
              sx={{
                color: '#43a047',
                width: '30px',
                height: '30px',
                backgroundColor: '#c8e6c9',
                '&:hover': {
                  backgroundColor: '#c8e6c9' // Giữ nguyên màu nền khi hover
                }
              }}
              aria-label="Add"
              onClick={() => addToCart(id)}
            >
              <AddIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          p: isSmallDevice ? '8px' : isMediumDevice ? '14px' : '20px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '10px'
          }}
        >
          <Typography
            sx={{
              fontSize: isSmallDevice
                ? '11px'
                : isMediumDevice
                  ? '15px'
                  : '20px',
              fontWeight: isSmallDevice ? 550 : 500
            }}
          >
            {name}
          </Typography>
          {/* <Box
            component="img"
            src={assets.rating_starts}
            alt=""
            sx={{
              width: isSmallDevice ? '30%' : isMediumDevice ? '40%' : '70px'
            }}
          /> */}
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            sx={{
              width: '30%',
              fontSize: isSmallDevice
                ? '8px'
                : isMediumDevice
                  ? '11px'
                  : isLargeDevice
                    ? '13px'
                    : '15px'
            }}
          />
        </Box>
        <Typography
          sx={{
            color: '#676767',
            fontSize: isSmallDevice ? '8px' : isMediumDevice ? '10px' : '12px'
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            color: 'tomato',
            fontSize: isSmallDevice ? '18px' : isMediumDevice ? '20px' : '22px',
            fontWeight: 500,
            m: '10px 0'
          }}
        >
          ${price}
        </Typography>
      </Box>
    </Box>
  )
}

export default FoodItem
