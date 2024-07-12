import {
  Box,
  Divider,
  FormControl,
  styled,
  TextField,
  Typography,
  Button,
  useMediaQuery
} from '@mui/material'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

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

const MultiFields = {
  display: 'flex',
  gap: '15px'
}

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext)

  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isMediumDevice = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <Box
      component="form"
      sx={{
        display: isMediumDevice ? 'unset' : 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        gap: '50px',
        mt: '80px',
        '& .MuiTextField-root': { mb: '20px', width: '100%' }
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        className="place-order-left"
        sx={{ width: '100%', maxWidth: 'max(30%, 500px)' }}
      >
        <Typography
          variant="h2"
          className="title"
          sx={{
            fontSize: isMediumDevice ? '1.2rem' : '2rem',
            fontWeight: '600px',
            mb: '30px'
          }}
        >
          Deliver Information
        </Typography>
        <Box className="multi-fields" sx={MultiFields}>
          <TextField
            type="text"
            label="First Name"
            placeholder="First Name"
            size="small"
          />
          <TextField
            type="text"
            label="Last Name"
            placeholder="Last Name"
            size="small"
          />
        </Box>
        <TextField
          type="email"
          label="Email"
          placeholder="Email address"
          size="small"
        />
        <TextField type="text" label="Address" placeholder="" size="small" />
        <Box className="multi-fields" sx={MultiFields}>
          <TextField type="text" label="City" placeholder="City" size="small" />
          <TextField
            type="text"
            label="State"
            placeholder="State"
            size="small"
          />
        </Box>
        <TextField
          type="text"
          label="Phone number"
          placeholder="Phone number"
          size="small"
        />
      </Box>
      <Box
        className="place-order-right"
        sx={{ width: '100%', maxWidth: 'max(30%, 500px)' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
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
          >
            PROCEED TO PAYMENT
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default PlaceOrder
