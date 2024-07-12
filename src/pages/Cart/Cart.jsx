import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import {
  Box,
  Button,
  Divider,
  IconButton,
  styled,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'

const ResponsiveTableCell = styled(TableCell)(({ theme, isSmallDevice }) => ({
  padding: isSmallDevice ? theme.spacing(1) : theme.spacing(2),
  fontSize: isSmallDevice ? '0.875rem' : '1rem'
}))

const ResponsiveIconButton = styled(IconButton)(({ isSmallDevice }) => ({
  width: isSmallDevice ? '40px' : '50px',
  height: isSmallDevice ? '40px' : '50px',
  '& .MuiSvgIcon-root': {
    fontSize: isSmallDevice ? '1rem' : '1.25rem'
  }
}))

const StyledDivider = styled(Divider)({
  margin: '10px 0',
  height: '1px',
  backgroundColor: '#e2e2e2',
  border: 'none'
})

const StyledCartTotalDetails = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  color: '#555'
})

function Cart() {
  const {
    cartItems,
    setCartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount
  } = useContext(StoreContext)

  const navigate = useNavigate()

  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isMediumDevice = useMediaQuery((theme) => theme.breakpoints.down('md'))

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [itemId]: newQuantity
    }))
  }

  return (
    <Box sx={{ mt: '80px' }}>
      {/* List cart items */}
      <TableContainer
        component={Paper}
        sx={{ boxShadow: 'none', border: '1px solid #f5f5f5' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <ResponsiveTableCell>Items</ResponsiveTableCell>
              <ResponsiveTableCell>Title</ResponsiveTableCell>
              <ResponsiveTableCell>Price</ResponsiveTableCell>
              <ResponsiveTableCell>Quantity</ResponsiveTableCell>
              <ResponsiveTableCell>Total</ResponsiveTableCell>
              <ResponsiveTableCell>Remove</ResponsiveTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {food_list.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <TableRow
                    key={item._id}
                    sx={{
                      '&:nth-of-type(odd)': {
                        backgroundColor: 'grey.100'
                      }
                    }}
                  >
                    <ResponsiveTableCell component="th" scope="row">
                      <Box
                        component="img"
                        src={item.image}
                        sx={{
                          width: isSmallDevice ? '40px' : '50px',
                          height: 'auto',
                          display: 'block',
                          // marginLeft: 'auto',
                          marginRight: 'auto'
                        }}
                      />
                    </ResponsiveTableCell>
                    <ResponsiveTableCell>{item.name}</ResponsiveTableCell>
                    <ResponsiveTableCell>${item.price}</ResponsiveTableCell>
                    <ResponsiveTableCell>
                      <TextField
                        type="number"
                        variant="standard"
                        value={cartItems[item._id]}
                        onChange={(e) =>
                          updateCartItemQuantity(item._id, e.target.value)
                        }
                        inputProps={{ min: 1 }}
                        sx={{
                          width: '50px',
                          '& .MuiStandardInput-root': {
                            padding: '4px 8px'
                          }
                        }}
                      />
                    </ResponsiveTableCell>
                    <ResponsiveTableCell>
                      ${item.price * cartItems[item._id]}
                    </ResponsiveTableCell>
                    <ResponsiveTableCell>
                      <ResponsiveIconButton
                        aria-label="delete"
                        disableRipple
                        onClick={() => removeFromCart(item._id)}
                      >
                        <DeleteIcon />
                      </ResponsiveIconButton>
                    </ResponsiveTableCell>
                  </TableRow>
                )
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Cart Bottom */}
      <Box
        sx={{
          mt: '80px',
          display: 'flex',
          // justifyContent: isMediumDevice ? 'start' : 'space-between',
          gap: 'max(12vw, 20px)',
          flexDirection: isMediumDevice ? 'column' : 'none'
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: isSmallDevice ? '1.2rem' : '2rem' }}
          >
            Cart Totals
          </Typography>
          <Box>
            <StyledCartTotalDetails>
              <Typography>Subtotal</Typography>
              <Typography>${getTotalCartAmount()}</Typography>
            </StyledCartTotalDetails>
            <StyledDivider />
            <StyledCartTotalDetails>
              <Typography>Delivery Fee</Typography>
              <Typography>${getTotalCartAmount() === 0 ? 0 : 2}</Typography>
            </StyledCartTotalDetails>
            <StyledDivider />
            <StyledCartTotalDetails>
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </StyledCartTotalDetails>
          </Box>
          <Button
            variant="contained"
            sx={{
              p: '12px 0',
              borderRadius: '4px',
              color: 'white',
              backgroundColor: 'tomato',
              width: 'max(15vw, 200px)',
              '&:hover': {
                backgroundColor: '#fc5c3f'
              }
            }}
            disableRipple
            onClick={() => navigate('/order/')}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Box>

        <Box
          sx={{
            flex: 1,
            order: isMediumDevice ? '-1' : 'none'
          }}
        >
          <Typography sx={{ color: '#555' }}>
            If you have a promo code. Enter it here
          </Typography>
          <Box
            sx={{
              mt: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#eaeaea'
            }}
          >
            <TextField
              hiddenLabel
              placeholder="Enter promo code"
              variant="filled"
              size="small"
              fullWidth
              sx={{
                background: 'transparent',
                border: 'none',
                outline: 'none'
              }}
            />

            <Button
              variant="contained"
              sx={{
                width: 'max(10vw, 150px)',
                p: '10px 5px',
                backgroundColor: 'black',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#333'
                }
              }}
              disableRipple
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Cart
