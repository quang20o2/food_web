import { Box, Link, Typography, useMediaQuery } from '@mui/material'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'

const STYLE_SOCIAL_ICON = {
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase'
}

const SocialMediaIcons = () => {
  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const isMediumDevice = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& > a': {
          m: 2,
          color: 'inherit',
          textDecoration: 'none',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.1)'
          }
        }
      }}
    >
      <Link href="#" underline="none" sx={STYLE_SOCIAL_ICON}>
        <Facebook
          sx={{
            fontSize: isSmallDevice ? '18px' : isMediumDevice ? '20px' : '22px'
          }}
        />
        <Typography
          variant="body2"
          component="span"
          ml={1}
          sx={{
            fontSize: isSmallDevice
              ? '0.8rem'
              : isMediumDevice
                ? '0.875rem'
                : '1rem'
          }}
        >
          Facebook
        </Typography>
      </Link>
      <Link href="#" underline="none" sx={STYLE_SOCIAL_ICON}>
        <Twitter
          sx={{
            fontSize: isSmallDevice ? '18px' : isMediumDevice ? '20px' : '22px'
          }}
        />
        <Typography
          variant="body2"
          component="span"
          ml={1}
          sx={{
            fontSize: isSmallDevice
              ? '0.8rem'
              : isMediumDevice
                ? '0.875rem'
                : '1rem'
          }}
        >
          Twitter
        </Typography>
      </Link>
      <Link href="#" underline="none" sx={STYLE_SOCIAL_ICON}>
        <Instagram
          sx={{
            fontSize: isSmallDevice ? '18px' : isMediumDevice ? '20px' : '22px'
          }}
        />
        <Typography
          variant="body2"
          component="span"
          ml={1}
          sx={{
            fontSize: isSmallDevice
              ? '0.8rem'
              : isMediumDevice
                ? '0.875rem'
                : '1rem'
          }}
        >
          Instagram
        </Typography>
      </Link>
    </Box>
  )
}

export default SocialMediaIcons
