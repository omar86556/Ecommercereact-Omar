import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import addToCart from '../App'


function OneProduct({product}) {
  return (
    <div>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>addToCart(product?.id)}>add to cart</Button>
        <span>{product?.price}</span>
      </CardActions>
    </Card>
    </div>
  )
}

export default OneProduct
