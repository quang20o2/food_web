import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { assets } from '../../assets/assets'
import SocialMediaIcons from './SocialMediaIcons'

const STYLE_FOOTER_CONTENT = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '20px'
}
function Footer() {
  return (
    <Box
      sx={{
        // color: '#f4f4f6',
        backgroundColor: '#f4f4f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // gap: '20px',
        p: '20px 8vw',
        pt: '80px',
        mt: '100px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '80px'
        }}
      >
        <Box sx={STYLE_FOOTER_CONTENT}>
          <Box component="img" src={assets.logo} alt="" />
          <Typography>
            Join us to bring your family delicious and nutritious dishes.
          </Typography>
          <SocialMediaIcons />
        </Box>
        <Box sx={STYLE_FOOTER_CONTENT}>
          <Typography variant="h2" sx={{ color: 'tomato' }}>
            COMPANY
          </Typography>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Delivery</ListItem>
            <ListItem>Privacy Policy</ListItem>
          </List>
        </Box>
        <Box sx={STYLE_FOOTER_CONTENT}>
          <Typography variant="h2" sx={{ color: 'tomato' }}>
            GET IN TOUCH
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon
                sx={{
                  minWidth: '30px',
                  color: 'black'
                }}
              >
                <ContactPhoneIcon />
              </ListItemIcon>
              <ListItemText>(+84) 987 654 321</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon
                sx={{
                  minWidth: '30px',
                  color: 'black'
                }}
              >
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText>contact@tomato.com</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider
        sx={{
          width: '100%',
          height: '2px',
          m: '20px 0',
          backgroundColor: 'gray',
          border: 'none'
        }}
      />
      <Typography>
        Copyright 2024 © Tomato.com - All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
