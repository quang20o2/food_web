import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledBox = styled(Box)({
  backgroundImage: 'url(/header_img.png)',
  m: '30px auto',
  height: '34vw',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  position: 'relative',
  // animation: 'fadeIn 1s ease-in-out forwards',
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  }
})

const StyledContentBox = styled(Box)({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '1.5vw',
  maxWidth: '48%',
  bottom: '8%',
  left: '6vw',
  opacity: 0,
  animation: 'fadeInUp 0.8s ease-in-out 0.5s forwards',
  '@keyframes fadeInUp': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
})

const StyledButton = styled(Button)({
  color: '#747474',
  fontWeight: 500,
  padding: '1vw 2.3vw',
  backgroundColor: 'white',
  fontSize: 'max(1vw, 13px)',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: '#f5f5f5'
  },
  animation: 'fadeInUp 0.8s ease-in-out 0.5s forwards'
})

function Header() {
  return (
    <StyledBox>
      <StyledContentBox>
        <Typography
          variant="h2"
          sx={{ fontWeight: 500, color: 'white', fontSize: 'max(4.5vw,22px)' }}
        >
          Order your favorite food here
        </Typography>
        <Typography
          sx={{
            fontSize: '1vw',
            color: 'white'
          }}
        >
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your craving and elevate your dining experience,
          one delicious meal at a time.
        </Typography>
        <StyledButton disableRipple>View Menu</StyledButton>
      </StyledContentBox>
    </StyledBox>
  )
}

export default Header
