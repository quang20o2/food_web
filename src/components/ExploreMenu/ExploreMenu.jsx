import { Box, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { menu_list } from '../../assets/assets'

function ExploreMenu({ category, setCategory }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        pt: '20px'
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#262626',
          fontWeight: 500,
          fontSize: '2rem'
        }}
      >
        Explore our menu
      </Typography>
      <Typography
        sx={{
          maxWidth: '60%',
          color: '#808080'
        }}
      >
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your craving and elevate your dining experience, one
        delicious meal at a time.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '30px',
          textAlign: 'center',
          m: '20px 0',
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {menu_list.map((item, index) => (
          <Box
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Box
              component="img"
              src={item.menu_image}
              alt=""
              sx={{
                width: '7.5vw',
                minWidth: '80px',
                cursor: 'pointer',
                borderRadius: '50px',
                transition: '0.2s',
                ...(category === item.menu_name && {
                  border: '4px solid tomato',
                  padding: '2px',
                  borderRadius: '75px'
                })
              }}
            />
            <Typography
              sx={{
                color: '#747474',
                fontSize: 'max(1.4vw, 16px)'
              }}
            >
              {item.menu_name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Divider
        sx={{
          m: '10px 0',
          height: '2px',
          backgroundColor: '#e2e2e2',
          border: 'none'
        }}
      />
    </Box>
  )
}

export default ExploreMenu
