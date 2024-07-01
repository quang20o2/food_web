import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { Box, Typography } from '@mui/material'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext)
  return (
    <Box
      sx={{
        mt: '30px'
      }}
    >
      <Typography variant="h2">Top dishes near you</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          mt: '30px',
          gap: '30px',
          rowGap: '30px',
          justifyContent: 'center'
        }}
      >
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }
        })}
      </Box>
    </Box>
  )
}

export default FoodDisplay
