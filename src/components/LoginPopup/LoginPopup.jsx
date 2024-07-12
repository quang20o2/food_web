import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useState } from 'react'

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState('Sign Up')
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#00000090',
        display: 'grid'
      }}
    >
      {' '}
      {/*login-popup*/}
      <FormControl
        sx={{
          placeSelf: 'center',
          width: 'max(23vw, 300px)',
          color: '#808080',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          p: '25px 30px',
          borderRadius: '8px',
          fontSize: '14px',
          animation: 'fadeIn 0.5s'
        }}
      >
        {' '}
        {/*login-popup-container*/}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'black'
          }}
        >
          {' '}
          {/*login-popup-title*/}
          <Typography variant="h2">{currState}</Typography>
          <Tooltip title="Close">
            <IconButton
              sx={{ color: 'black' }}
              onClick={() => setShowLogin(false)}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {' '}
          {/*login-popup-inputs*/}
          {currState === 'Login' ? (
            <></>
          ) : (
            <TextField
              id="outlined-name"
              label="Your name"
              placeholder="Enter your name"
              type="name"
              size="small"
              required
              // sx={STYLE_OUTLINE}
            />
          )}
          <TextField
            id="outlined-email"
            label="Your email"
            placeholder="Enter your email"
            type="email"
            size="small"
            required
            // sx={STYLE_OUTLINE}
          />
          <TextField
            id="outlined-password"
            label="Your password"
            placeholder="Enter your password"
            type="password"
            size="small"
            required
            // sx={STYLE_OUTLINE}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            p: '10px',
            borderRadius: '5px',
            color: 'white',
            backgroundColor: 'tomato',
            fontSize: '15px',
            '&:hover': {
              backgroundColor: '#fc5c3f'
            }
          }}
          disableRipple
        >
          {currState === 'Sign Up' ? 'Create account' : 'Login'}
        </Button>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            gap: '8px',
            mt: '-15px'
          }}
        >
          {' '}
          {/*login-popup-condition*/}
          <Checkbox required />
          <Typography>
            By continuing, i agree to the terms of use & privacy policy
          </Typography>
        </Box>
        {currState === 'Login' ? (
          <Typography>
            Create a new account?{' '}
            <Typography
              sx={{
                display: 'inline-block',
                color: 'tomato',
                fontWeight: 500,
                cursor: 'pointer'
              }}
              onClick={() => setCurrState('Sign Up')}
            >
              Click here
            </Typography>
          </Typography>
        ) : (
          <Typography>
            Already have an account?{' '}
            <Typography
              sx={{
                display: 'inline-block',
                color: 'tomato',
                fontWeight: 500,
                cursor: 'pointer'
              }}
              onClick={() => setCurrState('Login')}
            >
              Login here
            </Typography>
          </Typography>
        )}
      </FormControl>
    </Box>
  )
}

export default LoginPopup
