// import { Box } from '@mui/material'
// import {
//   Facebook as FacebookIcon,
//   Instagram as InstagramIcon,
//   Twitter as TwitterIcon
// } from '@mui/icons-material'

// const SocialMediaIcons = ({ iconColors, iconSize }) => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '15px',
//         '& > *': {
//           width: iconSize,
//           cursor: 'pointer'
//         }
//       }}
//     >
//       <FacebookIcon sx={{ color: iconColors.facebook }} fontSize="large" />
//       <InstagramIcon sx={{ color: iconColors.instagram }} fontSize="large" />
//       <TwitterIcon sx={{ color: iconColors.twitter }} fontSize="large" />
//     </Box>
//   )
// }

// export default SocialMediaIcons

import { Box, Link, Typography } from '@mui/material'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'

const STYLE_SOCIAL_ICON = {
  display: 'flex',
  alignItems: 'center',
  textTransform: 'uppercase'
}
const SocialMediaIcons = () => {
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
        <Facebook />
        <Typography variant="body2" component="span" ml={1}>
          Facebook
        </Typography>
      </Link>
      <Link href="#" underline="none" sx={STYLE_SOCIAL_ICON}>
        <Twitter />
        <Typography variant="body2" component="span" ml={1}>
          Twitter
        </Typography>
      </Link>
      <Link href="#" underline="none" sx={STYLE_SOCIAL_ICON}>
        <Instagram />
        <Typography variant="body2" component="span" ml={1}>
          Instagram
        </Typography>
      </Link>
    </Box>
  )
}

export default SocialMediaIcons
